"use client";

import { demos } from "../demos";
import { ThemePanel } from "../demos/theme-panel";

export function ComponentPreview({ slug }: { slug: string }) {
  const Demo = demos[slug];

  if (!Demo) {
    return null;
  }

  const paperChild =
    slug === "sonner" ? <Demo theme="light" /> : <Demo />;
  const inkChild = slug === "sonner" ? <Demo theme="dark" /> : <Demo />;

  return (
    <section className="space-y-3">
      <h2 className="font-mono text-sm">preview</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <ThemePanel theme="paper">{paperChild}</ThemePanel>
        <ThemePanel theme="ink">{inkChild}</ThemePanel>
      </div>
    </section>
  );
}
