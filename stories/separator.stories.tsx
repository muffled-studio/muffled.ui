import type { Meta, StoryObj } from "@storybook/react"

import { Separator } from "@/registry/ui/separator"
import { withTheme } from "./utils/theme-decorator"

function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="space-y-1">
        <p className="font-sans text-sm font-medium">section one</p>
        <p className="font-sans text-sm text-muted-foreground">
          detail about section one
        </p>
      </div>
      <Separator />
      <div className="space-y-1">
        <p className="font-sans text-sm font-medium">section two</p>
        <p className="font-sans text-sm text-muted-foreground">
          detail about section two
        </p>
      </div>
      <div className="flex h-5 items-center gap-4 font-sans text-sm">
        <span>blog</span>
        <Separator orientation="vertical" />
        <span>docs</span>
        <Separator orientation="vertical" />
        <span>source</span>
      </div>
    </div>
  )
}

const meta = {
  title: "Separator",
  component: Separator,
} satisfies Meta<typeof Separator>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <SeparatorDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <SeparatorDemo />,
}
