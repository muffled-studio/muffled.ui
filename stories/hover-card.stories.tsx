import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/registry/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/ui/hover-card";
import { withTheme } from "./utils/theme-decorator";

function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@muffled</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex flex-col gap-1">
          <p className="font-mono text-sm">muffled.studio</p>
          <p className="text-muted-foreground">
            ink-and-paper react primitives.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

const meta = {
  title: "Hover Card",
  component: HoverCard,
} satisfies Meta<typeof HoverCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <HoverCardDemo />,
};

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <HoverCardDemo />,
};
