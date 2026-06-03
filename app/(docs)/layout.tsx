import Link from "next/link";

import { ThemeToggle } from "../components/theme-toggle";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-12">
      <header className="mb-12 flex items-center justify-between border-b border-border pb-4">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-sm">
          <img src="/logo-ink.svg" alt="" className="h-6 w-auto dark:hidden" />
          <img src="/logo-paper.svg" alt="" className="hidden h-6 w-auto dark:block" />
          muffled.ui
        </Link>
        <nav className="flex items-center gap-4 font-mono text-sm">
          <ThemeToggle />
          <Link href="/storybook/index.html" className="underline underline-offset-4">
            storybook
          </Link>
          <a
            href="/registry.json"
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
