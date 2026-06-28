import Section from "../layout/Section";
import Display from "../ui/Display";
import Reveal from "../ui/Reveal";
import Text from "../ui/Text";

const content = {
  title: "Get in Touch",
  text: "Whether you're planning a casual breakfast, a family dinner, or a special celebration, we'd love to welcome you to Table M. Reach out to us or visit our restaurant in Marrakech.",
};

export default function ContactHero() {
  return (
    <Section>
      <div className="max-w-3xl space-y-6">
        <Reveal>
          <Display>{content.title}</Display>
        </Reveal>
        <Reveal delay={0.1}>
          <Text>{content.text}</Text>
        </Reveal>
      </div>
    </Section>
  );
}
