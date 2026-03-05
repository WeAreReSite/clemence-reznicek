# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Clemence Reznicek, a holistic wellness practitioner in Jonzac, France. Built with Next.js 15 (App Router), React 19, Tailwind CSS v4, and TypeScript. The site is in French.

Production domain: `clemence-reznicek.fr`

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **E2E tests:** `npm run test` (Playwright, builds then runs against localhost:3099)
- **E2E tests with UI:** `npm run test:ui`

## Architecture

### Content/Code Separation

All copywriting, pricing, testimonials, and business data live in **`content/*.ts`** files as typed TypeScript objects. Components import from `content/` — never hardcode French text in components. Types for all content are defined in `src/types/content.ts`.

Key content files: `site.ts` (business config, nav, footer), `homepage.ts` (all homepage sections), `metadata.ts` (SEO per page), `massages.ts`, `soins.ts`, `rmd.ts`, `about.ts`, `contact.ts`, `testimonials.ts`, `legal.ts`.

### Component Organization

- **`src/components/ui/`** — Atomic UI primitives (Button, Card, Input, Badge, Section, etc.) built with `class-variance-authority` for variants. Barrel-exported from `index.ts`.
- **`src/components/sections/`** — Page-level section components (HeroSection, Accordion, ContactForm, etc.). Barrel-exported from `index.ts`.
- **`src/components/layout/`** — Layout components (Footer).

### Pages (App Router)

Routes: `/` (home), `/massages`, `/soins`, `/rmd`, `/a-propos`, `/temoignages`, `/contact`, `/mentions-legales`. Each page composes section components and reads from `content/`.

### Styling

- **Tailwind CSS v4** with `@tailwindcss/postcss` (not the old config-based setup). Design tokens defined via `@theme` in `src/app/globals.css`.
- Color palette: primary (Rose Poudre), secondary (Dore/gold), indigo (Indigo Sacre), plum (Prune Mystique), neutral (Sable Chaud). Background tokens: `bg-cream`, `bg-rose-tint`, `bg-warm-white`, `bg-indigo-deep`.
- Fluid typography using `clamp()` via `--font-size-*` tokens.
- Fonts: Cormorant Garamond (headings, `--font-heading`), Raleway (body, `--font-body`). Loaded via `next/font/google` in `src/lib/fonts.ts`.

### Animations

GSAP with ScrollTrigger for scroll-driven animations. Use the `useGsap` hook from `src/lib/gsap-setup.ts` which handles scoped context, cleanup, and reduced-motion. Brand easings: `EASE_WELLNESS_FLOW`, `EASE_BREATHE`, `EASE_SETTLE`.

### Key Libraries

- `class-variance-authority` + `clsx` + `tailwind-merge` — variant-driven component styling (`cn()` helper in `src/lib/utils.ts`)
- `react-hook-form` + `zod` — form handling and validation (contact form)
- `@phosphor-icons/react` — icon library
- `gsap` — animations

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

### Design Spec

The full design specification is in `docs/design-spec.json`. QA report at `docs/qa-report.md`.
