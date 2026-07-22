# breadcrumb

2026-07-22, golden pair via base-nova + muffled class/icon replay. Migrated.

## Changed

- `registry/ui/breadcrumb.tsx`: dropped `Slot`/`asChild`; `BreadcrumbLink` uses `useRender` + `mergeProps` with `render` prop (`useRender.ComponentProps<"a">`). Kept lucide icons and muffled classes. Leftover scan clean of radix.

## Left alone

- Stories/demos (no asChild). Separator/ellipsis structure unchanged.

## Behavior changes

- Composition: `asChild` consumers must switch to `render={<Comp />}`.

## Verify by hand

- Breadcrumb links hover to foreground. Current page aria-current. Separator chevron. Ellipsis sr-only.
