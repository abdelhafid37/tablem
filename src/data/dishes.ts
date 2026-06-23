export interface IDish {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
}

export const dishes: IDish[] = [
  {
    id: 1,
    name: "Table M Burger",
    description:
      "Viande hachée, pomme de terre, fromage, charcuteries, œuf et tomates séchées.",
    price: 119,
    category: "burger",
    image: "/images/placeholder.webp",
    featured: true,
  },

  {
    id: 2,
    name: "Salade Table M",
    description: "Avocat, mangue, haricots verts, crevettes, thon et noix.",
    price: 110,
    category: "salad",
    image: "/images/placeholder.webp",
    featured: true,
  },

  {
    id: 3,
    name: "Pizza Table M",
    description: "Champignons, crevettes, poulet, viande hachée et thon.",
    price: 115,
    category: "pizza",
    image: "/images/placeholder.webp",
    featured: true,
  },

  {
    id: 4,
    name: "Maghribi Breakfast",
    description: "Baghrir, Msemen, Harcha, Amlou, olives et œufs au khli3.",
    price: 69,
    category: "breakfast",
    image: "/images/placeholder.webp",
    featured: true,
  },

  {
    id: 5,
    name: "Pasta Seafood",
    description: "Penne avec fruits de mer, sauce blanche ou sauce tomate.",
    price: 95,
    category: "pasta",
    image: "/images/placeholder.webp",
    featured: true,
  },

  {
    id: 6,
    name: "Pastilla Fruits de Mer",
    description: "Une spécialité marocaine raffinée aux fruits de mer.",
    price: 95,
    category: "moroccan",
    image: "/images/placeholder.webp",
    featured: true,
  },
];
