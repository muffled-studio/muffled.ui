import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/registry/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/ui/sheet"
import { withTheme } from "./utils/theme-decorator"

function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">open sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>sheet title</SheetTitle>
          <SheetDescription>edge panel for secondary flow or detail.</SheetDescription>
        </SheetHeader>
        <div className="px-4 text-sm text-muted-foreground">
          content sits on popover surface with hairline borders.
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

const meta = {
  title: "Sheet",
  component: SheetDemo,
} satisfies Meta<typeof SheetDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <SheetDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <SheetDemo />,
}
