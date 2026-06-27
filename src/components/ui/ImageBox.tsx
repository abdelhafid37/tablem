"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ImageBoxProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  parallax?: boolean;
}

const PARALLAX_OFFSET = 60;

export default function ImageBox({
  alt,
  src,
  className = "",
  priority = false,
  sizes = "",
  parallax = false,
}: ImageBoxProps) {
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
          className={parallax ? "object-cover scale-110" : "object-cover"}
        />
      </motion.div>
    </div>
  );
}
