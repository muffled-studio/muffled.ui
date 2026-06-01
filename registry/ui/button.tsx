"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap border text-sm uppercase tracking-[-0.01em] transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-ink)]",
  {
    variants: {
      variant: {
        default:
          "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)]",
        outline:
          "border-[var(--color-ink)] bg-[var(--color-paper)] text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]",
        ghost:
          "border-transparent bg-transparent text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[var(--color-paper-2)]",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
