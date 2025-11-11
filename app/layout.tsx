import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sf = Inter({
  subsets: ["latin"],
  variable: "--font-sf",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Apple | Beyond Imagination",
  description:
    "Immerse in a cinematic product moment celebrating Apple's design language with a fully responsive real-time ad experience."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sf.variable}>
      <body className="bg-carbon text-pearl antialiased">{children}</body>
    </html>
  );
}
