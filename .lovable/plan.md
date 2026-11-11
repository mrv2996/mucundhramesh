# Motion and colour pass: smoother flow, clearer next steps

Your wording, numbers and brand colours (Prussian Blue, Sky Blue, Gold Leaf, the green impact tiles) stay as they are. This pass changes how the page moves and where colour is used, so the eye always lands on the next thing to click.

## Motion (every animation is 200 to 400ms, and turns off for visitors who prefer less motion)
1. **Sections fade up as they scroll in.** Selected work, Working with me, Journey and Discuss a role rise slightly into place. Work cards come in one after another, not all at once.
2. **Hero opens in sequence.** The pill, headline, text, buttons and then impact tiles appear in order. The tiles' count-up starts once they're on screen.
3. **Reading progress bar.** A thin Sky Blue line under the top menu on case-study pages shows how far down you are, so a long page feels finite.
4. **Cards respond to touch and hover.** A small lift on hover (no more than 1.02 scale), and the arrow slides when you hover or press.
5. **"Explore my work" pulses its arrow gently** twice after load, then stops.
6. **Discuss a role** gets a soft sweep of light across it when it scrolls into view, once.

## Colour (same palette, used with more purpose)
1. **Deep blue bands to break up the scroll.** The "Working with me" quotes and the "Discuss a role" block move onto a Prussian Blue background with white text. That gives the page a clear rhythm: light, dark, light, dark.
2. **Gold Leaf only for wins.** Hackathon trophy, and a thin gold line on the quote marks in the blue band. Nowhere else, so it keeps its weight.
3. **One main button colour.** "Explore my work" and "View CV" in the contact block are solid Prussian Blue. All other buttons become outline, so the main action is obvious.
4. **Soft Sky Blue tint behind the Journey section**, fading in from white, to separate it from Selected work.

## Not included
- No new text, claims or numbers.
- No changes to the order of the home page.

## Technical details
- New `useInView` hook (IntersectionObserver, fires once) and a `Reveal` wrapper with stagger via `transition-delay`. Keyframes `fade-up` and `sheen` in tailwind.config.ts; all wrapped in `motion-safe:`.
- Hero items use staggered `animate-fade-up` with delays; CountUp starts from `useInView`.
- `ReadingProgress` component in CaseStudyLayout, using a `scaleX` transform driven by scroll with requestAnimationFrame.
- New tokens in index.css: `--surface-deep` (Prussian Blue), `--surface-deep-foreground`, `--gradient-journey`. HomeRecommendation and ContactCTA switch to the deep surface. Card and button variants move to the new tokens; no hard-coded colours.
- Contrast checked on every rendered pair (white on Prussian Blue, gold on Prussian Blue). Checked with Playwright at 390px and 1280px, including with reduced motion turned on.
