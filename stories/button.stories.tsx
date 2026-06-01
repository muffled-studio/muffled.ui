import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/registry/ui/button";

const meta = {
  title: "Registry/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "default",
    size: "md",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultSm: Story = { args: { variant: "default", size: "sm" } };
export const DefaultMd: Story = { args: { variant: "default", size: "md" } };
export const DefaultLg: Story = { args: { variant: "default", size: "lg" } };

export const OutlineSm: Story = { args: { variant: "outline", size: "sm" } };
export const OutlineMd: Story = { args: { variant: "outline", size: "md" } };
export const OutlineLg: Story = { args: { variant: "outline", size: "lg" } };

export const GhostSm: Story = { args: { variant: "ghost", size: "sm" } };
export const GhostMd: Story = { args: { variant: "ghost", size: "md" } };
export const GhostLg: Story = { args: { variant: "ghost", size: "lg" } };
