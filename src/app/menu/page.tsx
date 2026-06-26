"use client";

import * as React from "react";

import Section from "@/components/layout/Section";
import CategoryFilter from "@/components/menu/CategoryFilter";
import MenuGrid from "@/components/menu/MenuGrid";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

import { categories, Catgory } from "@/data/categories";
import { dishes } from "@/data/dishes";

const content = {
  title: "Our Menu",
  text: "Explore our carefully crafted selection of breakfasts, signature dishes, desserts, and refreshing drinks.",
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = React.useState<Catgory>("all");

  const filteredDishes =
    activeCategory === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === activeCategory);

  return (
    <Section>
      <div className="space-y-12">
        <div className="max-w-xl space-y-6">
          <Heading>{content.title}</Heading>
          <Text>{content.text}</Text>
        </div>
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        {filteredDishes.length > 0 ? (
          <MenuGrid dishes={filteredDishes} />
        ) : (
          <p className="text-muted">No dishes found.</p>
        )}
      </div>
    </Section>
  );
}
