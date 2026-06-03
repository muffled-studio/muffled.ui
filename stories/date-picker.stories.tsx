import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

import { DatePicker } from "@/registry/ui/date-picker"
import { withTheme } from "./utils/theme-decorator"

function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>()
  return <DatePicker date={date} onDateChange={setDate} />
}

const meta = {
  title: "Date Picker",
  component: DatePicker,
} satisfies Meta<typeof DatePicker>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <DatePickerDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <DatePickerDemo />,
}
