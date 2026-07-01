import type { Metadata } from "next";
import { Geist, Gloock } from "next/font/google";
import ReactLenis from "lenis/react";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Noise from "@/components/ui/Noise";

const gloock = Gloock({
  variable: "--font-gloock",
  subsets: ["latin"],
  weight: ["400"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Table M",
    template: "%s | Table M",
  },
  description: "Modern Moroccan restaurant in Marrakech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gloock.variable} ${geist.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-9999 bg-brand text-surface px-4 py-2"
        >
          Skip to content
        </a>
        <ReactLenis root>
          <Noise />
          <Navbar />
          <main tabIndex={-1} id="main-content" className="pt-20">
            {children}
          </main>
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
