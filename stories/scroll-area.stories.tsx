import type { Meta, StoryObj } from "@storybook/react"

import { ScrollArea } from "@/registry/ui/scroll-area"
import { withTheme } from "./utils/theme-decorator"

function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="space-y-2 p-4">
        {Array.from({ length: 24 }, (_, i) => (
          <p key={i} className="text-sm">
            line {i + 1}
          </p>
        ))}
      </div>
    </ScrollArea>
  )
}

const meta = {
  title: "Scroll Area",
  component: ScrollArea,
} satisfies Meta<typeof ScrollArea>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <ScrollAreaDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <ScrollAreaDemo />,
}
