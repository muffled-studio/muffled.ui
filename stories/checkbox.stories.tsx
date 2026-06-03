import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@/registry/ui/checkbox";
import { Label } from "@/registry/ui/label";
import { withTheme } from "./utils/theme-decorator";

function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="terms-paper" />
        <Label htmlFor="terms-paper">accept terms</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms-checked" defaultChecked />
        <Label htmlFor="terms-checked">checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms-disabled" disabled />
        <Label htmlFor="terms-disabled">disabled</Label>
      </div>
    </div>
  );
}

const meta = {
  title: "Checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <CheckboxDemo />,
};

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <CheckboxDemo />,
};
