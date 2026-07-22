# item

2026-07-22, golden pair via base-nova + muffled opacity/focus replay. Migrated.

## Changed

- `registry/ui/item.tsx`: dropped `Slot`/`asChild`; `Item` uses `useRender` + `mergeProps` with variant/size in `state`. Kept muffled hover opacity + outline focus (not golden ring). Leftover scan clean of radix.
- `stories/item.stories.tsx`, `app/(docs)/demos/item.tsx`: `asChild` + nested `<a>` → `render={<a href="#" />}`.

## Left alone

- ItemMedia/Content/Title/etc. (no Slot).

## Behavior changes

- Link items: `asChild` → `render={<a />}`.

## Verify by hand

- Outline + muted variants. Linked item with render. Focus outline ink/56. Hover opacity 0.6.
