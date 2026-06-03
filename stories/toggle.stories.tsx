import type { Meta, StoryObj } from "@storybook/react"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { Toggle } from "@/registry/ui/toggle"
import { withTheme } from "./utils/theme-decorator"

const meta = {
  title: "Toggle",
  component: Toggle,
  args: {
    children: "toggle",
  },
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Toggle {...args} />
      <Toggle {...args} variant="outline">
        outline
      </Toggle>
      <Toggle {...args} aria-label="bold">
        <BoldIcon />
      </Toggle>
      <Toggle {...args} aria-label="italic">
        <ItalicIcon />
      </Toggle>
      <Toggle {...args} aria-label="underline">
        <UnderlineIcon />
      </Toggle>
    </div>
  ),
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Toggle {...args} />
      <Toggle {...args} variant="outline">
        outline
      </Toggle>
      <Toggle {...args} aria-label="bold">
        <BoldIcon />
      </Toggle>
      <Toggle {...args} aria-label="italic">
        <ItalicIcon />
      </Toggle>
      <Toggle {...args} aria-label="underline">
        <UnderlineIcon />
      </Toggle>
    </div>
  ),
}
