# Tighter hero, impact ticker, generalist messaging

## What changes
1. **Less empty space in the hero**
   - Shorter hero height (no more near-full-screen block); smaller photo on desktop so the text and photo sit closer together.
   - Less padding at the top and bottom, so the next section shows above the fold on a laptop.

2. **Impact metric ticker in the hero**
   - A slim band of numbers below the buttons, using only figures already on the site:
     - 7-8 hrs/week of manual work removed
     - 85% faster partner activation
     - 95% fewer data errors
     - 4 case studies and projects published (SEC filings, partner activation, Crossbeam AI agent, Market Compass)
     - Engineering to GTM: Software Systems Engineer to Strategy and Operations
   - Static row on desktop; gently scrolling strip on mobile (stops if the visitor prefers reduced motion). Numbers in Gold Leaf on a Prussian Blue band for contrast.

3. **"Explore my work" divider**
   - A clear divider at the bottom of the hero with an "Explore my work" label and a down arrow, which smoothly scrolls to the Case Studies section.

4. **Generalist messaging**
   - Headline: "Operator across strategy, operations and GTM in high-growth scale-ups"
   - Short intro: engineer by training who turns messy problems into working systems — from market-entry models and partner programmes to automation and AI agents.
   - Keeps "Get in Touch" and LinkedIn buttons as they are.

## Not in this round
- CV download button (skipped, most visitors already have your CV).

## Technical details
- Edit `HeroSection.tsx` only (plus a small marquee keyframe in `index.css`). Divider link targets `/#case-studies` so `RouteScroll` handles the header offset.
- Verify at 1280px and 375px that the ticker and divider are visible without scrolling.
