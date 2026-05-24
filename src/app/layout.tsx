import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muh. Fadhil Fathi Rizal — DevOps Engineer",
  description:
    "Personal portfolio of Muh. Fadhil Fathi Rizal — DevOps Engineer specializing in Kubernetes, CI/CD, Docker, and infrastructure automation. Built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gray-950 text-white">
        {/* Skip-to-content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
