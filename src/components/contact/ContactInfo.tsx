import { contact } from "@/data/contact";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";

const content = {
  title: "Visit Us",
  text: "Find us in the heart of Marrakech and enjoy our welcoming atmosphere from breakfast until late night.",
};

export default function ContactInfo() {
  return (
    <Section>
      <div className="space-y-12">
        <div className="max-w-xl space-y-6">
          <Heading>{content.title}</Heading>
          <Text>{content.text}</Text>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-t border-text/10 pt-6">
            <h3 className="font-display text-xl mb-2">Location</h3>
            <p className="text-muted leading-relaxed">{contact.address}</p>
          </div>

          <div className="border-t border-text/10 pt-6">
            <h3 className="font-display text-xl mb-2">Contact</h3>
            <p className="text-muted">{contact.phone}</p>
            <p className="text-muted mt-2">{contact.instagram}</p>
          </div>

          <div className="border-t border-text/10 pt-6">
            <h3 className="font-display text-xl mb-2">Hours</h3>
            <p className="text-muted">{contact.hours}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
