"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "motion/react";
import { cn } from "@/lib/utils";

/* ============================================================
   Primitivas de movimiento — Augen Pro adaptado (Dr. Aular)
   Todas respetan prefers-reduced-motion vía MotionConfig del layout.
   Estados `initial` nunca degradan legibilidad (sin blur pegado).
   ============================================================ */

/** Título que llega enfocándose (blur-to-focus), palabra por palabra.
 *  Todas las palabras ocupan su lugar final desde el frame 1 (layout estable). */
export function SplitText({
  text,
  delay = 0,
  stagger = 0.04,
  startIndex = 0,
  className,
}: {
  text: string;
  delay?: number;
  stagger?: number;
  startIndex?: number;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wIdx) => {
        const i = startIndex + wIdx;
        return (
          <span key={wIdx} className={cn("inline-block", className)}>
            <motion.span
              className="inline-block will-change-[filter,opacity,transform]"
              initial={{ opacity: 0.12, filter: "blur(12px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ delay: delay + i * stagger, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
            {wIdx < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </>
  );
}

/** Fade + slide-up al entrar en viewport (una sola vez). */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Fade simple al montar (para elementos above-the-fold). */
export function FadeIn({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Aurora azul difusa — coherente con el acento, no rompe el vacío clínico.
 *  tone="light" sobre superficies claras · tone="dark" sobre bandas oscuras. */
export function Aurora({ tone = "light" }: { tone?: "light" | "dark" }) {
  const blue = tone === "dark" ? "bg-[#0071e3]/30" : "bg-[#0071e3]/12";
  const blue2 = tone === "dark" ? "bg-[#4aa3ff]/20" : "bg-[#4aa3ff]/10";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className={cn("absolute -left-[12%] top-[2%] size-[52vw] max-w-[680px] rounded-full blur-[110px] animate-aurora-1", blue)} />
      <div className={cn("absolute -right-[8%] top-[24%] size-[42vw] max-w-[540px] rounded-full blur-[120px] animate-aurora-2", blue2)} />
      <div className={cn("absolute left-[34%] -top-[8%] size-[32vw] max-w-[420px] rounded-full blur-[130px] animate-aurora-3", blue2)} />
    </div>
  );
}

/** Botón magnético: el hijo se desplaza sutilmente hacia el cursor. */
export function Magnetic({
  children,
  strength = 0.22,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xs = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const ys = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });
  return (
    <motion.div
      ref={ref}
      style={{ x: xs, y: ys }}
      className={cn("inline-block", className)}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Contador que anima al entrar en viewport y muestra el valor final si no anima. */
export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 1.6,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  const formatted = Math.round(display).toLocaleString("es-CL");
  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/** Glow radial que sigue al cursor. Oculto hasta el primer movimiento. Para bandas oscuras. */
export function Spotlight({ color = "0, 113, 227", size = 480, opacity = 0.18 }: { color?: string; size?: number; opacity?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const xs = useSpring(x, { stiffness: 80, damping: 30 });
  const ys = useSpring(y, { stiffness: 80, damping: 30 });
  const background = useTransform(
    [xs, ys],
    ([cx, cy]) => `radial-gradient(${size}px circle at ${cx}px ${cy}px, rgba(${color}, ${opacity}), transparent 60%)`
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      x.set(e.clientX - r.left);
      y.set(e.clientY - r.top);
      if (!active) setActive(true);
    };
    const parent = el.parentElement;
    parent?.addEventListener("mousemove", onMove);
    return () => parent?.removeEventListener("mousemove", onMove);
  }, [x, y, active]);

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500"
      style={{ background, opacity: active ? 1 : 0 }}
    />
  );
}
