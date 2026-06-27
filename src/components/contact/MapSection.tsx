import { contact } from "@/data/contact";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Button from "../ui/Button";

const content = {
  title: "Find Us on the Map",
  text: "Located in Prestigia on Boulevard Mohamed VI, Table M is easy to reach whether you're visiting for breakfast, lunch, dinner, or an evening out.",
  cta: "Open in Google Maps",
};

export default function MapSection() {
  return (
    <Section>
      <div className="space-y-12">
        <div className="max-w-xl space-y-6">
          <Heading>{content.title}</Heading>
          <Text>{content.text}</Text>
        </div>

        <div className="aspect-video border border-text/10 overflow-hidden">
          <iframe
            src={contact.embedMap}
            title="Table M Location"
            className="w-full h-full pointer-events-none select-none"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="true"
          />
        </div>

        <Button label={content.cta} href={contact.map} />
      </div>
    </Section>
  );
}
