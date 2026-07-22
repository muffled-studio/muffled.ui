import type * as React from "react"

import { cn } from "@/registry/lib/surface"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "flex items-center gap-2 font-mono text-xs font-normal lowercase leading-none tracking-wide text-muted-foreground transition-opacity duration-[var(--d-drift)] ease-[var(--ease-drift)] outline-none select-none hover:opacity-60 active:opacity-40 active:duration-[var(--d-snap)] active:ease-[var(--ease-snap)] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-ring group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-40 peer-disabled:cursor-not-allowed peer-disabled:opacity-40",
        className
      )}
      {...props}
    />
  )
}

export { Label }
