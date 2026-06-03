# muffled.studio — UI rules (consuming app)

> Generic agent file. Identical to CLAUDE.md — use whichever your tool reads.

This app consumes the muffled.studio component library (`@muffled/ui` or your
local equivalent). It does **not** redefine the design system — the library owns
tokens, components, and styling. Your job is to compose installed components
correctly and keep net-new layout on-brand.

## Do
- **Use the library's components** (Button, Card, Input, Badge, …) instead of
  hand-rolling or restyling. If a component is missing a variant, add it upstream
  in the library — don't fork its styles here.
- **Use the library's tokens** for any net-new markup: the CSS variables / Tailwind
  classes the lib exposes (`bg-background`, `text-foreground`, `border`, etc.).
  Never hardcode hex values or introduce a new color.
- **Invoke the muffled skill** (`.claude/skills/muffled-studio-design`) when building
  a new screen or layout — it carries the full voice, spacing, and layout rules.

## Don't
- ❌ Override component internals with one-off CSS, `!important`, or wrapper hacks.
- ❌ Add `box-shadow` — there is no shadow system. Elevation = border + order.
- ❌ Use 1px borders (the system is 0.5px), gradients, or a gray ramp
  (`gray-100..900`). Hierarchy is opacity on ink.
- ❌ Add emoji or exclamation marks in UI copy.

## Net-new layout rules (when the lib has no component for it)
- **Spacing:** 4px base — 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96.
- **Radius:** 6px default; 999px only for round things.
- **Type:** Space Mono for headings/eyebrows (400, or 700 for emphasis),
  Space Grotesk for body/labels (400/500/600). Long body is never mono.
- **Motion:** drift 220ms `cubic-bezier(0.4,0,0.2,1)` for transitions;
  snap 90ms `cubic-bezier(0.2,0,0,1)` for interactions. Nothing bounces.
- **States:** hover → opacity 0.6, press → opacity 0.4 (no transform),
  focus → 0.5px outline at ink/56, 2px offset.

## Voice (any UI copy)
Dry, precise, direct. Use **"we"**, lowercase by default, no exclamation marks,
no emoji. Periods do the work.
- ✅ "we build things. mostly software. some of it ships."
- ❌ "We're so excited to announce!"
