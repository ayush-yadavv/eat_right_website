import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Minus, Info, X, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { Link000 } from '@/components/skiper40';

const slug = 'pricing';

export const metadata: Metadata = {
  title: 'Plans & Pricing',
  description:
    'How Annura AI is priced: a 7-day free trial with full Pro access, then a paid subscription. Two plans, Pro and Core, priced on Google Play in your local currency. No ads, no data selling, no permanent free tier.',
  alternates: { canonical: `${siteConfig.url}/${slug}` },
  openGraph: {
    title: `Plans & Pricing — ${siteConfig.name}`,
    description:
      'A 7-day free trial with full Pro access, then a paid subscription. Two plans, priced on Google Play in your local currency.',
    url: `${siteConfig.url}/${slug}`,
    type: 'website',
  },
};

type Cell = { v: 'yes' | 'no' | 'partial' | 'text'; t?: string };

interface FeatureRow {
  label: string;
  note?: string;
  pro: Cell;
  core: Cell;
  alumni: Cell;
}

/**
 * Every number below is taken from the backend, not from a planning doc.
 * Source of truth: `app/dependencies.py` TierQuotas and the route dependencies
 * in `app/routers/*.py`. If you change a quota, change it there first, then here.
 */
const rows: FeatureRow[] = [
  {
    label: 'AI photo meal scanning',
    note: 'The scan allowance resets daily at local midnight.',
    pro: { v: 'text', t: '10 per day' },
    core: { v: 'text', t: '1 per day' },
    alumni: { v: 'no' },
  },
  {
    label: 'AI companion chat',
    note: 'Fair-use ceiling on every active plan, to keep inference costs survivable.',
    pro: { v: 'text', t: '50 messages / day' },
    core: { v: 'text', t: '50 messages / day' },
    alumni: { v: 'no' },
  },
  {
    label: 'Barcode scanning & additive flags',
    note: 'Does not consume your photo-scan allowance. Rate-limited to prevent abuse, not to sell an upgrade.',
    pro: { v: 'yes' },
    core: { v: 'yes' },
    alumni: { v: 'no' },
  },
  {
    label: 'Manual meal, water & macro logging',
    pro: { v: 'yes' },
    core: { v: 'yes' },
    alumni: { v: 'no' },
  },
  {
    label: 'Intermittent fasting timers',
    note: 'Capped at 18:6 by design. Longer fasts are refused, not upsold.',
    pro: { v: 'yes' },
    core: { v: 'yes' },
    alumni: { v: 'no' },
  },
  {
    label: 'Post-meal check-ins & trigger correlation',
    pro: { v: 'yes' },
    core: { v: 'yes' },
    alumni: { v: 'no' },
  },
  {
    label: 'Weekly meal plans & recipes',
    pro: { v: 'yes' },
    core: { v: 'yes' },
    alumni: { v: 'no' },
  },
  {
    label: 'Pantry recipe generation from what you already have',
    note: 'The only feature gated to Pro specifically.',
    pro: { v: 'yes' },
    core: { v: 'no' },
    alumni: { v: 'no' },
  },
  {
    label: 'Health Connect sync & daily health score',
    pro: { v: 'yes' },
    core: { v: 'yes' },
    alumni: { v: 'yes' },
  },
  {
    label: 'Full history, trends & data export',
    note: 'Request from Settings. Delivered by email within 48 hours as a PDF report plus a machine-readable JSON archive.',
    pro: { v: 'yes' },
    core: { v: 'yes' },
    alumni: { v: 'yes' },
  },
  {
    label: 'Ads',
    pro: { v: 'text', t: 'None, ever' },
    core: { v: 'text', t: 'None, ever' },
    alumni: { v: 'text', t: 'None, ever' },
  },
];

const faqs = [
  {
    q: 'How much does it cost?',
    a: 'The exact amount is shown on Google Play before you subscribe, in your local currency. We deliberately do not print a price on this website: pricing is set per region in Play Console, and a number here would go stale the moment a regional price changed. You will always see the real figure at the point of purchase, and nowhere else.',
  },
  {
    q: 'What does the free trial actually include?',
    a: 'Every new account gets 7 days of full Pro access at no cost — up to 4 photo scans per day, with a hard ceiling of 20 photo scans across the whole trial. Barcode scanning, manual logging, fasting timers, meal plans and chat all work normally during the trial. There is no card-free trick and no surprise: the trial ends on day 7.',
  },
  {
    q: 'Why is there a lifetime cap on trial scans?',
    a: 'Because every scan costs us real money to run. 20 scans is enough to log your meals properly for the days the trial covers. It is a cost guard, not a tease — if you want more scans than that in a week, the plan you are looking for is Pro.',
  },
  {
    q: 'What happens when the trial ends and I do not subscribe?',
    a: 'Your account becomes read-only. Your history, photos, and trends stay visible for as long as you keep the account, and you can still request a complete copy of everything. Exports are emailed to your registered address within 48 hours, as a PDF report plus a JSON archive. What stops is new logging, scanning, and chat. We do not delete your data and we do not hold it hostage — we just stop doing the expensive part for free.',
  },
  {
    q: 'Can I cancel?',
    a: 'Yes, at any time, from Google Play subscriptions on your device. Cancelling stops the next charge. If you cancel mid-period you keep access until the period you already paid for ends, then the account moves to read-only.',
  },
  {
    q: 'Is there a permanent free tier?',
    a: 'No, and we would rather say so here than let you find out at a paywall. Annura is ad-free and funded entirely by subscriptions. A permanent free tier would mean either ads or selling data, and we are not willing to do either.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Refunds are handled by Google Play under their standard policy. If something went wrong that Play will not cover, contact us directly and we will look at it honestly.',
  },
];

function CellMark({ cell }: { cell: Cell }) {
  if (cell.v === 'text') return <span className="text-sm text-text-main">{cell.t}</span>;
  if (cell.v === 'yes')
    return (
      <span className="inline-flex items-center justify-center" aria-label="Included">
        <Check className="w-5 h-5 text-primary" strokeWidth={3} />
      </span>
    );
  if (cell.v === 'partial')
    return (
      <span className="inline-flex items-center justify-center" aria-label="Limited">
        <Minus className="w-5 h-5 text-warning-text" strokeWidth={3} />
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center" aria-label="Not included">
      <X className="w-5 h-5 text-text-muted/50" strokeWidth={3} />
    </span>
  );
}

export default function PricingPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Plans & Pricing', item: `${siteConfig.url}/${slug}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              <span>Plans &amp; Pricing</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Two plans. No ads, no data selling, no free tier.
            </h1>
            <p className="text-lg text-text-muted leading-relaxed text-pretty max-w-3xl">
              Every new account starts with 7 days of full Pro access, free. After that it is a paid subscription, because
              servers and AI inference cost money and the alternative is advertising. This page tells you exactly what each
              plan includes and where the limits are, before you install anything.
            </p>
          </section>

          {/* The two plans — deliberately without prices */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-primary/30 rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-primary/15 text-primary text-xs font-semibold uppercase tracking-wider self-start mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Start here</span>
              </div>
              <h2 className="font-heading text-2xl font-bold mb-2">Annura Pro</h2>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                The full experience: 10 photo scans a day, which comfortably covers three meals plus snacks with room to
                re-scan a plate you corrected.
              </p>
              <ul className="space-y-2.5 text-sm text-text-main mb-6 flex-1">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                  <span>10 AI photo scans per day</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                  <span>Pantry recipe generation from what you already have</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                  <span>Everything in Core</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                  <span>7-day free trial on a new account</span>
                </li>
              </ul>
              <p className="text-xs text-text-muted border-t border-border/60 pt-4">
                Priced on Google Play in your local currency.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-text-muted/10 text-text-muted text-xs font-semibold uppercase tracking-wider self-start mb-4">
                <span>Lighter plan</span>
              </div>
              <h2 className="font-heading text-2xl font-bold mb-2">Annura Core</h2>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                For people who mostly want the fasting timer, the additive scanner, and a manual food diary, with one
                photo scan a day as a bonus rather than the main event.
              </p>
              <ul className="space-y-2.5 text-sm text-text-main mb-6 flex-1">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                  <span>1 AI photo scan per day</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                  <span>Barcode scanning, manual logging &amp; fasting timers — none of them use up your photo scans</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={3} />
                  <span>Same 50 chat messages a day as Pro</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Minus className="w-4 h-4 text-warning-text shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-text-muted">No pantry recipe generation</span>
                </li>
              </ul>
              <p className="text-xs text-text-muted border-t border-border/60 pt-4">
                Priced on Google Play in your local currency. No trial on this plan.
              </p>
            </div>
          </section>

          {/* Full matrix */}
          <section className="bg-surface border border-border rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <caption className="sr-only">Feature comparison across Annura Pro, Annura Core, and read-only accounts</caption>
                <thead>
                  <tr className="border-b border-border bg-background/60">
                    <th scope="col" className="text-left p-4 font-heading font-semibold">
                      What you get
                    </th>
                    <th scope="col" className="p-4 font-heading font-semibold text-primary text-center w-32">
                      Pro
                    </th>
                    <th scope="col" className="p-4 font-heading font-semibold text-text-main text-center w-32">
                      Core
                    </th>
                    <th scope="col" className="p-4 font-heading font-semibold text-text-muted text-center w-32">
                      Read-only
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
                      <td className="p-4 text-center align-middle">
                        <CellMark cell={r.pro} />
                      </td>
                      <td className="p-4 text-center align-middle">
                        <CellMark cell={r.core} />
                      </td>
                      <td className="p-4 text-center align-middle">
                        <CellMark cell={r.alumni} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* The trial, spelled out */}
          <section className="bg-surface border border-primary/25 rounded-2xl p-6 md:p-8">
            <h2 className="font-heading text-xl font-semibold mb-3">The trial, in plain numbers</h2>
            <ul className="space-y-2.5 text-sm text-text-main">
              <li className="flex items-start gap-2.5">
                <span className="text-primary shrink-0 mt-0.5">•</span>
                <span>
                  <strong>7 days</strong> of full Pro access from the moment the account is created.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary shrink-0 mt-0.5">•</span>
                <span>
                  <strong>4 photo scans per day</strong> during the trial, not 10 — the trial runs a tighter allowance than
                  the paid plan.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary shrink-0 mt-0.5">•</span>
                <span>
                  <strong>20 photo scans total</strong> across the whole trial, regardless of how you spread them. Barcode
                  scanning and manual logging do not count against this.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary shrink-0 mt-0.5">•</span>
                <span>
                  A reminder is sent <strong>48 hours before the trial ends</strong>, so the first charge is never a surprise.
                </span>
              </li>
            </ul>
          </section>

          {/* After the trial */}
          <section className="bg-background border border-border rounded-2xl p-6 md:p-8">
            <h2 className="font-heading text-lg font-semibold mb-2">If you decide not to subscribe</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Your account moves to read-only. Everything you logged stays visible — meals, photos, trends, health scores,
              fasting history — and you can request a complete copy of it at any time, for as long as the account exists.
              Requests are fulfilled by email within 48 hours as a PDF report plus a machine-readable JSON archive.
              New scans, logs, and chat turn off until you subscribe again. Nothing is deleted, and nothing is held back
              behind a support ticket.
            </p>
          </section>

          {/* FAQ */}
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

          <section className="bg-surface border border-border rounded-2xl p-6 md:p-8 text-center">
            <h2 className="font-heading text-xl font-semibold mb-2">Start the trial</h2>
            <p className="text-sm text-text-muted mb-5">
              7 days of full Pro access, free. The exact price for your region is shown on Google Play before you subscribe.
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
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/legal/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms-of-use" className="hover:text-primary transition-colors">
                Terms of Use
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
