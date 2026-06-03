"use client";

import { Button } from "@/registry/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>action</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="link">link</Button>
    </div>
  );
}
