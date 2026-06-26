import Section from "../layout/Section";
import Display from "../ui/Display";
import ImageBox from "../ui/ImageBox";
import Text from "../ui/Text";

const content = {
  title: "About Table M",
  text: "Table M blends Moroccan hospitality with contemporary cuisine, creating a place where every meal is crafted with fresh ingredients, thoughtful presentation, and a warm atmosphere. Whether you're joining us for breakfast, lunch, dinner, or an evening with friends, every visit is designed to be memorable.",
  image: {
    src: "/images/about/hero.webp",
    alt: "Dining area at Table M Marrakech",
  },
};

export default function AboutHero() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6 max-w-xl">
          <Display>{content.title}</Display>
          <Text>{content.text}</Text>
        </div>

        <ImageBox
          src={content.image.src}
          alt={content.image.alt}
          className="aspect-4/5"
        />
      </div>
    </Section>
  );
}
