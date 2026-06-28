import Section from "../layout/Section";
import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";
import Text from "../ui/Text";

const content = {
  title: "Our Story",
  paragraphs: [
    "Table M was created to celebrate Moroccan hospitality through a modern dining experience. Every detail, from the carefully selected ingredients to the welcoming atmosphere, reflects our passion for quality and authenticity.",
    "Whether you're stopping by for breakfast, sharing lunch with friends, or enjoying dinner with family, we believe every meal should feel special. Our team is dedicated to creating memorable moments with every visit.",
  ],
};

export default function Story() {
  return (
    <Section>
      <div className="max-w-3xl space-y-6">
        <Reveal>
          <Heading>{content.title}</Heading>
        </Reveal>

        {content.paragraphs.map((paragraph, index) => (
          <Reveal key={index} delay={index * 0.08}>
            <Text>{paragraph}</Text>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
