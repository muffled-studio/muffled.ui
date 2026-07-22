# progress

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/progress.tsx`: `@base-ui/react/progress`; anatomy adds `Track` (Indicator nested). Removed manual `transform` fill — Base UI sets indicator width. Exported `ProgressTrack` / `ProgressIndicator` / `ProgressLabel` / `ProgressValue`. Simple `<Progress value={n} />` still works. Leftover scan clean.

## Left alone

- Stories (no asChild; still use value-only Progress).

## Behavior changes

- Root is a flex wrapper; bar styles live on Track.
- `getValueLabel` → `getAriaValueText` (signature changed) if any consumer used it.
- Data attrs: `data-progressing` / `data-complete` / `data-indeterminate` instead of `data-state`.

## Verify by hand

- 0 / 33 / 66 / 100 bars fill correctly without transform hacks. Indeterminate (`value={null}`) if tested.
