# select

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/select.tsx`: `radix-ui` → `@base-ui/react/select`.
- Content → `Portal > ThemedPortalShell > Positioner > Popup`; Viewport → List; ScrollUp/DownButton → ScrollUp/DownArrow.
- `position` → `alignItemWithTrigger` (default `true` ≈ item-aligned).
- Icon `asChild` → `render={<ChevronDownIcon />}`; ItemIndicator uses `render` span.
- Label → GroupLabel. CSS vars → `--available-height` / `--anchor-width` / `--transform-origin`.
- `registry/items/select.json`: deps → `@base-ui/react`.

## Left alone

- muffled mono trigger, secondary focus item wash, `floatingSurfaceClasses`.

## Behavior changes

- `onValueChange` widens to `(value | null, eventDetails)` — callers with `useState<string>` may need `string | null` or a wrapper.
- Select.Value shows raw value unless Root `items` or Value children formatter is provided (labels === values in our demos → fine).
- `align` Positioner default is `center` (wrapper still defaults `align="center"` to match prior muffled Content).

## Verify by hand

- Open select, scroll arrows on long lists, item-aligned vs `alignItemWithTrigger={false}`. Paper + ink.
