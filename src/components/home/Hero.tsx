import Section from "../layout/Section";
import Button from "../ui/Button";
import Display from "../ui/Display";
import ImageFrame from "../ui/ImageFrame";
import Reveal from "../ui/Reveal";
import Text from "../ui/Text";

const content = {
  title: "Modern Moroccan Food Made to Be Shared",
  text: "From relaxed breakfasts to late-night dinners, every dish is prepared with fresh ingredients, local inspiration, and a love for bringing people together.",

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
          <Reveal>
            <Display>{content.title}</Display>
          </Reveal>
          <Reveal delay={0.1}>
            <Text>{content.text}</Text>
          </Reveal>
          <Reveal delay={0.2}>
            <Button label="Explore Menu" />
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <ImageFrame
            src={content.img.src}
            alt={content.img.alt}
            className="aspect-4/5"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            parallax
          />
        </Reveal>
      </div>
    </Section>
  );
}
