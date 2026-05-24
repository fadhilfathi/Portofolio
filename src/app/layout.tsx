import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fathi — Portfolio",
  description:
    "Personal portfolio of Fathi — Full-Stack Developer & AI Enthusiast. Built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gray-950 text-white">{children}</body>
    </html>
  );
}
