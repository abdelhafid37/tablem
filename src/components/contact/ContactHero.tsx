import Section from "../layout/Section";
import PageHero from "../ui/PageHero";

const content = {
  title: "Get in Touch",
  text: "Whether you're planning a casual breakfast, a family dinner, or a special celebration, we'd love to welcome you to Table M. Reach out to us or visit our restaurant in Marrakech.",
};

export default function ContactHero() {
  return (
    <Section>
      <PageHero title={content.title} text={content.text} />
    </Section>
  );
}
