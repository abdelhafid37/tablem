import { navigation } from "@/data/navigation";
import Section from "./Section";
import Link from "next/link";
import { InstagramLogoIcon, MapPinIcon, PhoneIcon } from "../ui/Icon";
import { contact } from "@/data/contact";

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
            <h2 className="font-display text-3xl">{content.name}</h2>
            <p className="text-muted leading-relaxed max-w-sm">
              {content.description}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl">Navigation</h3>
            <div className="flex flex-col gap-3">
              {navigation.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="text-muted w-fit hover:text-brand transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-xl">Contact</h3>
            <div className="space-y-3 text-muted">
              <div className="flex items-center gap-3">
                <MapPinIcon className="shrink-0" />
                <span>{contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="shrink-0" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <InstagramLogoIcon className="shrink-0" />
                <span>{contact.instagram}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-text/10 mt-16 pt-16">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Table M. All rights reserved.
          </p>
        </div>
      </Section>
    </footer>
  );
}
