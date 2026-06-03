"use client";

import { BadgeCheckIcon, ChevronRightIcon, InboxIcon } from "lucide-react";
import { Button } from "@/registry/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/ui/item";

export function ItemDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup>
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>basic item</ItemTitle>
            <ItemDescription>
              a simple item with title and description.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              action
            </Button>
          </ItemActions>
        </Item>
        <ItemSeparator />
        <Item variant="outline" size="sm" asChild>
          <a href="#">
            <ItemMedia>
              <BadgeCheckIcon className="size-5" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>your profile has been verified.</ItemTitle>
            </ItemContent>
            <ItemActions>
              <ChevronRightIcon className="size-4" />
            </ItemActions>
          </a>
        </Item>
      </ItemGroup>
      <Item variant="muted">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>muted variant</ItemTitle>
          <ItemDescription>
            transparent background with a muted surface wash.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
