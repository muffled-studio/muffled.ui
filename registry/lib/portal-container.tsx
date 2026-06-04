import { createContext, useContext, type ReactNode } from "react";

export type PortalTheme = "light" | "dark";

const PortalThemeContext = createContext<PortalTheme | null>(null);

export function PortalThemeProvider({
  theme,
  children,
}: {
  theme: PortalTheme;
  children: ReactNode;
}) {
  return (
    <PortalThemeContext.Provider value={theme}>
      {children}
    </PortalThemeContext.Provider>
  );
}

export function usePortalTheme() {
  return useContext(PortalThemeContext);
}

export function ThemedPortalShell({ children }: { children: ReactNode }) {
  const theme = usePortalTheme();

  if (!theme) {
    return children;
  }

  return (
    <div
      className={theme === "dark" ? "dark" : undefined}
      data-theme={theme}
    >
      {children}
    </div>
  );
}
