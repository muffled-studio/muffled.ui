import Link from "next/link";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-12">
      <header className="mb-12 flex items-center justify-between border-b border-border pb-4">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-sm">
          <img src="/logo-ink.svg" alt="" className="h-6 w-auto" />
          muffled.ui
        </Link>
        <nav className="flex items-center gap-4 font-mono text-sm">
          <Link href="/storybook/index.html" className="underline underline-offset-4">
            storybook
          </Link>
          <a
            href="https://ui.muffled.studio/registry.json"
            className="underline underline-offset-4"
          >
            registry.json
          </a>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
