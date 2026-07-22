# project

2026-07-22, whole-project radix-nova → base-nova. Foundation + batches A–E merged; finish sweep done.

## Changed

- `components.json` style `base-nova`
- All radix-backed `registry/ui` wrappers on `@base-ui/react` (or native label / useRender)
- Registry item manifests: `radix-ui` → `@base-ui/react` (or dropped)
- Removed `radix-ui` and `@radix-ui/react-slot` from package.json
- Finish fixes: sidebar TooltipTrigger `render`, date-picker PopoverTrigger `render`, command Dialog children typing, progress story args

## Left alone

- command (cmdk), drawer (vaul — still uses `asChild`), sonner, calendar/date-picker day-picker core, input-otp

## Behavior changes

See per-component `.migration/*.md` (tabs manual activation, alert-dialog Action close, menu checkbox closeOnClick, nav-menu delay, etc.).

## Verify by hand

- `bunx tsc --noEmit`
- `bun run build:registry && bun run build`
- `bun run test:visual` / update snapshots if intentional
