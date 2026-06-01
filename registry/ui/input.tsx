import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/lib/utils";

const inputVariants = cva(
  "w-full border bg-[var(--color-paper)] text-[var(--color-ink)] uppercase tracking-[-0.01em] outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-muted-ink)] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-[var(--color-ink)]",
  {
    variants: {
      size: {
        sm: "h-8 px-2 text-xs",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

function Input({ className, type, size, ...props }: InputProps) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(inputVariants({ size }), className)}
      {...props}
    />
  );
}

export { Input, inputVariants };
