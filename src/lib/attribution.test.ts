import { describe, expect, it } from 'vitest'

import {
  buildReferrer,
  cleanUtm,
  extract,
  mergeReferrer,
  nextStored,
  parseReferrer,
  readStored,
  withAppStoreCampaign,
  withPlayReferrer,
} from './attribution'

describe('normalization', () => {
  it('lowercases and sanitizes UTM values', () => {
    expect(cleanUtm('  Summer Email! ')).toBe('summer_email')
    expect(cleanUtm('Paid/Social')).toBe('paid_social')
  })

  it('drops PII-shaped values', () => {
    expect(cleanUtm('user@example.com')).toBeNull()
    expect(cleanUtm('+919876543210')).toBeNull()
  })

  it('extracts campaign params from a search string', () => {
    const params = extract(
      '?utm_source=Google&utm_campaign=Launch&gclid=AbC-1&unrelated=1'
    )
    expect(params).toEqual({
      utm_source: 'google',
      utm_campaign: 'launch',
    })
  })

  it('never extracts click IDs or install tokens', () => {
    const params = extract(
      '?utm_source=google&gclid=AbC-1&fbclid=FbC-2&ttclid=TtC-3&it=v1.abc.def'
    )
    expect(params).toEqual({ utm_source: 'google' })
    expect(Object.keys(params)).not.toContain('gclid')
    expect(Object.keys(params)).not.toContain('it')
  })
})

describe('referrers', () => {
  it('parses encoded Play install referrers', () => {
    expect(
      parseReferrer('referral_code%3DABC123%26utm_source%3Dplay%26utm_medium%3Dcpc')
    ).toEqual({
      referral_code: 'ABC123',
      utm_source: 'play',
      utm_medium: 'cpc',
    })
  })

  it('parses unencoded referrers', () => {
    expect(parseReferrer('referral_code=XYZ&utm_source=partner')).toEqual({
      referral_code: 'XYZ',
      utm_source: 'partner',
    })
  })

  it('caps the generated referrer', () => {
    const referrer = buildReferrer(
      {
        referral_code: 'ANN7K9Q',
        utm_source: 'a'.repeat(400),
        utm_campaign: 'b'.repeat(400),
      },
      200
    )
    expect(referrer.length).toBeLessThanOrEqual(200)
    expect(referrer).toContain('referral_code=ANN7K9Q')
  })

  it('preserves an existing referral code when merging', () => {
    const merged = mergeReferrer('referral_code=ABC', {
      referral_code: 'OTHER',
      utm_source: 'partner',
      utm_campaign: 'spring',
    })
    expect(merged).toContain('referral_code=ABC')
    expect(merged).toContain('utm_source=partner')
    expect(merged).not.toContain('OTHER')
  })

  it('rewrites Play Store links without losing the existing referrer', () => {
    const url = withPlayReferrer(
      'https://play.google.com/store/apps/details?id=com.annura.ai&referrer=referral_code%3DABC',
      { utm_source: 'partner' }
    )
    const referrer = new URL(url).searchParams.get('referrer') ?? ''
    expect(referrer).toContain('referral_code=ABC')
    expect(referrer).toContain('utm_source=partner')
  })

  it('never copies a click ID onto a store link', () => {
    const url = withPlayReferrer(
      'https://play.google.com/store/apps/details?id=com.annura.ai',
      { utm_source: 'google', gclid: 'Click-1' }
    )
    const referrer = new URL(url).searchParams.get('referrer') ?? ''
    expect(referrer).toContain('utm_source=google')
    expect(referrer).not.toContain('gclid')
  })

  it('skips App Store campaign params without a provider token', () => {
    const href = 'https://apps.apple.com/app/id123'
    expect(withAppStoreCampaign(href, { utm_campaign: 'spring' }, undefined)).toBe(href)
  })

  it('adds pt/ct to App Store links when configured', () => {
    const url = withAppStoreCampaign(
      'https://apps.apple.com/app/id123',
      { utm_campaign: 'spring launch' },
      'provider123'
    )
    const parsed = new URL(url)
    expect(parsed.searchParams.get('pt')).toBe('provider123')
    expect(parsed.searchParams.get('ct')).toBe('springlaunch')
    expect(parsed.searchParams.get('mt')).toBe('8')
  })
})

describe('storage', () => {
  it('expires stored attribution after the TTL', () => {
    const now = Date.now()
    const raw = JSON.stringify({
      first_touch: { utm_source: 'newsletter' },
      latest_touch: { utm_source: 'newsletter' },
      updated_at: now - 31 * 24 * 60 * 60 * 1000,
    })
    expect(readStored(raw, now)).toEqual({})
  })

  it('keeps the first touch and replaces the latest', () => {
    const stored = nextStored(
      { first_touch: { utm_source: 'first' } },
      { utm_source: 'second' }
    )
    expect(stored.first_touch).toEqual({ utm_source: 'first' })
    expect(stored.latest_touch).toEqual({ utm_source: 'second' })
  })

  it('survives malformed storage', () => {
    expect(readStored('{not json')).toEqual({})
    expect(readStored(null)).toEqual({})
  })
})

describe('taxonomy', () => {
  it('never derives a channel from a click ID', () => {
    // Click IDs are not read at all, so they cannot influence anything.
    expect(extract('?gclid=x&fbclid=y&ttclid=z')).toEqual({})
  })
})
