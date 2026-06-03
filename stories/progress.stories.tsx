import type { Meta, StoryObj } from "@storybook/react"

import { Progress } from "@/registry/ui/progress"
import { withTheme } from "./utils/theme-decorator"

function ProgressDemo() {
  return (
    <div className="flex w-64 flex-col gap-6">
      <Progress value={0} />
      <Progress value={33} />
      <Progress value={66} />
      <Progress value={100} />
    </div>
  )
}

const meta = {
  title: "Progress",
  component: Progress,
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <ProgressDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <ProgressDemo />,
}
