# Homepage layout rebuild (from layout brief)

## 0. Roll back the audit round first
Put the site back to how it was before the last round of audit changes:
- Hero wording, buttons and number strip go back to the earlier version (hackathon badge removed, "4 case studies & projects" number restored).
- Home section order, navigation labels, the "Discuss a role" block, SOQL renames and the $14K wording go back to the earlier version.
- This restored version then becomes the "existing content" the brief says to keep word for word.

Quickest route: you can also click restore on the message before the audit round in History; otherwise I restore those files by hand when building.

## 1. Home page: only six sections
Hero (with numbers) → Companies strip → Selected work → Journey → Recommendation → Small footer.
Removed from home (kept in the project, not deleted): Case Studies grid, Projects grid, Skills, scrolling Tools, large contact block.

## 2. Navigation and hero
- Navigation: Home, Work, Journey (Journey scrolls to the section). LinkedIn stays.
- Hero: your existing headline and introduction on the left, portrait on the right, tighter spacing (no full-screen height).
- Buttons in the reference order: Selected work, View CV, Email, using your current wording and links.
- Numbers in one compact row under the introduction, exact current values; count up once, static if the visitor prefers reduced motion.
- Companies strip: your real logos in grayscale, tight spacing, so "Selected work" and its card titles show without scrolling at 1280x800 and 1440x900.

## 3. Selected work (3 equal cards + "All work")
- Partner activation (SWEEP), SEC filings onboarding (Proxymity), Biometrio growth strategy (ESCP project).
- Each card: top visual/number area, organisation, existing title and description, link to the full case.
- "All work" goes to a new /work page.

## 4. /work page
- All case studies and projects (Market Compass, Partner intelligence, AP agent, etc.) with existing text and links. All current case-study addresses keep working.

## 5. Journey: 70% experience / 30% education
- Heading plus "View CV".
- Left: Proxymity, SWEEP, Transdev, L'Oreal, General Electric. Thin dividers, all collapsed, "+" on the right; click or Enter/Space opens one at a time and shows the existing description and any case-study link. GE looks the same as the others (no special engineering box).
- Right: quiet Education panel, ESCP then SRM, using your existing details.
- About 650px wide and below: experience first, then education.

## 6. Recommendation and footer
- One compact quote with name, role, organisation (existing text).
- Footer: name/location, Email, LinkedIn, CV.

## 7. Checks
- Desktop 1280x800 / 1440x900 above-the-fold check, tablet, phone (no sideways scroll, no clipped dates).
- Wording compared with the restored version: nothing rewritten, no sample text from the reference.
- All links, keyboard focus and accordion behaviour tested.

## Needs from you
- **CV PDF:** there isn't one in the project or your Files yet. Until you upload it, I'll hide "View CV" instead of linking to nothing.
- If Biometrio has no full page, its card links to its existing project entry on /work.

## Technical details
- Restore HeroSection, Navigation, Index, Footer, CaseStudiesSection, case-study pages and index.html metadata to their pre-audit contents.
- New: `SelectedWorkSection`, `JourneySection` (accordion on shadcn Accordion, type="single" collapsible), `WorkPage` at /work, compact `RecommendationSection` variant, slim footer.
- `/#case-studies` and `/#projects` redirect to /work; `/#journey` targets Journey via RouteScroll.
- Grid: `grid-template-columns: minmax(0,7fr) minmax(0,3fr)`, gap ~36px, `items-start`.
- Counter uses IntersectionObserver + `prefers-reduced-motion`; final values rendered in the markup.
