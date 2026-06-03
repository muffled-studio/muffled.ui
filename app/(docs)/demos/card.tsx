"use client";

import { Button } from "@/registry/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";

export function CardDemo() {
  return (
    <Card className="w-full max-w-[360px]">
      <CardHeader>
        <CardTitle>card title</CardTitle>
        <CardDescription>secondary description text</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            action
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>content area on paper with ink foreground and a hairline border.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">confirm</Button>
      </CardFooter>
    </Card>
  )
}
