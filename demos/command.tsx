"use client";

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

export function CommandDemo() {
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
