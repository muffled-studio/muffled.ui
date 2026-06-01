# Consumer Agent Guide

Use this registry when adding shared UI primitives to consumer apps.

## Registry

- Base URL: `https://ui.muffled.studio/`
- Manifest: `https://ui.muffled.studio/registry.json`
- Items:
  - `utils`
  - `button`
  - `card`
  - `input`

## Install

```bash
bunx shadcn@latest add https://ui.muffled.studio/r/button.json
```

Replace `button` with `card`, `input`, or `utils` as needed.

## Design System Summary

- Palette: paper background, ink foreground, sharp 1px borders.
- Typography: Martian Mono.
- Radius: zero.
- Components are restrained, text-led, and single-column by default.

## Hard Rules

- Never restyle components using arbitrary Tailwind values.
- Use existing tokens from the registry design system.
- Compose primitives; do not fork component source unless requested.
