"use client";

import { Label } from "@/registry/ui/label";

export function LabelDemo() {
  return (
    <div className="flex max-w-xs flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Label htmlFor="demo-name">name</Label>
        <input
          id="demo-name"
          className="rounded-md border border-border bg-background px-2.5 py-2 font-mono text-xs text-foreground outline-none focus-visible:outline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-ring"
          placeholder="value"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="demo-disabled">disabled</Label>
        <input
          id="demo-disabled"
          disabled
          className="rounded-md border border-border bg-background px-2.5 py-2 font-mono text-xs text-foreground opacity-40 outline-none"
        />
      </div>
    </div>
  );
}
