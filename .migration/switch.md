# switch

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/switch.tsx`: `@base-ui/react/switch`; `SwitchPrimitive.Root.Props`; kept muffled size tokens, checked/unchecked borders, thumb snap. `disabled:` → `data-disabled:`. Leftover scan clean.

## Left alone

- Stories (no asChild).

## Behavior changes

- `onCheckedChange` gains `eventDetails`.
- Root renders `<span>` + hidden input (was button).

## Verify by hand

- Toggle default + sm sizes. Disabled opacity-40. Thumb translate on check. Keyboard Space/Enter.
