import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Table M in Marrakech or contact us for reservations and information.",
};

export default function Page() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <MapSection />
    </>
  );
}
