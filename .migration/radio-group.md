# radio-group

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/radio-group.tsx`: `@base-ui/react/radio-group` + `@base-ui/react/radio`; `RadioGroup` is a single component; items are `Radio.Root` / `Radio.Indicator`. Kept muffled styles; `disabled:` → `data-disabled:`. Leftover scan clean.

## Left alone

- Stories (no asChild).

## Behavior changes

- `orientation` / `loop` / `dir` dropped on group (keyboard nav is built-in both axes).
- `onValueChange` gains `eventDetails`.
- Item Root renders `<span>` + hidden input (was button).

## Verify by hand

- Arrow keys move selection. Disabled item skipped. Focus ring + opacity press. Labels via htmlFor.
