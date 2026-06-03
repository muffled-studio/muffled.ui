import type { Meta, StoryObj } from "@storybook/react"

import { Badge, BadgeDot } from "@/registry/ui/badge"
import { withTheme } from "./utils/theme-decorator"

const meta = {
  title: "Badge",
  component: Badge,
  args: {
    children: "draft",
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

const statusRow = (
  <>
    <Badge>
      <BadgeDot />
      draft
    </Badge>
    <Badge variant="green">
      <BadgeDot />
      shipped
    </Badge>
    <Badge variant="amber">
      <BadgeDot />
      in progress
    </Badge>
    <Badge variant="red">
      <BadgeDot />
      blocked
    </Badge>
    <Badge variant="blue">
      <BadgeDot />
      reference
    </Badge>
  </>
)

const tagRow = (
  <>
    <Badge variant="filled">v0.1</Badge>
    <Badge>tag</Badge>
    <Badge>internal</Badge>
    <Badge>small</Badge>
    <Badge>tiny</Badge>
  </>
)

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">{statusRow}</div>
      <div className="flex flex-wrap items-center gap-2">{tagRow}</div>
    </div>
  ),
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">{statusRow}</div>
      <div className="flex flex-wrap items-center gap-2">{tagRow}</div>
    </div>
  ),
}
