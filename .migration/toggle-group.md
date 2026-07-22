# toggle-group

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/toggle-group.tsx`: `@base-ui/react/toggle-group` + item as `@base-ui/react/toggle`; Root is callable; pass `orientation` through. Leftover scan clean: `grep -n "radix-ui\|@radix-ui" registry/ui/toggle-group.tsx` → empty.
- `stories/toggle-group.stories.tsx`: `type="multiple"` → `multiple`; `type="single"` omitted; single `defaultValue` → array.
- `app/(docs)/demos/toggle-group.tsx`: same call-site updates.

## Left alone

- components.json; other batches.

## Behavior changes

- `type` → `multiple` boolean; `value`/`defaultValue`/`onValueChange` always arrays (single empty = `[]`, not `""`).
- `rovingFocus={false}` not supported (always on). `loop` → `loopFocus`.

## Verify by hand

- Storybook Toggle Group paper+ink: multiple selection, single selection, outline spacing, arrow-key roving focus.
