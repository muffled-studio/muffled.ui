# muffled.studio — design rules

This repo follows the muffled.studio design system. Full reference lives in
`design-system/README.md` and `design-system/colors_and_type.css`; specimen
cards are in `design-system/preview/*.html`. The rules below are
non-negotiable — do not reintroduce framework defaults (shadcn/MUI ship shadows,
1px borders, and a gray ramp; we use none of those).

## The one rule
**less.** Every element earns its place. No decorative fills, no filler, no slop.

## Color
- Two colors do almost all the work: **ink `#1A1A1A`**, **paper `#F5F5F5`**.
- Hierarchy comes from **opacity stops on ink** (`/72 /56 /40 /24 /12 /06`).
  There is **no gray ramp** — never introduce `gray-100..900`.
- Utility hues are **functional only**, never decorative:
  red `#C0392B` (destructive/error), green `#27AE60` (success/ship),
  amber `#D4830A` (warn/hold), blue `#2471A3` (info/link).
- `--primary` maps to **ink** (buttons are ink-on-paper). Utility hues drive
  `--destructive` and status, not the primary action.
- Dark mode = invert: bg becomes ink, fg becomes paper, opacity stops flip to paper.
- **No gradients** in surfaces. No tints "for warmth".

## Type
- **Space Mono** — headings, eyebrows, code. Ships **only 400 and 700**.
  Headings run 400; `h4`/`h5` and single-word emphasis run 700.
  Slight negative tracking at display sizes (-0.02 to -0.04em).
- **Space Grotesk** — body, labels, UI. Weights 300–700; body 400, labels 500,
  emphasis 600. Body line-height 1.55.
- Never set long body in mono. Never set a headline in grotesk.
- Both families are self-hosted from `design-system/fonts/*.ttf` — wire them via
  `@font-face` / `next/font`; do not pull from a CDN.

## Spacing · radius · borders
- Spacing: **4px base unit**. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96.
- Radius: **6px default**, held loosely (0px is also fine where it feels stamped).
  `999px` only for genuinely round things (avatars, dots).
- Borders: **0.5px only.** There is no 1px border. `ink/24` default, `ink/56` for
  real separation.

## Elevation
- **No shadows.** There is no shadow system. Do not add `box-shadow`.
- Elevation = border + opacity + order on the page. A popover is paper bg, 0.5px
  border, no shadow. No backdrop-blur.

## Motion
- **Drift** (transitions/mount/state): 220ms, `cubic-bezier(0.4,0,0.2,1)`.
- **Snap** (press/release/toggle): 90ms, `cubic-bezier(0.2,0,0,1)`.
- **Nothing bounces.** No spring overshoot, no wobble, no keyframed loops on chrome.

## States
- Hover: opacity → 0.6 (or surface wash to ink/06). No color shifts.
- Press: opacity → 0.4. **No scale, no transform** — the brand stays still.
- Focus: 0.5px outline at ink/56, 2px offset.

## Voice (for any UI copy)
- Dry, precise, direct. Use **"we"** — not "I", not "you".
- **Lowercase** by default. **No exclamation marks. No emoji.** Periods do the work.
- ✅ "we build things. mostly software. some of it ships."
- ❌ "We're so excited to announce!" / "You'll love how easy it is!"

## Iconography
- Lucide, stroke width **1.5**, currentColor only. Sizes 12/16/20/24. 8px gap to label.
- No emoji. Unicode arrows (→ ← ↑ ↓) and ✓ ✕ are fine when literally correct.

## Logo
- `design-system/assets/logo-light.svg` (on paper) · `logo-dark.svg` (on ink).
- Two colors ever. **Never below 24px.** Clear-space = the cuboid's short side.
