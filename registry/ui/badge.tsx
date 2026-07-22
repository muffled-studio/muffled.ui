import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/registry/lib/surface"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center gap-1.5 rounded-md border border-current bg-transparent px-2 py-[3px] font-mono text-[10px] font-medium tracking-[0.06em] lowercase whitespace-nowrap outline-none [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "text-muted-foreground",
        filled: "border-primary bg-primary text-primary-foreground",
        red: "text-u-red",
        green: "text-u-green",
        amber: "text-u-amber",
        blue: "text-u-blue",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function BadgeDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("size-1.5 shrink-0 rounded-full bg-current", className)}
    />
  )
}

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, BadgeDot, badgeVariants }
