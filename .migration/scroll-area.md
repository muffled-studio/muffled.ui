# scroll-area

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/scroll-area.tsx`: `@base-ui/react/scroll-area`; `Scrollbar` / `Thumb` part names (was ScrollAreaScrollbar / ScrollAreaThumb). Kept muffled focus ring on viewport. Leftover scan clean.

## Left alone

- Stories (no asChild / type / scrollHideDelay).

## Behavior changes

- Root `type` / `scrollHideDelay` dropped — scrollbar visibility is CSS/`data-hovering`/`data-scrolling` driven.
- Optional `ScrollArea.Content` for horizontal overflow measurement not added (vertical demos fine).

## Verify by hand

- Tall list scrolls; scrollbar thumb visible. Keyboard focus on viewport. Horizontal if exercised.
