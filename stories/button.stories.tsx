import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/registry/ui/button"
import { withTheme } from "./utils/theme-decorator"

const meta = {
  title: "Button",
  component: Button,
  args: {
    children: "action",
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} />
      <Button {...args} variant="outline">
        outline
      </Button>
      <Button {...args} variant="secondary">
        secondary
      </Button>
      <Button {...args} variant="ghost">
        ghost
      </Button>
      <Button {...args} variant="destructive">
        destructive
      </Button>
      <Button {...args} variant="link">
        link
      </Button>
    </div>
  ),
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} />
      <Button {...args} variant="outline">
        outline
      </Button>
      <Button {...args} variant="secondary">
        secondary
      </Button>
      <Button {...args} variant="ghost">
        ghost
      </Button>
      <Button {...args} variant="destructive">
        destructive
      </Button>
      <Button {...args} variant="link">
        link
      </Button>
    </div>
  ),
}
