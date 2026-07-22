# checkbox

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/checkbox.tsx`: `@base-ui/react/checkbox`; `CheckboxPrimitive.Root.Props`; kept muffled borders/opacity/focus/CheckIcon stroke 1.5. `disabled:` → `data-disabled:` (Root is a span). Leftover scan clean.

## Left alone

- Stories (no asChild / radix APIs).

## Behavior changes

- Indeterminate is a separate `indeterminate` prop (not `checked="indeterminate"`).
- `onCheckedChange` gains `eventDetails`; checked arg is always boolean.
- Root renders `<span>` + hidden input (was button).

## Verify by hand

- Check / uncheck / disabled in Storybook Checkbox paper+ink. Focus ring. Hover opacity-60, press opacity-40. Form association via id+Label.
