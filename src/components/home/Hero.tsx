import Section from "../layout/Section";
import Button from "../ui/Button";
import Display from "../ui/Display";
import ImageBox from "../ui/ImageBox";
import Text from "../ui/Text";

const content = {
  title: "Where Moroccan Heritage Meets Modern Dining",
  text: "Step into Tablem, an intimate Marrakech sanctuary where centuries-old culinary traditions are elevated into contemporary masterpieces. Indulge in an exquisite multi-course tasting menu crafted from hand-selected organic ingredients, rare Atlas Mountain spices, and avant-garde techniques.",

  img: {
    src: "/images/home/hero.webp",
    alt: "restaurant interior design",
  },
};

export default function Hero() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6 max-w-xl">
          <Display>{content.title}</Display>
          <Text>{content.text}</Text>
          <Button label="Explore Menu" />
        </div>
        <ImageBox
          src={content.img.src}
          alt={content.img.alt}
          className="aspect-4/5"
          priority
        />
      </div>
    </Section>
  );
}
