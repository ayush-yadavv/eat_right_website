'use client'

import Link from 'next/link'
import { AnnuraButton } from '@/components/annura-button'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <main className="utility-page">
          <div className="shell utility-page__shell">
            <p className="section-kicker">Something went wrong</p>
            <h1>We could not load this page.</h1>
            <p className="section-intro">
              Please try again. If the problem continues, return home and reopen the route.
            </p>
            <div className="utility-page__actions">
              <AnnuraButton onClick={() => reset()} type="button">
                Try again
              </AnnuraButton>
              <Link href="/" className="text-link">
                Back to home
              </Link>
            </div>
            {process.env.NODE_ENV === 'development' ? (
              <p className="form-note">Error: {error.message}</p>
            ) : null}
          </div>
        </main>
      </body>
    </html>
  )
}
