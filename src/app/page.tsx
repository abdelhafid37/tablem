import AboutPreview from "@/components/home/AboutPreview";
import ContactPreview from "@/components/home/ContactPreview";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";

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
