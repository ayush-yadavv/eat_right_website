import { getResendClient } from '@/lib/resend'
import { siteConfig } from '@/data/site'
export const runtime = 'nodejs'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: Request) {
  let payload: { name?: unknown; email?: unknown; address?: unknown }

  try {
    payload = await request.json()
  } catch {
    return Response.json({ error: 'Please submit a valid form.' }, { status: 400 })
  }

  // Honeypot Check: if a bot filled out the hidden 'address' field, silently succeed.
  if (typeof payload.address === 'string' && payload.address.length > 0) {
    return Response.json({ message: 'You are on the waitlist. We will be in touch.' })
  }

  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : ''
  const name = typeof payload.name === 'string' ? payload.name.trim().slice(0, 120) : ''

  if (!emailPattern.test(email)) {
    return Response.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }

  // Escape input for HTML injection protection
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)

  const resend = getResendClient()
  const from = process.env.RESEND_FROM_EMAIL
  const recipient = process.env.WAITLIST_RECIPIENT_EMAIL

  if (!resend || !from || !recipient) {
    return Response.json(
      { error: 'The waitlist is not configured yet. Please try again later.' },
      { status: 503 },
    )
  }

  const adminHtmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 20px; background-color: #ffffff;">
      <div style="border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
        <div style="background-color: #111827; padding: 24px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">${siteConfig.name}</h2>
          <p style="color: #9ca3af; margin: 8px 0 0 0; font-size: 14px;">New Waitlist Signup</p>
        </div>
        <div style="padding: 32px 24px;">
          <p style="color: #374151; font-size: 16px; margin: 0 0 24px 0;">You have a new subscriber who just joined the waitlist.</p>
          <div style="background-color: #f3f4f6; border-radius: 8px; padding: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 0 0 12px 0; color: #6b7280; font-size: 14px; font-weight: 500; width: 60px;">Name:</td>
                <td style="padding: 0 0 12px 0; color: #111827; font-size: 16px; font-weight: 500;">${safeName || '<span style="color: #9ca3af; font-style: italic;">Not provided</span>'}</td>
              </tr>
              <tr>
                <td style="padding: 0; color: #6b7280; font-size: 14px; font-weight: 500;">Email:</td>
                <td style="padding: 0; font-size: 16px;"><a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${safeEmail}</a></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 24px;">
        This is an automated notification from your ${siteConfig.name} website.
      </p>
    </div>
  `

  const userHtmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 20px; background-color: #ffffff;">
      <div style="border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
        <div style="background-color: #111827; padding: 32px 24px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.025em;">${siteConfig.name}</h2>
        </div>
        <div style="padding: 40px 32px;">
          <h3 style="color: #111827; font-size: 20px; font-weight: 600; margin: 0 0 20px 0;">You're on the list! 🎉</h3>
          <p style="color: #4b5563; font-size: 16px; margin: 0 0 24px 0; line-height: 1.6;">
            Hi ${safeName || 'there'},<br><br>
            Thanks for joining the waitlist for ${siteConfig.name}. We're working hard to get things ready and will let you know as soon as we launch!
          </p>
          <p style="color: #4b5563; font-size: 16px; margin: 0; line-height: 1.6;">
            Stay tuned,<br>
            <strong>The ${siteConfig.name} Team</strong>
          </p>
        </div>
      </div>
    </div>
  `

  const [adminResponse, userResponse] = await Promise.all([
    resend.emails.send({
      from,
      to: recipient,
      replyTo: email,
      subject: `🚀 New Waitlist Signup: ${safeEmail}`,
      html: adminHtmlContent,
      text: `New waitlist signup for ${siteConfig.name}.\n\nName: ${safeName || 'Not provided'}\nEmail: ${safeEmail}`,
    }),
    resend.emails.send({
      from,
      to: email,
      subject: `You're on the ${siteConfig.name} waitlist! 🎉`,
      html: userHtmlContent,
      text: `Hi ${safeName || 'there'},\n\nThanks for joining the waitlist for ${siteConfig.name}. We're working hard to get things ready and will let you know as soon as we launch!\n\nStay tuned,\nThe ${siteConfig.name} Team`,
    })
  ])

  if (adminResponse.error || userResponse.error) {
    return Response.json({ error: 'We could not add you to the waitlist. Please try again.' }, { status: 502 })
  }

  return Response.json({ message: 'You are on the waitlist. We will be in touch.' })
}
