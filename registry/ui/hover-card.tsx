"use client";

import { HoverCard as HoverCardPrimitive } from "radix-ui";
import type * as React from "react";

import { cn } from "@/registry/lib/surface";
import { floatingSurfaceClasses } from "@/registry/lib/surface";
import { ThemedPortalShell } from "@/registry/lib/portal-container";

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <ThemedPortalShell>
        <HoverCardPrimitive.Content
          data-slot="hover-card-content"
          align={align}
          sideOffset={sideOffset}
          className={cn(
            "z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-lg p-2.5 text-sm",
            floatingSurfaceClasses(),
            className,
          )}
          {...props}
        />
      </ThemedPortalShell>
    </HoverCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardContent, HoverCardTrigger };
