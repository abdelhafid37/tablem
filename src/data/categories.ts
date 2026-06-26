export const categories = [
  { label: "All", value: "all" },
  { label: "Breakfast", value: "breakfast" },
  { label: "Salads", value: "salad" },
  { label: "Sandwiches", value: "sandwich" },
  { label: "Burgers", value: "burger" },
  { label: "Pizza", value: "pizza" },
  { label: "Pasta", value: "pasta" },
  { label: "Main Dishes", value: "main-course" },
  { label: "Desserts", value: "dessert" },
  { label: "Drinks", value: "drink" },
] as const;

export type Catgory = (typeof categories)[number]["value"];
