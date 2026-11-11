# Sharper summaries and no em-dashes

## 1. New summary format (cards + case study TL;DR)
Each line follows: **what was built → its job → (optional) how**. No tools named, no exact figures (impact tiles carry those). Drafts:

- **AI Partner Intelligence:** "Engineered an in-house AI partner-mapping agent to surface co-selling overlaps instantly, built on existing partner data."
- **SEC Filings Onboarding:** "Built a scalable filings-routing workflow to deliver every SEC filing to the right investors on time, with automated edge-case checks."
- **Partner Activation:** "Orchestrated an intelligent automation pipeline for faster partner readiness, powered by a clean CRM data foundation."
- **Biometrio:** "Designed a revenue growth and scaling strategy to help a German green-tech startup expand, as an ESCP student project."
- **Trading UI Testing:** "Designed UI test scenarios to validate new features on Fidelity's online trading platform, as an SRM student project."
- **AP Agent (in progress):** "Building a web scraping agent to replace manual accounts-payable data entry, improving accuracy across finance workflows."

The same line shows on the card and as the TL;DR at the top of each case study (they already share one source).

## 2. Remove every em-dash
14 em-dashes across Hero, Journey/Experience, Projects, Work page, Market Compass and the three case studies. Each is replaced with a comma, colon, full stop or "to", whichever reads naturally, without changing your wording otherwise. Page titles and descriptions included.

## Technical details
- Edit `summary` fields in `src/lib/work.tsx`.
- Replace "—" in ExperienceSection, HeroSection, ProjectsSection, journey.ts, CaseStudy1, CaseStudy2, MarketCompass, SecFilingsCaseStudy, Work; re-grep to confirm zero remain.
