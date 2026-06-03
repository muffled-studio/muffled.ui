import type { Meta, StoryObj } from "@storybook/react"

import { Textarea } from "@/registry/ui/textarea"
import { withTheme } from "./utils/theme-decorator"

function TextareaDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Textarea placeholder="we type here." />
      <Textarea defaultValue="prefilled copy on paper or ink." />
      <Textarea placeholder="disabled" disabled />
      <Textarea placeholder="invalid" aria-invalid />
    </div>
  )
}

const meta = {
  title: "Textarea",
  component: Textarea,
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <TextareaDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <TextareaDemo />,
}
