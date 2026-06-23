import Section from "../layout/Section";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import ImageBox from "../ui/ImageBox";
import Text from "../ui/Text";

const content = {
  title: "A Modern Taste of Marrakech",
  text: "Table M brings together Moroccan hospitality, contemporary flavors, and carefully crafted dishes in a warm and elegant setting. From traditional breakfasts to signature specialties, every detail is designed to create memorable dining experiences.",
  cta: "Discover Our Story",
  image: {
    src: "/images/home/about-preview.webp",
    alt: "Table M dining experience",
  },
};

export default function AboutPreview() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 items-center gap-12">
        <ImageBox
          src={content.image.src}
          alt={content.image.alt}
          className="aspect-4/5"
        />

        <div className="space-y-6 max-w-xl">
          <Heading>{content.title}</Heading>
          <Text>{content.text}</Text>
          <Button label={content.cta} href="/about" />
        </div>
      </div>
    </Section>
  );
}
