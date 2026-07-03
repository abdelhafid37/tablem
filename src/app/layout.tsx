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
  metadataBase: new URL("https://tablem.vercel.app"),
  title: {
    default: "Table M",
    template: "%s | Table M",
  },
  description:
    "Modern Moroccan restaurant in Marrakech serving breakfast, signature dishes, desserts, and specialty drinks.",

  openGraph: {
    title: "Table M",
    description:
      "Modern Moroccan restaurant in Marrakech serving breakfast, signature dishes, desserts, and specialty drinks.",
    url: "https://tablem.vercel.app",
    siteName: "Table M",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Table M Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Table M",
    description:
      "Modern Moroccan restaurant in Marrakech serving breakfast, signature dishes, desserts, and specialty drinks.",
    images: ["/og-image.png"],
  },
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
