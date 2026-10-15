import type { Metadata } from 'next';
import HomePage from '@/components/home/HomePage';
import { siteConfig, faqs } from '@/data/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagLine}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <HomePage />
    </>
  );
}
