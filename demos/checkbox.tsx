"use client";

import { Checkbox } from "@/registry/ui/checkbox";
import { Label } from "@/registry/ui/label";

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="terms-paper" />
        <Label htmlFor="terms-paper">accept terms</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms-checked" defaultChecked />
        <Label htmlFor="terms-checked">checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms-disabled" disabled />
        <Label htmlFor="terms-disabled">disabled</Label>
      </div>
    </div>
  );
}
