'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { OPEN_CONSENT_EVENT, consentDecided, setGaConsent } from '@/lib/consent'

/**
 * Minimal, privacy-first consent banner.
 *
 * Analytics stays off until the visitor chooses. "Essential only" records an
 * explicit denial so the banner does not reappear and no non-essential cookie
 * is written. There is no separate ad-measurement choice because campaign
 * attribution stores campaign parameters only and contacts no ad network.
 */
export function ConsentBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Deferred so the banner appears after hydration without a mismatch.
    const timer = window.setTimeout(() => setOpen(!consentDecided()), 0)
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_CONSENT_EVENT, reopen)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener(OPEN_CONSENT_EVENT, reopen)
    }
  }, [])

  if (!open) return null

  const choose = (granted: boolean) => {
    setGaConsent(granted)
    setOpen(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Privacy preferences"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-5 shadow-lg"
    >
      <p className="text-sm font-medium text-text-main">
        We use first-party analytics to understand which pages help people. No
        ad identifiers are used. Read our{' '}
        <Link
          href="/legal/privacy-policy"
          className="text-primary underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => choose(true)}
          className="rounded-pill bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 active:scale-95"
        >
          Accept analytics
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="rounded-pill border border-border px-5 py-2.5 text-sm font-semibold text-text-main transition-colors hover:bg-surface-hi active:scale-95"
        >
          Essential only
        </button>
      </div>
    </div>
  )
}
