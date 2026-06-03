import type { Meta, StoryObj } from "@storybook/react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select"
import { withTheme } from "./utils/theme-decorator"

function SelectDemo() {
  return (
    <Select defaultValue="solo">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>role</SelectLabel>
          <SelectItem value="solo">solo</SelectItem>
          <SelectItem value="studio">studio</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const meta = {
  title: "Select",
  component: SelectDemo,
} satisfies Meta<typeof SelectDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <SelectDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <SelectDemo />,
}
