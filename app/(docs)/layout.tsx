import Link from "next/link";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-12">
      <header className="mb-12 flex items-center justify-between border-b-[0.5px] border-border pb-4">
        <Link href="/" className="font-mono text-sm">
          muffled.ui
        </Link>
        <a className="font-mono text-sm" href="https://ui.muffled.studio/registry.json">
          registry.json
        </a>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
