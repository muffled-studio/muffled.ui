"use client";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { Toggle } from "@/registry/ui/toggle";

export function ToggleDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Toggle>toggle</Toggle>
      <Toggle variant="outline">outline</Toggle>
      <Toggle aria-label="bold">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="italic">
        <ItalicIcon />
      </Toggle>
      <Toggle aria-label="underline">
        <UnderlineIcon />
      </Toggle>
    </div>
  );
}
