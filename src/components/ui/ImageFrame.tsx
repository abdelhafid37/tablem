"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
  hover?: boolean;
}

const PARALLAX_OFFSET = 60;

export default function ImageFrame({
  alt,
  src,
  className = "",
  priority = false,
  sizes = "100vw",
  parallax = false,
  hover = false,
}: ImageFrameProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-PARALLAX_OFFSET, PARALLAX_OFFSET],
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={parallax ? { y } : {}} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover will-change-transform transition-[transform,filter] duration-700 ease-out ${parallax ? "scale-110" : ""} ${
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
