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
    name: "Table M Burger",
    description:
      "Our signature burger with seasoned beef, melted cheese, crispy potatoes, and house toppings.",
    price: 119,
    category: "burger",
    image: "/images/placeholder.webp",
    featured: true,
  },
  {
    id: 2,
    name: "Table M Salad",
    description:
      "Avocado, mango, green beans, tuna, shrimp, and toasted walnuts.",
    price: 110,
    category: "salad",
    image: "/images/placeholder.webp",
    featured: true,
  },
  {
    id: 3,
    name: "Table M Pizza",
    description:
      "Loaded with chicken, shrimp, mushrooms, tuna, and seasoned minced beef.",
    price: 115,
    category: "pizza",
    image: "/images/placeholder.webp",
    featured: true,
  },
  {
    id: 4,
    name: "Moroccan Breakfast",
    description: "Baghrir, msemen, harcha, amlou, olives, and eggs with khlii.",
    price: 69,
    category: "breakfast",
    image: "/images/placeholder.webp",
    featured: true,
  },
  {
    id: 5,
    name: "Seafood Pasta",
    description:
      "Penne pasta with mixed seafood in your choice of creamy or tomato sauce.",
    price: 95,
    category: "pasta",
    image: "/images/placeholder.webp",
    featured: true,
  },
  {
    id: 6,
    name: "Seafood Pastilla",
    description: "A Moroccan classic filled with delicately seasoned seafood.",
    price: 95,
    category: "main-course",
    image: "/images/placeholder.webp",
    featured: true,
  },
  {
    id: 7,
    name: "Chicken Brochette",
    description:
      "Grilled chicken skewers served with fries, rice, and fresh salad.",
    price: 89,
    category: "main-course",
    image: "/images/placeholder.webp",
  },
  {
    id: 8,
    name: "Chicken Club Sandwich",
    description: "Grilled chicken layered with lettuce, tomato, and cheese.",
    price: 79,
    category: "sandwich",
    image: "/images/placeholder.webp",
  },
  {
    id: 9,
    name: "Cheeseburger",
    description:
      "Juicy beef burger topped with cheddar cheese and served with fries.",
    price: 95,
    category: "burger",
    image: "/images/placeholder.webp",
  },
];
