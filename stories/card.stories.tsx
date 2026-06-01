import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { Button } from "@/registry/ui/button";

const meta = {
  title: "Registry/Card",
  component: Card,
  args: {
    variant: "default",
  },
  render: (args) => (
    <Card {...args} className="w-[420px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Minimal card primitive for docs and previews.</CardDescription>
      </CardHeader>
      <CardContent>Card content body.</CardContent>
      <CardFooter>
        <Button size="sm" variant="outline">
          Action
        </Button>
      </CardFooter>
    </Card>
  ),
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultVariant: Story = {
  args: { variant: "default" },
};

export const OutlineVariant: Story = {
  args: { variant: "outline" },
};
