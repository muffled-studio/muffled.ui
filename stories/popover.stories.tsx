import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/registry/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/ui/popover"
import { withTheme } from "./utils/theme-decorator"

function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        open
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <PopoverHeader>
          <PopoverTitle>popover</PopoverTitle>
          <PopoverDescription>
            paper surface, 0.5px border, no shadow.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}

const meta = {
  title: "Popover",
  component: Popover,
} satisfies Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <PopoverDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <PopoverDemo />,
}
