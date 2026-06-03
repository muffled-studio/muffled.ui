import type { Meta, StoryObj } from "@storybook/react"

import { Switch } from "@/registry/ui/switch"
import { withTheme } from "./utils/theme-decorator"

function SwitchDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Switch />
      <Switch defaultChecked />
      <Switch disabled />
      <Switch size="sm" />
      <Switch size="sm" defaultChecked />
    </div>
  )
}

const meta = {
  title: "Switch",
  component: Switch,
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <SwitchDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <SwitchDemo />,
}
