"use client";

import { Progress } from "@/registry/ui/progress";

export function ProgressDemo() {
  return (
    <div className="flex w-64 flex-col gap-6">
      <Progress value={0} />
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={100} />
    </div>
  )
}
