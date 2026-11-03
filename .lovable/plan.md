# Audit priorities + hackathon callout

## 1. Hackathon win in the hero (new)
- A small badge above your name: trophy icon, "Winner — Company Brain Buildathon, Finance & Ops track (judged by Round Treasury)", linking to the FinanceFlow app (opens in a new tab).
- Gold Leaf accent on Prussian Blue so it reads as an achievement without competing with your name.

## 2. P0 — Make impact claims trustworthy
- Replace "4 case studies & projects" in the hero number strip with the hackathon win.
- Under each remaining number (7-8 hrs/week, 85% faster, 95% fewer errors) add a short note: what was measured and whether it is measured or estimated. Make the wording match the case-study page exactly (e.g. "85% faster partner data processing" if that is the real scope).
- Partner intelligence: change "$14K/year savings" and "Low → High adoption" to match the true status (prototype vs deployed). Same wording on the card and its page.
- Rename "SQL logic" headings to "SOQL" where the query is Salesforce.
- SEC card: relabel the End-to-end / Python / Validation panel as "What it does", not results.

## 3. P1 — Positioning (hero wording)
- Headline: "Operations, partnerships and commercial analysis".
- Supporting line: "I improve workflows, support partners and turn data into business decisions."
- Buttons: "View selected work" (scrolls down) and "View CV". Email and LinkedIn stay in navigation and the closing block.
- Browser title and link-preview text updated to match.
- Note: this overrides your earlier "no messaging changes" — please confirm.

## 4. P1 — Work before skills
- New home order: Hero → Companies → Selected work → Experience → Capabilities → Recommendations → Contact.
- "Selected work" merges Case Studies and Projects: Partner activation, Market Compass, SEC onboarding as the three lead tiles; Partner intelligence after; AP scraping agent in a small "In progress" row.
- Skills + scrolling tool list become one compact "Capabilities" block (Operations, Partnerships, Commercial analysis, Technical delivery), each pointing to the work that proves it.
- Navigation renamed: Selected work, Experience (was Journey).

## 5. P1 — Ownership in each case study
- A short "At a glance" box at the top of each case study: context, dates, status (live / pilot / demo), my role, key decision, how it was validated, one limitation.
- Partner activation summary rewritten in plain first-person wording; remove dramatic phrases.

## 6. P1 — CV and closing call to action
- "Discuss a role" block at the end of the home page and every case-study / Market Compass page: one sentence on the roles you want, "View CV" and "Email Mucundh", LinkedIn secondary.

## 7. P2 (later round unless you want it now)
- Market Compass: written decision / assumptions / recommendation section beside the dashboard, plus a static screenshot in case the embed fails.
- Experience: dates and one contribution per role; tag logos as employer / internship / client project.
- Fix the phone side-scroll at 320-375px and low-contrast text.

## What I need from you
- Your CV as a PDF (for "View CV").
- For each metric: measured or estimated, and what it measured.
- Partner intelligence: prototype or deployed?
- For each case study: dates, status and what you personally owned. Anything missing I will leave as a clearly marked placeholder for you to confirm — I will not invent it.

## Technical details
- Hackathon badge and number strip in `HeroSection.tsx`; metadata via `index.html`.
- New `SelectedWorkSection` built from one list (extending `src/lib/case-studies.ts`); `CaseStudiesSection`/`ProjectsSection` replaced on home; `/#case-studies` anchor kept working as an alias.
- Shared `CaseStudyGlance` and `ContactCta` components reused on all four detail pages.
- CV hosted as a Lovable asset.
- Verify at 1280px and 375px, including no horizontal overflow.
