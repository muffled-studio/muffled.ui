---
name: muffled-studio-design
description: Build on-brand UI in a project that consumes the muffled.studio component library. Use when creating new screens, layouts, or product surfaces. Covers how to compose the installed components, the design voice, and layout/spacing rules. Does NOT redefine tokens — the library owns those.
user-invocable: true
---

# muffled.studio — building UI in a consuming app

This project imports the muffled.studio component library. When you build a screen
or layout, follow this skill. The library owns tokens, colors, type, and component
styling — your job is to **compose**, not redefine.

## First, orient
- Check which components the library already exposes (look in the lib's exports /
  `components/ui`). Prefer an existing component over building one.
- Use the library's tokens (CSS vars / Tailwind classes) for any net-new markup.
  Never hardcode a hex or invent a color.
- If a needed variant is missing, add it **upstream in the library**, not here.

## The rules that always hold
- **less.** Every element earns its place. No filler, no decorative slop.
- **Color:** ink `#1A1A1A` + paper `#F5F5F5`; hierarchy via opacity on ink, no gray
  ramp. Utility hues (red/green/amber/blue) are functional only.
- **Type:** Space Mono headings/eyebrows (400, 700 for emphasis), Space Grotesk
  body/labels (300–700). Long body is never mono; headlines are never grotesk.
- **Spacing:** 4px base. **Radius:** 6px default. **Borders:** 0.5px only.
- **No shadows.** Elevation = border + opacity + order. No backdrop-blur.
- **Motion:** drift 220ms (transitions), snap 90ms (interactions). Nothing bounces.
- **States:** hover 0.6 opacity, press 0.4 (no transform), focus 0.5px outline.

## Voice (any copy you write)
Dry, precise, direct. "we" not "I"/"you". Lowercase by default. No exclamation
marks, no emoji. Periods do the work.

## Layout approach
- Generous outer margins. Single column for reading; two columns for comparing.
  Don't fill space you don't need. Whitespace is the texture.
- Reach for the library's components first. Drop to raw markup only for layout
  scaffolding (grids, sections) — and even then, use the lib's tokens.

## When in doubt
The full system reference is the library repo's `design-system/` folder
(`README.md`, `colors_and_type.css`, `preview/*.html`). Open the matching
`preview/*.html` card to see how a component should look.
