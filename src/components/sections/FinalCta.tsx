import { Section } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { Aurora, Spotlight, Reveal } from "@/components/motion";
import { WordReveal, KineticWord } from "@/components/scroll-fx";
import { SITE } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

/** CTA final — banda oscura con aurora + spotlight que sigue el cursor. */
export function FinalCta() {
  return (
    <Section id="cta-final" tone="dark" className="overflow-hidden" containerClassName="flex flex-col items-center text-center">
      <Aurora tone="dark" />
      <Spotlight />

      <div aria-hidden className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <KineticWord text="CALMA" className="text-white/[0.05]" />
      </div>

      <Reveal className="relative z-10 flex max-w-2xl flex-col items-center">
        <h2 className="text-[clamp(2rem,1rem+3.5vw,3.6rem)] font-[350] leading-[1.08] tracking-[-0.02em] text-[#fdfdfd]">
          <WordReveal text="Tu descanso no puede seguir esperando." from="#454b54" to="#fdfdfd" />
        </h2>

        <p className="mt-5 text-[18px] leading-relaxed font-[350] text-white/65">
          Empieza hoy con un método que ya ayudó a miles a salir del estrés crónico.
        </p>

        <div className="mt-9">
          <CTAButton href={SITE.checkoutUrl} variant="light">
            Obtener el programa
            <ArrowUpRight strokeWidth={1.5} size={18} className="arrow-slide" />
          </CTAButton>
        </div>

        <p className="mt-6 text-[13px] font-[350] text-white/50">
          US$30 · Acceso inmediato · Garantía de 30 días
        </p>
      </Reveal>
    </Section>
  );
}
