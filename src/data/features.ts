export interface IFeature {
  id: number;
  title: string;
  description: string;
}

export const features: IFeature[] = [
  {
    id: 1,
    title: "Fresh Every Day",
    description:
      "Every meal is prepared with fresh ingredients selected daily.",
  },
  {
    id: 2,
    title: "Made to Share",
    description:
      "From breakfast spreads to signature dishes, our menu brings people together.",
  },
  {
    id: 3,
    title: "Morning to Midnight",
    description: "Join us for breakfast, lunch, dinner, or a late-night bite.",
  },
];
