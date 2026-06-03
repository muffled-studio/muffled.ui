"use client";

import { Button } from "@/registry/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/ui/popover";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">open</Button>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <PopoverHeader>
          <PopoverTitle>popover</PopoverTitle>
          <PopoverDescription>
            paper surface, 0.5px border, no shadow.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}
