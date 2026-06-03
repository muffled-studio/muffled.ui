import Link from "next/link";
import { notFound } from "next/navigation";

import { ComponentPreview } from "@/app/(docs)/components/component-preview";
import registry from "@/registry.json";

type RegistryItem = (typeof registry.items)[number];

const components = registry.items.filter((item) => item.type === "registry:ui");

function getComponent(slug: string): RegistryItem | undefined {
  return components.find((item) => item.name === slug);
}

export function generateStaticParams() {
  return components.map((item) => ({ slug: item.name }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getComponent(slug);

  if (!item) {
    notFound();
  }

  const installCommand = `bunx shadcn@latest add https://ui.muffled.studio/r/${item.name}.json`;
  const registryDeps = item.registryDependencies ?? [];
  const deps = item.dependencies ?? [];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Link
          href="/"
          className="font-mono text-xs text-muted-foreground underline underline-offset-4"
        >
          ← components
        </Link>
        <h1 className="font-mono text-2xl tracking-tight">{item.title ?? item.name}</h1>
        {item.description ? (
          <p className="max-w-2xl text-sm text-muted-foreground">{item.description}</p>
        ) : null}
      </div>

      <ComponentPreview slug={slug} />

      <section className="space-y-2">
        <h2 className="font-mono text-sm">install</h2>
        <pre className="overflow-x-auto border-[0.5px] border-border bg-muted p-4 font-mono text-xs">
          {installCommand}
        </pre>
      </section>

      {registryDeps.length > 0 ? (
        <section className="space-y-2">
          <h2 className="font-mono text-sm">registry dependencies</h2>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {registryDeps.map((name) => (
              <li key={name}>
                <Link href={`/components/${name}/`} className="underline underline-offset-4">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {deps.length > 0 ? (
        <section className="space-y-2">
          <h2 className="font-mono text-sm">npm dependencies</h2>
          <p className="font-mono text-xs text-muted-foreground">{deps.join(", ")}</p>
        </section>
      ) : null}

      <section className="space-y-2">
        <h2 className="font-mono text-sm">files</h2>
        <ul className="space-y-1 font-mono text-xs text-muted-foreground">
          {item.files.map((file) => (
            <li key={file.path}>
              {file.path}
              {file.target ? ` → ${file.target}` : null}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
