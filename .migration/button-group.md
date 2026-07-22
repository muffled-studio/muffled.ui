# button-group

2026-07-22, golden pair via base-nova + muffled orientation class replay. Migrated.

## Changed

- `registry/ui/button-group.tsx`: dropped `Slot`/`asChild`; `ButtonGroupText` uses `useRender` + `mergeProps`. Preserved muffled first/last-child radius joining (not golden's `*:data-slot` selectors). Leftover scan clean of radix.

## Left alone

- Stories/demos (no asChild). Separator wiring unchanged.

## Behavior changes

- `ButtonGroupText` composition: `asChild` → `render`.

## Verify by hand

- Horizontal/vertical groups join borders without double radius. Text segment + separator. Focus-visible z-index stacks.
