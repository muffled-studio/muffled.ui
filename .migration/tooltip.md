# tooltip

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/tooltip.tsx`: `@base-ui/react/tooltip`; Provider `delayDuration`→`delay` (default 0 kept); Content → Portal > Positioner > Popup; muffled paper surface + arrow (not inverted ink chip); `--transform-origin`; dropped `data-[state=delayed-open]` hooks. Leftover scan clean.
- `registry/items/tooltip.json`: dep `radix-ui`→`@base-ui/react`.
- `app/(docs)/demos/tooltip.tsx`, `stories/tooltip.stories.tsx`: Trigger `asChild`→`render`.

## Left alone

- App-wide TooltipProvider consumers outside these demos (sweep if any pass `delayDuration`).

## Behavior changes

- Provider: `delayDuration`→`delay`; `skipDelayDuration`→`timeout` (default 300→400 if used).
- Root `disableHoverableContent`→`disableHoverablePopup`.
- Trigger default open delay is 600 when Provider does not set `delay`; muffled Provider still defaults `delay={0}`.

## Verify by hand

- Hover/focus show; Provider delay=0 feels instant. Arrow placement. Paper/ink.
