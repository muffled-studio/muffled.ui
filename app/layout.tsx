import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "muffled.ui",
  description: "Standalone shadcn registry for muffled.ui components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
