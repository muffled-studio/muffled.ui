import type { Meta, StoryObj } from "@storybook/react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/registry/ui/menubar";
import { withTheme } from "./utils/theme-decorator";

function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>file</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            new tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>new window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>find…</MenubarItem>
              <MenubarItem>find next</MenubarItem>
              <MenubarItem>find previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

const meta = {
  title: "Menubar",
  component: Menubar,
} satisfies Meta<typeof Menubar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paper: Story = {
  decorators: [withTheme("paper")],
  render: () => <MenubarDemo />,
};

export const Ink: Story = {
  decorators: [withTheme("ink")],
  render: () => <MenubarDemo />,
};
