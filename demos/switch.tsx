"use client";

import { Switch } from "@/registry/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
      <Switch size="sm" />
      <Switch size="sm" defaultChecked />
    </div>
  )
}
