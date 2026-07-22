# dropdown-menu

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/dropdown-menu.tsx`: `radix-ui` DropdownMenu → `@base-ui/react/menu` Menu.
- Content → `Portal > ThemedPortalShell > Positioner > Popup`. CSS vars → `--available-height` / `--anchor-width` / `--transform-origin`.
- Label → GroupLabel; ItemIndicator → CheckboxItemIndicator / RadioItemIndicator; Sub → SubmenuRoot; SubTrigger → SubmenuTrigger.
- SubContent rebuilt via DropdownMenuContent (own portal/positioner).
- SubTrigger open hook: `data-popup-open` (+ keep `data-open`).
- Stories/demo: `asChild` → `render={<Button />}`.
- `registry/items/dropdown-menu.json`: deps → `@base-ui/react`.

## Left alone

- muffled item/surface styles (`floatingSurfaceClasses`, secondary focus wash, opacity-40 disabled).

## Behavior changes

- **FLAG:** CheckboxItem / RadioItem `closeOnClick` defaults to `false` in Base UI (Radix closed on select). Not patched — callers that need close-on-toggle must set `closeOnClick`.
- `onSelect` → `onClick` + `closeOnClick`; `textValue` → `label`.
- `onOpenChange(open, eventDetails)` gains event details / `cancel()`.

## Verify by hand

- Trigger via Button `render`. Nested submenu. Checkbox/radio stay open on toggle. Paper + ink portal theme.
