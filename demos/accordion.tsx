"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="overview">
        <AccordionTrigger>overview</AccordionTrigger>
        <AccordionContent>
          we ship ink-and-paper primitives through a standalone registry.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="install">
        <AccordionTrigger>install</AccordionTrigger>
        <AccordionContent>
          bunx shadcn@latest add https://ui.muffled.studio/r/accordion.json
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="tokens">
        <AccordionTrigger>tokens</AccordionTrigger>
        <AccordionContent>
          ink and paper. opacity stops for hierarchy. no gray ramp.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
