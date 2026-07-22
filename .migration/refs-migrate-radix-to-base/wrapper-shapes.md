# Target wrapper shapes (golden-derived specifics)

Facts learned by diffing hand migrations against the shadcn base registry
wrappers. These close gaps the mapping tables cannot express: exact classes,
defaults, and composition shapes. When migrating shadcn-style wrappers,
prefer these shapes.

## Conventions

- Positioner parts get NO `data-slot` attribute; keep data-slot on the parts
  the radix wrapper already had.
- Menu-family Positioner: `className="isolate z-50 outline-none"`; the Popup
  KEEPS `z-50` and `outline-none` too. Tooltip: Popup keeps `z-50`,
  Positioner gets `isolate z-50`. Select: `isolate z-50` lives on the Popup,
  Positioner gets no class.
- The base registry adds `cn-<comp>-content-logical` (and for tooltip also
  `cn-tooltip-arrow-logical`) companion classes next to the existing
  `cn-<comp>-content` hooks on popover, tooltip, hover-card, dropdown,
  context-menu, select, menubar popups. Add them when the source uses cn-*
  hooks; skip for plain-Tailwind projects.

## Button

Base UI HAS a Button primitive: `import { Button as ButtonPrimitive } from
"@base-ui/react/button"`. A shadcn button.tsx with the Slot/asChild idiom
migrates to `<ButtonPrimitive>` directly (which supports `render`), NOT to a
hand-rolled useRender wrapper. Reserve useRender + mergeProps for
non-button polymorphic components (breadcrumb link, marker).

## Tooltip Arrow (literal classes)

```tsx
<TooltipPrimitive.Arrow
  className={cn(
    "cn-tooltip-arrow cn-tooltip-arrow-logical",
    "data-[side=bottom]:top-1 data-[side=left]:right-[-13px] data-[side=left]:top-1/2! data-[side=left]:-translate-y-1/2 data-[side=right]:left-[-13px] data-[side=right]:top-1/2! data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5",
    className
  )}
/>
