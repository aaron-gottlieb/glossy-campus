This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Glossy Campus

A standalone Next.js application for Glossy Campus — the creator network connecting beauty and wellness brands with vetted college creators across 70+ universities.

See the full README below.

---

## What This Is

Glossy Campus is a creator network initiative from [Glossy](https://www.glossy.co), published by Digiday Media. Built as an independent application, separate from glossy.co (WordPress/WP VIP).

- 250+ vetted college creators
- 70+ universities nationwide
- 25M+ combined followers, 7.9% avg engagement rate

## Stack

- Next.js 14 App Router + TypeScript + Tailwind CSS
- Static generation (all pages pre-rendered)
- TypeScript data files abstracted via `lib/data.ts`
- GA4 analytics via env var
- Env-configurable form endpoint

## Requirements

- Node.js 18+

## Installation

```bash
npm install
cp .env.example .env.local
```

## Local Development

```bash
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

## How to Update Stats

Edit `data/stats.ts` — one file, one number. Components read through `lib/data.ts`.

## How to Add a University

Add an entry to `data/universities.ts` with a unique `slug`. The university automatically appears at `/network` and gets a page at `/network/[slug]`.

## How to Add a Campaign

Add an entry to `data/campaigns.ts`. Campaign appears at `/campaigns` and gets a page at `/campaigns/[slug]`.

## How to Update Stats, Nav, or CTAs

- Stats: `data/stats.ts`
- Nav / footer / social links: `content/site.ts`
- FAQs: `content/faqs.ts`

## Environment Variables

See `.env.example`. Key vars:
- `NEXT_PUBLIC_GA4_MEASUREMENT_ID` — GA4 ID
- `NEXT_PUBLIC_FORM_ENDPOINT` — Creator application form endpoint
- `NEXT_PUBLIC_SITE_URL` — Canonical base URL

## Documentation

- [docs/current-site-audit.md](docs/current-site-audit.md) — Audit of existing campus pages
- [docs/forms.md](docs/forms.md) — Form wiring and production options
- [docs/analytics.md](docs/analytics.md) — Analytics wiring guide
- [docs/data-architecture.md](docs/data-architecture.md) — Data layer and Supabase migration path

## What Is Not Implemented Yet

- Cloudflare Pages configuration (structure is compatible)
- CMS / admin panel (Supabase migration path in docs)
- Creator public profiles directory
- Full country dropdown on apply form (US states for MVP)
- Brand logo image files (text fallbacks in place)
- OG image at /public/og-default.jpg
- Video embed asset URL
- DNS / production domain setup
