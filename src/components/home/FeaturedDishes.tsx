import { dishes } from "@/data/dishes";
import Section from "../layout/Section";
import MenuGrid from "../menu/MenuGrid";
import SectionIntro from "../ui/SectionIntro";

const content = {
  eyebrow: "OUR MENU",
  title: "Signature Dishes",
  text: "From hearty breakfasts to signature favorites, these are some of the dishes our guests come back for again and again.",
};

const featuredDishes = dishes.filter((dish) => dish.featured);

export default function FeaturedDishes() {
  return (
    <Section>
      <div className="space-y-12">
        <SectionIntro
          title={content.title}
          eyebrow={content.eyebrow}
          text={content.text}
        />

        <MenuGrid dishes={featuredDishes} />
      </div>
    </Section>
  );
}
