# Market Compass project and SEC filings case study

## 1. Add Market Compass to Projects
- Keep the two existing projects unchanged and add **Market Compass — Brazil Market Entry** as the first, leftmost project, before the remaining projects. On mobile, show it first in the stacked list.
- Describe its editable launch-cost, revenue, operating-cost and tax assumptions, profit/payback modelling, and public Banco Central USD/BRL data.
- Link the project tile to a dedicated portfolio page displaying the public dashboard at **https://brazil-fx.lovable.app/**.
- Include an **Open dashboard** link in a separate tab and a **Back to projects** link. If embedding is blocked or impractical on a small screen, provide direct access instead.
- Label the commercial assumptions as illustrative, not proven business results or tax advice.

## 2. Create the SEC filings case study
Use the Loom walkthrough as the source for a concise case study titled **Scaling Customer Onboarding for SEC Filings**. This is separate from Market Compass.

- **Challenge:** map securities and investors to the correct SEC filings, with accuracy and timeliness important to compliance.
- **Approach:** map the end-to-end workflow, fetch filings, match fields and validate data using a Python script with a team-accessible interface.
- **Edge case:** explain the TCW Strategic Fund example, where the correct ticker is TSI, and how ambiguous name matching can introduce false positives.
- **Refinement:** describe the Codex-assisted skill file used to handle matching edge cases.
- **Outcome:** present repeatable onboarding and stronger validation as the intended operational benefits; do not invent savings, success rates or compliance guarantees.
- Include the Loom recording for the visual walkthrough, with a direct watch link as a fallback. Avoid republishing internal screenshots without reviewing their contents.
- Add a compact homepage case-study tile as the first, leftmost case study, before the existing studies and accounts-payable placeholder. Preserve those entries; on mobile, show the new study first in the stacked list.

## 3. Navigation and backlinks
- Keep the shared fixed navigation and footer on both new pages.
- Make homepage section links consistently reach the correct section from every page, with clearance beneath the fixed navigation.
- Provide direct case-study links in an accessible Case Studies menu, supporting mouse, keyboard and touch.
- Add the SEC filings case study to the related-study links on the existing case-study pages; link the new study back to both existing studies and the homepage case-study section.
- Preserve the compact mobile navigation: name, Case Studies and LinkedIn.

## Design and verification
- Follow the portfolio’s existing typography, semantic brand palette and golden-ratio spacing; keep copy concise and layouts readable on phone, tablet and desktop.
- Verify project links, dashboard access, Loom access, case-study links, section navigation and return links in the browser.
- Check keyboard access, fixed-navigation offsets, missing-content states and narrow-screen overflow.

## Technical details
- Add React pages and explicit routes for the Market Compass viewer and SEC filings case study.
- Centralize route/hash scrolling rather than relying on per-link timeouts, so section navigation and page-top navigation do not conflict.
- Use the existing design-system controls and page metadata patterns. No backend or source-project database access is needed.