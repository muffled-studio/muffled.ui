# slider

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/slider.tsx`: `@base-ui/react/slider`; anatomy `Root > Control > Track > Indicator` + `Thumb` siblings under Control. `Range` → `Indicator`. `thumbAlignment="edge"`. Kept muffled hairline track + opacity thumb states. Leftover scan clean.

## Left alone

- Stories (no asChild / onValueCommit).

## Behavior changes

- `onValueCommit` → `onValueCommitted` (consumers must rename if any).
- Single-thumb `value`/`defaultValue` may be a plain `number` (arrays still work).
- `minStepsBetweenThumbs` → `minStepsBetweenValues`.
- `inverted` dropped.

## Verify by hand

- Single + range thumbs in Storybook. Drag + keyboard arrows. Disabled opacity. Vertical if exercised.
