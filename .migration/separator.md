# separator

2026-07-22, golden pair via base-nova + muffled hairline replay. Migrated.

## Changed

- `registry/ui/separator.tsx`: `@base-ui/react/separator`. Dropped `decorative` (not in Base UI props). Kept `h-hairline`/`w-hairline`, `shadow-none`. Leftover scan clean.

## Left alone

n/a

## Behavior changes

- No `decorative` prop; always a separator role from Base UI.

## Verify by hand

- Horizontal/vertical in stories; hairline not 1px.
