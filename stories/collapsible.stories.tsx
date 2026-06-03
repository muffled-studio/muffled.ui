import type { Meta, StoryObj } from "@storybook/react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible"
import { withTheme } from "./utils/theme-decorator"

function CollapsibleDemo() {
  return (
    <Collapsible className="w-[320px]">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md border px-4 py-2 text-sm">
        toggle
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 py-2 text-sm text-muted-foreground">
        expandable content lives here.
      </CollapsibleContent>
    </Collapsible>
  )
}

const meta = {
  title: "Collapsible",
  component: Collapsible,
} satisfies Meta<typeof Collapsible>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <CollapsibleDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <CollapsibleDemo />,
}
