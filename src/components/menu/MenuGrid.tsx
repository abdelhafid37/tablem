import { IDish } from "@/data/dishes";
import MenuCard from "./MenuCard";

export default function MenuGrid({ dishes }: { dishes: IDish[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {dishes.map((dish) => (
        <MenuCard key={dish.id} dish={dish} />
      ))}
    </div>
  );
}
