# Round 1: fix what hurts first, show work sooner

Both audits agree on three things: phones break on two case studies, your role isn't clear at first glance, and your work sits too far down. Round 1 covers those plus the hackathon callout. Everything else waits.

## 1. Hackathon callout (new)
- Small badge above your name: trophy icon, "Winner — Company Brain Buildathon, Finance & Ops (judged by Round Treasury)", linking to the FinanceFlow app in a new tab.

## 2. Fix phone reading (P0 in UX audit)
- Partner activation and Partner intelligence: page titles shrink to a normal phone size (about 32-36px), matching the calmer SEC page layout.
- Stop pages sliding sideways on phones: the query box scrolls inside itself; fix the small side-scroll on the home page.
- Check at 360, 390, 430 and 768px wide.

## 3. Clear role in the hero (P1 in both)
- Headline: "Operations, partnerships and commercial analysis".
- Supporting line: "I improve workflows, support partners and turn data into business decisions."
- Browser title and link preview updated to match.
- This replaces your earlier "no wording changes" rule — approving the plan confirms it.

## 4. Work before skills (P1 in both)
- Home order: Hero → Companies → Case Studies → Projects → Skills → Tools → Journey → Recommendations.
- "Explore my work" button already points to Case Studies, so it lands sooner.

## 5. Honest number strip (P0 in content audit, light version)
- Replace "4 case studies & projects" with the hackathon win.
- Keep the other three numbers; the explanation notes under them come in Round 2 once you tell me how each was measured.

## Round 2 (later)
- Under each number: measured or estimated, and what it measured.
- "At a glance" box on each case study: context, dates, status, your role, key decision, how it was checked.
- Partner intelligence: $14K and adoption wording matched to prototype or deployed status; "SQL" headings renamed "SOQL".
- CV button and "Discuss a role" email block at the end of every page.
- Merge Skills + Tools into one Capabilities block; Journey gets dates and one result per role; shorter footer.
- On-site summaries for Market Compass and Biometrio before visitors leave for the dashboard or deck.

## Outside this project
- The Market Compass dashboard itself clipping on phones lives in the Market Compass project, so it has to be fixed there separately.

## Technical details
- Badge and number strip in `HeroSection.tsx`; title/description in `index.html`.
- Section order in `src/pages/Index.tsx`.
- Mobile H1 sizes in `CaseStudy1.tsx` / `CaseStudy2.tsx` (text-3xl base, larger from md up); code block `overflow-x-auto` with `min-w-0` parents; find home overflow source with Playwright `scrollWidth` checks.
