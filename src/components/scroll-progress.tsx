"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Barre de progression de lecture, collée sous l'en-tête.
 * Purement indicative : masquée aux lecteurs d'écran.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-16 z-40 h-1 origin-left bg-electric-600"
    />
  );
}
