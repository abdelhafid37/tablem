import type { Metadata } from "next";
import { Geist, Gloock } from "next/font/google";
import ReactLenis from "lenis/react";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

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
  title: "TableM",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gloock.variable} ${geist.variable} antialiased`}>
        <ReactLenis root>
          <Navbar />
          <main>{children}</main>
        </ReactLenis>
      </body>
    </html>
  );
}
