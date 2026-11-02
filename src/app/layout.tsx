import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deshscape — Explore Beyond the Ordinary",
  description: "Discover Bangladesh, one journey at a time. Explore destinations, culture, food and travel stories across all 64 districts.",
  applicationName: "Deshscape"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
