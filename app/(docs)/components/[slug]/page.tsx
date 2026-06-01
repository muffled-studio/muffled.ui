import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";

import registry from "@/registry.json";
import { Button } from "@/registry/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card";
import { Input } from "@/registry/ui/input";

const componentProps: Record<string, string[]> = {
  button: ["variant: default | outline | ghost", "size: sm | md | lg", "asChild?: boolean"],
  card: ["variant: default | outline", "className?: string"],
  input: ["size: sm | md | lg", "type?: string", "placeholder?: string"],
};

const componentPreview: Record<string, React.ReactNode> = {
  button: <Button>Button</Button>,
  card: (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description text.</CardDescription>
      </CardHeader>
      <CardContent>Card content body.</CardContent>
    </Card>
  ),
  input: <Input placeholder="Type here" />,
};

export function generateStaticParams() {
  return registry.items
    .filter((item) => item.type === "registry:ui")
    .map((item) => ({ slug: item.name }));
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = registry.items.find((registryItem) => registryItem.name === slug);

  if (!item || item.type !== "registry:ui") {
    notFound();
  }

  const sourcePath = item.files[0]?.path;
  const sourceCode = sourcePath
    ? await readFile(resolve(process.cwd(), sourcePath), "utf8")
    : "";

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <Link href="/" className="text-xs uppercase tracking-[-0.01em] underline underline-offset-4">
          Back
        </Link>
        <h1 className="text-3xl uppercase tracking-[-0.01em]">{slug}</h1>
        <p className="text-sm text-[var(--color-muted-ink)]">{item.description}</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm uppercase tracking-[-0.01em]">Install</h2>
        <pre className="overflow-x-auto border border-[var(--color-ink)] bg-[var(--color-paper-2)] p-4 text-xs">
          {`bunx shadcn@latest add https://ui.muffled.studio/r/${slug}.json`}
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm uppercase tracking-[-0.01em]">Preview</h2>
        <div className="border border-[var(--color-ink)] bg-[var(--color-paper)] p-6">
          {componentPreview[slug]}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm uppercase tracking-[-0.01em]">Props</h2>
        <ul className="space-y-1 text-sm text-[var(--color-muted-ink)]">
          {(componentProps[slug] ?? []).map((prop) => (
            <li key={prop}>{prop}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm uppercase tracking-[-0.01em]">Source</h2>
        <pre className="overflow-x-auto border border-[var(--color-ink)] bg-[var(--color-paper-2)] p-4 text-xs">
          {sourceCode}
        </pre>
      </section>
    </div>
  );
}
