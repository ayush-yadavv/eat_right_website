# SEO Action Plan: Annura AI (`eat_right_website`)

**Target:** [https://annura.ay7.me](https://annura.ay7.me)  
**Codebase:** `/mnt/Projects/eat_right/eat_right_website`  
**Execution Priority:** Critical (Immediate) > High (1 Week) > Medium (1 Month) > Low (Backlog)

---

## Priority 1: Critical (Fix Immediately)

### 1. Fix Root Layout Canonical Cascade Leak
* **File:** [`src/app/layout.tsx`](file:///mnt/Projects/eat_right/eat_right_website/src/app/layout.tsx#L21-L23)
* **Problem:** In Next.js App Router, defining `alternates: { canonical: '/' }` in the root layout causes all child pages that lack an explicit `canonical` override (`/delete-account`, `/thank-you`, `/app/*`) to inherit `canonical: 'https://annura.ay7.me'`. This tells search engines to canonicalize those pages to the homepage.
* **Solution:** Remove `alternates: { canonical: '/' }` from `layout.tsx` and define page-specific canonicals on each route.

```typescript
// In src/app/layout.tsx
// REMOVE:
// alternates: {
//   canonical: '/',
// },

// In src/app/page.tsx:
export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagLine}`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

// In src/app/delete-account/page.tsx:
export const metadata: Metadata = {
  title: 'Request Account & Data Deletion',
  description: `Official instructions and web request options to request permanent account and personal data deletion for ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/delete-account`,
  },
};
```

---

### 2. Remove Deceptive Hidden Text Block (Cloaking Anti-Pattern)
* **File:** [`src/app/page.tsx`](file:///mnt/Projects/eat_right/eat_right_website/src/app/page.tsx#L25-L34)
* **Problem:** A `<div className="sr-only" aria-hidden="true">` contains a keyword-stuffed paragraph. Because it is hidden from visual users (`sr-only`) and stripped from screen readers (`aria-hidden="true"`), it exists solely for search crawlers, violating Google Search Essentials on deceptive cloaking.
* **Solution:** Delete the hidden block completely or render it visibly within an editorial "About" or "Philosophy" section.

```tsx
// In src/app/page.tsx:
// DELETE lines 25-34:
// <div className="sr-only" aria-hidden="true">
//   <h2>Annura AI: Timeless wisdom for the modern plate</h2>
//   <p>...</p>
// </div>
```

---

### 3. Replace Dummy / Fictitious Contact Details in Schema & Terms
* **Files:** [`src/data/site.ts`](file:///mnt/Projects/eat_right/eat_right_website/src/data/site.ts#L8-L19), [`src/app/page.tsx`](file:///mnt/Projects/eat_right/eat_right_website/src/app/page.tsx#L40-L58)
* **Problem:** `123 Health Way, San Francisco, CA 94105` and `+1 (234) 567-890` are placeholder data. Google's structured data validators and spam algorithms flag synthetic or unverified addresses in `Organization` schema.
* **Solution:** Replace with authentic contact email and legitimate operational address or omit the postal address if operating as a digital-only entity.

```typescript
// In src/data/site.ts:
export const siteConfig = {
  name: 'Annura AI',
  tagLine: 'Every bite, understood.',
  description: 'The ancient art of mindful eating, powered by modern AI. Know your food, fuel your energy.',
  logo: '/images/logo/annura-icon.svg',
  url: 'https://annura.ay7.me',
  ogImage: 'https://annura.ay7.me/og-image.webp',
  contact: {
    email: 'play.ay11@gmail.com',
    supportEmail: 'support@annura.ay7.me',
  },
  links: {
    playStore: 'https://play.google.com/store/apps/details?id=com.annura.ai',
  },
};
```

---

### 4. Apply `noindex` to Utility & Dynamic App Routes
* **Files:** [`src/app/thank-you/page.tsx`](file:///mnt/Projects/eat_right/eat_right_website/src/app/thank-you/page.tsx#L6-L9), [`src/app/app/r/[code]/page.tsx`](file:///mnt/Projects/eat_right/eat_right_website/src/app/app/r/[code]/page.tsx#L10-L29), [`src/app/app/[...slug]/page.tsx`](file:///mnt/Projects/eat_right/eat_right_website/src/app/app/[...slug]/page.tsx#L7-L10)
* **Problem:** Utility confirmation pages and dynamic referral routes `/app/r/[code]` are currently open for indexing, risking index bloat and duplicate thin content.
* **Solution:** Add `robots: { index: false, follow: false }` (or `follow: true` for referral landing pages).

```typescript
// In src/app/thank-you/page.tsx:
export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Your message has been received.',
  robots: {
    index: false,
    follow: false,
  },
};

// In src/app/app/r/[code]/page.tsx:
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  const cleanCode = code.toUpperCase().replace(/[^A-Z0-9-]/g, '');

  return {
    title: `Invitation to Annura AI · Code ${cleanCode}`,
    description: `Join Annura AI with invite code ${cleanCode}. Mindful eating and nutrition powered by modern AI.`,
    robots: {
      index: false,
      follow: true,
    },
    // ...
  };
}

// In src/app/app/[...slug]/page.tsx:
export const metadata: Metadata = {
  title: 'App link',
  description: 'This route is reserved for app-specific links.',
  robots: {
    index: false,
    follow: false,
  },
};
```

---

### 5. Add Security and MIME Headers in `next.config.ts`
* **File:** [`next.config.ts`](file:///mnt/Projects/eat_right/eat_right_website/next.config.ts)
* **Problem:** Missing `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`.
* **Solution:** Add `async headers()` configuration.

```typescript
// In next.config.ts:
const nextConfig: NextConfig = {
  // ... existing configs
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};
```

---

## Priority 2: High (Fix Within 1 Week)

### 6. Fix Title Suffix Duplication in Legal Pages
* **File:** [`src/app/legal/[slug]/page.tsx`](file:///mnt/Projects/eat_right/eat_right_website/src/app/legal/[slug]/page.tsx#L39)
* **Problem:** Because `layout.tsx` specifies the title template `%s | Annura AI`, setting `title: `${doc.title} | ${siteConfig.name}`` outputs `<title>Privacy Policy | Annura AI | Annura AI</title>`.
* **Solution:**

```typescript
// In src/app/legal/[slug]/page.tsx line 38-44:
return {
  title: doc.title, // Next.js template will automatically produce "Privacy Policy | Annura AI"
  description: `Official ${doc.title} for ${siteConfig.name}.`,
  alternates: {
    canonical: `${siteConfig.url}/legal/${doc.canonicalSlug}`,
  },
};
```

---

### 7. Add Responsive `sizes` to Hero Image
* **File:** [`src/components/home/HomePage.tsx`](file:///mnt/Projects/eat_right/eat_right_website/src/components/home/HomePage.tsx#L129-L137)
* **Problem:** `<Image src="/images/app/home-screen.webp" fill priority />` lacks a `sizes` attribute, triggering `100vw` behavior where Next.js serves huge variants (up to 3840px) on desktop viewports where the container is only `max-w-md` (448px).
* **Solution:**

```tsx
<Image 
  src="/images/app/home-screen.webp" 
  alt="Annura AI mindful meal tracking app interface displaying daily health score and meal log" 
  fill 
  priority
  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 35vw, 450px"
  className="object-cover object-top opacity-95"
/>
```

---

### 8. Optimize `robots.ts` with Disallows & AI Bot Access
* **File:** [`src/app/robots.ts`](file:///mnt/Projects/eat_right/eat_right_website/src/app/robots.ts)
* **Problem:** Missing crawl controls for dynamic paths and no explicit declaration for AI search crawlers or `llms.txt`.
* **Solution:**

```typescript
import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/app/', '/thank-you', '/api/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Google-Extended', 'Applebot-Extended'],
        allow: ['/', '/llms.txt', '/llms-full.txt', '/legal/'],
        disallow: ['/app/', '/api/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
```

---

### 9. Connect Schemas into Unified `@graph`
* **Files:** [`src/app/layout.tsx`](file:///mnt/Projects/eat_right/eat_right_website/src/app/layout.tsx#L59-L90), [`src/app/page.tsx`](file:///mnt/Projects/eat_right/eat_right_website/src/app/page.tsx#L35-L73)
* **Problem:** Disconnected schemas across layout and page. `SoftwareApplication` incorrectly claims `operatingSystem: 'iOS, Android'` and lacks required `price` / `priceCurrency` fields in `offers`.
* **Solution:** Consolidate into a unified schema graph:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://annura.ay7.me/#website",
      "url": "https://annura.ay7.me",
      "name": "Annura AI",
      "description": "The ancient art of mindful eating, powered by modern AI. Know your food, fuel your energy.",
      "publisher": { "@id": "https://annura.ay7.me/#organization" }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://annura.ay7.me/#app",
      "name": "Annura AI",
      "url": "https://annura.ay7.me",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Android",
      "downloadUrl": "https://play.google.com/store/apps/details?id=com.annura.ai",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "category": "Beta access",
        "availability": "https://schema.org/PreOrder"
      },
      "author": { "@id": "https://annura.ay7.me/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://annura.ay7.me/#organization",
      "name": "Annura AI",
      "url": "https://annura.ay7.me",
      "logo": "https://annura.ay7.me/images/logo/annura-icon.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "play.ay11@gmail.com",
        "contactType": "customer support"
      }
    },
    {
      "@type": "Person",
      "@id": "https://annura.ay7.me/#founder",
      "name": "Ayush Yadav",
      "jobTitle": "Founder & Engineer",
      "url": "https://ay7.me",
      "sameAs": ["https://github.com/eatright"]
    }
  ]
}
```

---

## Priority 3: Medium (Fix Within 1 Month)

### 10. Replace External `picsum.photos` Images
* **File:** [`src/data/site.ts`](file:///mnt/Projects/eat_right/eat_right_website/src/data/site.ts#L72-L81)
* **Problem:** Bento cards 3 and 4 load from `https://picsum.photos/seed/sync/800/800` and `https://picsum.photos/seed/privacybowl/800/800`.
* **Solution:** Create dedicated WebP assets in `public/images/app/sync-guidance.webp` and `public/images/app/privacy-sanctuary.webp` and remove `picsum.photos` from `next.config.ts` `remotePatterns`.

---

### 11. Fix Text Concatenation in `ScrubText`
* **File:** [`src/components/home/HomePage.tsx`](file:///mnt/Projects/eat_right/eat_right_website/src/components/home/HomePage.tsx#L173)
* **Problem:** `{step.prefix} <span className=...>{step.highlight}</span>` renders as `awareness.Cultivate` in text extraction.
* **Solution:** Ensure explicit space: `{step.prefix}{' '}<span className=...>{step.highlight}</span>`.

---

### 12. Add `llms.txt` Link Tag to `<head>`
* **File:** [`src/app/layout.tsx`](file:///mnt/Projects/eat_right/eat_right_website/src/app/layout.tsx)
* **Solution:** Add `<link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM Documentation" />` to layout head elements.

---

### 13. Expand Homepage Meta Description
* **File:** [`src/data/site.ts`](file:///mnt/Projects/eat_right/eat_right_website/src/data/site.ts#L4)
* **Current (91 chars):** `The ancient art of mindful eating, powered by modern AI. Know your food, fuel your energy.`
* **Optimized (152 chars):** `Annura AI is a mindful nutrition companion and calorie tracker. Snap meal photos for instant AI macros, sync fasting routines, and connect Google Health.`

---

## Priority 4: Low (Maintenance & Backlog)

### 14. Purge Unused Font Assets
* **Action:** Remove `@fontsource/ibm-plex-sans` from `package.json` and delete the unreferenced `.woff2` files in `public/fonts/` to save ~150KB repository payload.

### 15. Real Last-Modified Dates in `sitemap.ts`
* **File:** [`src/app/sitemap.ts`](file:///mnt/Projects/eat_right/eat_right_website/src/app/sitemap.ts)
* **Action:** Inspect `fs.statSync(filePath).mtime` for legal documents and use fixed release timestamps instead of `new Date()`.
