import type { Meta, StoryObj } from "@storybook/react"
import { Bold, Italic, Underline } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/ui/toggle-group"
import { withTheme } from "./utils/theme-decorator"

function ToggleGroupDemo() {
  return (
    <div className="flex flex-col gap-8">
      <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" variant="outline" defaultValue="bold">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}

const meta = {
  title: "Toggle Group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <ToggleGroupDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <ToggleGroupDemo />,
}
