import { IDish } from "@/data/dishes";
import ImageBox from "../ui/ImageBox";

export default function MenuCard({
  dish: { image, name, price, description },
}: {
  dish: IDish;
}) {
  return (
    <article>
      <ImageBox
        alt={name}
        src={image ?? "/images/placeholder.webp"}
        className="aspect-square brightness-50"
      />
      <div className="mt-5">
        <div className="flex justify-between items-center gap-4">
          <h3 className="font-display text-2xl">{name}</h3>
          <span className="text-brand font-medium shrink-0">{price} MAD</span>
        </div>

        {description && (
          <p className="text-muted leading-relaxed text-sm mt-3">
            {description}
          </p>
        )}
      </div>
    </article>
  );
}
