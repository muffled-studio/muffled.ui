---
name: muffled-studio-design
description: Use this skill to generate well-branded interfaces and assets for muffled.studio, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within `design-system/`, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, read the rules here and in `AGENTS.md` to design with this brand.

## Quick reference

- Two colours: ink `#1A1A1A`, paper `#F5F5F5`. Utility hues only when they mean something.
- Type: **Space Mono** for headings/eyebrows/code (400 + 700 only), **Space Grotesk** for body/labels/UI (300–700). Mechanical headline, humanist body.
- Spacing: 4px base unit.
- Radius: 6px default, held loosely.
- Borders: **0.5px only**. No 1px.
- Shadows: **none**.
- Motion: drift (220ms) for transitions, snap (90ms) for interactions. Nothing bounces.
- Voice: dry, precise, direct, "we", lowercase, no exclamation marks, no emoji.
- One rule: **less**.

## Files

```
design-system/README.md              · brand guide (read this first)
app/globals.css                      · tokens and theme (source of truth)
design-system/assets/                · logo-light.svg · logo-dark.svg
```
