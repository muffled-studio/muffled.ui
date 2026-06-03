import type { Meta, StoryObj } from "@storybook/react";
import { InboxIcon } from "lucide-react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/ui/empty";
import { withTheme } from "./utils/theme-decorator";

function EmptyDemo() {
  return (
    <Empty className="max-w-md">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon />
        </EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>
          You do not have any messages yet. When you do, they will show up here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <p className="text-muted-foreground">Check back later.</p>
      </EmptyContent>
    </Empty>
  );
}

const meta = {
  title: "Empty",
  component: Empty,
} satisfies Meta<typeof Empty>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <EmptyDemo />,
};

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <EmptyDemo />,
};
