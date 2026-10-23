import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/data/site'
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta",
  display: "swap"
})

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    images: ['/og-image.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.webp'],
  },
}

import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { '@id': `${siteConfig.url}/#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${siteConfig.url}/#app`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Android',
        downloadUrl: siteConfig.links.playStore,
        screenshot: [
          `${siteConfig.url}/images/app/home-screen.webp`,
          `${siteConfig.url}/images/app/meal-analysis.webp`,
          `${siteConfig.url}/images/app/fasting.webp`,
          `${siteConfig.url}/images/app/ai-chat.webp`,
        ],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          category: 'Pre-Registration & Open Testing',
          availability: 'https://schema.org/PreOrder',
        },
        author: { '@id': `${siteConfig.url}/#organization` },
      },
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logo/annura-icon.svg`,
        contactPoint: {
          '@type': 'ContactPoint',
          email: siteConfig.contact.email,
          contactType: 'customer support',
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#founder`,
        name: 'Ayush Yadav',
        jobTitle: 'Founder & Software Engineer',
        url: 'https://ay7.me',
        sameAs: ['https://github.com/eatright'],
      },
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Documentation" />
      </head>
      <body className="font-sans bg-background text-text-main">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-surface focus:text-primary focus:rounded-lg focus:shadow-md">
            Skip to main content
          </a>
          <div id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </div>
        </ThemeProvider>
        {/* Privacy-first, cookieless Vercel Analytics (GDPR/ePrivacy compliant without cookie banners) */}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
