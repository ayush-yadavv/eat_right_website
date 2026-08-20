# Annura — Next.js & Shadcn UI Design System Specification (Web v2.3)

**Brand Identity:** Ann (Sustenance/Grain) + Aura (The Soul/Energy)
**Framework:** Next.js (React), Tailwind CSS, Shadcn UI
**Core Aesthetic:** Organic Tech • Warm Minimalism • Soft Radiance

> **About this Document:** This is the Web/Next.js equivalent of the Flutter Annura Design System. It translates Annura's organic, tech-forward aesthetic into the React ecosystem using Tailwind CSS for design tokens and Shadcn UI as the accessible component foundation. It mirrors the exact rigorous standards, contrast audits, and CI-enforced rules found in `eat_right_app/DESIGN.md`.

## Table of Contents

- [1. Brand Philosophy & Core Principles](#1-brand-philosophy--core-principles)
- [2. Web Brand Architecture & Design Tokens (Tailwind)](#2-web-brand-architecture--design-tokens-tailwind)
- [3. Typography System](#3-typography-system)
- [4. Shadcn UI Component Mapping](#4-shadcn-ui-component-mapping)
- [5. Reusable React Components (Annura Web)](#5-reusable-react-components-annura-web)
- [6. Detailed Layout, Spacing, Padding, Radius & Gradient Matrix](#6-detailed-layout-spacing-padding-radius--gradient-matrix)
- [7. Do's and Don'ts for Web UI Engineers](#7-dos-and-donts-for-web-ui-engineers)
- [8. Accessibility Contrast Audit](#8-accessibility-contrast-audit)
- [9. Icon System (Lucide React)](#9-icon-system-lucide-react)
- [10. Internationalization & RTL](#10-internationalization--rtl)
- [11. Testing & Governance in Practice (ESLint Rules)](#11-testing--governance-in-practice-eslint-rules)
- [12. Image & Photo Treatment](#12-image--photo-treatment)

---

## 1. Brand Philosophy & Core Principles

* **Quiet Intelligence:** Technology should feel peaceful and seamless, not overwhelming. We prioritize high negative space (whitespace/darkspace) and eliminate high-density borders.
* **Grain & Aura Dualism:**
  * *Grain (Physical):* Organic pill shapes (seeds), tactile muted greens (Matcha Sage), grounded typography, subtle tactile directional gradients.
  * *Aura (Metaphysical/AI):* Glowing low-opacity radial shadows, ambient gradient backdrops, translucent glass shimmer panels, ambient slate blues (Slate Clarity).
* **Calm Contrast:** We never use pure `#000000` or `#FFFFFF` for primary text/background contrasts. Off-white Oat Milk and Deep Obsidian eliminate visual glare.
* **Semantic Honesty:** Every color that carries meaning — success, warning, error, info — is drawn from the *same* Grain/Aura palette family. Error states use a warm Terracotta instead of a generic alarming red.

---

## 2. Web Brand Architecture & Design Tokens (Tailwind)

Instead of Flutter's `ThemeData`, the web uses CSS variables combined with `next-themes` and a highly specific `tailwind.config.ts`.

### 2.1 Color Variables (CSS)

Defined in `app/globals.css`. These translate the exact hex values from Flutter into HSL.

**Crucial Distinction (v2.3):** We strictly divide tokens into **Fill-Only** (e.g., `--sage`, `--amber-fill`) and **Text-Safe** (e.g., `--primary`, `--amber-text`). *Fill-only tokens must NEVER be used for text (`text-sage`).*

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* --- Light Theme ("Oat Milk Canvas") --- */
    --background: 60 20% 98%; /* #FBFBF9 */
    --surface: 0 0% 100%; /* #FFFFFF */
    
    /* Fill-Only Tokens (NEVER USE FOR TEXT) */
    --sage: 153 16% 55%; /* #7A9D8C */
    --amber-fill: 36 61% 68%; /* #E2B97B */
    
    /* Base Colors */
    --slate: 210 29% 42%; /* #4B6B8A */
    --text-main: 180 8% 19%; /* #2C3333 */
    --text-muted: 220 9% 46%; /* #6B7280 */
    --border: 220 13% 91%; /* #E5E7EB */

    /* Semantic Roles (Text-Safe) */
    --primary: 141 20% 30%; /* #3E5D49 Deep Matcha */
    --primary-foreground: 0 0% 100%; 
    --primary-soft: 144 20% 42%; /* #558066 */
    
    --success: 141 20% 30%; 
    --success-foreground: 0 0% 100%;
    
    --warning: 36 61% 68%; /* Use bg-warning */
    --warning-text: 38 56% 31%; /* #7A5A22 - Use text-warning-text */
    
    --error: 12 53% 40%; /* #9C4530 Warm Terracotta */
    --error-foreground: 0 0% 100%;

    --info: 210 29% 42%; 
    --info-foreground: 0 0% 100%;

    --radius: 1rem; /* 16px */
  }

  .dark {
    /* --- Dark Theme ("Night Aura Canvas") --- */
    --background: 180 10% 8%; /* #121616 */
    --surface: 180 12% 12%; /* #1A2121 */
    --surface-hi: 180 10% 15%; /* #232B2B */
    
    /* Fill-Only Tokens */
    --sage: 141 24% 64%; /* #8EBB9F */
    --amber-fill: 36 71% 75%; /* #ECC894 */
    
    /* Base Colors */
    --slate: 208 30% 60%; /* #769CBE */
    --text-main: 180 14% 95%; /* #F0F4F4 */
    --text-muted: 180 6% 61%; /* #94A3A3 */
    --border: 0 0% 100% / 0.12; 

    /* Semantic Roles */
    --primary: 141 24% 64%; 
    --primary-foreground: 180 10% 8%;
    
    --success: 141 24% 64%; 
    --success-foreground: 180 10% 8%;
    
    --warning: 36 71% 75%;
    --warning-text: 36 71% 75%; /* Dark mode amber is text-safe natively */
    
    --error: 15 67% 68%; /* #E39478 */
    --error-foreground: 180 10% 8%;

    --info: 208 30% 60%;
    --info-foreground: 180 10% 8%;
  }
}
```

### 2.2 Tailwind Configuration (`tailwind.config.ts`)

```typescript
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        surface: "hsl(var(--surface))",
        "surface-hi": "hsl(var(--surface-hi))",
        text: {
          main: "hsl(var(--text-main))",
          muted: "hsl(var(--text-muted))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          soft: "hsl(var(--primary-soft))",
        },
        sage: "hsl(var(--sage))",
        slate: "hsl(var(--slate))",
        amber: "hsl(var(--amber-fill))",
        border: "hsl(var(--border))",
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          text: "hsl(var(--warning-text))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
      },
      borderRadius: {
        pill: "9999px",
        xxl: "2rem", // 32px
        xl: "1.5rem", // 24px
        lg: "var(--radius)", // 16px
        md: "calc(var(--radius) - 4px)", // 12px
        sm: "calc(var(--radius) - 8px)", // 8px
        xs: "0.25rem", // 4px
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
```

### 2.3 Responsive Breakpoints

Tailwind's defaults map cleanly to Annura's intent:
- `sm` (640px) - Compact/Mobile (Corresponds to Flutter's `compact` 600px). Use bottom navigation.
- `md` (768px) - Tablet (Corresponds to Flutter's `medium` 840px). Transition to navigation rail.
- `lg` (1024px) - Expanded/Desktop (Corresponds to Flutter's `expanded` 1200px).
- **Max Content Width**: We enforce readability by wrapping main content in `max-w-3xl` (768px). Cards must never stretch edge-to-edge on large desktop screens.

### 2.4 Gradients & Aura Shadows

Add these strictly-defined utilities to `app/globals.css`. Do not manually create random gradients in `className`.

```css
@layer utilities {
  /* Match MatchaSeedCTA from Flutter */
  .bg-gradient-matcha-cta {
    @apply bg-gradient-to-br from-[hsl(var(--primary-soft))] to-[hsl(var(--primary))] dark:from-[#9ECEAF] dark:to-[#7A9E8B];
  }
  
  /* Match MatchaSeedFill from Flutter */
  .bg-gradient-matcha-fill {
    @apply bg-gradient-to-br from-[#8BAE9D] to-[#6B8E7D] dark:from-[#9ECEAF] dark:to-[#7A9E8B];
  }
  
  /* Aura Shadows - Low opacity radial glows */
  .shadow-aura-sage {
    @apply shadow-[0_10px_30px_-5px_hsl(var(--sage)/0.15)] dark:shadow-[0_0_25px_0_hsl(var(--sage)/0.12)];
  }
  .shadow-aura-error {
    @apply shadow-[0_10px_30px_-5px_hsl(var(--error)/0.15)] dark:shadow-[0_0_25px_0_hsl(var(--error)/0.12)];
  }
  .shadow-aura-slate {
    @apply shadow-[0_10px_30px_-5px_hsl(var(--slate)/0.15)] dark:shadow-[0_0_25px_0_hsl(var(--slate)/0.12)];
  }
  .shadow-aura-amber {
    @apply shadow-[0_10px_30px_-5px_hsl(var(--warning)/0.15)] dark:shadow-[0_0_25px_0_hsl(var(--warning)/0.12)];
  }
}
```

---

## 3. Typography System

Annura uses **Plus Jakarta Sans** for headings and **Inter** for body text and data.

```tsx
// app/layout.tsx
import { Plus_Jakarta_Sans, Inter } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-sans bg-background text-text-main antialiased selection:bg-primary/20">
        {children}
      </body>
    </html>
  )
}
```
* **Tabular Numbers:** For metric values (calories, macros), use the Tailwind class `tabular-nums tracking-tight font-heading`.

---

## 4. Shadcn UI Component Mapping

When generating Shadcn components (`npx shadcn-ui@latest add [component]`), adjust their base styling:

| Flutter Widget | Shadcn Component | Key Tailwind Adjustments |
| --- | --- | --- |
| `AnnuraPillButton` | `Button` | `rounded-pill font-semibold px-6 py-6` |
| `AnnuraTextField` | `Input` | `bg-surface border-border focus-visible:ring-primary rounded-md` |
| `AnnuraAuraCard` | `Card` | `bg-surface border-border shadow-aura-sage rounded-lg` |
| `AnnuraChip` | `Badge` | `variant="outline" rounded-pill text-text-main` |
| `AnnuraSkeletonLoader` | `Skeleton` | `bg-border/40 dark:bg-surface-hi` |
| `AnnuraBottomSheet` | `Drawer` (Vaul) | Default styling matches well, remove drag handle if building custom. |
| `AnnuraDialog` | `Dialog` | `rounded-xl bg-surface` |

---

## 5. Reusable React Components (Annura Web)

We wrap base Shadcn components to expose an API surface identical to the Flutter app.

### 5.1 AnnuraButton (Pill Button)
The exact equivalent to Flutter's `AnnuraPillButton`. Never use raw `<button>`.

```tsx
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const annuraButtonVariants = cva(
  "rounded-pill px-6 py-6 font-semibold transition-all flex items-center justify-center gap-2",
  {
    variants: {
      variant: {
        default: "bg-gradient-matcha-cta text-white shadow-md hover:shadow-lg hover:opacity-90",
        secondary: "border-2 border-slate text-slate hover:bg-slate/10 bg-transparent",
        danger: "bg-error text-white hover:opacity-90",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

interface AnnuraButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof annuraButtonVariants> {
  isLoading?: boolean;
  icon?: React.ElementType; // Lucide icon component
}

export function AnnuraButton({ variant, isLoading = false, icon: Icon, className, children, ...props }: AnnuraButtonProps) {
  return (
    <Button className={cn(annuraButtonVariants({ variant, className }))} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : Icon && <Icon className="h-4 w-4" />}
      {children}
    </Button>
  )
}
```

### 5.2 AnnuraStatusBadge
The strict equivalent to Flutter's `AnnuraStatusBadge`. Enforces semantic colors and pairs icons with text.

```tsx
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type AnnuraStatusType = "success" | "warning" | "error" | "info" | "neutral";

export function AnnuraStatusBadge({ type, icon: Icon, label, className }: { type: AnnuraStatusType, icon: React.ElementType, label: string, className?: string }) {
  const typeStyles = {
    success: "bg-success/15 text-success",
    warning: "bg-warning/15 text-warning-text dark:text-warning",
    error: "bg-error/15 text-error",
    info: "bg-info/15 text-info",
    neutral: "bg-surface-hi text-text-muted",
  };

  return (
    <Badge variant="secondary" className={cn("rounded-pill px-3 py-1 gap-1.5 border-none font-medium text-xs", typeStyles[type], className)}>
      <Icon className="h-3.5 w-3.5" />
      {label}
    </Badge>
  )
}
```

### 5.3 AnnuraEmptyState
Mirrors Flutter's strict distinction between `.error` states and `.neutral` states.

```tsx
import { cn } from "@/lib/utils"
import { AlertCircle } from "lucide-react"

export function AnnuraEmptyState({ 
  icon: Icon, title, subtitle, variant = "neutral", glowType = "sage", action 
}: { 
  icon: React.ElementType, title: string, subtitle: string, variant?: "neutral" | "error", glowType?: "sage" | "slate" | "amber", action?: React.ReactNode 
}) {
  const isError = variant === "error";
  const resolvedGlow = isError ? "error" : glowType;
  const resolvedIconColor = isError ? "text-error" : `text-${glowType}`; // Note: safe text tokens needed for sage/amber

  return (
    <div className="flex flex-col items-center justify-center p-8 lg:p-16 text-center h-full">
      <div className={cn("relative p-6 rounded-full mb-6 bg-surface border border-border shadow-md", `shadow-aura-${resolvedGlow}`)}>
        {isError ? <AlertCircle className="w-8 h-8 text-error" /> : <Icon className={cn("w-8 h-8", resolvedIconColor === "text-sage" ? "text-primary" : resolvedIconColor === "text-amber" ? "text-warning-text" : resolvedIconColor)} />}
      </div>
      <h3 className="text-xl font-heading font-semibold text-text-main mb-2">{title}</h3>
      <p className="text-text-muted text-sm max-w-sm mb-6">{subtitle}</p>
      {action}
    </div>
  )
}
```

---

## 6. Detailed Layout, Spacing, Padding, Radius & Gradient Matrix

Tailwind utilities must strictly map to Annura's spacing logic:

| Spacing Name (Flutter) | Tailwind Class | Pixel Value | Usage |
| --- | --- | --- | --- |
| `AnnuraSpace.xxs` | `p-0.5` or `gap-0.5` | 2px | Micro adjustments, fine borders |
| `AnnuraSpace.xs` | `p-1` or `gap-1` | 4px | Tight internal padding, badge gaps |
| `AnnuraSpace.sm` | `p-2` or `gap-2` | 8px | Sub-element gap, tight chip padding |
| `AnnuraSpace.md` | `p-3` or `gap-3` | 12px | Standard inner card gap, icon gap |
| `AnnuraSpace.lg` | `p-4` or `gap-4` | 16px | Base layout unit, standard card padding |
| `AnnuraSpace.xl` | `p-6` or `gap-6` | 24px | Hero section gap, major card padding |
| `AnnuraSpace.xxl` | `p-8` or `gap-8` | 32px | Section divider gap, modal padding |
| `AnnuraSpace.huge`| `p-16` or `py-16`| 64px | Empty state vertical offsets |

---

## 7. Do's and Don'ts for Web UI Engineers

1. **DO NOT use raw HTML `<button>` or standard Shadcn `<Button>` without styling.** Always prefer `<AnnuraButton>` for CTAs.
2. **DO NOT use generic colors (`text-black`, `bg-red-500`).** Always use semantic tokens (`text-text-main`, `text-error`, `bg-warning`).
3. **DO implement hover states.** Unlike mobile, web has a mouse cursor. Use `hover:opacity-90` on gradient buttons and `hover:bg-slate/10` on outlined buttons to give immediate interaction feedback.
4. **DO flatten cards in long scroll lists.** If rendering 20 items in a list, remove the `shadow-aura-sage` to prevent GPU painting bottlenecks, replacing it with a simple border (mirroring Flutter's `isInScrollView` optimization).
5. **DO NOT rely solely on color to convey micro-nutrient alerts.** Always pair an amber status with an icon (enforced by `AnnuraStatusBadge`).

---

## 8. Accessibility Contrast Audit

This maps the exact WCAG 2.1 AAA/AA audits from Flutter to the web CSS variables.

| Variable Pair | Contrast Ratio | WCAG 2.1 Result | Notes |
| --- | --- | --- | --- |
| `text-text-main` on `bg-background` (Light) | 10.98:1 | **AAA Pass** | Primary reading contrast. |
| `text-text-main` on `bg-background` (Dark) | 15.65:1 | **AAA Pass** | Dark mode reading contrast. |
| `text-text-muted` on `bg-background` (Light) | 4.60:1 | **AA Pass** | Barely passes 4.5:1. Never drop opacity further. |
| `text-white` on `bg-gradient-matcha-cta` | 4.97:1 | **AA Pass** | The gradient text-safe fix from Flutter v2.0. |
| `text-primary` on `bg-surface` (Light) | 5.25:1 | **AA Pass** | The text-safe Matcha token. |
| **`text-sage` on `bg-surface` (Light)** | 2.99:1 | **FAILS AA** | **TRAP.** Sage is a fill token. Never use for text. |
| `text-warning-text` on `bg-surface` (Light) | 6.12:1 | **AA Pass** | The text-safe Amber token. |
| **`text-warning` on `bg-surface` (Light)** | 1.77:1 | **FAILS AA** | **TRAP.** Amber-fill is a fill token. Never use for text. |
| `text-error` on `bg-surface` | 6.13:1 | **AA Pass** | The text-safe Warm Terracotta token. |

---

## 9. Icon System (Lucide React)

To maintain parity with Flutter's `lucide_icons_flutter` migration:

* **DO:** Use `lucide-react`. The organic, rounded strokes of Lucide perfectly match Annura's aesthetic and replace the sharper Material Icons.
* **DON'T:** Do not mix icon families (e.g., FontAwesome next to Lucide) on the same screen.
* **DON'T:** Do not use icons smaller than `w-4 h-4` (16x16px) for anything paired with text (per §5.2).

---

## 10. Internationalization & RTL

Any icon that implies a reading order (like a "next" chevron or a "back" arrow) must mirror correctly under RTL.

```tsx
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function AnnuraDirectionalIcon({ icon: Icon, dir = "ltr", className }: { icon: React.ElementType, dir?: "ltr" | "rtl", className?: string }) {
  // If RTL, flip the icon horizontally using Tailwind scale-x-[-1]
  return <Icon className={cn(className, dir === "rtl" && "scale-x-[-1]")} />
}
```
* **DON'T:** Don't mirror purely decorative elements or non-directional icons (like a fork, spoon, or status icon).

---

## 11. Testing & Governance in Practice (ESLint Rules)

To prevent developers from accidentally writing `<p className="text-sage">` (which fails WCAG AA), add this custom ESLint rule to `.eslintrc.json`:

```json
{
  "rules": {
    "no-restricted-syntax": [
      "error",
      {
        "selector": "Literal[value=/text-sage/]",
        "message": "CRITICAL DESIGN BUG: `text-sage` fails WCAG 2.1 AA contrast requirements (2.99:1). Use `text-primary` for text instead. `sage` is a fill-only token."
      },
      {
        "selector": "Literal[value=/text-warning(?!-text)/]",
        "message": "CRITICAL DESIGN BUG: `text-warning` fails WCAG 2.1 AA contrast requirements (1.77:1) in light mode. Use `text-warning-text` for text instead. `warning` is a fill-only token."
      }
    ]
  }
}
```
This serves the exact same purpose as `scripts/check_text_safe_colors.py` in the Flutter codebase.

---

## 12. Image & Photo Treatment

Just as in the app, images must never feel unconsidered. 
* **DO:** Apply a subtle border (`border-border`) and a soft radius (`rounded-lg` or `rounded-xl`) to all user-uploaded food imagery.
* **DO:** Render a beautifully styled fallback (`AnnuraFoodImage` equivalent) when an image fails to load, never leaving a broken image icon.

```tsx
import { ImageOff } from "lucide-react"

export function AnnuraImageFallback({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center bg-background border border-border text-text-muted", className)}>
      <ImageOff className="w-6 h-6 mb-2 opacity-50" />
      <span className="text-xs font-medium uppercase tracking-wider">No Image</span>
    </div>
  )
}
```
