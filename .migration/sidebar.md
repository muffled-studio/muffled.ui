# sidebar

2026-07-22, golden pair via base-nova + muffled opacity/focus/motion replay. Migrated.

## Changed

- `registry/ui/sidebar.tsx`: dropped `Slot`/`asChild` on GroupLabel, GroupAction, MenuButton, MenuAction, MenuSubButton; each uses `useRender` + `mergeProps` with `state.slot`/`sidebar`/`size`/`active`. Kept muffled classes (opacity press, outline focus, no shadow outline variant). Leftover scan clean of radix imports.
- `SidebarMenuButton` + tooltip: still wraps with radix `TooltipTrigger asChild` (tooltip not yet Batch C).

## Left alone

- Sheet/Skeleton/Input/Button imports (Sheet still radix — other batches). Stories/demos (no asChild). `app/(docs)/demos/sidebar.tsx` unchanged.

## Behavior changes

- Polymorphic parts: `asChild` → `render`.
- FLAG: tooltip trigger still radix `asChild` until tooltip migrates; structure matches base-nova otherwise.

## Verify by hand

- Collapse to icon mode shows tooltips. Menu button active weight. Mobile sheet open. Keyboard shortcut `b`. Sub-button sizes sm/md.
