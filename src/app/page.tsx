import HomePage from '@/components/home/HomePage';

import { siteConfig } from '@/data/site';

export const metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagLine}`,
  description: siteConfig.description,
};

export default function Page() {
  return (
    <>
      {/* 
        We add a visually hidden server-rendered block with an H1 and > 500 characters of text
        so AI crawlers (and SEO bots) can read the raw HTML without executing JavaScript.
      */}
      <div className="sr-only" aria-hidden="true">
        <h1>Annura AI: Timeless wisdom for the modern plate</h1>
        <p>
          In ancient philosophy, food is not just calories it is the very foundation of your life force and energy. They mastered the art of eating for holistic wellbeing.
          Annura brings this timeless mastery into the modern world. Named after the Sanskrit word for food and grain (Anna), combined with your energetic wellbeing (Aura), our app bridges the gap between ancient wisdom and cutting-edge artificial intelligence.
          By deeply understanding your meals, Annura helps you align what you eat with how you feel.
          Master your nutrition with gentle, effortless intelligence. Snap a photo to effortlessly log your meal and gain deep nutritional understanding without obsessive math. Scan product labels to look beyond basic macros, spot processed ingredients, and choose pure, balancing foods that truly nourish you. Chat with your personalized AI wellness coach to find harmony in your diet, balance your energy levels, and reach your unique health goals.
          Join the invite-only beta today and secure your spot. Reclaim the ancient mastery of eating. Nourish your body, fuel your aura.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Annura AI",
              "url": "https://app.ay7.me",
              "logo": "https://app.ay7.me/og-image.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-234-567-890",
                "email": "support@app.ay7.me",
                "contactType": "customer support"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Health Way",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94105",
                "addressCountry": "US"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ayush Yadav",
              "jobTitle": "Software Engineer",
              "url": "https://ay7.me",
              "sameAs": [
                "https://github.com/eatright"
              ]
            }
          ])
        }}
      />
      <HomePage />
    </>
  );
}
