import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'
import { ReferralClient } from './referral-client'

interface PageProps {
  params: Promise<{ code: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params
  const cleanCode = code.toUpperCase().replace(/[^A-Z0-9-]/g, '')

  return {
    title: `You've been invited to Annura AI · Code ${cleanCode}`,
    description: `Join Annura AI with invite code ${cleanCode}. Mindful eating and nutrition powered by modern AI.`,
    openGraph: {
      title: `You've received an invitation to Annura AI`,
      description: `Use invite code ${cleanCode} for AI meal tracking and mindful health insights.`,
      url: `${siteConfig.url}/app/r/${cleanCode}`,
      images: [{ url: siteConfig.ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `You've received an invitation to Annura AI`,
      description: `Use invite code ${cleanCode} to start tracking with Annura AI.`,
      images: [siteConfig.ogImage],
    },
  }
}

export default async function ReferralPage({ params }: PageProps) {
  const { code } = await params
  const cleanCode = code.toUpperCase().replace(/[^A-Z0-9-]/g, '')

  const playStoreUrl = `https://play.google.com/store/apps/details?id=com.annura.ai&referrer=referral_code%3D${encodeURIComponent(
    cleanCode
  )}`
  const shareUrl = `${siteConfig.url}/app/r/${cleanCode}`
  const appIntentUrl = `intent://r/${cleanCode}#Intent;scheme=annura;package=com.annura.ai;S.browser_fallback_url=${encodeURIComponent(
    playStoreUrl
  )};end`

  return (
    <ReferralClient
      code={cleanCode}
      playStoreUrl={playStoreUrl}
      shareUrl={shareUrl}
      appIntentUrl={appIntentUrl}
    />
  )
}
