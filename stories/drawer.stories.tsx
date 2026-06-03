import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/registry/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/ui/drawer"
import { withTheme } from "./utils/theme-decorator"

function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">open drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>drawer title</DrawerTitle>
          <DrawerDescription>secondary flow or detail panel.</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 pb-4 text-sm text-muted-foreground">
          content sits on popover surface with hairline borders.
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const meta = {
  title: "Drawer",
  component: DrawerDemo,
} satisfies Meta<typeof DrawerDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <DrawerDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <DrawerDemo />,
}
