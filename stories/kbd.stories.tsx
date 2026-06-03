import type { Meta, StoryObj } from "@storybook/react"

import { Kbd, KbdGroup } from "@/registry/ui/kbd"
import { withTheme } from "./utils/theme-decorator"

function KbdDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4 font-sans text-sm">
      <Kbd>⌘</Kbd>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>⌃</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
      <Kbd>⏎</Kbd>
      <Kbd>⌫</Kbd>
    </div>
  )
}

const meta = {
  title: "Kbd",
  component: Kbd,
} satisfies Meta<typeof Kbd>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <KbdDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <KbdDemo />,
}
