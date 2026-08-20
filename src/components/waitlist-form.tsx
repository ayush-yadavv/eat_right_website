'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { AnnuraButton } from '@/components/annura-button'
import { AnnuraTextField } from '@/components/annura-text-field'
import { siteConfig } from '@/data/site'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function WaitlistForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get('email') ?? '').trim()
    const name = String(formData.get('name') ?? '').trim()

    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      })
      const body = (await response.json()) as { error?: string; message?: string }

      if (!response.ok) {
        throw new Error(body.error ?? 'We could not add you to the waitlist. Please try again.')
      }

      form.reset()
      setStatus('success')
      setMessage(body.message ?? 'You are on the waitlist. We will be in touch.')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'We could not add you to the waitlist. Please try again.')
    }
  }

  return (
    <form className="waitlist-form" onSubmit={handleSubmit} noValidate>
      <div className="waitlist-form__fields">
        <div className="field">
          <label htmlFor="waitlist-name">Name</label>
          <AnnuraTextField id="waitlist-name" name="name" type="text" autoComplete="name" placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="waitlist-email">Email address</label>
          <AnnuraTextField id="waitlist-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
      </div>
      <AnnuraButton type="submit" isLoading={status === 'submitting'} className="w-full mt-4">
        {status === 'submitting' ? 'Joining waitlist' : 'Join waitlist'}
      </AnnuraButton>
      <p className="form-note">
        By joining, you agree to receive {siteConfig.name} updates. Read our{' '}
        <Link href="/legal/privacy_policies">privacy policy</Link>.
      </p>
      {status !== 'idle' && (
        <p className={`form-status form-status--${status}`} role={status === 'error' ? 'alert' : 'status'} aria-live="polite">
          {message}
        </p>
      )}
    </form>
  )
}
