import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/registry/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group";
import { withTheme } from "./utils/theme-decorator";

function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable" className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">compact</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="disabled" id="r4" disabled />
        <Label htmlFor="r4">disabled</Label>
      </div>
    </RadioGroup>
  );
}

const meta = {
  title: "Radio Group",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <RadioGroupDemo />,
};

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <RadioGroupDemo />,
};
