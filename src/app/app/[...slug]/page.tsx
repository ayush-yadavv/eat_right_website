import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'App link',
  description: 'This route is reserved for app-specific links.',
}

export default function AppFallbackPage() {
  return (
    <main className="utility-page">
      <div className="shell utility-page__shell">
        <p className="section-kicker">App route</p>
        <h1>This link opens in the Eat Right app.</h1>
        <p className="section-intro">
          If you are here before the app is available, join the waitlist and we will send the next update by email.
        </p>
        <div className="utility-page__actions">
          <Link href="/#waitlist" className="button">
            Join the waitlist
          </Link>
          <Link href="/" className="text-link">
            Return to home
          </Link>
        </div>
      </div>
    </main>
  )
}
