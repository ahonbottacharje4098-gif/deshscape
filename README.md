# Deshscape

Deshscape is a Bangladesh-focused travel discovery website for exploring destinations, reading editorial stories, viewing an interactive map, and saving places for later.

## Technology

- Next.js 15 App Router and React 19
- TypeScript
- Leaflet and React Leaflet for the interactive map
- CSS with a responsive desktop/mobile layout
- English and Bengali interface support

## Getting started

Use Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values. Never commit `.env.local` or server-side secrets.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Public Cloudflare Turnstile site key used by the contact form |
| `TURNSTILE_SECRET_KEY` | Server-only Turnstile verification secret |
| `TURNSTILE_ALLOWED_HOSTNAMES` | Optional comma-separated hostnames accepted by server-side verification; include a preview hostname only when needed |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service identifier |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template identifier |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `EMAILJS_PRIVATE_KEY` | Server-only EmailJS private key |

The contact form requires valid Turnstile and EmailJS configuration. Do not expose either server-only secret with a `NEXT_PUBLIC_` prefix.

## Project structure

- `src/app/` — routes, layouts, API route, sitemap and robots metadata
- `src/components/` — reusable UI, language, map, gallery and saved-place components
- `src/data/` — destination catalogue and Journal story content
- `src/i18n/` — English/Bengali translation dictionary
- `src/lib/` — shared helpers such as saved-place storage and image URL handling

Saved destinations are stored in the visitor's browser using localStorage; they are not synced to an account.

## Checks

```bash
npm run build
npm audit --audit-level=moderate
```

There is not yet a dedicated automated UI test suite. Verify key journeys on mobile and desktop before a production release: language switching, destination search and filters, map selection, saving places, trip-plan copying, Journal navigation, gallery controls, and the contact form.

## Branch and release workflow

Development work is kept on `feature/bangla-language`. Preview deployments are for review only. Merge to `main` and production release require explicit project-owner approval.
