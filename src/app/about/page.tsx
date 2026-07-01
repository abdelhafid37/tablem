import AboutHero from "@/components/about/AboutHero";
import Gallery from "@/components/about/Gallery";
import Story from "@/components/about/Story";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the story behind Table M and our modern Moroccan dining experience.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Gallery />
    </>
  );
}
