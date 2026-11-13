# Landing page critique for hiring managers, and proposed fixes

## How a hiring manager reads the page today
They spend about 10 to 30 seconds and want three answers: what role you fit, proof you deliver, and how to reach you.

1. **Hero (works well):** the "Strategy & Business Operations · Generalist" pill, the headline and the three green impact numbers answer the first two questions fast. The hackathon badge is a strong proof point.
2. **Working with me (too early):** quotes come before any work. A manager has not seen what you did yet, so praise has nothing to back it up. The deep blue band also pulls the eye away from "Explore my work".
3. **Selected work (the real proof, but third):** strongest content on the page, but it sits below the fold, after the quotes.
4. **Journey:** clear, but it repeats the company story the hero already hints at.
5. **Discuss a role:** good closing step, with View CV as the main button.

## What stands out
- Impact numbers with count-up: the most scannable proof on the page.
- Hackathon winner with "Watch live demo" on hover.
- Consistent work cards with one-line summaries.

## What is holding it back
- Order: quotes before work breaks the "claim, proof, social proof" flow.
- The hero's three buttons (Explore, View CV, Get in Touch) compete; the gold main button is right, but two outline buttons next to it dilute it.
- The hackathon badge sits under the photo on desktop, far from the headline where the eye starts.
- No hint of who you worked for above the fold (logos now only show in Journey and quotes).

## Moves
1. **New order:** Hero, Selected work, Working with me, Journey, Discuss a role.
2. **Hero buttons:** keep "Explore my work" (gold) and "View CV" (outline); move "Get in Touch" to the closing block only (it is already in the top menu).
3. **Small logo row in the hero**, under the impact numbers: Proxymity, Sweep, Transdev, L'Oréal, GE, small and quiet, as "Worked with".
4. Hackathon badge stays where it is on phones; on desktop it moves next to the focus pill above the headline.

## Animations that would help (all 200 to 400ms, off for reduced motion)
1. Impact numbers count up when they come into view, not on page load.
2. Recommendation cards slide in one after another, and the carousel moves on its own every 6 seconds, pausing on hover or touch.
3. Work cards: the company pill and arrow shift slightly on hover, so the card reads as clickable.
4. A soft gold underline draws under "Business impact." once after load.
5. Logo row fades in left to right after the impact numbers.

## Not included
- No wording, numbers or claims change.

## Technical details
- Index.tsx reorder; HeroSection: remove email button, add logo row using logoUrl and journey domains, move badge on lg.
- CountUp triggered by useInView; Embla autoplay via a small interval with pause on pointerenter/focus, disabled for reduced motion.
- New keyframe `underline-draw` (scaleX) in tailwind.config.ts using the tertiary token.
- Verify with Playwright at 390px and 1280px.
