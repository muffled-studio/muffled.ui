"use client";

import { Button } from "@/registry/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/ui/sheet";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        open sheet
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>sheet title</SheetTitle>
          <SheetDescription>edge panel for secondary flow or detail.</SheetDescription>
        </SheetHeader>
        <div className="px-4 text-sm text-muted-foreground">
          content sits on popover surface with hairline borders.
        </div>
        <SheetFooter>
          <SheetClose render={<Button variant="outline" />}>
            close
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
