'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import {
  type Touch,
  extract,
  nextStored,
  readStored,
  withAppStoreCampaign,
  withPlayReferrer,
} from '@/lib/attribution'
import {
  ANALYTICS_CONSENT_KEY,
  CONSENT_EVENT,
  hasAnalyticsConsent,
} from '@/lib/consent'

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const appStoreProviderToken = process.env.NEXT_PUBLIC_APP_STORE_PROVIDER_TOKEN

const STORAGE_KEY = 'campaign_attribution'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

function safeGet(storage: Storage, key: string): string | null {
  try {
    return storage.getItem(key)
  } catch {
    return null
  }
}

function safeSet(storage: Storage, key: string, value: string): void {
  try {
    storage.setItem(key, value)
  } catch {
    // Private mode: attribution stays best-effort.
  }
}

function loadGtag(id: string, latest: Touch): void {
  if (document.querySelector('script[data-ga]')) return
  window.dataLayer = window.dataLayer ?? []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', id, { send_page_view: true })
  // Campaign values are forwarded as event params only. GA4 handles its own
  // click IDs under its own rules; we never read or forward them.
  if (Object.keys(latest).length) window.gtag('event', 'campaign_landing', latest)
  const tag = document.createElement('script')
  tag.async = true
  tag.dataset.ga = '1'
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(tag)
}

function applyTouchToLinks(latest: Touch): void {
  if (!Object.keys(latest).length) return
  document
    .querySelectorAll<HTMLAnchorElement>('a[href*="play.google.com/store/apps/details"]')
    .forEach((link) => {
      try {
        link.href = withPlayReferrer(link.href, latest)
      } catch {
        // Ignore malformed links; attribution must never break navigation.
      }
    })
  if (!appStoreProviderToken) return
  document
    .querySelectorAll<HTMLAnchorElement>('a[href*="apps.apple.com"]')
    .forEach((link) => {
      try {
        link.href = withAppStoreCampaign(link.href, latest, appStoreProviderToken)
      } catch {
        // Ignore malformed links.
      }
    })
}

function migrateSessionStorage(): void {
  const legacy = safeGet(sessionStorage, STORAGE_KEY)
  if (!legacy) return
  // The legacy key predates consent. Only promote it when analytics is allowed.
  if (hasAnalyticsConsent() && !safeGet(localStorage, STORAGE_KEY)) {
    safeSet(localStorage, STORAGE_KEY, legacy)
  }
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    // Ignore.
  }
}

function clearStored(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Private mode: nothing was stored anyway.
  }
}

export function CampaignAttribution() {
  const pathname = usePathname()

  useEffect(() => {
    migrateSessionStorage()
    const incoming = extractIncoming()
    const stored = readStored(safeGet(localStorage, STORAGE_KEY))

    // Only persist the touch once the visitor allowed analytics. "Essential
    // only" must leave no campaign data behind.
    const remember = (): Touch => {
      if (!hasAnalyticsConsent()) {
        clearStored()
        return {}
      }
      if (!Object.keys(incoming).length) return stored.latest_touch ?? {}
      safeSet(localStorage, STORAGE_KEY, JSON.stringify(nextStored(stored, incoming)))
      return incoming
    }

    let latest = remember()
    applyTouchToLinks(latest)

    const id = measurementId
    const startAnalytics = () => {
      if (id && hasAnalyticsConsent()) loadGtag(id, latest)
    }
    startAnalytics()

    // Consent changes affect the GA tag, what may be stored, and what may be
    // copied onto store links, so re-run all three.
    const onConsent = () => {
      latest = remember()
      startAnalytics()
      applyTouchToLinks(latest)
    }
    const onStorage = (event: StorageEvent) => {
      if (event.key === ANALYTICS_CONSENT_KEY) onConsent()
    }
    window.addEventListener(CONSENT_EVENT, onConsent)
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener(CONSENT_EVENT, onConsent)
      window.removeEventListener('storage', onStorage)
    }
  }, [pathname])

  return null
}

function extractIncoming(): Touch {
  return extract(window.location.search)
}
