# dialog

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/dialog.tsx`: `@base-ui/react/dialog`; Overlay→Backdrop, Content→Popup; Close `asChild`→`render={<Button/>}`; kept `ThemedPortalShell` + `modalSurfaceClasses` + ink scrim. Leftover scan clean.
- `registry/items/dialog.json`: dep `radix-ui`→`@base-ui/react`.
- `app/(docs)/demos/dialog.tsx`, `stories/dialog.stories.tsx`: Trigger `asChild`→`render`.

## Left alone

- `button.tsx` (consume only). Drawer (vaul). Other overlay siblings in this batch have their own reports.

## Behavior changes

- `onOpenChange` gains `eventDetails`; dismiss callbacks (`onEscapeKeyDown` / `onPointerDownOutside` / …) move to Root `onOpenChange` reasons + `cancel()`.
- Focus: `onOpenAutoFocus`/`onCloseAutoFocus` → Popup `initialFocus`/`finalFocus`.

## Verify by hand

- Open/close via trigger and X. Esc + outside press dismiss. Focus returns to trigger. Paper + ink themes via portal shell.
