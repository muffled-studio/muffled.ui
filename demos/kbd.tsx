"use client";

import { Kbd, KbdGroup } from "@/registry/ui/kbd";

export function KbdDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4 font-sans text-sm">
      <Kbd>⌘</Kbd>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌃</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <Kbd>⏎</Kbd>
      <Kbd>⌫</Kbd>
    </div>
  )
}
