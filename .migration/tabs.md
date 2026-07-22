# tabs

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/tabs.tsx`: `@base-ui/react/tabs`; `Trigger` → `Tab`, `Content` → `Panel`; pass `orientation` through to Root; add `aria-disabled:*` alongside `disabled:*`; kept muffled line/default variants + hairline indicator. Leftover scan clean: `grep -n "radix-ui\|@radix-ui" registry/ui/tabs.tsx` → empty.
- Stories unchanged (string `defaultValue` / `value` still valid).

## Left alone

- Non-batch components; components.json.

## Behavior changes

- **Activation default inverted:** Radix `activationMode` defaulted to `"automatic"` (focus activates). Base UI `Tabs.List` `activateOnFocus` defaults to `false` (manual — activate on click/Enter/Space). Not patched; set `activateOnFocus` on `TabsList` to restore Radix automatic behavior.
- `forceMount` → `keepMounted` on Panel.

## Verify by hand

- Storybook Tabs paper+ink (default + line): click switches panels; arrow keys move focus without activating unless `activateOnFocus`; vertical orientation if exercised.
