import type { Metadata } from 'next'
import fs from 'fs'
import Link from 'next/link'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { siteConfig } from '@/data/site'
import { ArrowLeft } from 'lucide-react'

export function generateStaticParams() {
  return [{ slug: 'privacy_policies' }, { slug: 'terms_of_service' }]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const title = slug
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${title}`,
    description: `Read the ${title} for ${siteConfig.name}.`,
  }
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let content = ''

  try {
    const filePath = path.join(process.cwd(), 'public', 'documents', `${slug}.md`)
    content = fs.readFileSync(filePath, 'utf8')
  } catch {
    content = '# Document Not Found\n\nThe requested legal document could not be found.'
  }

  return (
    <main className="legal-page">
      <div className="shell legal-page__nav flex items-center justify-between">
        <Link href="/" className="wordmark" aria-label={`${siteConfig.name} home`}>
          {siteConfig.name.substring(0, 3)}<span>{siteConfig.name.substring(3)}</span>
        </Link>
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
          Back to home
        </Link>
      </div>
      <div className="shell utility-page__shell">
        <div className="prose prose-emerald dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </main>
  )
}
