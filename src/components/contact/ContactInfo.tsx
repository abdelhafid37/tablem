import { contact } from "@/data/contact";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Reveal from "../ui/Reveal";
import SectionIntro from "../ui/SectionIntro";

const content = {
  eyebrow: "",
  title: "Visit Us",
  text: "Find us in the heart of Marrakech and enjoy our welcoming atmosphere from breakfast until late night.",
};

export default function ContactInfo() {
  return (
    <Section>
      <div className="space-y-12">
        <SectionIntro
          title={content.title}
          eyebrow={content.eyebrow}
          text={content.text}
        />

        <div className="grid md:grid-cols-3 gap-8">
          <Reveal>
            <div className="border-t border-text/10 pt-6">
              <h3 className="font-display text-xl mb-2">Location</h3>
              <p className="text-muted leading-relaxed">{contact.address}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-t border-text/10 pt-6">
              <h3 className="font-display text-xl mb-2">Contact</h3>
              <a
                href={contact.phone.href}
                className="text-muted block hover:text-brand duration-300 transition-colors"
              >
                {contact.phone.label}
              </a>
              <a
                href={contact.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted block mt-2 hover:text-brand duration-300 transition-colors"
              >
                {contact.instagram.label}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="border-t border-text/10 pt-6">
              <h3 className="font-display text-xl mb-2">Hours</h3>
              <p className="text-muted">
                Mon - Thu
                <br />
                {contact.hours.weekdays}
              </p>
              <p className="text-muted mt-3">
                Fri - Sun
                <br />
                {contact.hours.weekends}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
