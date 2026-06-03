"use client";

import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/ui/input-group";

export function InputGroupDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-6">
      <InputGroup>
        <InputGroupAddon>
          <Search className="size-4 stroke-[1.5]" />
        </InputGroupAddon>
        <InputGroupInput placeholder="search" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="muffled.studio" />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="email" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>send</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>note</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="we build things." rows={3} />
      </InputGroup>
    </div>
  )
}
