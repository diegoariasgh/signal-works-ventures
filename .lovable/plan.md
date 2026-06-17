## Goal

Add a new "Featured Projects" section to the landing page that showcases two flagship Signalworks projects, with a link out to each.

## Section design

Slots in between **Services** and **Testimonials** so the narrative reads: what we do → what we've built → what people say. Same editorial language as the rest of the refreshed page (eyebrow label, oversized headline, hairline-divided rows).

**Section: Featured Projects**
- Eyebrow: `Featured projects —`
- Headline: `Research & tools shaping African venture` (with `African venture` underline-accented)
- Two large editorial cards stacked on mobile, side-by-side on desktop. Each card is a clickable link that opens the project in a new tab.

**Card 1 — Rethinking Africa VC**
- Tag row: `Whitepaper · 2025` · `Featured in Oxford Africa Venture Finance Program`
- Title: `Rethinking Africa VC`
- Subtitle: `Collaborative research on adapting the venture capital model for Africa.`
- Short blurb: A whitepaper synthesizing insights from 15 investment professionals, a survey of 50+ investors deploying across Africa, and in-depth interviews with operators running alternative fund models (evergreen funds, venture studios, ESO-linked funds, CVCs).
- Stats strip: `15 professionals` · `50+ investors surveyed` · `1.5K+ visits / 90 days`
- CTA: `Read the whitepaper ↗` → https://rethinkingafricavc.lovable.app/

**Card 2 — Africa Venture Insights Calculator**
- Tag row: `Interactive tool · 2025` · `Powered by Africa: The Big Deal database`
- Title: `Africa Venture Insights`
- Subtitle: `Interactive benchmarking tool for African founders and investors.`
- Short blurb: Benchmark planned rounds against real African funding data, compare valuations and round sizes by stage, explore funding trends by country and sector, and understand what it takes to return a VC fund.
- Stats strip: `4,300+ funding rounds` · `2019–2025` · `Country · Sector · Stage filters`
- CTA: `Open the calculator ↗` → https://insights.signalworks.xyz/

## Visual treatment

- Flat cards with hairline border (no shadow), navy hover state, electric-blue accent rule on hover, arrow icon translates on hover — consistent with the new Services row pattern.
- Numeric eyebrow (01 / 02) on each card to echo the Services and About numbering rhythm.
- No screenshots in this pass — keeps the section fast and on-brand with the editorial direction. Can add cropped preview imagery later if desired.

## Technical notes

- New file: `src/components/FeaturedProjects.tsx`.
- Mount in `src/pages/Index.tsx` between `<Services />` and `<Testimonials />`.
- Add `featured` to the active-section hook + header nav links (and mobile menu) so it participates in scroll spy.
- Section id: `work`. Nav label: `Work`.
- Reuse existing tokens / utility classes (`.eyebrow`, `.display-lg`, `.editorial-underline`, `signal-transition`). No new colors, no new dependencies.
- Links open in a new tab with `target="_blank" rel="noopener noreferrer"`.

## Out of scope

- No PDF embedding, no screenshots, no new color/typography tokens, no copy changes elsewhere, no backend.