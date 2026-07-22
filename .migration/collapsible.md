# collapsible

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/collapsible.tsx`: `@base-ui/react/collapsible`; `CollapsibleContent` → `Panel`; `--radix-collapsible-content-height` → `--collapsible-panel-height`; kept muffled open/close height animation wrapper. Leftover scan clean: `grep -n "radix-ui\|@radix-ui" registry/ui/collapsible.tsx` → empty.

## Left alone

- `stories/collapsible.stories.tsx` (no asChild / radix-only props). Other batches' components.

## Behavior changes

- `onOpenChange` gains a second `eventDetails` argument. Trigger open marker is `data-panel-open` (not `data-state`).

## Verify by hand

- Storybook Collapsible paper+ink: toggle open/close, height animate, trigger focus ring.
