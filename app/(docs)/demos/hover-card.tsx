"use client";

import { Button } from "@/registry/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/ui/hover-card";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link" />}>
        @muffled
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-1">
          <p className="font-mono text-sm">muffled.studio</p>
          <p className="text-muted-foreground">
            ink-and-paper react primitives.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
