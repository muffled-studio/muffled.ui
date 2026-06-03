"use client";

import { Button } from "@/registry/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/registry/ui/button-group";

export function ButtonGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <ButtonGroup aria-label="actions">
        <Button variant="outline">archive</Button>
        <Button variant="outline">report</Button>
        <Button variant="outline">snooze</Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText>label</ButtonGroupText>
        <ButtonGroupSeparator />
        <Button variant="outline">edit</Button>
        <Button variant="outline">share</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical" aria-label="media controls" className="h-fit">
        <Button variant="outline" size="icon-sm">
          +
        </Button>
        <Button variant="outline" size="icon-sm">
          −
        </Button>
      </ButtonGroup>
    </div>
  )
}
