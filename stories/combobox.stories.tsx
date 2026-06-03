import type { Meta, StoryObj } from "@storybook/react"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/ui/combobox"
import { withTheme } from "./utils/theme-decorator"

const roles = ["solo", "studio", "agency"]

function ComboboxDemo() {
  return (
    <Combobox items={roles}>
      <ComboboxInput placeholder="role" className="w-[180px]" />
      <ComboboxContent>
        <ComboboxEmpty>no matches.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

const meta = {
  title: "Combobox",
  component: ComboboxDemo,
} satisfies Meta<typeof ComboboxDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <ComboboxDemo />,
}

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <ComboboxDemo />,
}
