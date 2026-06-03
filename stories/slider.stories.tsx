import type { Meta, StoryObj } from "@storybook/react"

import { Slider } from "@/registry/ui/slider"
import { withTheme } from "./utils/theme-decorator"

function SliderDemo() {
  return (
    <div className="flex w-64 flex-col gap-8">
      <Slider defaultValue={[50]} max={100} step={1} />
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
  )
}

const meta = {
  title: "Slider",
  component: Slider,
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <SliderDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <SliderDemo />,
}
