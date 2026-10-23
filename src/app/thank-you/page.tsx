import type { Metadata } from 'next'
import { AnnuraButton } from '@/components/annura-button'
import { Link001 } from '@/components/skiper40'
import { GooglePlayIcon } from '@/components/google-play-icon'

import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Your message has been received.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: `${siteConfig.url}/thank-you`,
  },
}

export default function ThankYouPage() {
  return (
    <main className="utility-page">
      <div className="shell utility-page__shell">
        <p className="section-kicker">Request received</p>
        <h1>Thanks. We will be in touch.</h1>
        <p className="section-intro">
          Your information has been received. If you signed up for updates, we will keep you posted on our latest open testing releases and official launch.
        </p>
        <div className="utility-page__actions flex flex-col sm:flex-row items-center gap-4">
          <AnnuraButton asChild className="h-12 px-6">
            <a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <GooglePlayIcon className="size-[18px] shrink-0" />
              <span>Pre-Register on Google Play</span>
            </a>
          </AnnuraButton>
          <Link001 href="/" className="text-primary font-medium">
            Back to home
          </Link001>
        </div>
      </div>
    </main>
  )
}
