import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Info, Check, Minus } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { Link000 } from '@/components/skiper40';

export interface Entry {
  name: string;
  /** Short positioning line. */
  tagline: string;
  /** Whether this entry is Annura AI itself — rendered with a disclosure badge. */
  self?: boolean;
  bestFor: string;
  strengths: string[];
  weaknesses: string[];
  /** Honest one-line verdict. */
  verdict: string;
}

export interface RoundupPageProps {
  slug: string;
  title: string;
  description: string;
  intro: string;
  /** How the list was assembled — required, this is the credibility paragraph. */
  methodology: string;
  entries: Entry[];
  faqs?: { q: string; a: string }[];
}

export function buildRoundupMetadata(p: Pick<RoundupPageProps, 'slug' | 'title' | 'description'>): Metadata {
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `${siteConfig.url}/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.description,
      url: `${siteConfig.url}/${p.slug}`,
      type: 'article',
    },
  };
}

export default function RoundupPage({ slug, title, intro, methodology, entries, faqs }: RoundupPageProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: title, item: `${siteConfig.url}/${slug}` },
    ],
  };

  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    itemListElement: entries.map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: e.name,
    })),
  };

  const faqSchema = faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <main className="min-h-screen bg-background text-text-main py-12 px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mx-auto flex items-center justify-between mb-12 border-b border-border pb-6">
          <Link href="/" className="font-heading font-bold text-xl tracking-tight" aria-label={`${siteConfig.name} Home`}>
            {siteConfig.name.substring(0, 3)}
            <span className="text-primary">{siteConfig.name.substring(3)}</span>
          </Link>
          <Link000
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
            Back to home
          </Link000>
        </header>

        <div className="max-w-4xl mx-auto space-y-10">
          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              <Info className="w-3.5 h-3.5" />
              <span>Roundup</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">{title}</h1>
            <p className="text-lg text-text-muted leading-relaxed text-pretty max-w-3xl">{intro}</p>
          </section>

          <section className="bg-surface border border-primary/25 rounded-2xl p-6 md:p-8">
            <h2 className="font-heading text-xl font-semibold mb-3">How this list was made</h2>
            <p className="text-sm text-text-muted leading-relaxed">{methodology}</p>
            <p className="text-xs text-text-muted mt-4 pt-4 border-t border-border/60">
              {siteConfig.name} is our own app and it appears in this list. That is disclosed on every entry rather than
              hidden in a footnote. Where a competitor is better, we say so.
            </p>
          </section>

          <section className="space-y-5">
            {entries.map((e, i) => (
              <article
                key={e.name}
                className={`bg-surface border rounded-2xl p-6 md:p-8 ${e.self ? 'border-primary/40' : 'border-border'}`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <h2 className="font-heading text-xl font-semibold">{e.name}</h2>
                  {e.self && (
                    <span className="px-2.5 py-1 rounded-pill bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
                      Our app
                    </span>
                  )}
                </div>

                <p className="text-sm text-text-muted leading-relaxed mb-4">{e.tagline}</p>

                <dl className="mb-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">Best for</dt>
                  <dd className="text-sm text-text-main">{e.bestFor}</dd>
                </dl>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Strengths</h3>
                    <ul className="space-y-1.5">
                      {e.strengths.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-text-muted">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">Weaknesses</h3>
                    <ul className="space-y-1.5">
                      {e.weaknesses.map((w) => (
                        <li key={w} className="flex items-start gap-2 text-sm text-text-muted">
                          <Minus className="w-4 h-4 text-warning-text shrink-0 mt-0.5" strokeWidth={3} />
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-text-main leading-relaxed pt-4 border-t border-border/60">{e.verdict}</p>
              </article>
            ))}
          </section>

          <section className="bg-background border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-heading text-lg font-semibold mb-2">A note on photo accuracy</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Every app on this list estimates calories from a photo, and every one of them can be wrong by hundreds of
              calories on a mixed plate — independent testing has found this repeatedly. Treat a photo estimate as a
              starting guess you correct, never as a measurement. {siteConfig.name} shows each detected ingredient so you can
              fix it in one tap, and the part of the app that matters most does not depend on the calorie number at all: it
              depends on how you felt after you ate.
            </p>
          </section>

          {faqs && faqs.length > 0 && (
            <section className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold">Questions</h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details key={f.q} className="bg-surface border border-border rounded-xl p-5 group">
                    <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{f.q}</span>
                      <span className="text-primary shrink-0 transition-transform group-open:rotate-90">›</span>
                    </summary>
                    <p className="text-sm text-text-muted mt-3 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="bg-surface border border-border rounded-2xl p-6 md:p-8 text-center">
            <h2 className="font-heading text-xl font-semibold mb-2">Try {siteConfig.name}</h2>
            <p className="text-sm text-text-muted mb-5">
              Every new account gets 7 days of full access, free. After that it&apos;s a paid subscription — ad-free, funded
              entirely by subscribers. The exact price is shown on Google Play in your local currency.
            </p>
            <a
              href={siteConfig.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-pill bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Get it on Google Play
              <ArrowRight className="w-4 h-4" />
            </a>
          </section>

          <footer className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
