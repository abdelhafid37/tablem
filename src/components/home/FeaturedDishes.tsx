import { dishes } from "@/data/dishes";
import Section from "../layout/Section";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import MenuCard from "../menu/MenuCard";

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <MenuCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </Section>
  );
}
