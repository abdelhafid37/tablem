import { IDish } from "@/data/dishes";
import ImageFrame from "../ui/ImageFrame";

export default function MenuCard({
  dish: { image, name, price, description },
}: {
  dish: IDish;
}) {
  return (
    <article className="group">
      <ImageFrame
        alt={name}
        src={image ?? "/images/placeholder.webp"}
        hover
        className="aspect-square"
        sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
      />
      <div className="mt-5">
        <div className="flex justify-between items-center gap-4">
          <h3 className="font-display text-2xl group-hover:text-brand transition-colors duration-300">
            {name}
          </h3>
          <span className="text-brand font-medium shrink-0">{price} dh</span>
        </div>

        {description && (
          <p className="text-muted leading-relaxed text-base mt-3">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
