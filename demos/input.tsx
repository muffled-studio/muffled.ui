"use client";

import { Input } from "@/registry/ui/input";

export function InputDemo() {
  return (
    <div className="flex max-w-xs flex-col gap-3">
      <Input defaultValue="josh batley" />
      <Input placeholder="muffled" />
      <Input defaultValue="not-an-email" aria-invalid />
      <Input disabled defaultValue="disabled" />
    </div>
  )
}
