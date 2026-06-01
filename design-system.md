# muffled.ui design system

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--color-paper` | `#f7f7f2` | page background |
| `--color-paper-2` | `#efefe8` | subtle surface |
| `--color-ink` | `#0f0f0c` | primary text and strokes |
| `--color-muted-ink` | `#45453f` | secondary text |
| `--color-border` | `#0f0f0c` | 1px outlines |
| `--radius` | `0` | sharp corners |

## Spacing scale

- `2` → 0.5rem
- `3` → 0.75rem
- `4` → 1rem
- `6` → 1.5rem
- `8` → 2rem
- `12` → 3rem

## Type ramp

- `text-xs` for commands and inline metadata
- `text-sm` for body copy and controls
- `text-base` for emphasized component labels
- `text-3xl` for page titles

All text uses Martian Mono and slight negative tracking.

## Motion

- Default UI transitions: `150ms`
- Hover/focus transitions only
- No spring, bounce, or long easing curves

## Do / Don’t

### Do

- Keep layouts single-column with wide whitespace.
- Prefer borders and type hierarchy over heavy fills.
- Keep components composable and minimal.

### Don’t

- Don’t use arbitrary Tailwind color values.
- Don’t add gradients, shadows, blur, or glass effects.
- Don’t nest decorative surfaces inside decorative surfaces.
