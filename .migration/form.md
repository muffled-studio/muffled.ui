# form

2026-07-22, transformation engine (no base-nova form golden; RHF form still registry:ui stub). Migrated.

## Changed

- `registry/ui/form.tsx`: dropped radix `Label` types + `Slot`; `FormLabel` uses `React.ComponentProps<"label">`; `FormControl` uses `useRender` + `mergeProps` (`render` preferred; element `children` still accepted as Slot-compat). Leftover scan clean of radix.

## Left alone

- Stories/demos (children FormControl still works). react-hook-form stack unchanged. Not migrating to Base UI Form/Field primitives (different product surface).

## Behavior changes

- Preferred composition for FormControl is `render={<Input />}`; children-as-element still slots for compatibility.

## Verify by hand

- Label links to control via htmlFor. Invalid sets aria-invalid + destructive message. Description/message ids wire aria-describedby.
