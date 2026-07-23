# Artud Midas — Frontend

Progressive Web App client for the Artud Midas platform, built with Next.js App Router.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript without emitting files |

## Project Structure

```
src/
├── app/              # Routes, layouts, API routes, manifest
├── surfaces/         # Three-surface contracts (operations / portal / consumer)
├── components/
│   ├── layout/       # Shell and page structure
│   ├── pwa/          # Service worker & install UI (Phase 2)
│   └── ui/           # Reusable UI primitives
├── config/           # App-wide configuration
├── hooks/            # Custom React hooks
├── lib/              # Utilities and env helpers
└── types/            # Shared TypeScript types
```

Product architecture (Operations · Portal · Consumer) is documented in [`ARCHITECTURE.md`](./ARCHITECTURE.md).

## PWA Status

Phase 1 provides PWA-ready configuration only:

- Web App Manifest via `src/app/manifest.ts`
- PWA metadata and viewport in root layout
- Icon directory at `public/icons/` (assets pending)
- Service worker setup deferred to Phase 2

## Environment Variables

See `.env.example` for required variables.
