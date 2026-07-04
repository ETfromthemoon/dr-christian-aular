"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

/* ============================================================
   Efectos de scroll estilo auros.global — paleta Augen Pro.
   ============================================================ */

/** Una palabra que pasa de gris tenue a color pleno según el progreso de scroll. */
function Word({
  progress,
  range,
  from,
  to,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  from: string;
  to: string;
  children: string;
}) {
  const color = useTransform(progress, range, [from, to]);
  return (
    <motion.span style={{ color }} className="inline-block">
      {children}
      {" "}
    </motion.span>
  );
}

/**
 * Título que se "enciende" palabra por palabra a medida que sube por el viewport.
 * Firma de auros: el texto revela su color con el scroll. Hereda tamaño/peso del contenedor.
 */
export function WordReveal({
  text,
  className,
  from = "#b4b4bc",
  to = "#0f1012",
}: {
  text: string;
  className?: string;
  from?: string;
  to?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.52"],
  });
  const words = text.split(" ");
  return (
    <span ref={ref} className={cn("inline", className)}>
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} from={from} to={to}>
            {w}
          </Word>
        );
      })}
    </span>
  );
}

/** Palabra display gigante que se desplaza horizontalmente con el scroll (parallax kinético). */
export function KineticWord({
  text,
  className,
  baseX = 10,
  travel = 26,
}: {
  text: string;
  className?: string;
  baseX?: number;
  travel?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [`${baseX}%`, `${baseX - travel}%`]);
  return (
    <div ref={ref} aria-hidden className="relative w-full select-none overflow-hidden py-2">
      <motion.div
        style={{ x }}
        className={cn(
          "whitespace-nowrap text-[16vw] font-[350] leading-[0.9] tracking-[-0.05em] text-[#e6e6ec] will-change-transform",
          className
        )}
      >
        {text}
      </motion.div>
    </div>
  );
}

/** Envuelve contenido con desplazamiento vertical sutil según el scroll (profundidad). */
export function Parallax({
  children,
  speed = 0.2,
  className,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -70}px`, `${speed * 70}px`]);
  return (
    <motion.div ref={ref} style={{ y }} className={cn("will-change-transform", className)}>
      {children}
    </motion.div>
  );
}

/** Patrón de puntos sutil de textura (se desvanece hacia los bordes). */
export function DotGrid({ className, opacity = 0.05 }: { className?: string; opacity?: number }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
      style={{
        backgroundImage: `radial-gradient(rgba(0,0,0,${opacity}) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
        maskImage: "radial-gradient(ellipse 70% 70% at 50% 40%, black, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 40%, black, transparent 80%)",
      }}
    />
  );
}

/** Red de nodos azules con enlaces que se dibujan en bucle — motivo "network" de auros. */
export function NodeNetwork({ className }: { className?: string }) {
  const nodes = [
    { cx: 20, cy: 30 },
    { cx: 70, cy: 20 },
    { cx: 120, cy: 55 },
    { cx: 55, cy: 80 },
    { cx: 105, cy: 110 },
    { cx: 20, cy: 120 },
  ];
  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 4],
    [2, 4],
    [3, 5],
  ];
  return (
    <svg viewBox="0 0 140 140" aria-hidden className={cn("h-full w-full", className)} fill="none">
      {links.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="#0071e3"
          strokeWidth={0.6}
          strokeOpacity={0.5}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.15 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={4.5}
          fill="#0071e3"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
        >
          <animate attributeName="opacity" values="1;0.55;1" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
        </motion.circle>
      ))}
    </svg>
  );
}
