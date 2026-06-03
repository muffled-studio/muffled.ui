import type { Meta, StoryObj } from "@storybook/react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/ui/tabs"
import { withTheme } from "./utils/theme-decorator"

function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-[360px]">
      <TabsList>
        <TabsTrigger value="overview">overview</TabsTrigger>
        <TabsTrigger value="changelog">changelog</TabsTrigger>
        <TabsTrigger value="settings">settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="pt-4 text-muted-foreground">
        overview panel
      </TabsContent>
      <TabsContent value="changelog" className="pt-4 text-muted-foreground">
        changelog panel
      </TabsContent>
      <TabsContent value="settings" className="pt-4 text-muted-foreground">
        settings panel
      </TabsContent>
    </Tabs>
  )
}

function TabsLineDemo() {
  return (
    <Tabs defaultValue="overview" className="w-[360px]">
      <TabsList variant="line">
        <TabsTrigger value="overview">overview</TabsTrigger>
        <TabsTrigger value="changelog">changelog</TabsTrigger>
        <TabsTrigger value="settings">settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="pt-4 text-muted-foreground">
        overview panel
      </TabsContent>
      <TabsContent value="changelog" className="pt-4 text-muted-foreground">
        changelog panel
      </TabsContent>
      <TabsContent value="settings" className="pt-4 text-muted-foreground">
        settings panel
      </TabsContent>
    </Tabs>
  )
}

const meta = {
  title: "Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => (
    <div className="flex flex-col gap-10">
      <TabsDemo />
      <TabsLineDemo />
    </div>
  ),
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => (
    <div className="flex flex-col gap-10">
      <TabsDemo />
      <TabsLineDemo />
    </div>
  ),
}
