import type { Metadata } from "next";

import { ThemeProvider, themeInitScript } from "@/registry/lib/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "muffled.ui",
  description: "Standalone shadcn registry for muffled.ui components.",
  icons: {
    apple: "/logo-ink.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased font-sans"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href="/logo-ink.svg"
          type="image/svg+xml"
          data-theme-icon=""
        />
        <link
          rel="apple-touch-icon"
          href="/logo-ink.svg"
          data-theme-icon=""
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
