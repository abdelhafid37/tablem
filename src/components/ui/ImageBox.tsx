import Image from "next/image";

interface IImageBox {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageBox({ alt, src, className = "" }: IImageBox) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} className="object-cover" fill />
    </div>
  );
}
