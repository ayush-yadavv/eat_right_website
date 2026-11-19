import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Check, Minus, X, Info, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { Link000 } from '@/components/skiper40';

export type Cell = { v: 'yes' | 'no' | 'partial' | 'text'; t?: string };

export interface CompareRow {
  label: string;
  annura: Cell;
  rival: Cell;
  /** Optional clarifier rendered under the row label. */
  note?: string;
}

export interface ComparePageProps {
  /** URL slug, e.g. "vs/myfitnesspal" — used for canonical + breadcrumb. */
  slug: string;
  competitor: string;
  title: string;
  description: string;
  /** One-paragraph framing directly under the H1. */
  intro: string;
  /** The single strongest reason to switch. */
  headlineDifference: string;
  rows: CompareRow[];
  /** Where the competitor genuinely wins. Omitted = none worth stating. */
  whereTheyWin?: string[];
  faqs?: { q: string; a: string }[];
}

function CellMark({ cell }: { cell: Cell }) {
  if (cell.v === 'text') {
    return <span className="text-sm text-text-main">{cell.t}</span>;
  }
  if (cell.v === 'yes') {
    return (
      <span className="inline-flex items-center justify-center" aria-label="Yes">
        <Check className="w-5 h-5 text-primary" strokeWidth={3} />
      </span>
    );
  }
  if (cell.v === 'partial') {
    return (
      <span className="inline-flex items-center justify-center gap-1" aria-label="Partial">
        <Minus className="w-5 h-5 text-warning-text" strokeWidth={3} />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center" aria-label="No">
      <X className="w-5 h-5 text-text-muted/50" strokeWidth={3} />
    </span>
  );
}

export function buildCompareMetadata(p: Pick<ComparePageProps, 'slug' | 'title' | 'description'>): Metadata {
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

export default function ComparePage(props: ComparePageProps) {
  const { slug, competitor, title, intro, headlineDifference, rows, whereTheyWin, faqs } = props;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: title, item: `${siteConfig.url}/${slug}` },
    ],
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
              <span>Comparison</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
              {title}
            </h1>
            <p className="text-lg text-text-muted leading-relaxed text-pretty max-w-3xl">{intro}</p>
          </section>

          {/* The differentiator, stated first and honestly */}
          <section className="bg-surface border border-primary/25 rounded-2xl p-6 md:p-8">
            <h2 className="font-heading text-xl font-semibold mb-3">The main difference</h2>
            <p className="text-text-main leading-relaxed">{headlineDifference}</p>
          </section>

          {/* Honest concession — this is what makes the rest credible */}
          {whereTheyWin && whereTheyWin.length > 0 && (
            <section className="bg-surface border border-border rounded-2xl p-6 md:p-8">
              <h2 className="font-heading text-xl font-semibold mb-4">Where {competitor} is genuinely better</h2>
              <ul className="space-y-2.5">
                {whereTheyWin.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-sm text-text-muted">
                    <span className="text-primary shrink-0 mt-1">•</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-text-muted mt-4 pt-4 border-t border-border/60">
                Being straight about this is the point — a comparison that claims a clean sweep is not worth reading.
              </p>
            </section>
          )}

          {/* Matrix */}
          <section className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <caption className="sr-only">{title}</caption>
                <thead>
                  <tr className="border-b border-border bg-background/60">
                    <th scope="col" className="text-left p-4 font-heading font-semibold">Feature</th>
                    <th scope="col" className="p-4 font-heading font-semibold text-primary text-center w-32">
                      {siteConfig.name}
                    </th>
                    <th scope="col" className="p-4 font-heading font-semibold text-text-muted text-center w-32">
                      {competitor}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.label} className="border-b border-border/50 last:border-0">
                      <th scope="row" className="text-left p-4 font-normal text-text-main align-top">
                        {r.label}
                        {r.note && <span className="block text-xs text-text-muted mt-1">{r.note}</span>}
                      </th>
                      <td className="p-4 text-center align-middle"><CellMark cell={r.annura} /></td>
                      <td className="p-4 text-center align-middle"><CellMark cell={r.rival} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Accuracy caveat — applies to us too, always */}
          <section className="bg-background border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-heading text-lg font-semibold mb-2">A note on photo accuracy</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Photo-based nutrition estimates are estimates. Independent testing has found every app in this category can be
              off by hundreds of calories on a mixed plate. {siteConfig.name} shows every ingredient it detects, lets you
              correct any of them in one tap, and never presents an estimate as a measurement. Your body&apos;s response to a
              meal is better data than any estimate of that meal.
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

          {/* CTA — no price, per site policy */}
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
