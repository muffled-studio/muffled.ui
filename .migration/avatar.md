# avatar

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/avatar.tsx`: `@base-ui/react/avatar`; Root/Image/Fallback props from Base UI. Kept muffled after-border, badge border (not ring), group outline. Leftover scan clean.

## Left alone

- Stories (no asChild / delayMs).

## Behavior changes

- `AvatarFallback` `delayMs` → `delay`.

## Verify by hand

- Image loads; fallback shows on broken src. sm/default/lg sizes. AvatarGroup overlap + count.
