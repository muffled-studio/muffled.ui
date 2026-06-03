import * as React from "react"

import { cn } from "@/registry/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full resize-y rounded-md border-[0.5px] border-border bg-transparent px-3 py-2 font-sans text-sm text-foreground outline-none transition-opacity duration-[var(--d-drift)] ease-[var(--ease-drift)] placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-[0.5px] focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
