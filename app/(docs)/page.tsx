import Link from "next/link";

import registry from "@/registry.json";

const components = registry.items.filter((item) => item.type === "registry:ui");

export default function LandingPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="font-mono text-3xl tracking-tight">muffled.ui registry</h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          we ship ink-and-paper react primitives through a standalone shadcn registry.
        </p>
        <pre className="overflow-x-auto border-[0.5px] border-border bg-muted p-4 font-mono text-xs">
          bunx shadcn@latest add https://ui.muffled.studio/r/utils.json
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="font-mono text-sm tracking-tight">components</h2>
        {components.length === 0 ? (
          <p className="text-sm text-muted-foreground">none yet. import from shadcn next.</p>
        ) : (
          <ul className="space-y-2 text-sm">
            {components.map((item) => (
              <li key={item.name}>
                <Link href={`/components/${item.name}/`} className="underline underline-offset-4">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
