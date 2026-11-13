# Make every page work on phones, tablets and desktops

I checked all six pages (Home, Work, three case studies, Market Compass) at 320, 390, 768, 1024, 1440 and 1920px wide. Nothing scrolls sideways, and the layout holds from 390px up. The problems show up on the smallest phones and in a few small details.

## What's broken
1. **Top menu on small phones (320px, every page):** the LinkedIn icon is pushed off the right edge and can't be tapped.
2. **Impact tiles on small phones (Home):** "7-8 hrs/week" and "$14K/year" are cut off inside their tiles.
3. **"CV" link in the footer (every page):** it's only 17px wide, which is too small to tap reliably.
4. **Tiny text:** the "Open to opportunities" pill (Home) and the company pill and step numbers on the SEC filings page are 12px, which is hard to read on phones.

## Fixes
1. Top menu: below about 360px, tighten the gaps and shrink the name slightly so Home, Work, Email and LinkedIn all fit and stay tappable (44px).
2. Impact tiles: on narrow phones, scale the figures down smoothly to fit each tile, and let the label wrap. The figures and wording stay the same.
3. Footer CV link: give it a tap area of at least 44×44px. It looks the same.
4. Raise those pills and step numbers to at least 14px.
5. Re-check every page at all six widths, plus 400% zoom, and the widths in between.

The design, colours and wording stay exactly as they are.

## Technical details
- Navigation.tsx: `gap-0.5` + `text-sm` name below `min-[360px]`; keep `h-11 w-11` icon targets.
- HeroSection.tsx metric value: `text-[clamp(1rem,5vw,1.375rem)]`, `min-w-0`, `break-words`; tile padding reduced below `sm`.
- Footer.tsx: CV link `inline-flex min-h-11 min-w-11 items-center justify-center`.
- `text-xs` → `text-sm` on the hero status pill, the CaseStudyLayout company pill and the step numbers.
- The carousel cards running past the edge in "Working with me" are clipped on purpose (peek effect), not a bug.
