# Unify navigation bar text sizes

## What's happening now

The difference is not a design choice — it is a leftover from the mobile tweak made earlier.

Measured in the live preview:

```text
Desktop (1280px)          Mobile (375px)
Mucundh Ramesh   18px     Mucundh Ramesh   16px
Home             14px     Home             hidden
Case Studies     16px     Case Studies     12px
Projects         14px     Projects         hidden
Journey          14px     Journey          hidden
LinkedIn         16px     LinkedIn         12px
```

Cause: Home, Projects and Journey are plain link buttons that inherit the default 14px. Case Studies and LinkedIn each carry an explicit override of 12px on small screens and 16px from 640px up, so they jump ahead of the rest.

## Target

Every navigation link uses the same size: 16px on desktop, 14px on mobile. Your name in Playfair Display stays as it is — it reads as the brand mark, not a link.

## Changes

Single file: `src/components/Navigation.tsx`.

- Case Studies trigger: replace its 12px/16px override with 14px below 768px and 16px from 768px up.
- LinkedIn: same replacement.
- Home, Projects, Journey: give them the same 14px/16px rule so the three stay aligned with the other two at every width.
- Touch target height (44px) and the mobile-only visibility rules stay untouched.

## Verification

Re-run the size measurement at 1280px and 375px and confirm every visible link reports 16px on desktop and 14px on mobile, then check the header screenshot for even alignment.

## Technical details

All three edits are Tailwind class swaps on the existing elements:

- `NavigationMenuTrigger` and the LinkedIn `Button` currently use `text-xs sm:text-base`; both become `text-sm md:text-base`.
- The Home/Projects/Journey `Button` elements gain the same `text-sm md:text-base` so nothing inherits the 14px button default alone.
- `md` (768px) is used as the switch point because that is already the breakpoint where the extra links appear, so the size change and the layout change happen at the same width.
- No changes to `button.tsx`, `navigation-menu.tsx`, or the dropdown item styling.
