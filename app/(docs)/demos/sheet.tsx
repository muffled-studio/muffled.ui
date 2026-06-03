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
      <SheetTrigger asChild>
        <Button variant="outline">open sheet</Button>
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
          <SheetClose asChild>
            <Button variant="outline">close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
