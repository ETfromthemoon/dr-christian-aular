import { Section } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/tag";
import { Reveal } from "@/components/motion";
import { Moon, Waves, Sun, Infinity, Clock, Stethoscope } from "lucide-react";

const BENEFITS = [
  {
    icon: Moon,
    title: "Duermes de verdad.",
    body: "Descanso que repara, no solo horas en la cama.",
  },
  {
    icon: Waves,
    title: "Bajas el volumen mental.",
    body: "Herramientas para cortar el bucle de pensamientos.",
  },
  {
    icon: Sun,
    title: "Vives en vez de sobrevivir.",
    body: "Recuperas la sensación de estar presente en tu propia vida.",
  },
  {
    icon: Infinity,
    title: "Sin depender de nadie.",
    body: "Prácticas que quedan contigo para siempre.",
  },
  {
    icon: Clock,
    title: "A tu ritmo.",
    body: "Desde 15 minutos al día; sin dejar tu vida en pausa.",
  },
  {
    icon: Stethoscope,
    title: "Base médica, no moda.",
    body: "Todo apoyado en evidencia y 14 años de clínica.",
  },
];

export function Benefits() {
  return (
    <Section id="beneficios" tone="canvas">
      <div className="max-w-2xl">
        <SectionLabel>Qué cambia</SectionLabel>
        <h2 className="mt-4 text-[clamp(1.9rem,1rem+2.6vw,3rem)] leading-[1.08] tracking-[-0.02em] font-[350]">
          Lo que recuperas cuando el estrés baja.
        </h2>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {BENEFITS.map((benefit, i) => (
          <Reveal key={benefit.title} delay={i * 0.08}>
            <article className="h-full rounded-[40px] bg-[#fdfdfd] hairline p-8">
              <benefit.icon strokeWidth={1.5} className="size-6 text-[#0071e3]" />
              <h3 className="mt-5 text-[18px] md:text-[20px] font-[400] tracking-[-0.01em]">
                {benefit.title}
              </h3>
              <p className="mt-2 text-[16px] leading-relaxed text-[#5e5e5e] font-[350]">
                {benefit.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
