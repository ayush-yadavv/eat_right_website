import type { Metadata } from 'next'
import Link from 'next/link'
import { AnnuraButton } from '@/components/annura-button'
import { Link001 } from '@/components/skiper40'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'App link',
  description: 'This route is reserved for app-specific links.',
}

export default function AppFallbackPage() {
  return (
    <main className="utility-page">
      <div className="shell utility-page__shell">
        <p className="section-kicker">App route</p>
        <h1>This link opens in the {siteConfig.name} app.</h1>
        <p className="section-intro">
          If you are here before the app is available, join the waitlist and we will send the next update by email.
        </p>
        <div className="utility-page__actions">
          <AnnuraButton asChild>
            <Link href="/#invite">Join the waitlist</Link>
          </AnnuraButton>
          <Link001 href="/" className="text-primary font-medium">
            Return to home
          </Link001>
        </div>
      </div>
    </main>
  )
}
