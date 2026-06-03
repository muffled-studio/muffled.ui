import type { Meta, StoryObj } from "@storybook/react"

import { Label } from "@/registry/ui/label"
import { withTheme } from "./utils/theme-decorator"

const meta = {
  title: "Label",
  component: Label,
  args: {
    children: "name",
  },
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: (args) => (
    <div className="flex max-w-xs flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Label {...args} htmlFor="paper-name" />
        <input
          id="paper-name"
          className="rounded-md border-[0.5px] border-border bg-background px-2.5 py-2 font-mono text-xs text-foreground outline-none focus-visible:outline focus-visible:outline-[0.5px] focus-visible:outline-offset-2 focus-visible:outline-ring"
          placeholder="value"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label {...args} htmlFor="paper-disabled">
          disabled
        </Label>
        <input
          id="paper-disabled"
          disabled
          className="peer rounded-md border-[0.5px] border-border bg-background px-2.5 py-2 font-mono text-xs text-foreground opacity-40 outline-none"
        />
      </div>
    </div>
  ),
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: (args) => (
    <div className="flex max-w-xs flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Label {...args} htmlFor="ink-name" />
        <input
          id="ink-name"
          className="rounded-md border-[0.5px] border-border bg-background px-2.5 py-2 font-mono text-xs text-foreground outline-none focus-visible:outline focus-visible:outline-[0.5px] focus-visible:outline-offset-2 focus-visible:outline-ring"
          placeholder="value"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Label {...args} htmlFor="ink-disabled">
          disabled
        </Label>
        <input
          id="ink-disabled"
          disabled
          className="peer rounded-md border-[0.5px] border-border bg-background px-2.5 py-2 font-mono text-xs text-foreground opacity-40 outline-none"
        />
      </div>
    </div>
  ),
}
