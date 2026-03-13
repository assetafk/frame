"use client";

import { ReactNode } from "react";
import { motion, useTransform, useViewportScroll } from "@/lib/motion";

type HeroAnimationProps = {
  children: ReactNode;
};

export function HeroAnimation({ children }: HeroAnimationProps) {
  const { scrollYProgress } = useViewportScroll();
  const yParallax = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

  return (
    <motion.div style={{ y: yParallax }}>
      {children}
    </motion.div>
  );
}

