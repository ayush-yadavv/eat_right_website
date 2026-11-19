<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Instructions

AI agent instructions for this repository (Cursor, Claude Code, and similar). `CLAUDE.md` redirects to this file.

---

## Commands & Repo Quirks

Run from `eat_right_website/`:

```bash
npm install
npm run dev      # next dev --webpack
npm run build    # next build --webpack
npm run lint     # bare eslint
```

- `npm run test` runs Vitest; validate with `npm run test`, `npm run lint`, and `npm run build`.
- Keep the `--webpack` flags in `package.json`; do not switch these scripts to Turbopack.
- This is Next.js 16: `src/proxy.ts` replaces `middleware.ts` and adds `Vary: Accept, Accept-Encoding`. Do not rename it. Read `node_modules/next/dist/docs/` before writing code.
- UI primitives use Base UI (`@base-ui/react`), not Radix. `components.json` uses shadcn style `base-nova`. Consult `.agents/skills/shadcn/` and `.agents/skills/migrate-radix-to-base/` before adding or migrating components.
- Marketing copy and FAQs live in `src/data/site.ts`. Legal pages render `public/documents/*.md` through `src/app/legal/[slug]/page.tsx`.
- This is a static marketing site with no database. Runtime integrations are Resend (`src/lib/resend.ts`, waitlist email) and an optional Google Analytics tag; GA only loads when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set and the visitor granted consent (`localStorage.analytics_consent === 'granted'`, set by `src/components/consent-banner.tsx`).
- Campaign attribution lives in `src/lib/attribution.ts` and `src/components/campaign-attribution.tsx`. It is **aggregate-only**: UTM params are stored in `localStorage.campaign_attribution` for 30 days (only after analytics consent) and copied onto Play Store links as the install `referrer`; App Store links get `pt`/`ct`. Click IDs and web-to-install tokens are deliberately not supported — no per-user identifier is collected anywhere on the site. The Android app reads the same campaign data from App Links (`/app/...`) and the Play install referrer.
- `public/.well-known/apple-app-site-association` must contain the real Apple Team ID before universal links work; `REPLACE_WITH_TEAM_ID` is a placeholder.
- The waitlist endpoint (`src/app/api/waitlist/route.ts`) returns 503 unless `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `WAITLIST_RECIPIENT_EMAIL` are set.

---

## Engineering Philosophy

### Core Principles

- **YAGNI with seams**: Don't build what you don't need, but design so it's easy to extend later. Leave doors unlocked, don't build the rooms.

- **DRY, pragmatically**: Duplication is cheaper than the wrong abstraction. Extract only when the pattern is proven (rule of three) and the abstraction is obvious.

- **SOLID, OOPs, Modularization**: Write clean code to reduce future hassle. Keep modules focused.

- **Unix Philosophy**: Small, focused modules that compose well.

- **Convention over Configuration**: Sensible defaults. Minimize ceremony.

- **Domain-Driven Design**: Code should speak the language of the business. Model explicitly.

### Security (Top Priority)

- **OWASP Top 10**: Always guard against SQL injection, XSS, CSRF, broken auth, security misconfigs
- **Parameterized queries only**: Never concatenate user input into SQL/commands. Use sqlc.
- **Validate at boundaries**: Sanitize all external input (user input, APIs, webhooks)
- **Least privilege**: Minimal permissions, minimal exposure
- **No secrets in code**: Use environment variables. Never log secrets.
- **Remove obsolete code**: Dead code is attack surface. Delete it.

### Architecture
- **Layered Architecture**: Router → Service → Repository → Firestore.

### Testing Philosophy

- **Integration tests first**: Test real behavior with real dependencies
- **Minimal mocking**: Mocks hide bugs. Use the real thing where possible.
- **Test behavior, not implementation**: Tests should survive refactors
- **Critical paths over coverage %**: Focus on what matters, not vanity metrics

### Guidelines

- Prefer simple code that's easy to change over clever code that's "flexible"
- Three similar lines > one premature abstraction
- Design for deletion, not extension
- When in doubt, inline it

---

## Additional Instruction Files

AI agents MUST read and adhere to:

- `./DESIGN.md`
- `../docs/ARCHITECTURE.md` (system context)
- `../brand/BRAND_GUIDELINES.md`