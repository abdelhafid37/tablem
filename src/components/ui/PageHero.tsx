import Display from "./Display";
import Reveal from "./Reveal";
import Text from "./Text";

export default function PageHero({
  text,
  title,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl space-y-6">
      <Reveal>
        <Display>{title}</Display>
      </Reveal>
      <Reveal delay={0.1}>
        <Text>{text}</Text>
      </Reveal>
    </div>
  );
}
