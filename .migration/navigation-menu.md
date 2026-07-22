# navigation-menu

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/navigation-menu.tsx`: `radix-ui` → `@base-ui/react/navigation-menu`.
- Dropped `viewport` boolean. Root always mounts `NavigationMenuPositioner` (`Portal > ThemedPortalShell > Positioner > Popup > Viewport`).
- Export `NavigationMenuPositioner` instead of `NavigationMenuViewport`.
- Indicator → `Icon` (chevron-in-trigger role; no list-tracking indicator).
- Content motion → `data-starting-style` / `data-ending-style` + `data-activation-direction`.
- Vars → `--positioner-*` / `--popup-*` / `--available-width` / `--transform-origin`.
- `registry/items/navigation-menu.json`: deps → `@base-ui/react`.

## Left alone

- muffled opacity hover/press on trigger + link; `floatingSurfaceClasses` on Popup.

## Behavior changes

- **FLAG:** `delayDuration` (200) → `delay` (Base default 50). `skipDelayDuration` dropped; Base has `closeDelay` (50). Not patched to Radix timings.
- Link: Radix closed on select by default; Base `closeOnClick` defaults `false` — flag, not patched.
- No Base part tracks active trigger along the list (Indicator → Icon role change).

## Verify by hand

- Hover open product panel. Switch items (activation slide). Link docs with trigger style. Paper + ink.
