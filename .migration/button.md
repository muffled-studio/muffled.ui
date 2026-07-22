# button

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `components.json`: `radix-nova` → `base-nova`
- `registry/ui/button.tsx`: `@base-ui/react/button` `ButtonPrimitive`; dropped `asChild`/`Slot` (use `render` from Base UI props, or `buttonVariants` on `<a>` for links). Kept muffled variants, focus ring, opacity press, mono. Leftover scan clean of radix.

## Left alone

- Stories (no asChild). Consumers still passing `asChild` to Button: alert-dialog, combobox, pagination — fixed in later batches.

## Behavior changes

- Link composition: prefer `buttonVariants` on `<a>`, not `render` (Base UI Button forces `role="button"`).

## Verify by hand

- Variants/sizes in Storybook Button paper+ink. Focus ring ink/56. Disabled opacity-40. No scale on press.
