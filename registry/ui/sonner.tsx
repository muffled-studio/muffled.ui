"use client"

import { Toaster as Sonner, type ToasterProps } from "sonner"
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"

import { cn } from "@/registry/lib/utils"

const Toaster = ({ theme = "light", ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={theme}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: cn(
            "group/toast pointer-events-auto w-full rounded-md border-[0.5px] border-border bg-popover p-4 font-sans text-sm text-popover-foreground shadow-none"
          ),
          title: "font-sans text-sm font-medium text-foreground",
          description: "font-sans text-sm text-muted-foreground",
          actionButton: cn(
            "inline-flex h-7 shrink-0 items-center justify-center rounded-md border-[0.5px] border-border bg-background px-2.5 font-sans text-sm font-medium text-foreground transition-opacity duration-[var(--d-drift)] ease-[var(--ease-drift)] hover:opacity-60 active:opacity-40"
          ),
          cancelButton: cn(
            "inline-flex h-7 shrink-0 items-center justify-center rounded-md border-[0.5px] border-border bg-background px-2.5 font-sans text-sm font-medium text-foreground transition-opacity duration-[var(--d-drift)] ease-[var(--ease-drift)] hover:opacity-60 active:opacity-40"
          ),
          closeButton: cn(
            "absolute right-2 top-2 rounded-md border-[0.5px] border-transparent text-foreground transition-opacity duration-[var(--d-drift)] ease-[var(--ease-drift)] hover:opacity-60 active:opacity-40"
          ),
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
