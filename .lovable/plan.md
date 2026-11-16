# Mobile hero and "Worked with" critique

## What a hiring manager sees first on a phone
In order: "Open to opportunities" pill, a small photo with "Hackathon winner", the "Strategy & Business Operations · Generalist" pill, and only then the headline.

## Is it crowded or unclear? Yes, in three ways
1. **Four labels before the message.** Three pill-style labels and a photo come before "Engineering roots. Business impact." They all look equally important, so the eye doesn't know where to start. The headline gets pushed down and loses its punch.
2. **The hackathon sits in the wrong spot.** It's next to your photo, so it reads like a caption for your name, not like proof. It also comes before the reader knows what you do. A win means more after the claim it supports.
3. **Your role is last.** "Strategy & Business Operations · Generalist" tells the reader who you are, but it sits below the hackathon. It should come first.

## Fix for the hero (phones only, desktop stays the same)
- **Row 1, who you are:** your photo, a little bigger, on the left. On the right, two short stacked lines: the role pill, then the green "Open to opportunities" dot as plain small text.
- **Row 2:** the headline and the intro paragraph, unchanged.
- **Row 3:** the "Explore my work" and "View CV" buttons, with "Hackathon winner" as a quiet line under them, so it backs up your work.
- The result is one cluster that says who you are, then the message, then proof and action. Your wording doesn't change.

## "Worked with" in two lines
You're right, a 3 + 2 wrap with names looks ragged. On phones:
- Show logos only, in one evenly spaced row of five, about 28px each, so they're readable without names.
- Keep the company names for screen readers and as a label on long-press.
- Show logos in full colour on phones. Phones have no hover, so grey logos would stay grey and look faded.
- Desktop keeps logos with names, as now.

## Technical details
- HeroSection `sm:hidden` block: flex row with `h-14 w-14` headshot and a stacked `{focus}` and slimmed status. Remove `{badge}` from that block and render it under the CTA row with `sm:hidden`.
- Companies list: names `hidden sm:inline`, `flex justify-between` below sm, logo `h-7 w-7 sm:h-[22px] sm:w-[22px]`, `grayscale-0 sm:grayscale`, `aria-label`/`title` set to the name.
- Check at 320, 390 and 430px with no horizontal overflow, and 1280px stays unchanged.
