"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/ui/combobox";

const roles = ["solo", "studio", "agency"];

export function ComboboxDemo() {
  return (
    <Combobox items={roles}>
      <ComboboxInput placeholder="role" className="w-[180px]" />
      <ComboboxContent>
        <ComboboxEmpty>no matches.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
