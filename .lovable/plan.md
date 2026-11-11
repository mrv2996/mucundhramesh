# UX audit: more clicks and deeper scroll for recruiters and hiring managers

## What a recruiter sees today (home page)
1. Hero: headline, three buttons of equal weight (Explore my work, View CV, Get in Touch), three green impact tiles. Strong, but the tiles are not clickable, so the proof they promise leads nowhere.
2. "Working with me" quotes sit right under the hero, before any work. Social proof before the work it vouches for interrupts the path to the case studies.
3. Selected work: three cards with the same look. Nothing says how long a read is, or which is the strongest one, so many visitors stop here.
4. Journey: roles all closed with a "+". Closed accordions hide most of the story, and few people open them.
5. "Discuss a role" contact block, then footer.

Case-study pages: the summary and "Key impact metric" are at the top, but the only way forward at the end is the contact block. Readers who finish one case have no "next case" step in the main column on phones.

## Proposed changes (layout only, your wording stays as is)
1. **One clear main button in the hero.** "Explore my work" stays solid; View CV and Get in Touch become quieter. This gives one obvious first click.
2. **Impact tiles link to their proof.** Each tile opens the case study behind it (7-8 hrs/week to Partner Activation, $14K/year to AI Partner Intelligence, 85% faster to Partner Activation).
3. **Move "Working with me" below Selected work.** New home order: Hero, Selected work, Working with me, Journey, Discuss a role.
4. **Reading-time label on each work card** (for example "3 min read"), worked out from each page's length, plus a small "Start here" pill on the first card.
5. **Journey: open the latest role (Proxymity) by default.** The rest stay closed.
6. **"Next case study" link at the end of each case**, above the contact block, on every screen size. It is one line, not a card grid, so the page stays uncluttered.
7. **Sticky slim "View CV" button on phones** that appears after the hero scrolls away and hides above the contact block.
8. **Measure it.** Track clicks on the hero buttons, impact tiles, work cards, Next case, and CV/Email/LinkedIn, so we can see what actually lifts clicks after publishing.

## Questions to settle while building
- Points 3 and 7 change things you set up earlier. I'll do them unless you'd rather skip them.
- The "Start here" pill goes on AI Partner Intelligence, your current first card.

## Technical details
- HeroSection: primary stays default variant; CV and Email become `ghost`/`outline` secondary. Metrics get an optional `to` and render as Link with focus ring.
- Index.tsx reorder. ExperienceSection Accordion gets `defaultValue` set to the first role.
- WorkItem gets optional `readMinutes`, set by hand per case; WorkCard renders it next to the CTA.
- CaseStudyLayout: "Next case study" link using `publishedStudies` order (wraps around), placed before ContactCTA.
- Mobile CV bar: IntersectionObserver on hero and ContactCTA, `md:hidden`, only when CV_URL is set.
- Custom events through `window.__lovableEvents` (project.cta_click with a `target` property), registered in .lovable/events.json.
- Check at 390px and 1280px with Playwright; no wording changes.
