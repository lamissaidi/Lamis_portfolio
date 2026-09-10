import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lamis Saidi | Test & Validation · Test Automation · Embedded Software",
  description: "Portfolio of Lamis Saidi, Test & Validation Engineer and Embedded Software Engineer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}