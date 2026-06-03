import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "@/registry/ui/input"
import { withTheme } from "./utils/theme-decorator"

function InputDemo() {
  return (
    <div className="flex max-w-xs flex-col gap-3">
      <Input defaultValue="josh batley" />
      <Input placeholder="muffled" />
      <Input defaultValue="not-an-email" aria-invalid />
      <Input disabled defaultValue="disabled" />
    </div>
  )
}

const meta = {
  title: "Input",
  component: Input,
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <InputDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <InputDemo />,
}
