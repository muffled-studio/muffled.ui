# sheet

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/sheet.tsx`: `@base-ui/react/dialog` (Sheet = Dialog); Overlay→Backdrop, Content→Popup; Close `asChild`→`render={<Button/>}`; kept muffled side slide animate-in classes, ink scrim, `ThemedPortalShell`. Leftover scan clean.
- `registry/items/sheet.json`: dep `radix-ui`→`@base-ui/react`.
- `app/(docs)/demos/sheet.tsx`, `stories/sheet.stories.tsx`: Trigger/Close `asChild`→`render`.

## Left alone

- Drawer (vaul) — intentionally not migrated. `button.tsx` consume only.

## Behavior changes

- Same dialog-family `onOpenChange` / focus prop moves as dialog.
- Animations still use muffled `data-open`/`data-closed` + tw-animate (not base-nova `data-starting-style` translate).

## Verify by hand

- Open from each side prop. Overlay + X + footer Close dismiss. Focus return. Paper/ink portal theme.
