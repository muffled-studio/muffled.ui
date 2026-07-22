# toggle

2026-07-22, golden pair via base-nova registry + muffled class replay. Migrated.

## Changed

- `registry/ui/toggle.tsx`: `@base-ui/react/toggle` callable primitive; `data-[state=on]` → `data-pressed`; kept muffled variants/sizes + opacity press. Leftover scan clean: `grep -n "radix-ui\|@radix-ui" registry/ui/toggle.tsx` → empty.
- Stories unchanged (no asChild).

## Left alone

- toggle-group (migrated in same batch, separate report).

## Behavior changes

- `onPressedChange` gains `eventDetails`. Off state is absence of `data-pressed` (not `data-state=off`).

## Verify by hand

- Storybook Toggle paper+ink: press on/off, outline variant, icon toggles, focus ring, disabled opacity-40.
