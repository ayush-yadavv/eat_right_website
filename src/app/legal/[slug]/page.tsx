import type { Metadata } from 'next';
import fs from 'fs';
import Link from 'next/link';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { siteConfig } from '@/data/site';
import { ArrowLeft, ShieldCheck, FileText, Trash2 } from 'lucide-react';
import { Link000 } from '@/components/skiper40';
import { notFound } from 'next/navigation';

interface LegalDocInfo {
  fileName: string;
  title: string;
  isPrivacy: boolean;
  canonicalSlug: 'privacy-policy' | 'terms-of-service';
}

function resolveLegalDocument(slug: string): LegalDocInfo | null {
  const normalized = slug.toLowerCase();
  if (['privacy-policy', 'privacy-policies', 'privacy_policies', 'privacy'].includes(normalized)) {
    return {
      fileName: 'privacy-policy.md',
      title: 'Privacy Policy',
      isPrivacy: true,
      canonicalSlug: 'privacy-policy',
    };
  }
  if (['terms-of-service', 'terms_of_service', 'terms'].includes(normalized)) {
    return {
      fileName: 'terms-of-service.md',
      title: 'Terms of Service',
      isPrivacy: false,
      canonicalSlug: 'terms-of-service',
    };
  }

  return null;
}

export async function generateStaticParams() {
  return [
    { slug: 'privacy-policy' },
    { slug: 'terms-of-service' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = resolveLegalDocument(slug);
  if (!doc) {
    return {
      title: `Document Not Found | ${siteConfig.name}`,
    };
  }
  return {
    title: `${doc.title} | ${siteConfig.name}`,
    description: `Official ${doc.title} for ${siteConfig.name}.`,
    alternates: {
      canonical: `/legal/${doc.canonicalSlug}`,
    },
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = resolveLegalDocument(slug);

  if (!doc) {
    notFound();
  }

  const filePath = path.join(process.cwd(), 'public', 'documents', doc.fileName);
  let content = '';

  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch {
    notFound();
  }

  const isPrivacy = doc.isPrivacy;

  return (
    <main className="min-h-screen bg-background text-text-main py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Navigation */}
      <header className="max-w-4xl mx-auto flex items-center justify-between mb-8 border-b border-border pb-6">
        <Link href="/" className="font-heading font-bold text-xl tracking-tight" aria-label={`${siteConfig.name} Home`}>
          {siteConfig.name.substring(0, 3)}<span className="text-primary">{siteConfig.name.substring(3)}</span>
        </Link>
        <Link000 href="/" className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
          Back to home
        </Link000>
      </header>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Document Navigation Tabs */}
        <nav className="flex flex-wrap items-center gap-2 p-1.5 bg-surface border border-border rounded-xl w-fit" aria-label="Legal Documents Navigation">
          <Link
            href="/legal/privacy-policy"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              isPrivacy
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-text-muted hover:text-text-main hover:bg-surface-hi/40'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy Policy</span>
          </Link>
          <Link
            href="/legal/terms-of-service"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              !isPrivacy
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-text-muted hover:text-text-main hover:bg-surface-hi/40'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Service</span>
          </Link>
          <Link
            href="/delete-account"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-text-muted hover:text-text-main hover:bg-surface-hi/40 transition-all"
          >
            <Trash2 className="w-4 h-4 text-error" />
            <span>Delete Account</span>
          </Link>
        </nav>

        {/* Markdown Document Content Shell */}
        <article className="bg-surface border border-border rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </article>

        {/* Legal Footer */}
        <footer className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/legal/terms-of-service" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/delete-account" className="hover:text-primary transition-colors">Delete Account</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
