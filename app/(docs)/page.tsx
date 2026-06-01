import Link from "next/link";

import registry from "@/registry.json";

const components = registry.items.filter((item) => item.type === "registry:ui");

export default function LandingPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl uppercase tracking-[-0.01em]">muffled.ui registry</h1>
        <p className="max-w-2xl text-sm text-[var(--color-muted-ink)]">
          Ink-and-paper React primitives distributed through a standalone shadcn registry.
        </p>
        <pre className="overflow-x-auto border border-[var(--color-ink)] bg-[var(--color-paper-2)] p-4 text-xs">
          bunx shadcn@latest add https://ui.muffled.studio/r/button.json
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm uppercase tracking-[-0.01em]">Components</h2>
        <ul className="space-y-2 text-sm">
          {components.map((item) => (
            <li key={item.name}>
              <Link href={`/components/${item.name}/`} className="underline underline-offset-4">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
