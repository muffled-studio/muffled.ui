"use client";

import { Button } from "@/registry/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/ui/tooltip";

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">hover</Button>
        </TooltipTrigger>
        <TooltipContent>short hint on ink and paper.</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
