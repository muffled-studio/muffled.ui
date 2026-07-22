"use client"

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"

import { cn, floatingSurfaceClasses } from "@/registry/lib/surface"
import { ThemedPortalShell } from "@/registry/lib/portal-container"

function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({ ...props }: PreviewCardPrimitive.Trigger.Props) {
  return (
    <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  ...props
}: PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
      <ThemedPortalShell>
        <PreviewCardPrimitive.Positioner
          align={align}
          alignOffset={alignOffset}
          side={side}
          sideOffset={sideOffset}
          className="isolate z-50"
        >
          <PreviewCardPrimitive.Popup
            data-slot="hover-card-content"
            className={cn(
              "z-50 w-64 origin-(--transform-origin) rounded-lg p-2.5 text-sm",
              floatingSurfaceClasses(),
              className
            )}
            {...props}
          />
        </PreviewCardPrimitive.Positioner>
      </ThemedPortalShell>
    </PreviewCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
