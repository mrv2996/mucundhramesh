# Round 2: Unified, crisp content across cards and case studies

## 1. Cards: one-line CAR format
Every card (home Selected work, Work page case studies and projects) gets the same structure:
- **Context / Problem** — one short line
- **Action** — one short line
- **Result** — one short line, using only numbers already on the site (e.g. 7-8 hrs/week, $14K/year). Where no number exists (SEC filings, Market Compass, Biometrio, Trading UI, AP placeholder), the result is stated qualitatively, never invented.
- Keep title, context label and link. Drop the long summary paragraph and the three mini-metric boxes for a single headline metric.

## 2. Full case study pages: one shared template
Applies to SEC Filings, Partner Activation and AI Partner Intelligence (AP study stays "coming soon").

```text
[Back]  Title + one-line TL;DR
---------------------------------------------------------
Main column                      | Sidebar (sticky on desktop)
Context    – 2-3 bullets         | Impact metric (big number)
Strategy   – 2-3 bullets         | Tools used (logo grid)
Execution  – numbered steps,     | Role / company / timeframe
             each a collapsible  |   (only if already on site)
             section holding the |
             step text + images  |
Result     – 2-3 bullets         |
---------------------------------------------------------
Related case studies
```
- Execution steps reuse existing images (Salesforce hierarchy, Zapier workflow, agent query/output, Crossbeam interface) inside collapsible sections, first step open by default. SEC filings keeps its Loom video inside the execution section.
- Partner Activation keeps the simple SQL logic as-is (per earlier instruction), just placed inside its collapsible step.
- On phones, the sidebar moves above the content as a compact strip (metric + tool logos).
- Wording is tightened to short bullets; meaning, numbers and dates stay exactly as today. No new claims.

## 3. Tools used (Logo.dev)
Logos fetched from the connected Logo.dev, greyscale like the company strip, with a text name beneath. Proposed per case (from tools already mentioned on each page):
- SEC Filings: Python, OpenAI (Codex), Loom
- Partner Activation: Salesforce, Zapier, Excel, SQL (text badge if no logo)
- AI Partner Intelligence: Dust, Crossbeam, Notion, Google Drive
Any tool without a clean logo falls back to a plain text badge.

## 4. Impact metric per sidebar
- Partner Activation: 7-8 hrs/week saved
- AI Partner Intelligence: $14K/year saved
- SEC Filings: no number exists — shows "Repeatable onboarding workflow" until you supply a figure

## Out of scope
Hero, navigation, Journey, Market Compass page layout.

## Technical details
- New shared `CaseStudyLayout` (sidebar + sections) and `ToolLogos` components; case content moved into structured data in `src/lib/case-studies.ts` so cards and pages read the same CAR/result fields.
- Collapsibles use the existing shadcn Accordion; logos use `img.logo.dev` with `greyscale=true`, as in CompaniesSection.
- Record the shared-template rule in AGENTS.md.
