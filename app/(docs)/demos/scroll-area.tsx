"use client";

import { ScrollArea } from "@/registry/ui/scroll-area";

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="space-y-2 p-4">
        {Array.from({ length: 24 }, (_, i) => (
          <p key={i} className="text-sm">
            line {i + 1}
          </p>
        ))}
      </div>
    </ScrollArea>
  )
}
