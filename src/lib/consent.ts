/**
 * Consent storage for analytics.
 *
 * Defaults to "not granted". The site never loads Google Analytics until the
 * visitor opts in. There is no separate marketing choice: campaign attribution
 * stores campaign parameters only and never contacts an ad network.
 */

export const ANALYTICS_CONSENT_KEY = 'analytics_consent'
export const CONSENT_EVENT = 'analytics-consent-changed'
export const OPEN_CONSENT_EVENT = 'open-consent'

function safeGet(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function safeSet(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Private mode or blocked storage: consent simply cannot be recorded.
  }
}

export function hasAnalyticsConsent(): boolean {
  return safeGet(ANALYTICS_CONSENT_KEY) === 'granted'
}

/** Persist the analytics (GA) consent decision. Default is "not granted". */
export function setGaConsent(granted: boolean): void {
  safeSet(ANALYTICS_CONSENT_KEY, granted ? 'granted' : 'denied')
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(CONSENT_EVENT))
  }
}

/** True once the visitor has answered the banner (either way). */
export function consentDecided(): boolean {
  return safeGet(ANALYTICS_CONSENT_KEY) !== null
}

/** Re-open the banner from a footer link or settings button. */
export function openConsentBanner(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))
  }
}
