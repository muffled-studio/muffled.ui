"use client";

import { Badge, BadgeDot } from "@/registry/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>
          <BadgeDot />
          draft
        </Badge>
        <Badge variant="green">
          <BadgeDot />
          shipped
        </Badge>
        <Badge variant="amber">
          <BadgeDot />
          in progress
        </Badge>
        <Badge variant="red">
          <BadgeDot />
          blocked
        </Badge>
        <Badge variant="blue">
          <BadgeDot />
          reference
        </Badge>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="filled">v0.1</Badge>
        <Badge>tag</Badge>
        <Badge>internal</Badge>
        <Badge>small</Badge>
        <Badge>tiny</Badge>
      </div>
    </div>
  );
}
