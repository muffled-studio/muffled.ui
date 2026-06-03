import type { Meta, StoryObj } from "@storybook/react"
import { toast } from "sonner"

import { Button } from "@/registry/ui/button"
import { Toaster } from "@/registry/ui/sonner"
import { withTheme } from "./utils/theme-decorator"

function SonnerDemo({ theme }: { theme: "light" | "dark" }) {
  return (
    <>
      <Toaster theme={theme} />
      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={() => toast("Event has been created")}>default</Button>
        <Button onClick={() => toast.success("Success")}>success</Button>
        <Button onClick={() => toast.info("Info")}>info</Button>
        <Button onClick={() => toast.warning("Warning")}>warning</Button>
        <Button onClick={() => toast.error("Error")}>error</Button>
        <Button onClick={() => toast.loading("Loading...")}>loading</Button>
      </div>
    </>
  )
}

const meta = {
  title: "Sonner",
  component: Toaster,
} satisfies Meta<typeof Toaster>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <SonnerDemo theme="light" />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <SonnerDemo theme="dark" />,
}
