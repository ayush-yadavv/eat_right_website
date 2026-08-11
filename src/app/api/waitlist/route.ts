import { getResendClient } from '@/lib/resend'

export const runtime = 'nodejs'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let payload: { name?: unknown; email?: unknown }

  try {
    payload = await request.json()
  } catch {
    return Response.json({ error: 'Please submit a valid form.' }, { status: 400 })
  }

  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : ''
  const name = typeof payload.name === 'string' ? payload.name.trim().slice(0, 120) : ''

  if (!emailPattern.test(email)) {
    return Response.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }

  const resend = getResendClient()
  const from = process.env.RESEND_FROM_EMAIL
  const recipient = process.env.WAITLIST_RECIPIENT_EMAIL

  if (!resend || !from || !recipient) {
    return Response.json(
      { error: 'The waitlist is not configured yet. Please try again later.' },
      { status: 503 },
    )
  }

  const { error } = await resend.emails.send({
    from,
    to: recipient,
    replyTo: email,
    subject: `New Eat Right waitlist signup${name ? ` from ${name}` : ''}`,
    text: `Name: ${name || 'Not provided'}\nEmail: ${email}`,
  })

  if (error) {
    return Response.json({ error: 'We could not add you to the waitlist. Please try again.' }, { status: 502 })
  }

  return Response.json({ message: 'You are on the waitlist. We will be in touch.' })
}
