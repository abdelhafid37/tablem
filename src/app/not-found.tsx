import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";

const content = {
  title: "Page Not Found",
  text: "Sorry, the page you're looking for doesn't exist or may have been moved.",
  cta: "Back Home",
};

export default function NotFound() {
  return (
    <Section>
      <div className="space-y-12">
        <PageHero title={content.title} text={content.text} />
        <Reveal delay={0.2}>
          <Button label={content.cta} href="/" />
        </Reveal>
      </div>
    </Section>
  );
}
