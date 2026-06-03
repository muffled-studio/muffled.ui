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
        <pre className="overflow-x-auto border border-border bg-muted p-4 font-mono text-xs">
          bunx shadcn@latest add https://ui.muffled.studio/r/surface.json
        </pre>
      </section>

      <section className="space-y-4">
        <h2 className="font-mono text-sm tracking-tight">components</h2>
        {components.length === 0 ? (
          <p className="text-sm text-muted-foreground">none yet. import from shadcn next.</p>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2">
            {components.map((item) => (
              <li key={item.name}>
                <Link
                  href={`/components/${item.name}/`}
                  className="group flex h-full flex-col gap-2 border border-border bg-background p-4 transition-colors duration-[var(--d-drift)] ease-[var(--ease-drift)] hover:border-border-strong hover:bg-muted"
                >
                  <span className="font-mono text-sm tracking-tight group-hover:underline group-hover:underline-offset-4">
                    {item.title ?? item.name}
                  </span>
                  {item.description ? (
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
