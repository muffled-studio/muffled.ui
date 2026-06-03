import type { Meta, StoryObj } from "@storybook/react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/ui/command";
import { withTheme } from "./utils/theme-decorator";

function CommandDemo() {
  return (
    <Command className="w-[320px]">
      <CommandInput placeholder="search…" />
      <CommandList>
        <CommandEmpty>no results.</CommandEmpty>
        <CommandGroup heading="actions">
          <CommandItem>
            new project
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            open
            <CommandShortcut>⌘O</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="settings">
          <CommandItem>preferences</CommandItem>
          <CommandItem>archive</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

const meta = {
  title: "Command",
  component: CommandDemo,
} satisfies Meta<typeof CommandDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <CommandDemo />,
};

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <CommandDemo />,
};
