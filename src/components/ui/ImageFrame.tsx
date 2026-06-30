"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
  hover?: boolean;
  delay?: number;
}

const PARALLAX_OFFSET = 60;
const imageVariants = {
  hidden: { opacity: 0, scale: 1.05, filter: "blur(8px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
} as const;

export default function ImageFrame({
  alt,
  src,
  className = "",
  priority = false,
  sizes = "100vw",
  parallax = false,
  hover = false,
  delay = 0,
}: ImageFrameProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = React.useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(ref, {
    once: true,
    margin: "-15% 0px",
  });

  const shouldAnimate = loaded && isInView;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-PARALLAX_OFFSET, PARALLAX_OFFSET],
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        variants={imageVariants}
        transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={parallax ? { y } : {}}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onLoadingComplete={() => setLoaded(true)}
          className={`object-cover will-change-transform transition-[scale,filter] duration-700 ease-out ${
            parallax ? "scale-110" : ""
          } ${
            hover
              ? parallax
                ? "group-hover:scale-[1.13] group-hover:brightness-110"
                : "group-hover:scale-105 group-hover:brightness-110"
              : ""
          }`}
        />
      </motion.div>
    </div>
  );
}
