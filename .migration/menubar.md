# menubar

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/menubar.tsx`: root → `@base-ui/react/menubar` callable `Menubar`; menus/items delegate to `@muffled/dropdown-menu` (Menu under the hood).
- CheckboxItem / RadioItem keep direct `Menu` primitives for indicators.
- `registry/items/menubar.json`: deps → `@base-ui/react`; registryDep `@muffled/dropdown-menu`.

## Left alone

- muffled trigger opacity press, accent focus on items, separator `h-px bg-border`.

## Behavior changes

- **FLAG:** Root `value` / `defaultValue` / `onValueChange` (active menu) dropped. Control per `MenubarMenu`/`DropdownMenu` `open` if needed.
- `loop` → `loopFocus` (default flips to `true`).
- Same CheckboxItem/RadioItem `closeOnClick` default flip as dropdown-menu (flagged, not patched).

## Verify by hand

- Hover-switch between File/Edit. Submenu find. Keyboard arrow nav. Paper + ink.
