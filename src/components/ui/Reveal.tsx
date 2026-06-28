"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  y?: number;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  y = 24,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once,
    margin: "-15% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)", scale: 0.985 }}
      animate={
        isInView ? { opacity: 1, y: 0, filter: "blur(0)", scale: 1 } : undefined
      }
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
