import { Section } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/tag";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/motion";
import { WordReveal, DotGrid } from "@/components/scroll-fx";
import { SITE } from "@/lib/site";
import { Check, ShieldCheck, ArrowUpRight } from "lucide-react";

const INCLUDES = ["108 páginas + plantillas", "Comunidad privada", "Formatos PDF, ePub y Mobi"];

export function Pricing() {
  return (
    <Section id="programa" tone="canvas">
      <DotGrid opacity={0.05} />
      <div className="max-w-2xl">
        <SectionLabel>El programa</SectionLabel>
        <h2 className="mt-4 text-[clamp(1.9rem,1rem+2.6vw,3rem)] leading-[1.08] tracking-[-0.02em] font-[350]">
          <WordReveal text="Todo lo que incluye tu copia." />
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <div className="group card-lift rounded-[54px] bg-[#fdfdfd] hairline p-10">
            <ul className="flex flex-col gap-3">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check strokeWidth={1.5} className="size-5 shrink-0 text-[#0071e3]" />
                  <span className="text-[16px] leading-relaxed text-[#5e5e5e] font-[350]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-end gap-3">
              <span className="text-[clamp(2.5rem,1rem+4vw,4rem)] leading-none tracking-[-0.02em] font-[350] text-[#0f1012]">
                {SITE.price.currency}
                {SITE.price.current}
              </span>
              <span className="pb-1 text-[16px] text-[#8f8f8f] line-through">
                {SITE.price.currency}
                {SITE.price.before}
              </span>
            </div>

            <CTAButton href={SITE.checkoutUrl} className="mt-8 w-full">
              Obtener el programa
              <ArrowUpRight strokeWidth={1.5} className="arrow-slide size-4" />
            </CTAButton>

            <p className="mt-4 text-[13px] leading-relaxed text-[#8f8f8f] font-[350]">
              Pago único. Acceso inmediato. Garantía de 30 días.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group card-lift rounded-[54px] bg-[#fdfdfd] hairline p-10 lg:h-full lg:flex lg:flex-col lg:justify-center">
            <ShieldCheck strokeWidth={1.5} className="size-7 text-[#0071e3]" />
            <h3 className="mt-5 text-[20px] font-[400] tracking-[-0.01em] text-[#0f1012]">
              Garantía de 30 días
            </h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#5e5e5e] font-[350]">
              Si en 30 días aplicas las técnicas y no notas una baja real en tu estrés, te devolvemos el
              100%. Sin preguntas. Sin complicaciones.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
