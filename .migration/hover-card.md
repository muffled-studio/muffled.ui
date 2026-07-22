# hover-card

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/hover-card.tsx`: `@base-ui/react/preview-card` (public names stay HoverCard*); Content → Portal > Positioner > Popup; `floatingSurfaceClasses` + `ThemedPortalShell`; `--transform-origin`. Leftover scan clean.
- `registry/items/hover-card.json`: dep `radix-ui`→`@base-ui/react`.
- `app/(docs)/demos/hover-card.tsx`, `stories/hover-card.stories.tsx`: Trigger `asChild`→`render`.

## Left alone

- Other preview/tooltip siblings covered separately.

## Behavior changes

- Root `openDelay`/`closeDelay` → Trigger `delay`/`closeDelay`. Defaults: open delay 700→600 (Base Trigger); close delay stays 300 on Trigger when set.
- Wrapper no longer accepts delay props on Root — pass them on Trigger.

## Verify by hand

- Hover open/close feel. Move pointer into card (hoverable). Esc dismiss. Paper/ink.
