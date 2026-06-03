"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select";

export function SelectDemo() {
  return (
    <Select defaultValue="solo">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>role</SelectLabel>
          <SelectItem value="solo">solo</SelectItem>
          <SelectItem value="studio">studio</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
