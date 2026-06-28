"use client";

import * as React from "react";

import Section from "@/components/layout/Section";
import CategoryFilter from "@/components/menu/CategoryFilter";
import MenuGrid from "@/components/menu/MenuGrid";
import Text from "@/components/ui/Text";

import { Catgory } from "@/data/categories";
import { dishes } from "@/data/dishes";
import Display from "@/components/ui/Display";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";

const content = {
  eyebrow: "",
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
        <SectionIntro
          eyebrow={content.eyebrow}
          title={content.title}
          text={content.text}
        />

        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {filteredDishes.length > 0 ? (
          <MenuGrid dishes={filteredDishes} />
        ) : (
          <Reveal>
            <p className="text-muted">No dishes found.</p>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
