import Image from "next/image";

interface IImageBox {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function ImageBox({
  alt,
  src,
  className = "",
  priority = false,
}: IImageBox) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        className="object-cover"
        fill
        sizes=""
        priority={priority}
      />
    </div>
  );
}
