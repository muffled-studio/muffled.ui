import type { Meta, StoryObj } from "@storybook/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion";
import { withTheme } from "./utils/theme-decorator";

function AccordionDemo() {
  return (
    <Accordion className="w-full max-w-md">
      <AccordionItem value="overview">
        <AccordionTrigger>overview</AccordionTrigger>
        <AccordionContent>
          we ship ink-and-paper primitives through a standalone registry.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="install">
        <AccordionTrigger>install</AccordionTrigger>
        <AccordionContent>
          bunx shadcn@latest add https://ui.muffled.studio/r/accordion.json
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="tokens">
        <AccordionTrigger>tokens</AccordionTrigger>
        <AccordionContent>
          ink and paper. opacity stops for hierarchy. no gray ramp.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

const meta = {
  title: "Accordion",
  component: AccordionDemo,
} satisfies Meta<typeof AccordionDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <AccordionDemo />,
};

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <AccordionDemo />,
};
