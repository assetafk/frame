import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SaaS Landing",
  description:
    "Modern SaaS landing page with 3D visuals, smooth animations and premium feel."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10 hero-gradient-bg opacity-80" />
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}

