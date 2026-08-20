import type { Metadata } from 'next'
import Link from 'next/link'
import { AnnuraButton } from '@/components/annura-button'

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Your message has been received.',
}

export default function ThankYouPage() {
  return (
    <main className="utility-page">
      <div className="shell utility-page__shell">
        <p className="section-kicker">Request received</p>
        <h1>Thanks. We will be in touch.</h1>
        <p className="section-intro">
          Your message is in the queue. If you joined the waitlist, we will use the email address you provided to send the next update.
        </p>
        <div className="utility-page__actions">
          <AnnuraButton asChild>
            <Link href="/">Back to home</Link>
          </AnnuraButton>
          <Link href="/#invite" className="text-link">
            Join the waitlist
          </Link>
        </div>
      </div>
    </main>
  )
}
