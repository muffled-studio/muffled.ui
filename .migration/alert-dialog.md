# alert-dialog

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/alert-dialog.tsx`: `@base-ui/react/alert-dialog`; Overlay→Backdrop, Content→Popup; Cancel→Close with `render={<Button/>}`; Action→plain `Button` (base-nova; no Action primitive). Kept muffled media/header/footer + `modalSurfaceClasses`. Leftover scan clean.
- `registry/items/alert-dialog.json`: dep `radix-ui`→`@base-ui/react`.
- `app/(docs)/demos/alert-dialog.tsx`, `stories/alert-dialog.stories.tsx`: Trigger `asChild`→`render`.

## Left alone

- `button.tsx` (consume only). Dialog/sheet siblings covered separately.

## Behavior changes

- **Action no longer auto-closes** the dialog (base-nova: plain Button). Close via Cancel, controlled `open`, or `actionsRef.close()` after the action.
- Default focus: Radix focused Cancel; Base focuses first tabbable — recreate with Popup `initialFocus` if needed.
- No outside-press dismiss by design (parity with Radix alert-dialog).

## Verify by hand

- Open; Cancel closes. Action runs without auto-dismiss unless consumer closes. Esc closes. Media + size variants layout on paper/ink.
