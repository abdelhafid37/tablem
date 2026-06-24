export interface IFeature {
  id: number;
  title: string;
  description: string;
}

export const features: IFeature[] = [
  {
    id: 1,
    title: "Outdoor Seating",
    description:
      "Enjoy breakfast, lunch, or dinner in a relaxed outdoor setting in the heart of Marrakech.",
  },
  {
    id: 2,
    title: "Vegan Options",
    description:
      "A variety of carefully prepared dishes designed to suit different dietary preferences.",
  },
  {
    id: 3,
    title: "Open Until Late",
    description:
      "From early morning breakfasts to late-night dining, Table M welcomes guests throughout the day.",
  },
];
