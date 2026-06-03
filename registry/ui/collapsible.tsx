"use client"

import { Collapsible as CollapsiblePrimitive } from "radix-ui"
import type * as React from "react"
import { cn } from "@/registry/lib/utils"

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      className="overflow-hidden text-sm duration-[var(--d-drift)] ease-[var(--ease-drift)] data-open:animate-collapsible-down data-closed:animate-collapsible-up"
      {...props}
    >
      <div className={cn("h-(--radix-collapsible-content-height)", className)}>
        {children}
      </div>
    </CollapsiblePrimitive.CollapsibleContent>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
