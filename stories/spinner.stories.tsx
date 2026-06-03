import type { Meta, StoryObj } from "@storybook/react"

import { Spinner } from "@/registry/ui/spinner"
import { withTheme } from "./utils/theme-decorator"

const meta = {
  title: "Spinner",
  component: Spinner,
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
}
