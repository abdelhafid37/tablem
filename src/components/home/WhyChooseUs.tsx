import { features } from "@/data/features";
import Section from "../layout/Section";
import Reveal from "../ui/Reveal";
import SectionIntro from "../ui/SectionIntro";

const content = {
  eyebrow: "THE EXPERIENCE",
  title: "Why Guests Love Table M",
  text: "Great food is only part of the experience. Whether you're joining us for breakfast, dinner, or coffee with friends, we've created a place that feels welcoming from the moment you arrive.",
};

export default function WhyChooseUs() {
  return (
    <Section>
      <div className="space-y-12">
        <SectionIntro
          title={content.title}
          eyebrow={content.eyebrow}
          text={content.text}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={feature.id} delay={index * 0.08}>
              <article className="border-t border-text/10 pt-6">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl">{feature.title}</h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
