import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/registry/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/ui/tooltip"
import { withTheme } from "./utils/theme-decorator"

function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          hover
        </TooltipTrigger>
        <TooltipContent>short hint on ink and paper.</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const meta = {
  title: "Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <TooltipDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <TooltipDemo />,
}
