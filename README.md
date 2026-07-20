# AI Music Generator

Front-end funnel for the AI Music Generator (PDFLeader), built with Vite + React
+ TypeScript. Light, productivity-app aesthetic (Montserrat, blue primary).

**Live:** https://tamaravitvitska-uni.github.io/ai-music-generator/

## Flow

Landing → Create → Set length → Generate → Result (gated) → Sign up → Payment →
Thank-you → Dashboard.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Script            | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the Vite dev server                     |
| `npm run build`   | Type-check (`tsc -b`) and build to `dist/`    |
| `npm run preview` | Preview the production build locally          |
| `npm run lint`    | Run ESLint                                     |

## Project structure

```
src/
  main.tsx               App entry (error boundary + root render)
  App.tsx                Funnel flow orchestrator (stage machine)
  icons.tsx              Inline SVG icons
  model/content.ts       Copy + demo data (songs, plans, styles, FAQ, …)
  styles/                tokens.css (brand tokens) + global.css
  lib/cn.ts              className helper
  components/
    ui/                  Local UI primitives (Button, Input, Switch, Tabs, …)
    *.tsx                Landing sections + modals (Header, Hero, …)
  create/                Create → Set length → Generate → Result steps
  payment/               PaymentScreen, ThankYouScreen
  dashboard/             Dashboard (post-payment workspace)
```

The UI primitives under `src/components/ui/` are lightweight, self-contained
replacements for the internal design system so the project builds without any
private packages, while preserving the same look and component APIs.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci`
and `npm run build`, then publishes `dist/` to GitHub Pages via
`actions/upload-pages-artifact` + `actions/deploy-pages`. The build output is
never committed — `main` contains source only.
