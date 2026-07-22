import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"

import { cn, focusRingClasses } from "@/registry/lib/surface"

const toggleVariants = cva(
  cn(
    "group/toggle inline-flex shrink-0 items-center justify-center gap-1 rounded-md border border-transparent font-sans text-sm font-medium whitespace-nowrap outline-none select-none transition-opacity duration-[var(--d-drift)] ease-[var(--ease-drift)] hover:opacity-60 active:opacity-40 active:duration-[var(--d-snap)] active:ease-[var(--ease-snap)] disabled:pointer-events-none disabled:opacity-40 aria-invalid:border-destructive aria-pressed:bg-secondary data-pressed:bg-secondary [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    focusRingClasses,
  ),
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border bg-transparent",
      },
      size: {
        default:
          "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "h-7 min-w-7 px-2.5 text-[0.8125rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      data-slot="toggle"
      data-variant={variant}
      data-size={size}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
