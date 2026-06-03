import type { Meta, StoryObj } from "@storybook/react"
import { Search } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/ui/input-group"
import { withTheme } from "./utils/theme-decorator"

function InputGroupDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-6">
      <InputGroup>
        <InputGroupAddon>
          <Search className="size-4 stroke-[1.5]" />
        </InputGroupAddon>
        <InputGroupInput placeholder="search" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="muffled.studio" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="email" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>send</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>note</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="we build things." rows={3} />
      </InputGroup>
    </div>
  )
}

const meta = {
  title: "Input Group",
  component: InputGroup,
} satisfies Meta<typeof InputGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <InputGroupDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <InputGroupDemo />,
}
