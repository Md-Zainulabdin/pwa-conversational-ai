import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Realtime Voice Agent",
  description: "A realtime voice agent powered by ElevenLabs",
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
