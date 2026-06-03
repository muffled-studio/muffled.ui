import type { Meta, StoryObj } from "@storybook/react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/ui/avatar"
import { withTheme } from "./utils/theme-decorator"

function AvatarDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback>sc</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarFallback>sm</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>lg</AvatarFallback>
      </Avatar>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>a</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>b</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>c</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  )
}

const meta = {
  title: "Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <AvatarDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <AvatarDemo />,
}
