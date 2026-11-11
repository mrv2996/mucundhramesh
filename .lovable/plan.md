# Cleaner recommendation cards + "Discuss a role" contact block

## What changes
1. **Recommendation cards**: remove the small italic line ("Marcia was Mucundh's client", "Victor managed Mucundh directly", etc.) from every card. Name, title and company stay.
2. **New "Discuss a role" block at the end of every page**, just above the footer: Home, Work, Market Compass and every case study. The 404 page doesn't get one.
   - Heading: "Discuss a role"
   - One short line underneath. I'll suggest "Open to Strategy & Business Operations and generalist roles." This reuses wording already in your hero; tell me if you want something else.
   - Three buttons side by side (stacked on phones): **View CV** (filled Prussian Blue), **Email me** and **LinkedIn** (outlined). They use the same CV, email and LinkedIn links as the rest of your site.
   - The block sits in a soft rounded panel inside the 960px page width, with compact spacing.

## Technical details
- HomeRecommendation.tsx: drop the `relationship` line from the figcaption. The field can stay in the data.
- New `src/components/ContactCTA.tsx`, using CV_URL, EMAIL and LINKEDIN from src/lib/site.ts. The CV button only shows when CV_URL is set.
- Render ContactCTA right before `<Footer />` in Index, Work, MarketCompass and CaseStudies, and inside CaseStudyLayout, so every case study gets it.
- Add an AGENTS.md rule: every content page ends with ContactCTA above the Footer.
