"use client";

import { Separator } from "@/registry/ui/separator";

export function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="space-y-1">
        <p className="font-sans text-sm font-medium">section one</p>
        <p className="font-sans text-sm text-muted-foreground">
          detail about section one
        </p>
      </div>
      <Separator />
      <div className="space-y-1">
        <p className="font-sans text-sm font-medium">section two</p>
        <p className="font-sans text-sm text-muted-foreground">
          detail about section two
        </p>
      </div>
      <div className="flex h-5 items-center gap-4 font-sans text-sm">
        <span>blog</span>
        <Separator orientation="vertical" />
        <span>docs</span>
        <Separator orientation="vertical" />
        <span>source</span>
      </div>
    </div>
  )
}
