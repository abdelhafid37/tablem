import { dishes } from "@/data/dishes";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import MenuGrid from "../menu/MenuGrid";

const content = {
  title: "Signature Dishes",
  text: "Discover some of Table M's most loved creations prepared with fresh ingredients and Moroccan inspiration.",
};

const featuredDishes = dishes.filter((dish) => dish.featured);

export default function FeaturedDishes() {
  return (
    <Section>
      <div className="space-y-12">
        <div className="space-y-6 max-w-xl">
          <Heading>{content.title}</Heading>
          <Text>{content.text}</Text>
        </div>
        <MenuGrid dishes={featuredDishes} />
      </div>
    </Section>
  );
}
