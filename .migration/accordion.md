# accordion

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/accordion.tsx`: `@base-ui/react/accordion`; `Content` → `Panel`; `--radix-accordion-content-height` → `--accordion-panel-height`; `disabled:*` → `aria-disabled:*` (opacity-40); added `data-starting-style`/`data-ending-style` height hooks. Leftover scan clean: `grep -n "radix-ui\|@radix-ui" registry/ui/accordion.tsx` → empty.
- `stories/accordion.stories.tsx`: dropped Radix `type="single" collapsible` (Base UI single is default + always collapsible).
- `app/(docs)/demos/accordion.tsx`: same call-site prop update.

## Left alone

- components.json, button/label/separator/badge (other batch). Non-radix libs untouched.

## Behavior changes

- `type` / `collapsible` removed: use `multiple` boolean; single mode is always collapsible. Controlled `value`/`defaultValue`/`onValueChange` are always arrays.
- Accordion panels do not emit `data-closed` (unlike collapsible); closed animation hooks rely on `data-starting-style`/`data-ending-style` + absence of `data-open`.

## Verify by hand

- Storybook Accordion paper+ink: open/close one item, collapse last open item, keyboard focus on triggers, chevron swap, no shadow/scale.
