import Eyebrow from "./Eyebrow";
import Heading from "./Heading";
import Reveal from "./Reveal";
import Text from "./Text";

interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  text?: string;
}

export default function SectionIntro({
  title,
  eyebrow,
  text,
}: SectionIntroProps) {
  return (
    <div className="max-w-xl space-y-6">
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <Heading>{title}</Heading>
      </Reveal>
      {text && (
        <Reveal delay={0.16}>
          <Text>{text}</Text>
        </Reveal>
      )}
    </div>
  );
}
