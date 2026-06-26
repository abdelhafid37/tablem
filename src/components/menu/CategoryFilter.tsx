import { categories, Catgory } from "@/data/categories";

interface CategoryFilterProps {
  activeCategory: Catgory;
  onCategoryChange: (category: Catgory) => void;
}

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const active = activeCategory === category.value;

        return (
          <button
            key={category.value}
            type="button"
            onClick={() => onCategoryChange(category.value)}
            className={`border px-8 md:px-5 py-4 md:py-2 text-sm font-medium transition-colors duration-300 cursor-pointer ${active ? "border-brand bg-brand text-surface" : "border-text/10 bg-surface text-muted hover:border-brand hover:text-brand"}`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
