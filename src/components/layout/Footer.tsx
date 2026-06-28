import { navigation } from "@/data/navigation";
import Section from "./Section";
import Link from "next/link";
import { InstagramLogoIcon, MapPinIcon, PhoneIcon } from "../ui/Icon";
import { contact } from "@/data/contact";
import Reveal from "../ui/Reveal";
import Logo from "../ui/Logo";

const content = {
  name: "Table M",
  description:
    "Modern Moroccan dining in Marrakech. Fresh ingredients, signature dishes, and a welcoming atmosphere from breakfast until late night.",
};

export default function Footer() {
  return (
    <footer className="bg-surface">
      <Section>
        <div className="grid md:grid-cols-[2fr_1fr_2fr] gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-auto text-brand" />
              <h2 className="font-display text-3xl text-brand">
                {content.name}
              </h2>
            </div>
            <p className="text-muted leading-relaxed max-w-sm">
              {content.description}
            </p>
          </div>

          <div className="space-y-4">
            <Reveal>
              <h3 className="font-display text-xl">Navigation</h3>
            </Reveal>
            <div className="flex flex-col gap-3">
              {navigation.map((link, index) => (
                <Reveal key={link.href} delay={index * 0.08}>
                  <Link
                    href={link.href}
                    className="text-muted w-fit hover:text-brand transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Reveal>
              <h3 className="font-display text-xl">Contact</h3>
            </Reveal>
            <div className="space-y-3 text-muted">
              <Reveal delay={0.1}>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="shrink-0" />
                  <span>{contact.address}</span>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="shrink-0" />
                  <a href={`tel:${contact.phone.replace(/\s+/g, "")}`}>
                    {contact.phone}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex items-center gap-3">
                  <InstagramLogoIcon className="shrink-0" />
                  <a
                    href={`https://instagram.com/${contact.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.instagram}
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="border-t border-text/10 mt-16 pt-16">
          <Reveal>
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Table M • Crafted in Marrakech
            </p>
          </Reveal>
        </div>
      </Section>
    </footer>
  );
}
