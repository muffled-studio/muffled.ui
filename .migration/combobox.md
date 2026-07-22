# combobox

2026-07-22. Already on `@base-ui/react`; verify/fix only.

## Changed

- `registry/ui/combobox.tsx`: removed `asChild` on `InputGroupButton` wrapping `ComboboxTrigger` (Button no longer accepts `asChild`).
- Pattern: `<ComboboxTrigger render={<InputGroupButton ... />} />`.

## Left alone

- Stories (no asChild). ChipRemove `render={<Button />}` already correct.

## Behavior changes

- None intentional beyond fixing the type error.

## Verify by hand

- Trigger chevron opens popup. Clear button when `showClear`. Paper + ink.
