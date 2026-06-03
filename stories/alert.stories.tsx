import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  InfoIcon,
} from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert";
import { withTheme } from "./utils/theme-decorator";

function AlertDemo() {
  return (
    <div className="flex max-w-md flex-col gap-3">
      <Alert>
        <InfoIcon />
        <AlertTitle>note</AlertTitle>
        <AlertDescription>we saved your changes.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CheckCircle2Icon />
        <AlertTitle>shipped</AlertTitle>
        <AlertDescription>release v0.1 is live.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTriangleIcon />
        <AlertTitle>hold</AlertTitle>
        <AlertDescription>deploy is paused until checks pass.</AlertDescription>
      </Alert>
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>reference</AlertTitle>
        <AlertDescription>
          see the registry manifest for install URLs.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>blocked</AlertTitle>
        <AlertDescription>payment could not be processed.</AlertDescription>
      </Alert>
    </div>
  );
}

const meta = {
  title: "Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <AlertDemo />,
};

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <AlertDemo />,
};
