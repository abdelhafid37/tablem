import AboutPreview from "@/components/home/AboutPreview";
import ContactPreview from "@/components/home/ContactPreview";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table M | Modern Moroccan Restaurant",
  description:
    "Modern Moroccan dining in Marrakech. Breakfast, lunch, dinner and specialty coffee.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <WhyChooseUs />
      <AboutPreview />
      <ContactPreview />
    </>
  );
}
