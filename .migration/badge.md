# badge

2026-07-22, golden pair via base-nova (`useRender`/`mergeProps`) + muffled variants. Migrated.

## Changed

- `registry/ui/badge.tsx`: `useRender` + `mergeProps`; `render` replaces `asChild`. Kept muffled variants + `BadgeDot`. Leftover scan clean.

## Left alone

- Stories (no asChild).

## Behavior changes

- Polymorphism via `render`, not `asChild`.

## Verify by hand

- Badge paper+ink stories; filled + status colors.
