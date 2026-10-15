# Comprehensive SEO Audit Report: Annura AI (`eat_right_website`)

**Target URL:** [https://annura.ay7.me](https://annura.ay7.me)  
**Codebase:** `/mnt/Projects/eat_right/eat_right_website`  
**Framework:** Next.js 16.2.12 (App Router), React 19.2.4, Tailwind CSS v4, Vercel Edge  
**Audit Date:** October 14, 2026  
**Auditor:** Antigravity SEO Audit Engine  

---

## 1. Executive Summary

### Overall SEO Health Score: **75 / 100** (Grade: B-)

| Category | Score | Weight | Weighted Score |
|:---|:---:|:---:|:---:|
| **Technical SEO** | 72 / 100 | 22% | 15.84 |
| **Content Quality & E-E-A-T** | 74 / 100 | 23% | 17.02 |
| **On-Page SEO** | 76 / 100 | 20% | 15.20 |
| **Schema & Structured Data** | 68 / 100 | 10% | 6.80 |
| **Performance (Core Web Vitals)** | 80 / 100 | 10% | 8.00 |
| **AI Search Readiness (GEO)** | 82 / 100 | 10% | 8.20 |
| **Images & Media** | 75 / 100 | 5% | 3.75 |
| **Total SEO Health Score** | -- | **100%** | **74.81 / 100 (75)** |

### Business Type Detected
- **Industry Vertical:** Health & Wellness / Mobile Health Tech (mHealth)
- **Business Model:** Consumer Mobile Application (B2C Mobile SaaS, Google Play Closed Testing / Waitlist)
- **Primary Domain:** `https://annura.ay7.me` (Vercel Edge CDN)
- **Associated App:** Android Application package `com.annura.ai` on Google Play Store

---

### Top 5 Critical Issues (Immediate Fix Required)

1. **Root Canonical Tag Leak across Subpages (`src/app/layout.tsx` Line 22)**  
   The root layout hardcodes `alternates: { canonical: '/' }`. Because Next.js App Router inherits metadata down the component tree, any subpage without an explicit `alternates.canonical` (such as `/delete-account`, `/thank-you`, `/app/*`) renders `<link rel="canonical" href="https://annura.ay7.me"/>`. This explicitly instructs Googlebot and Bingbot to discard subpages and treat them as duplicate copies of the homepage.
2. **Hidden SEO Text Block / Cloaking Risk (`src/app/page.tsx` Lines 25–34)**  
   The homepage contains `<div className="sr-only" aria-hidden="true">` with a 130-word keyword block. Using both `sr-only` (invisible to visual users) and `aria-hidden="true"` (removed from accessibility trees) means this text exists solely for search crawlers. This triggers Google's Spam Policies on deceptive hidden text / cloaking.
3. **Fictitious / Dummy Contact Information in Schema & Terms (`src/data/site.ts` Lines 10–17)**  
   Structured data and legal terms output `123 Health Way, San Francisco, CA 94105` and `+1-234-567-890`. Google Structured Data Guidelines strictly penalize fake/mock contact information in `Organization` and `PostalAddress` entities.
4. **Uncapped Referral Code Indexing & Utility Route Leak (`/app/r/[code]`, `/thank-you`)**  
   The referral handler `/app/r/[code]` returns HTTP 200 with dynamic metadata for *any* arbitrary string and lacks `noindex`. Scrapers and referral campaigns can generate thousands of thin parameter URLs. Similarly, `/thank-you` is indexable without `noindex`.
5. **Missing HTTP Security & MIME Headers in `next.config.ts`**  
   The Vercel response lacks `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy`, and `Permissions-Policy`.

---

### Top 5 Quick Wins (High Impact, Low Effort)

1. **Fix Double Brand Suffix in Legal Titles (`src/app/legal/[slug]/page.tsx` Line 39)**  
   Change `title: `${doc.title} | ${siteConfig.name}`` to `title: doc.title`. Because `layout.tsx` uses the template `%s | Annura AI`, the current output is `Privacy Policy | Annura AI | Annura AI`.
2. **Add Missing `sizes` Attribute to Hero Image (`src/components/home/HomePage.tsx` Line 130)**  
   Adding `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"` prevents desktop and tablet viewports from downloading the massive 3840px srcset fallback.
3. **Declare `llms.txt` in `robots.ts` and HTML `<head>`**  
   Add `llms.txt` and `llms-full.txt` discovery links to `robots.ts` and a `<link rel="alternate" type="text/markdown" href="/llms.txt">` in `layout.tsx` to maximize Perplexity, ChatGPT, and ClaudeBot discovery.
4. **Expand Homepage Meta Description to 155 Characters**  
   Expand the current 91-character description to incorporate high-intent target terms: *"Annura AI is a mindful nutrition companion and calorie tracker. Snap meal photos for instant AI macros, sync fasting schedules, and connect Google Health."*
5. **Replace External `picsum.photos` Placeholders with Local Branded WebP Assets**  
   Two feature cards load stock images from `picsum.photos`. Moving them to local WebP files eliminates third-party DNS lookups, TLS connections, and broken image vulnerabilities.

---

## 2. Technical SEO Audit

### Crawlability & HTTP Status Matrix

| Route | Live HTTP Status | Robots Directive | Canonical Target | In Sitemap? | Issue Status |
|:---|:---:|:---:|:---:|:---:|:---|
| `/` | **200 OK** | `index, follow` | `https://annura.ay7.me` | Yes (1.0) | Clean |
| `/delete-account` | **200 OK** | `index, follow` | ⚠️ `https://annura.ay7.me` (Wrong!) | Yes (0.8) | **Critical: Points to homepage** |
| `/legal/privacy-policy` | **200 OK** | `index, follow` | `https://annura.ay7.me/legal/privacy-policy` | Yes (0.5) | Clean |
| `/legal/terms-of-use` | **200 OK** | `index, follow` | `https://annura.ay7.me/legal/terms-of-use` | Yes (0.5) | Clean |
| `/thank-you` | **200 OK** | ⚠️ None (`index`) | ⚠️ `https://annura.ay7.me` (Wrong!) | No | **High: Indexable thin conversion page** |
| `/app/r/[code]` | **200 OK** | ⚠️ None (`index`) | ⚠️ `https://annura.ay7.me` (Wrong!) | No | **High: Infinite thin URL generator** |
| `/app/[...slug]` | **200 OK** | ⚠️ None (`index`) | ⚠️ `https://annura.ay7.me` (Wrong!) | No | **Medium: Thin fallback utility page** |
| `/robots.txt` | **200 OK** | N/A | N/A | N/A | Missing bot rules & LLM pointers |
| `/sitemap.xml` | **200 OK** | N/A | N/A | N/A | Dynamic `new Date()` timestamp |
| `/llms.txt` | **200 OK** | N/A | N/A | N/A | Not referenced in robots.txt |
| `/llms-full.txt` | **200 OK** | N/A | N/A | N/A | Not referenced in robots.txt |
| `/.well-known/assetlinks.json` | **200 OK** | N/A | N/A | N/A | Clean Google App Links |
| `/.well-known/apple-app-site-association` | **200 OK** | N/A | N/A | N/A | Clean Apple Universal Links |

### Robots.txt Analysis (`src/app/robots.ts`)
```text
User-Agent: *
Allow: /
Disallow: /private/

Sitemap: https://annura.ay7.me/sitemap.xml
```
**Findings:**
1. `/private/` is a ghost path (does not exist in the Next.js routes).
2. Deep linking routes (`/app/` and `/app/r/`) are left completely open.
3. No directives for AI search crawlers (`GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`).
4. No link to `llms.txt`.

### Sitemap Analysis (`src/app/sitemap.ts`)
1. Generates 4 static URLs: `/`, `/delete-account`, `/legal/privacy-policy`, `/legal/terms-of-use`.
2. Uses dynamic `new Date()` for all entries on every sitemap generation. Search engine crawlers interpret constant timestamp shifts as unreliable signals. Real file modification timestamps or hardcoded release dates should be used.

### Security Headers Audit
The current HTTP response from Vercel provides:
- `strict-transport-security: max-age=63072000` (Excellent)
- Missing:
  - `X-Content-Type-Options: nosniff` (Protects against MIME-type sniffing)
  - `X-Frame-Options: DENY` (Protects against clickjacking)
  - `Referrer-Policy: strict-origin-when-cross-origin` (Protects referrer data)
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()` (Restricts browser APIs)

---

## 3. Content Quality & E-E-A-T Assessment

### Content Quality Scorer Results (`content_quality.py`)
- **Overall Content Quality:** 91 / 100
- **Information Density:** 1.0
- **Filler Score:** 0 (Very concise, minimal fluff)
- **Token Count:** 8,978 tokens across full site
- **Unique Tokens:** 975
- **Flags:** `repetitive` (attributed to repeated testimonials in the infinite marquee and scrub sections)
- **AI Cliché Patterns Detected:** "elevate your", "cutting-edge"

### E-E-A-T Signal Evaluation

| Dimension | Status | Observation | Recommendation |
|:---|:---:|:---|:---|
| **Experience** | ⚠️ Moderate | Testimonials feature generic names ("Priya Patel", "Lukas Wagner") with stock quote phrasing. | Add real beta screenshots or verified user feedback quotes. |
| **Expertise** | ⚠️ Moderate | Sanskrit etymology (Anna + Aura) gives strong brand identity, but author/nutritional credentials are thin. | Add a Founder / Nutrition Advisor bio with verifiable domain background. |
| **Authoritativeness** | 🟢 Good | Google Health Connect integration and local on-device processing highlights technical privacy standards. | Reference Google Health Connect developer standards and technical privacy guarantees. |
| **Trustworthiness** | 🔴 Needs Fix | Dummy phone number (`+1 234 567 890`) and dummy address (`123 Health Way, San Francisco, CA`) degrade legal and business trust. | Replace with genuine operational contact email and physical/legal contact location, or remove dummy address from schema. |

### Hidden Content / Cloaking Audit
In `src/app/page.tsx` (lines 25-34):
```tsx
<div className="sr-only" aria-hidden="true">
  <h2>Annura AI: Timeless wisdom for the modern plate</h2>
  <p>
    In ancient philosophy, food is not just calories it is the very foundation of your life force and energy...
    Master your nutrition with gentle, effortless intelligence. Snap a photo to effortlessly log your meal...
  </p>
</div>
```
- **Risk:** High (Manual action / Algorithmic demotion risk under Google Webmaster Guidelines for Hidden Text).
- **Remediation:** Remove the `sr-only` wrapper or render this descriptive paragraph visibly in the Hero or "The Art of Presence" section.

---

## 4. On-Page SEO Audit

### Title Tags & Meta Descriptions

| Route | Rendered Title | Length | Rendered Meta Description | Length | Status |
|:---|:---|:---:|:---|:---:|:---:|
| `/` | `Annura AI \| Every bite, understood.` | 34 | `The ancient art of mindful eating, powered by modern AI. Know your food, fuel your energy.` | 91 | Title good; Meta short |
| `/delete-account` | `Request Account & Data Deletion \| Annura AI` | 46 | `Official instructions and web request options to request permanent account and personal data deletion for Annura AI.` | 115 | Optimal |
| `/legal/privacy-policy` | `Privacy Policy \| Annura AI \| Annura AI` | 41 | `Official Privacy Policy for Annura AI.` | 38 | ⚠️ Double brand; Meta thin |
| `/legal/terms-of-use` | `Terms of Use \| Annura AI \| Annura AI` | 39 | `Official Terms of Use for Annura AI.` | 36 | ⚠️ Double brand; Meta thin |
| `/thank-you` | `Thank you \| Annura AI` | 22 | `Your message has been received.` | 31 | Missing `noindex` |
| `/app/r/[code]` | `You've been invited to Annura AI · Code [CODE] \| Annura AI` | ~60 | `Join Annura AI with invite code [CODE]. Mindful eating and nutrition powered by modern AI.` | ~90 | Missing `noindex` |

### Heading Hierarchy Analysis

```text
H1: Timeless wisdom for the modern plate.
  H2: Annura AI: Timeless wisdom for the modern plate (⚠️ Inside sr-only hidden div)
  H2: A daily ritual of awareness.Cultivate a deeply mindful relationship with every meal. (ScrubText)
  H2: Choose pure nourishment.Protect your energy by surrounding your body with foods that heal. (ScrubText)
  H2: Guidance you can trust.Find the perfect balance for your unique lifestyle and radiant wellbeing. (ScrubText)
  H2: Designed for quiet clarity.
    H3: AI Meal Logging
    H3: Annura AI Chat
    H3: Intermittent Fasting
    H3: Meal Planning
    H3: Streaks & Scores
  H2: Designed for a life of balance, not a life of tracking.
    H3: The Art of Presence
    H3: Uncompromising Purity
    H3: Empathetic Guidance
    H3: Your Private Sanctuary
  H2: Frequently asked questions
    H3: How do I join the Closed Beta?
    H3: Is the app available on iOS?
    H3: Is my health data private?
    H3: Will the app always be free?
  H2: Join the Closed Beta.
```

**Heading Observations:**
1. Heading structure is logical and strictly maintains single H1 -> H2 -> H3 hierarchy.
2. In `ScrubText`, the JSX `{step.prefix} <span ...>{step.highlight}</span>` causes the text to concatenate without spacing in HTML text extraction (`awareness.Cultivate`). Adding a space prevents grammatical run-on sentences.

---

## 5. Schema & Structured Data Audit

### Currently Implemented Schemas

1. **`SoftwareApplication`** (Rendered in `layout.tsx` lines 59–73):
   - `@type`: `SoftwareApplication`
   - `applicationCategory`: `HealthApplication`
   - `operatingSystem`: `"iOS, Android"` (⚠️ Inaccurate: App is currently Android only)
   - `offers`: `PreOrder` (⚠️ Missing `price: "0"` and `priceCurrency: "USD"` required by Rich Results)
2. **`Organization`** (Rendered in `page.tsx` lines 40–59):
   - `telephone`: `"+1-234-567-890"` (⚠️ Fictitious dummy number)
   - `address`: `"123 Health Way, San Francisco, CA 94105"` (⚠️ Fictitious dummy address)
   - `logo`: `"https://annura.ay7.me/og-image.webp"` (⚠️ 1200x630 banner used as logo)
3. **`Person`** (Founder in `page.tsx` lines 60–69):
   - Correctly references Ayush Yadav (`https://ay7.me`).
4. **`FAQPage`** (Rendered in `page.tsx` lines 10–21):
   - 4 Question/Answer pairs matching on-page content. Fully compliant with Google FAQ schema.

### Schema Missing Opportunities
- **No Unified `@graph`**: The schemas are split across two separate JSON-LD script blocks (`layout.tsx` and `page.tsx`). Connecting them under a single `@graph` linking `WebSite` -> `SoftwareApplication` -> `Organization` -> `Person` provides entity clarity for Google Knowledge Graph and AI search engines.
- **Subpage Schemas**: `/legal/*` and `/delete-account` have no `WebPage` or `BreadcrumbList` structured data.

---

## 6. Performance & Core Web Vitals (CWV)

### Metrics & Diagnostic Summary

| Metric | Estimated Lab Value | Status | Target |
|:---|:---:|:---:|:---:|
| **First Contentful Paint (FCP)** | 0.8s | 🟢 Good | < 1.8s |
| **Largest Contentful Paint (LCP)** | 1.4s | 🟢 Good | < 2.5s |
| **Interaction to Next Paint (INP)** | < 120ms | 🟢 Good | < 200ms |
| **Cumulative Layout Shift (CLS)** | 0.01 | 🟢 Good | < 0.1 |
| **Time to First Byte (TTFB)** | 60ms - 90ms | 🟢 Excellent | < 800ms |

### Asset & Optimization Findings
1. **Hero Image Preload (`home-screen.webp`)**:
   - In `HomePage.tsx`, `<Image fill priority ... />` without `sizes` defaults to `imageSizes="100vw"`. On a 4K display, Next.js generates and requests a 3840w image for a container with max width 448px (`max-w-md`).
2. **External Stock Image CDN Latency**:
   - `https://picsum.photos/seed/sync/800/800` and `https://picsum.photos/seed/privacybowl/800/800` introduce external DNS lookups and TLS handshakes, slowing card renders.
3. **Dead Weight Fonts**:
   - `public/fonts/` contains 4 IBM Plex Sans `.woff2` files (148 KB total), and `package.json` installs `@fontsource/ibm-plex-sans`. However, the app uses Google Fonts `Plus_Jakarta_Sans` and `Inter`. IBM Plex Sans is never loaded or used.

---

## 7. AI Search Readiness (GEO - Generative Engine Optimization)

**GEO Readiness Score: 82 / 100**

### Current AI Discovery Infrastructure
- **`public/llms.txt`**: Present, clean, follows standard markdown specification.
- **`public/llms-full.txt`**: Exhaustive, high-fidelity documentation (452 lines) covering features, API contracts, full GDPR/CCPA privacy policy, terms of use, and Google Health Connect privacy architecture.
- **Citability**: Direct factual statements explaining that Annura AI processes Health Connect metrics 100% on-device without data brokerage.

### GEO Deficiencies
1. **No Discovery Link in `robots.txt`**: AI agents querying `/robots.txt` will not discover `/llms.txt`.
2. **No HTML `<link>` Tag**: Missing `<link rel="alternate" type="text/markdown" href="/llms.txt">` in HTML `<head>`.
3. **Absence of AI Crawler Rules**: `GPTBot`, `ClaudeBot`, `PerplexityBot`, and `Applebot-Extended` are not explicitly acknowledged in `robots.ts`.
4. **Entity Inconsistencies**: The dummy address "123 Health Way" and phone "+1 234 567 890" pollute LLM knowledge embeddings with synthetic entity information.

---

## 8. Images & Media Optimization

| File Path | Format | Dimensions | Usage | Optimization Status |
|:---|:---:|:---:|:---|:---|
| `/images/app/home-screen.webp` | WebP | 1446 x 1985 | Hero LCP image | Needs explicit `sizes` |
| `/images/app/meal-analysis.webp` | WebP | 1080 x 2400 | Showcase StickyCard 1 | Good |
| `/images/app/ai-chat.webp` | WebP | 1080 x 2400 | Showcase StickyCard 2 | Good |
| `/images/app/fasting.webp` | WebP | 1080 x 2400 | Showcase StickyCard 3 | Good |
| `/images/app/weekly-plan.webp` | WebP | 1080 x 2400 | Showcase StickyCard 4 | Good |
| `/images/app/achievements.webp` | WebP | 1080 x 2400 | Showcase StickyCard 5 | Good |
| `/images/app/featured-graphic.webp` | WebP | 1200 x 900 | Bento Feature 1 | Good |
| `https://picsum.photos/.../sync/...` | JPEG | 800 x 800 | Bento Feature 3 | ⚠️ Replace with local WebP |
| `https://picsum.photos/.../privacybowl/...`| JPEG | 800 x 800 | Bento Feature 4 | ⚠️ Replace with local WebP |

### Alt Text Audit
- `alt="App interface"` -> Generic. Replace with: `"Annura AI home dashboard showing daily health aura and meal tracking summary"`
- `alt="Aesthetic lifestyle imagery"` -> Generic. Replace with: `"Nutritious mindful meal preparation with fresh organic ingredients"`
- `alt="Wellness guide"` -> Generic. Replace with: `"Personalized AI nutritional guidance and empathetic dietary coaching"`
- `alt="Privacy and sanctuary"` -> Generic. Replace with: `"Secure on-device health data encryption and privacy vault"`

---

## 9. SXO (Search Experience & Conversion Funnel)

1. **User Intent Alignment**:
   - Visitors looking for an AI calorie counter or mindful eating app immediately understand the value proposition within 3 seconds of viewing the hero viewport.
2. **Clear Call-to-Action**:
   - Primary: "Join Closed Beta" -> Smooth scrolls to email submission.
   - Secondary: "Explore Features" -> Smooth scrolls to feature cards.
3. **Accessibility**:
   - "Skip to main content" link present at line 79 in `layout.tsx`.
   - Dark/Light theme toggle built with accessible controls.
   - High color contrast compliant with WCAG 2.1 AA.
4. **Form Experience**:
   - Fast, client-side validated waitlist submission with anti-spam honeypot.
