import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <main className="utility-page">
      <div className="shell utility-page__shell">
        <p className="section-kicker">404</p>
        <h1>Page not found.</h1>
        <p className="section-intro">
          The page you are looking for does not exist or was moved.
        </p>
        <div className="utility-page__actions">
          <Link href="/" className="button">
            Return home
          </Link>
          <Link href="/#waitlist" className="text-link">
            Join the waitlist
          </Link>
        </div>
      </div>
    </main>
  )
}
