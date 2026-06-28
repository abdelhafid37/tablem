import Section from "../layout/Section";
import Heading from "../ui/Heading";
import ImageFrame from "../ui/ImageFrame";
import Reveal from "../ui/Reveal";
import SectionIntro from "../ui/SectionIntro";
import Text from "../ui/Text";

const content = {
  eyebrow: "",
  title: "Inside Table M",
  text: "Take a glimpse inside Table M, where elegant interiors, carefully prepared dishes, and a welcoming atmosphere come together to create memorable dining experiences.",
  images: [
    {
      src: "/images/about/gallery/gallery-1.webp",
      alt: "Restaurant interior",
    },
    {
      src: "/images/about/gallery/gallery-2.webp",
      alt: "Signature dish",
    },
    {
      src: "/images/about/gallery/gallery-3.webp",
      alt: "Outdoor seating area",
    },
    {
      src: "/images/about/gallery/gallery-4.webp",
      alt: "Dining experience",
    },
    {
      src: "/images/about/gallery/gallery-5.webp",
      alt: "",
    },
    {
      src: "/images/about/gallery/gallery-6.webp",
      alt: "",
    },
    {
      src: "/images/about/gallery/gallery-5.webp",
      alt: "",
    },
    {
      src: "/images/about/gallery/gallery-6.webp",
      alt: "",
    },
  ],
};

export default function Gallery() {
  return (
    <Section>
      <div className="space-y-12">
        <SectionIntro
          title={content.title}
          eyebrow={content.eyebrow}
          text={content.text}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {content.images.map((image, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <ImageFrame
                src={image.src}
                alt={image.alt}
                className="aspect-square"
                parallax
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
