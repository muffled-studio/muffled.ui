import { cn } from "@/registry/lib/surface"

function Spinner({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={cn("inline-flex size-4 items-center justify-center gap-[0.2em] text-current", className)}
      {...props}
    >
      <span className="aspect-square h-[22%] rounded-full bg-current opacity-100" />
      <span className="aspect-square h-[22%] rounded-full bg-current opacity-60" />
      <span className="aspect-square h-[22%] rounded-full bg-current opacity-40" />
    </span>
  )
}

export { Spinner }
