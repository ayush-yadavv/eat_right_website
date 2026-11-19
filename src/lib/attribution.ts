/**
 * Campaign attribution helpers shared by the marketing site.
 *
 * Attribution here is aggregate-only: campaign parameters are stored locally so
 * they can be copied onto store links, and never include a click ID, install
 * token, or any other per-user identifier. The contract lives in
 * `eat_right_backend/docs/ATTRIBUTION.md`. Keep the parameter list,
 * normalization, and limits in sync with the Flutter client.
 */

export type Touch = Record<string, string>

export const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
] as const

export const PASSTHROUGH_KEYS = ['referral_code', 'code'] as const

export const MAX_STORED_LENGTH = 256
export const MAX_REFERRER_LENGTH = 900
export const MAX_APP_STORE_CAMPAIGN_LENGTH = 40
export const STORAGE_TTL_MS = 30 * 24 * 60 * 60 * 1000

const EMAIL = /[^@\s]+@[^@\s]+\.[A-Za-z]{2,}/
const PHONE = /^\+?\d{10,15}$/
const JWT = /^[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}$/
const BEARER = /^bearer\s/i
const UTM_SANITIZE = /[^a-z0-9._-]+/g

const CHANNEL_ALIASES: Record<string, string> = {
  google: 'google',
  googleads: 'google',
  adwords: 'google',
  facebook: 'meta',
  fb: 'meta',
  meta: 'meta',
  instagram: 'meta',
  ig: 'meta',
  tiktok: 'tiktok',
  twitter: 'x',
  x: 'x',
  linkedin: 'linkedin',
  pinterest: 'pinterest',
  microsoft: 'microsoft',
  bing: 'microsoft',
  newsletter: 'email',
  email: 'email',
  referral: 'referral',
  partner: 'referral',
  organic: 'organic',
}

export function looksLikePii(value: string): boolean {
  return EMAIL.test(value) || PHONE.test(value) || JWT.test(value) || BEARER.test(value)
}

export function cleanUtm(value: string | null | undefined): string | null {
  if (!value) return null
  const trimmed = value.trim()
  if (!trimmed || looksLikePii(trimmed) || trimmed.length > MAX_STORED_LENGTH) return null
  const cleaned = trimmed
    .toLowerCase()
    .replace(UTM_SANITIZE, '_')
    .replace(/^[._-]+|[._-]+$/g, '')
  return cleaned || null
}

export function cleanParam(key: string, value: string | null | undefined): string | null {
  if ((PASSTHROUGH_KEYS as readonly string[]).includes(key)) {
    const trimmed = value?.trim()
    if (!trimmed || trimmed.length > MAX_STORED_LENGTH) return null
    return trimmed
  }
  return cleanUtm(value)
}

export function extract(search: string): Touch {
  const incoming = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)
  const params: Touch = {}
  for (const key of [...UTM_KEYS, ...PASSTHROUGH_KEYS]) {
    const cleaned = cleanParam(key, incoming.get(key))
    if (cleaned) params[key] = cleaned
  }
  return params
}

export function parseReferrer(raw: string): Touch {
  if (!raw.trim()) return {}
  let decoded = raw
  try {
    decoded = decodeURIComponent(raw)
  } catch {
    // Malformed escape sequences: parse the raw string instead.
  }
  return extract(decoded)
}

/** Keep only keys the attribution API accepts. */
export function attributionOnly(params: Touch): Touch {
  const allowed = new Set<string>(UTM_KEYS)
  return Object.fromEntries(Object.entries(params).filter(([key]) => allowed.has(key)))
}

export function channelFor(params: Touch): string {
  const source = params.utm_source
  if (source && CHANNEL_ALIASES[source]) return CHANNEL_ALIASES[source]
  return source || 'direct'
}

const REFERRER_ORDER = [...PASSTHROUGH_KEYS, ...UTM_KEYS] as const

/** Build an encoded referrer in priority order, capped to avoid truncation. */
export function buildReferrer(
  params: Touch,
  maxLength: number = MAX_REFERRER_LENGTH
): string {
  const parts: string[] = []
  let length = 0
  for (const key of REFERRER_ORDER) {
    const value = params[key]
    if (!value) continue
    const part = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    const extra = parts.length === 0 ? part.length : part.length + 1
    if (length + extra > maxLength) continue
    parts.push(part)
    length += extra
  }
  return parts.join('&')
}

/** Merge campaign params into an existing referrer without dropping values. */
export function mergeReferrer(
  existing: string,
  params: Touch,
  maxLength: number = MAX_REFERRER_LENGTH
): string {
  const merged: Touch = { ...parseReferrer(existing) }
  for (const key of REFERRER_ORDER) {
    const value = params[key]
    if (!value) continue
    if (!merged[key]) merged[key] = value
  }
  return buildReferrer(merged, maxLength)
}

export type StoredAttribution = {
  first_touch?: Touch
  latest_touch?: Touch
  updated_at?: number
}

function isTouch(value: unknown): value is Touch {
  return !!value && typeof value === 'object' && !Array.isArray(value)
}

export function readStored(raw: string | null, now: number = Date.now()): StoredAttribution {
  if (!raw) return {}
  try {
    const parsed: unknown = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return {}
    const record = parsed as Record<string, unknown>
    const updatedAt = typeof record.updated_at === 'number' ? record.updated_at : 0
    if (updatedAt && now - updatedAt > STORAGE_TTL_MS) return {}
    return {
      first_touch: isTouch(record.first_touch) ? record.first_touch : undefined,
      latest_touch: isTouch(record.latest_touch) ? record.latest_touch : undefined,
      updated_at: updatedAt,
    }
  } catch {
    return {}
  }
}

export function nextStored(
  stored: StoredAttribution,
  incoming: Touch,
  now: number = Date.now()
): StoredAttribution {
  return {
    first_touch: stored.first_touch ?? incoming,
    latest_touch: incoming,
    updated_at: now,
  }
}

/** Attach the stored touch to a Play Store link as the install referrer. */
export function withPlayReferrer(href: string, params: Touch): string {
  const url = new URL(href)
  url.searchParams.set('referrer', mergeReferrer(url.searchParams.get('referrer') ?? '', params))
  return url.toString()
}

/**
 * Attach App Store campaign parameters. Apple ignores arbitrary UTM values on
 * `apps.apple.com`; only `pt` (provider token) plus `ct` (campaign) count, and
 * `pt` must come from App Store Connect.
 */
export function withAppStoreCampaign(
  href: string,
  params: Touch,
  providerToken: string | undefined
): string {
  if (!providerToken) return href
  const campaign = (params.utm_campaign ?? params.utm_source ?? '')
    .replace(/[^A-Za-z0-9_-]/g, '')
    .slice(0, MAX_APP_STORE_CAMPAIGN_LENGTH)
  if (!campaign) return href
  const url = new URL(href)
  url.searchParams.set('pt', providerToken)
  url.searchParams.set('ct', campaign)
  url.searchParams.set('mt', '8')
  return url.toString()
}
