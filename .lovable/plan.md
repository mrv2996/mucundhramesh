# Homepage rearrange: recommendations up, logos into Journey

## What changes
1. **"Working with me" moves up** to where the logo strip is now, right under the hero.
2. **Company logo beside each recommender's name** (Proxymity, Sweep, biometrio.earth, Forvis Mazars), as a small rounded square on the left of the name and title.
3. **Tighter cards and section**: less padding inside each card and around the section, so the block stays compact.
4. **Looping arrows**: "Next" on the last card goes back to the first, and "Previous" on the first goes to the last.
5. **Logo strip removed** from the home page.
6. **Journey > Experience**: each role shows its company logo on the left of the title (Proxymity, Sweep, Transdev, L'Oréal, GE). Education stays as it is.

New home order: Hero, Working with me, Selected work, Journey.

## Note
Fidelity and Forvis Mazars have no role in your Experience list, so their logos will no longer appear on the home page, except Forvis Mazars beside Jean-Philippe's recommendation.

## Technical details
- Move the company-to-domain map and the Logo.dev URL helper from CompaniesSection into a shared helper in src/lib, and reuse it in HomeRecommendation and JourneySection. Add a `domain` field to each highlight and to each work item in journey.ts (biometrio.earth for Marcia).
- Swap HomeRecommendation's native scroll for the existing shadcn Carousel with `loop: true`, keeping the outline arrow buttons.
- Card padding goes from space-md to a smaller value; section uses a reduced vertical padding.
- Index.tsx: drop CompaniesSection, place HomeRecommendation after HeroSection. Leave the CompaniesSection file unused, or delete it.
- Update the typography memory note that refers to the companies strip.
