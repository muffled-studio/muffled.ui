import Link from "next/link";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-12">
      <header className="mb-12 flex items-center justify-between border-b border-[var(--color-ink)] pb-4">
        <Link href="/" className="text-sm uppercase tracking-[-0.01em]">
          muffled.ui
        </Link>
        <a
          className="text-sm uppercase tracking-[-0.01em]"
          href="https://ui.muffled.studio/registry.json"
        >
          registry.json
        </a>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
