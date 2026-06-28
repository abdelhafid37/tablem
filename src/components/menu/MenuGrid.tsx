import { IDish } from "@/data/dishes";
import MenuCard from "./MenuCard";
import Reveal from "../ui/Reveal";

export default function MenuGrid({ dishes }: { dishes: IDish[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {dishes.map((dish, index) => (
        <Reveal key={dish.id} delay={Math.min(index * 0.08, 0.4)}>
          <MenuCard dish={dish} />
        </Reveal>
      ))}
    </div>
  );
}
