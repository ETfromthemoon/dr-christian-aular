"use client";

import { MotionConfig } from "motion/react";

/** Envuelve la app: todas las animaciones respetan prefers-reduced-motion automáticamente. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
