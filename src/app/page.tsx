import HomePage from '@/components/home/HomePage';

export const metadata = {
  title: 'EatRight AI',
  description: 'Nutrition that fits your day.',
};

export default function Page() {
  return (
    <>
      {/* 
        We add a visually hidden server-rendered block with an H1 and > 500 characters of text
        so AI crawlers (and SEO bots) can read the raw HTML without executing JavaScript.
      */}
      <div className="sr-only" aria-hidden="true">
        <h1>EatRight AI: Nutrition that fits your day</h1>
        <p>
          EatRight AI keeps your meals, reminders, and nutrition habits clear enough to return to every day, without the friction of spreadsheets.
          Build a routine around what you already eat. Log without overthinking.
          Remember the moments that matter. Set reminders that support your schedule instead of interrupting it.
          Pick up on any device. Your daily routine stays close whether you are at home or out.
          Made for the parts of tracking that need less friction.
          We believe in nutrition tracking that doesn&apos;t feel like a second job. Our platform connects your daily habits with smart insights, helping you stay on track without the guilt or the complex math. Whether you are aiming for a specific goal or just want to be more mindful, EatRight AI is designed to fade into the background of your life while keeping you accountable.
          Join the invite-only beta today and secure your spot. Leave your email and we will send an invite code directly to your inbox as soon as server capacity allows.
        </p>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EatRight AI",
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
