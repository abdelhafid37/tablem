import { Catgory } from "./categories";

export interface IDish {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: Exclude<Catgory, "all">;
  image: string;
  featured?: boolean;
}

export const dishes: IDish[] = [
  {
    id: 1,
    name: "Burrata Salad with Pesto & Toast",
    description: "Fresh burrata cheese served over pesto with radishes and toasted bread.",
    price: 18,
    category: "salad",
    image: "/images/dishes/dish-1.webp",
    featured: true,
  },
  {
    id: 2,
    name: "Chicken Stir-Fry Noodles",
    description: "Stir-fried noodles with seasoned chicken, red chili, and sesame seeds.",
    price: 16,
    category: "pasta",
    image: "/images/dishes/dish-2.webp",
    featured: true,
  },
  {
    id: 3,
    name: "Caviar Dumplings in Broth",
    description: "Delicate dumplings in a rich savory broth topped with salmon caviar.",
    price: 28,
    category: "main-course",
    image: "/images/dishes/dish-3.webp",
    featured: true,
  },
  {
    id: 4,
    name: "Fresh Oysters on Ice",
    description: "Fresh raw oysters served on ice with mignonette sauce and lemon wedges.",
    price: 32,
    category: "main-course",
    image: "/images/dishes/dish-4.webp",
    featured: true,
  },
  {
    id: 5,
    name: "Crispy Tempura Sushi Rolls",
    description: "Deep-fried tempura sushi rolls layered with savory fillings and cream cheese.",
    price: 22,
    category: "main-course",
    image: "/images/dishes/dish-5.webp",
    featured: true,
  },
  {
    id: 6,
    name: "Crispy Indonesian Fried Duck",
    description: "Traditional crispy fried duck served over a banana leaf with authentic sambal.",
    price: 26,
    category: "main-course",
    image: "/images/dishes/dish-6.webp",
    featured: true,
  },
  {
    id: 7,
    name: "Grilled Lamb Chops",
    description:
      "Seared lamb chops served with beetroot puree, green herb sauce, and pickled radish.",
    price: 34,
    category: "main-course",
    image: "/images/dishes/dish-7.webp",
  },
  {
    id: 8,
    name: "Pan-Seared Salmon Fillet",
    description: "Seared salmon served over sautéed spinach, sweet potato puree, and microgreens.",
    price: 27,
    category: "main-course",
    image: "/images/dishes/dish-8.webp",
  },
  {
    id: 9,
    name: "Grilled Salmon Steak",
    description:
      "Char-grilled salmon steak drizzled with balsamic glaze, served with roasted potatoes and fresh salad.",
    price: 29,
    category: "main-course",
    image: "/images/dishes/dish-9.webp",
  },
];
