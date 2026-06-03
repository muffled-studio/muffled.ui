"use client";

import type { ReactNode } from "react";
import { ThemePanelProvider } from "./theme-panel-context";

export function ThemePanel({
  theme,
  children,
}: {
  theme: "paper" | "ink";
  children: ReactNode;
}) {
  const panelClass =
    "min-h-48 w-full rounded-md border border-border bg-background p-6 text-foreground";

  return (
    <div
      className={theme === "ink" ? `dark ${panelClass}` : panelClass}
      data-theme={theme === "ink" ? "dark" : "light"}
    >
      <ThemePanelProvider theme={theme === "ink" ? "dark" : "light"}>
        <p className="mb-4 font-mono text-xs text-muted-foreground">{theme}</p>
        {children}
      </ThemePanelProvider>
    </div>
  );
}
