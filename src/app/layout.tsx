import type { Metadata } from "next";
import { Italiana, Geist } from "next/font/google";
import ReactLenis from "lenis/react";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
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
      <body className={`${italiana.variable} ${geist.variable} antialiased`}>
        <ReactLenis root>
          <Navbar />
          <main>{children}</main>
        </ReactLenis>
      </body>
    </html>
  );
}
