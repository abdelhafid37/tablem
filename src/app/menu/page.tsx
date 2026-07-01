import type { Metadata } from "next";
import MenuPageClient from "./MenuPageClient";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore breakfast, desserts, signature dishes and drinks at Table M.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}
