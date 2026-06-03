# muffled.studio — design rules

This repo follows the muffled.studio design system. Full brand narrative lives in
[muffled.skills](https://github.com/muffled-studio/muffled.skills) (`muffled-studio-design` → `references/README.md`).
Tokens: `app/globals.css`. The rules below are
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
- Wire fonts with `next/font/google` (Space Mono, Space Grotesk). No runtime CDN.

## Spacing · radius · borders
- Spacing: **4px base unit**. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96.
- Radius: **6px default**, held loosely (0px is also fine where it feels stamped).
  `999px` only for genuinely round things (avatars, dots).
- Borders: **0.5px only.** There is no 1px border. `ink/24` default, `ink/56` for
  real separation.
- Border width is global via `--bw` / `--default-border-width` in `app/globals.css`.
  Use `border`, `border-t`, `divide-y`, etc. — not `border-[0.5px]`. Hairline rules
  use `h-hairline` / `w-hairline`, not `h-px` / `w-px`.

## Tailwind · tokens · utilities
- Prefer **theme tokens and named utilities** over arbitrary values. Do not use
  `property-[value]` / `property-[var(--x)]` unless the value is genuinely one-off.
- Design tokens live in `app/globals.css` (`@theme inline`). Add missing tokens there first, then use the
  generated class (`border`, `border-border-strong`, `h-hairline`, `duration-drift`, …).
- Floating surfaces (popover, menu, select dropdown) share `floatingSurfaceClasses()`
  from `registry/lib/surface.ts` — extend that, do not restyle each component.
- Do not reintroduce shadcn defaults: `shadow-*` (other than `shadow-none`), `gray-*`,
  `zoom-in-*` on chrome, `backdrop-blur`, or `opacity-50` for disabled (use `opacity-40`).

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

## Forms
- Stack: `react-hook-form` + `zod` + `@hookform/resolvers/zod`.
- `Form` is `FormProvider`; wire fields with `FormField` → `FormItem` → `FormLabel` / `FormControl` / `FormDescription` / `FormMessage`.
- **Labels** — mono via `FormLabel` (uses `Label`). **Hints** — grotesk `text-sm text-muted-foreground` on `FormDescription`. **Errors** — grotesk `text-sm text-destructive` on `FormMessage`; lowercase copy.
- Do not restyle controls inside `FormControl`; validation surfaces through `aria-invalid` on the slotted control.

## Voice (for any UI copy)
- Dry, precise, direct. Use **"we"** — not "I", not "you".
- **Lowercase** by default. **No exclamation marks. No emoji.** Periods do the work.
- ✅ "we build things. mostly software. some of it ships."
- ❌ "We're so excited to announce!" / "You'll love how easy it is!"

## Iconography
- Lucide, stroke width **1.5**, currentColor only. Sizes 12/16/20/24. 8px gap to label.
- No emoji. Unicode arrows (→ ← ↑ ↓) and ✓ ✕ are fine when literally correct.

## Logo
- `public/logo-ink.svg` (on paper) · `public/logo-paper.svg` (on ink).
- Two colors ever. **Never below 24px.** Clear-space = the cuboid's short side.

## Registry

- Base URL: `https://ui.muffled.studio/`
- Manifest: `https://ui.muffled.studio/registry.json`
- Namespace: `"@muffled": "https://ui.muffled.studio/r/{name}.json"` in consumer `components.json`
- Theme: `bunx shadcn@latest add @muffled/theme`
- Components: `bunx shadcn@latest add @muffled/<name>`

## Agent skills

All skills live in [muffled.skills](https://github.com/muffled-studio/muffled.skills). Install with `bunx skills add` — see that repo's README.

| Skill | When |
|-------|------|
| **muffled-ui-maintainer** | Editing this registry |
| **muffled-ui** | Consuming `@muffled` in other apps |
| **muffled-studio-design** | Brand / visual rules |
| **muffled-writing** | Copy and voice |

Rules always applied in this workspace: `AGENTS.md` + `app/globals.css`.
