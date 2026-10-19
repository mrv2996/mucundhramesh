# Tighter spacing site-wide, impact ticker, Explore divider

## What changes
1. **Less empty space on every page**
   - Shorter hero (no more near-full-screen block); smaller photo on desktop so it sits closer to the text.
   - One shared, smaller gap between sections and under section titles, used on the home page, the three case-study pages and the Market Compass page, so spacing matches everywhere.
   - On a laptop, the start of the next section shows without scrolling.

2. **Impact metric ticker in the hero**
   - A slim band below the buttons, using only figures already on the site:
     - 7-8 hrs/week of manual work removed
     - 85% faster partner activation
     - 95% fewer data errors
     - 4 case studies and projects published
   - Static row on desktop; gently scrolling strip on mobile (stops for visitors who prefer reduced motion). Numbers in Gold Leaf on a Prussian Blue band for contrast.

3. **"Explore my work" divider**
   - A clear divider at the bottom of the hero with an "Explore my work" label and down arrow that smoothly scrolls to Case Studies.

## Not in this round
- CV download button.
- Any wording changes to headline, intro or elsewhere.

## Technical details
- Reduce the shared section spacing token (`py-section` / `--section-padding`, heading margins `--space-2xl`) in `index.css`/`tailwind.config.ts`, then align hard-coded paddings in `CaseStudy1/2`, `SecFilingsCaseStudy`, `MarketCompass`, `CaseStudies` to the same tokens.
- Ticker and divider live in `HeroSection.tsx`; divider links to `/#case-studies` so `RouteScroll` applies the header offset.
- Verify each page at 1280px and 375px.
