import type { Metadata } from 'next'
import { AnnuraButton } from '@/components/annura-button'
import { Link001 } from '@/components/skiper40'
import { GooglePlayIcon } from '@/components/google-play-icon'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'App link',
  description: 'This route is reserved for app-specific links.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AppFallbackPage() {
  return (
    <main className="utility-page">
      <div className="shell utility-page__shell">
        <p className="section-kicker">App route</p>
        <h1>This link opens in the {siteConfig.name} app.</h1>
        <p className="section-intro">
          {siteConfig.name} is currently live in Pre-Registration and Open Testing on Google Play.
        </p>
        <div className="utility-page__actions flex flex-col sm:flex-row items-center gap-4">
          <AnnuraButton asChild className="h-12 px-6">
            <a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <GooglePlayIcon className="size-[18px] shrink-0" />
              <span>Get on Google Play</span>
            </a>
          </AnnuraButton>
          <Link001 href="/" className="text-primary font-medium">
            Return to home
          </Link001>
        </div>
      </div>
    </main>
  )
}
