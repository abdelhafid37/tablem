import Image from "next/image";

interface IImageBox {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function ImageBox({
  alt,
  src,
  className = "",
  priority = false,
  sizes = "",
}: IImageBox) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        className="object-cover"
        fill
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
