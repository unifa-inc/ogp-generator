import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "OGP Generator",
  description: "Dynamic Open Graph image generator using @vercel/og"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

