"use client";

import { Skeleton } from "@/registry/ui/skeleton";

export function SkeletonDemo() {
  return (
    <div className="flex w-[280px] flex-col gap-3">
      <Skeleton className="h-4 w-3/5" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
      <div className="flex gap-3 pt-1">
        <Skeleton className="size-10 shrink-0 rounded-md" />
        <div className="flex flex-1 flex-col gap-2">
          <Skeleton className="h-3 w-2/5" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      </div>
    </div>
  );
}
