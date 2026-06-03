"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible";

export function CollapsibleDemo() {
  return (
    <Collapsible className="w-[320px]">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-sm">
        toggle
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 py-2 text-sm text-muted-foreground">
        expandable content lives here.
      </CollapsibleContent>
    </Collapsible>
  )
}
