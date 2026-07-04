import { Section } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/tag";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/motion";
import { DotGrid, NodeNetwork, WordReveal } from "@/components/scroll-fx";
import { SITE } from "@/lib/site";

const STEPS = [
  {
    number: "01",
    title: "Entiendes qué te pasa.",
    body: "La fisiología del estrés explicada simple, para dejar de temerle.",
  },
  {
    number: "02",
    title: "Aprendes las técnicas.",
    body: "Prácticas contemplativas seculares, con base en evidencia, sin experiencia previa.",
  },
  {
    number: "03",
    title: "Las integras a tu día.",
    body: "Rutinas de 15 minutos a 1 hora, a tu ritmo. La constancia importa más que la cantidad.",
  },
  {
    number: "04",
    title: "Sostienes el cambio.",
    body: "Plantillas y comunidad privada para que no lo hagas solo.",
  },
];

export function Method() {
  return (
    <Section id="metodo" tone="elevated">
      <DotGrid opacity={0.04} />

      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[420px] w-[320px] -translate-y-1/2 opacity-50 md:block"
      >
        <NodeNetwork />
      </div>

      <div className="max-w-2xl">
        <SectionLabel>El método</SectionLabel>
        <h2 className="mt-4 text-[clamp(1.9rem,1rem+2.6vw,3rem)] leading-[1.08] tracking-[-0.02em] font-[350]">
          <WordReveal text="Ciencia clínica y práctica contemplativa, en un solo camino." />
        </h2>
        <p className="mt-5 text-[18px] leading-relaxed text-[#5e5e5e] font-[350]">
          El programa trata el cuerpo, la mente, las emociones y el espíritu como un sistema
          conectado. No eliges entre lo riguroso y lo humano: tienes las dos cosas.
        </p>
      </div>

      <div className="relative mt-16 max-w-2xl">
        {STEPS.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.1}>
            <div className="relative flex gap-6 pb-12 last:pb-0">
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[27px] top-[52px] bottom-0 w-px bg-black/[.08]"
                />
              )}
              <span className="shrink-0 text-[28px] font-[350] tracking-[-0.02em] text-[#0071e3]">
                {step.number}
              </span>
              <div className="pt-1">
                <h3 className="text-[20px] md:text-[22px] font-[400] tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-[#5e5e5e] font-[350]">
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center text-center">
        <p className="text-[16px] text-[#5e5e5e] font-[350]">
          Un camino claro, sin improvisar.
        </p>
        <CTAButton href={SITE.checkoutUrl} className="mt-5">
          Obtener el programa
        </CTAButton>
      </div>
    </Section>
  );
}
