import Section from "../layout/Section";
import Button from "../ui/Button";
import ImageFrame from "../ui/ImageFrame";
import Reveal from "../ui/Reveal";
import SectionIntro from "../ui/SectionIntro";

const content = {
  eyebrow: "OUR STORY",
  title: "A Modern Taste of Marrakech",
  text: "Inspired by Moroccan traditions and a modern approach to cooking, Table M is a place where every meal is meant to be enjoyed slowly—with family, friends, and great conversation.",
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
        <Reveal delay={0.15}>
          <ImageFrame
            src={content.image.src}
            alt={content.image.alt}
            className="aspect-4/5"
            parallax
          />
        </Reveal>

        <div className="space-y-6">
          <SectionIntro
            title={content.title}
            eyebrow={content.eyebrow}
            text={content.text}
          />

          <Reveal delay={0.24}>
            <Button label={content.cta} href="/about" />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
