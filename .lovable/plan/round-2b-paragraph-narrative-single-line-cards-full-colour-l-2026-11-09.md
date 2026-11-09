# Round 2b: Paragraph narrative, single-line cards, full-colour logos

## 1. Case study pages (Partner Activation, AI Partner Intelligence, SEC Filings)

- **Context** and **Strategy** become one short paragraph each (2-3 sentences), built from the current bullets. Same facts, same numbers.
- **Execution** steps keep their open/close sections, but each step header gets a one-line summary of what was done under the title, shown even when the step is closed. Example:
  - *1. CRM hygiene: parent-child accounts*: "Rebuilt partner accounts into one parent with regional children."
- **Result** stays as short bullets (not mentioned in your note; tell me if you want it as a paragraph too).

## 2. Cards: one CAR sentence

The three labelled rows (Problem / Action / Result) are replaced by one sentence in the form **"[Action verb] this, for this reason, to get this result."** The same sentence becomes the TL;DR at the top of each case page, so card and page match. Drafts (only facts already on the site):

- **Partner Activation:** "Automated partner activation with an Excel → SQL → Zapier pipeline to cut manual CRM work, saving 7-8 hours every week."
- **AI Partner Intelligence:** "Replaced a low-adoption $14K/year partner-mapping tool with a GenAI agent over existing Drive and Notion data, keeping partner insight at a fraction of the cost."
- **SEC Filings:** "Built a Python fetch → match → validate workflow to get daily SEC filings to the right securities and investors, making onboarding repeatable for each new client."
- **Biometrio:** "Developed a revenue growth and scaling strategy to help a German green-tech startup scale its sustainable technology solutions."
- **Trading UI:** "Developed UI test scenarios and analysis for new features on Fidelity's online trading platform to support feature development."
- **AP agent:** "Building a web scraping agent to replace manual accounts-payable data entry and improve accuracy across financial workflows." (in progress)

Headline figure, title, company label and link stay on each card.

## 3. Logos in full colour

Remove the greyscale effect (and the faded opacity) from the company logo strip on the home page and from the "Tools used" logos in every case study.

## Technical details

- `WorkItem` gets one `summary` field replacing `problem/action/result`; `WorkCard` renders it as a paragraph. Case pages pass the same string as `tldr` (import from `src/lib/work.tsx`).
- `CaseStudyLayout`: `context`/`strategy` become strings rendered as `<p>`; `ExecutionStep` gains `summary: string` shown under the trigger title.
- Drop `greyscale=true` from Logo.dev URLs and the `grayscale opacity-60` classes in `CompaniesSection` and `ToolLogos`; update the typography memory note about the strip.
- Update the AGENTS.md CaseStudyLayout/WorkCard rule to the new format.