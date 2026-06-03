"use client";

import { Button } from "@/registry/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ui/dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>dialog</DialogTitle>
          <DialogDescription>
            paper surface, 0.5px border, ink scrim. no shadow, no blur.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">cancel</Button>
          <Button>confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
