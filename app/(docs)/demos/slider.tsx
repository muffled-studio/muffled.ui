"use client";

import { Slider } from "@/registry/ui/slider";

export function SliderDemo() {
  return (
    <div className="flex w-64 flex-col gap-8">
      <Slider defaultValue={[50]} max={100} step={1} />
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
  )
}
