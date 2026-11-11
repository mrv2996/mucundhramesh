# 60-30-10 colour system with one high-contrast action colour

Same brand palette, assigned to three clear roles so the eye goes straight to what to click.

## The split
- **60% base: white and soft off-white.** Page backgrounds, cards and the Journey tint. This stays calm so the content reads easily.
- **30% structure: Prussian Blue.** Headings, the top menu, the "Working with me" and "Discuss a role" bands, outline buttons and links. This is the brand colour.
- **10% action: Gold Leaf with dark text.** Only on main buttons: "Explore my work", "View CV", "Watch demo", and the hover state of the hackathon badge. Gold with near-black text is very high contrast (about 8:1), and it stands out against both white and deep blue.

## What changes on screen
- Main buttons turn gold with dark text and darken slightly on hover. Every other button stays outline blue.
- Sky Blue becomes a supporting tone only (pills, hover tints, reading bar). It is no longer used for button fills or small text, because it is too light to read well on white.
- The trophy keeps its gold. Nothing else uses gold, so it keeps its weight as the action signal.

## Not included
- No wording, numbers or layout changes.
- The green impact tiles stay as they are.

## Technical details
- index.css: add `--action` (49 84% 46%), `--action-foreground` (213 16% 15%), `--action-hover` (49 84% 40%); add `--surface` (60% base) and comments mapping each token to 60/30/10. Set `--accent` to a darker Sky Blue (201 70% 38%) so any accent text passes AA on white.
- tailwind.config.ts: expose `action` colour; add an `action` variant to the Button component.
- Switch the main buttons in HeroSection, ContactCTA and the SEC filings "Watch demo" to `variant="action"`; remove hard-coded hover classes there.
- Check contrast of every new pair and view home plus one case page at 390px and 1280px.
