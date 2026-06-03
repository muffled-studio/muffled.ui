"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
        <AvatarFallback>sc</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarFallback>sm</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>lg</AvatarFallback>
      </Avatar>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>a</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>b</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>c</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </div>
  )
}
