import { features } from "@/data/features";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";

const content = {
  title: "Why Choose Table M",
  text: "More than a restaurant, Table M combines Moroccan hospitality, quality ingredients, and a welcoming atmosphere to create memorable dining experiences.",
};

export default function WhyChooseUs() {
  return (
    <Section>
      <div className="space-y-12">
        <div className="max-w-xl space-y-6">
          <Heading>{content.title}</Heading>
          <Text>{content.text}</Text>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <article key={feature.id} className="border-t border-text/10 pt-6">
              <div className="space-y-3">
                <h3 className="font-display text-2xl">{feature.title}</h3>
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
