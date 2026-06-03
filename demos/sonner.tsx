"use client";

import { toast } from "sonner";

import { Button } from "@/registry/ui/button";
import { Toaster } from "@/registry/ui/sonner";

export function SonnerDemo({ theme = "light" }: { theme?: "light" | "dark" }) {
  return (
    <>
      <Toaster theme={theme} />
      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={() => toast("event has been created")}>default</Button>
        <Button onClick={() => toast.success("success")}>success</Button>
        <Button onClick={() => toast.info("info")}>info</Button>
        <Button onClick={() => toast.warning("warning")}>warning</Button>
        <Button onClick={() => toast.error("error")}>error</Button>
        <Button onClick={() => toast.loading("loading…")}>loading</Button>
      </div>
    </>
  );
}
