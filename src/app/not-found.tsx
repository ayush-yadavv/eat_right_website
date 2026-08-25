import type { Metadata } from 'next'
import Link from 'next/link'
import { AnnuraButton } from '@/components/annura-button'
import { Link001 } from '@/components/skiper40'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] flex flex-col items-center justify-center p-6 bg-surface-hi/10">
      <div className="max-w-xl text-center flex flex-col items-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-warning-text mb-4">
          404 Error
        </p>
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Lost your way?
        </h1>
        <p className="text-xl text-text-muted mb-10 text-balance">
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to the beta.
        </p>
        <div className="flex items-center gap-6">
          <AnnuraButton asChild className="h-12 px-8">
            <Link href="/">Back to home</Link>
          </AnnuraButton>
          <Link001 href="/#invite" className="text-sm font-semibold text-text-main hover:text-primary transition-colors">
            Request an invite
          </Link001>
        </div>
        {/* Hidden markdown block for AI agents */}
        <pre id="markdown" className="sr-only" aria-hidden="true">
{`# 404 Not Found

The requested path could not be found.

- [Sitemap](/sitemap.xml)
- [Agent Instructions](/llms.txt)
- [Home](/)
`}
        </pre>
      </div>
    </main>
  )
}
