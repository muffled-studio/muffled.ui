import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/registry/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ui/dialog"
import { withTheme } from "./utils/theme-decorator"

function DialogDemo() {
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

const meta = {
  title: "Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <DialogDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <DialogDemo />,
}
