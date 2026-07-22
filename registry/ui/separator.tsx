"use client"

import { Separator as SeparatorPrimitive } from "@base-ui/react/separator"

import { cn } from "@/registry/lib/surface"

function Separator({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border shadow-none data-horizontal:h-hairline data-horizontal:w-full data-vertical:h-full data-vertical:w-hairline data-vertical:self-stretch",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
