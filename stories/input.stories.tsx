import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/registry/ui/input";

const meta = {
  title: "Registry/Input",
  component: Input,
  args: {
    placeholder: "Type here",
    size: "md",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sm: Story = { args: { size: "sm" } };
export const Md: Story = { args: { size: "md" } };
export const Lg: Story = { args: { size: "lg" } };
