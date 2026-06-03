import type * as React from "react";

import { cn } from "@/registry/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("rounded-md bg-secondary", className)}
      {...props}
    />
  );
}

export { Skeleton };
