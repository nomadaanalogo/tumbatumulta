# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

TumbaTuMulta is a static content/blog site (Astro + TypeScript + Tailwind CSS) that helps people in
Colombia understand their options before paying a traffic fine ("multa de tránsito" / "comparendo"):
prescripción, caducidad, defective fotomulta notifications, derecho de petición, tutela, cobro coactivo.

It is **not** an app: no backend, no database, no auth, no own AI/chat, no payments. Monetization is
Google AdSense. For personalized case analysis, the site sends the user to `/analiza-tu-multa/`, which
gives them a ready-to-copy prompt (`src/data/ai-prompt.ts`) to paste into an external AI assistant
(ChatGPT, Gemini, Claude) along with their own case details or a SIMIT screenshot.

**One product rule that overrides general "help people not pay" framing**: fines for alcoholemia/DUI are
explicitly called out (homepage, `/analiza-tu-multa/`, FAQ) as the one category this site does not try to
help someone avoid — those rely on direct technical evidence and carry consequences beyond an
administrative fine, so the honest answer there is "talk to a lawyer," not "look for a procedural defect."
Preserve that caveat if you touch those pages.

## Commands

- `npm run dev` — dev server at `localhost:4321`
- `npm run build` — production build to `./dist/` (also runs content sync + generates `sitemap-index.xml`)
- `npm run preview` — serve the production build locally
- `npx astro check` — TypeScript/Astro diagnostics (no separate test suite exists)

There is no test suite. Verifying a change means: `npm run build` succeeds, `npx astro check` has 0
errors, and (for content/layout changes) spot-checking the rendered HTML in `dist/`.

## Architecture

- **Content collection**: articles live as Markdown in `src/content/blog/*.md`, typed by the
  `blog` collection in `src/content.config.ts` (glob loader, Zod schema: `title`, `description`,
  `category` — one of the four fixed strings in `src/consts.ts` `CATEGORIES` — `order`, `updatedDate`).
  `src/pages/blog/[slug].astro` uses `getStaticPaths()` over `getCollection('blog')` and renders each
  entry through `ArticleLayout`. `src/pages/blog/index.astro` groups posts by category for the index.
- **Layouts**: `BaseLayout.astro` is the HTML shell (meta/OG tags, canonical URL, optional JSON-LD via a
  `jsonLd` prop, optional AdSense loader script). `ArticleLayout.astro` wraps it for blog posts: adds the
  `Article` JSON-LD, breadcrumb, prose styling (`prose dark:prose-invert`), an `<AdSlot>` before and after
  the content, and an `<AnalyzeCTA>` pointing at `/analiza-tu-multa/`.
- **AdSlot component** (`src/components/AdSlot.astro`): renders nothing at all — no placeholder box,
  no broken markup — when `PUBLIC_ADSENSE_CLIENT_ID` is unset. This is intentional so the site looks
  complete before AdSense approval. Its prop is named `adSlot`, not `slot`, because `slot` is an Astro
  reserved attribute for named-slot content projection and collides with it.
- **Dark mode**: no toggle, no JS — relies on Tailwind v4's default `prefers-color-scheme` media-query
  `dark:` variant plus the typography plugin's `dark:prose-invert`. Don't introduce a `.dark` class
  strategy without also wiring up a toggle; right now `dark:` utilities are the only mechanism in use.
- **The AI prompt** (`src/data/ai-prompt.ts`, `AI_PROMPT` constant): a condensed, human-reviewed distillation
  of the legal knowledge base, not the raw document. It's rendered read-only inside `CopyBox.astro`
  (a `<pre>` block with a copy-to-clipboard button, vanilla JS, no framework). If the underlying law
  changes, update this constant *and* the relevant article(s) — they currently repeat the same figures
  (1 year caducidad / art. 161 CNTT, 3 years prescripción / art. 159 CNTT) and should stay consistent.
- **SEO**: `@astrojs/sitemap` integration (auto `sitemap-index.xml`), `public/robots.txt` allowing
  everything, per-page canonical + OG/Twitter meta in `BaseLayout`, `Article` JSON-LD on posts,
  `FAQPage` JSON-LD on `/faq/`. `astro.config.mjs` sets `site` (placeholder domain — update before
  deploying) and `trailingSlash: 'always'`; internal links are written with trailing slashes to match.

## Content source and editorial discipline

`docs/legal-knowledge-base.md` is the original research document the articles are derived from. It was
written as internal/technical material (confidence-level annotations, LLM system-prompt instructions) —
it is **not** meant to be copied into the public site verbatim, and the published articles already
rewrite it into accessible Colombian Spanish. When adding or editing legal content (articles, the AI
prompt, or the knowledge-base doc itself), keep the same discipline the source document uses even though
the public-facing wording is different:

- **Never invent article numbers, resolution numbers, sentencia citations, or percentages.** Where the
  source document flags a figure as unverified or inconsistent between sources (e.g. art. 136 CNTT
  discount percentages, SAST certification resolution numbers, exact fotomulta signage distances), the
  public article should hedge in natural language ("esto puede variar según el organismo de tránsito,
  confírmalo en tu caso") rather than state it as settled fact.
- **Prescripción (3 years, art. 159 CNTT, affects the authority's power to collect) vs. caducidad (1 year,
  art. 161 CNTT, affects the authority's power to sanction)** is the single most load-bearing distinction
  across the site (dedicated article, the AI prompt, and referenced from several other articles) — don't
  conflate them.
- Cite sources the way the existing articles do (naming the law/article/sentencia inline in prose), not
  with the source document's `**Fuentes**: <url list>` block style.

## Deploy

Static output, no special config needed for Vercel/Netlify. Before going live: set the real domain in
`astro.config.mjs` (`site`), set `PUBLIC_ADSENSE_CLIENT_ID` in the deployment's env vars once AdSense is
approved, and replace the placeholder comment in `public/ads.txt` with the real line Google provides.
