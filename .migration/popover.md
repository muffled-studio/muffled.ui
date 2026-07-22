# popover

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/popover.tsx`: `@base-ui/react/popover`; Content → Portal > Positioner > Popup; `--transform-origin`; `floatingSurfaceClasses` + `ThemedPortalShell`. Dropped `PopoverAnchor` (no Base UI Anchor part; unused in repo). Title/Description are real primitives. Leftover scan clean.
- `registry/items/popover.json`: dep `radix-ui`→`@base-ui/react`.
- `app/(docs)/demos/popover.tsx`, `stories/popover.stories.tsx`: Trigger `asChild`→`render`.

## Left alone

- Consumers outside demos/stories (none for Anchor). Menus/select are other batches.

## Behavior changes

- Positioning props (`side`/`align`/`sideOffset`/`alignOffset`) live on Positioner (wrapper still accepts them on Content).
- `PopoverAnchor` removed — use Positioner `anchor` if needed.

## Verify by hand

- Open/close on click; outside + Esc dismiss. Placement sides. Paper/ink surface.
