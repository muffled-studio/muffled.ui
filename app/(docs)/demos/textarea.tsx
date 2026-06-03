"use client";

import { Textarea } from "@/registry/ui/textarea";

export function TextareaDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Textarea placeholder="we type here." />
      <Textarea defaultValue="prefilled copy on paper or ink." />
      <Textarea placeholder="disabled" disabled />
      <Textarea placeholder="invalid" aria-invalid />
    </div>
  )
}
