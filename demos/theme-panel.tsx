import type { ReactNode } from "react";

export function ThemePanel({
  theme,
  children,
}: {
  theme: "paper" | "ink";
  children: ReactNode;
}) {
  return (
    <div
      className={
        theme === "ink"
          ? "dark min-w-0 rounded-md border border-border bg-background p-6 text-foreground"
          : "min-w-0 rounded-md border border-border bg-background p-6 text-foreground"
      }
      data-theme={theme === "ink" ? "dark" : undefined}
    >
      <p className="mb-4 font-mono text-xs text-muted-foreground">{theme}</p>
      {children}
    </div>
  );
}
