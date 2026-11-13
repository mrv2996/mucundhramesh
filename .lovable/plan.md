# Audit: "Worked with" row under the impact numbers

## What's wrong now
- Logos are tiny square icons (28px). At that size, L'Oréal, Transdev and GE are hard to recognise, so the row says less than it should.
- Square app icons, each on its own coloured tile, look uneven next to each other. It reads as a row of stickers, not a client list.
- "Worked with" is the same grey as everything else and sits on the same line as the logos, so it reads as a leftover caption.
- The row floats right under the tiles with only a small gap. It looks squeezed in and not like a separate trust signal.
- There's no hover or name label, so a visitor can't tell which logo is which.
- Forvis Mazars and Fidelity appear in your Journey but not here. That's a fine choice, just worth confirming.

## Proposed fixes
1. Swap the square icons for logos that show the full company name, at a single height (about 22px), so every name can be read.
2. Show the logos in muted grey by default and switch them to full colour on hover, so they're calm but still read clearly. Tell me if you'd rather keep them in full colour all the time.
3. Put a thin divider line above the row, with a small uppercase "Worked with" label centred on the line.
4. Spread the logos evenly across the full 960px width on desktop, and on phones lay them out in a tidy 3 + 2 grid instead of a ragged wrap.
5. Add a short name tooltip (the alt text) and keep the fade-in from left to right.

## Technical details
- In HeroSection, use the Logo.dev wordmark or larger format if it's available; otherwise use height 22 with w-auto and object-contain.
- Use `grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition` (note: this reverses an earlier "no greyscale" request, so it needs your OK).
- Build the divider from flex with two `h-px bg-border` lines on either side of the label.
