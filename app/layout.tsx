import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HDS - Shadcn-Based Design System",
  description: "Switchable Design System based on shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

