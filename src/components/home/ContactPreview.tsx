import { contact } from "@/data/contact";
import Section from "../layout/Section";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Text from "../ui/Text";

const content = {
  title: "Visit Table M",
  text: "Experience modern Moroccan dining in the heart of Marrakech. Enjoy our signature dishes, fresh ingredients, and a welcoming atmosphere from morning until late night.",
};

export default function ContactPreview() {
  return (
    <Section>
      <div className="space-y-10">
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

        <Button label="Get Directions" href={contact.map} />
      </div>
    </Section>
  );
}
