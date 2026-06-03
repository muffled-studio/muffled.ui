import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/registry/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"
import { withTheme } from "./utils/theme-decorator"

function CardDemo() {
  return (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>card title</CardTitle>
        <CardDescription>secondary description text</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            action
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>content area on paper with ink foreground and a hairline border.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">confirm</Button>
      </CardFooter>
    </Card>
  )
}

const meta = {
  title: "Card",
  component: Card,
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <CardDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <CardDemo />,
}
