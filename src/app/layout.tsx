import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Eat Right',
    template: '%s | Eat Right',
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteConfig.name,
    '@id': siteConfig.url,
    url: siteConfig.url,
    description: siteConfig.description,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      category: 'Waitlist access',
      availability: 'https://schema.org/PreOrder',
    },
  }

  return (
    <html lang="en">
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-322ZCZXYX8" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-322ZCZXYX8');
          `}
        </Script>
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
      </body>
    </html>
  )
}
