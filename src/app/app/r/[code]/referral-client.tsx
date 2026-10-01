'use client'

import { useState, useEffect, useSyncExternalStore } from 'react'
import { Gift, Copy, Check, ExternalLink, QrCode } from 'lucide-react'
import { AnnuraButton } from '@/components/annura-button'
import { Link001 } from '@/components/skiper40'

interface ReferralClientProps {
  code: string
  playStoreUrl: string
  shareUrl: string
  appIntentUrl?: string
}

export function ReferralClient({
  code,
  playStoreUrl,
  shareUrl,
  appIntentUrl,
}: ReferralClientProps) {
  const [copied, setCopied] = useState(false)

  // UA never changes during a page session; the subscribe is intentionally a no-op.
  // useSyncExternalStore is used here solely to suppress SSR/client hydration mismatches
  // (server always returns false, client reads the real UA after hydration).
  const isAndroid = useSyncExternalStore(
    () => () => {},
    () => /android/i.test(navigator.userAgent),
    () => false
  )

  useEffect(() => {
    // On Android mobile: attempt to launch the installed app directly via Android Intent.
    // If installed: OS directly opens com.annura.ai with the referral code.
    // If not installed: Chrome seamlessly falls back to the Play Store with referral attribution.
    // Timer is 200ms (not 600ms) because this effect only fires post-hydration, after the
    // page is already fully painted — no additional delay needed for visual readiness.
    if (isAndroid && appIntentUrl) {
      const timer = setTimeout(() => {
        window.location.href = appIntentUrl
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [isAndroid, appIntentUrl])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
    }
  }

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    shareUrl
  )}&bgcolor=FFFFFF&color=2C3333&format=svg`

  return (
    <main className="utility-page">
      <div className="shell utility-page__shell max-w-xl text-center">
        {/* Gift Icon Capsule */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-sm">
          <Gift className="h-8 w-8" />
        </div>

        <p className="section-kicker">Personal Invitation</p>
        <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--text-main))] sm:text-4xl">
          You&apos;ve Been Gifted Annura AI
        </h1>
        <p className="section-intro mt-3 text-base text-[hsl(var(--text-muted))]">
          A friend invited you to track your meals, macros, and intermittent fasting with personalized AI intelligence.
        </p>

        {/* Code Capsule Card */}
        <div className="my-6 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-6 shadow-sm">
          <p className="text-xs font-semibold tracking-wider uppercase text-[hsl(var(--text-muted))]">
            Your Invite Code
          </p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="font-mono text-3xl font-extrabold tracking-widest text-[hsl(var(--text-main))]">
              {code}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] px-3 py-1.5 text-xs font-medium text-[hsl(var(--text-main))] hover:border-primary transition"
              title="Copy invite code"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Desktop QR Code */}
          <div className="mt-6 hidden sm:flex flex-col items-center border-t border-[hsl(var(--border))] pt-6">
            <div className="rounded-xl border border-[hsl(var(--border))] bg-white p-3 shadow-inner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrImageUrl}
                alt={`QR code for invite ${code}`}
                width={160}
                height={160}
                className="h-40 w-40"
              />
            </div>
            <p className="mt-2 flex items-center gap-1.5 text-xs text-[hsl(var(--text-muted))]">
              <QrCode className="h-3.5 w-3.5" />
              Scan with your phone camera to download
            </p>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="utility-page__actions flex flex-col sm:flex-row items-center justify-center gap-3">
          {isAndroid && appIntentUrl ? (
            <>
              <AnnuraButton asChild className="w-full sm:w-auto">
                <a href={appIntentUrl}>
                  <span>Open in Annura AI</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </AnnuraButton>

              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[hsl(var(--text-muted))] hover:text-primary transition py-1"
              >
                Don&apos;t have the app? Get on Google Play
              </a>
            </>
          ) : (
            <AnnuraButton asChild className="w-full sm:w-auto">
              <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                <span>Get on Google Play</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </AnnuraButton>
          )}

          <Link001 href="/" className="text-primary font-medium text-sm">
            Learn more about Annura
          </Link001>
        </div>
      </div>
    </main>
  )
}
