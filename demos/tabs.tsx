"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/ui/tabs";

function TabsDefault() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-[360px]">
      <TabsList>
        <TabsTrigger value="overview">overview</TabsTrigger>
        <TabsTrigger value="changelog">changelog</TabsTrigger>
        <TabsTrigger value="settings">settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="pt-4 text-muted-foreground">
        overview panel
      </TabsContent>
      <TabsContent value="changelog" className="pt-4 text-muted-foreground">
        changelog panel
      </TabsContent>
      <TabsContent value="settings" className="pt-4 text-muted-foreground">
        settings panel
      </TabsContent>
    </Tabs>
  );
}

function TabsLine() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-[360px]">
      <TabsList variant="line">
        <TabsTrigger value="overview">overview</TabsTrigger>
        <TabsTrigger value="changelog">changelog</TabsTrigger>
        <TabsTrigger value="settings">settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="pt-4 text-muted-foreground">
        overview panel
      </TabsContent>
      <TabsContent value="changelog" className="pt-4 text-muted-foreground">
        changelog panel
      </TabsContent>
      <TabsContent value="settings" className="pt-4 text-muted-foreground">
        settings panel
      </TabsContent>
    </Tabs>
  );
}

export function TabsDemo() {
  return (
    <div className="flex flex-col gap-10">
      <TabsDefault />
      <TabsLine />
    </div>
  );
}
