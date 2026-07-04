import { Section } from "@/components/ui/section";
import { Reveal, NumberTicker } from "@/components/motion";
import { SITE } from "@/lib/site";

const NUMBER_CLASS =
  "text-[clamp(2rem,1rem+3vw,3.4rem)] font-[350] tracking-[-0.03em] text-[#0f1012]";
const LABEL_CLASS = "mt-2 text-[13px] leading-relaxed text-[#5e5e5e] font-[350] md:text-[14px]";

export function StatsBar() {
  return (
    <Section tone="elevated">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
        <Reveal delay={0} className="border-t-[0.5px] border-black/[.06] pt-6 sm:border-t-0 sm:pt-0 sm:pr-6">
          <NumberTicker value={SITE.proof.patients} prefix="+" className={NUMBER_CLASS} />
          <p className={LABEL_CLASS}>pacientes atendidos</p>
        </Reveal>

        <Reveal
          delay={0.08}
          className="border-t-[0.5px] border-black/[.06] pt-6 sm:border-t-0 sm:border-l-[0.5px] sm:pt-0 sm:pl-6"
        >
          <NumberTicker value={SITE.proof.years} className={NUMBER_CLASS} />
          <p className={LABEL_CLASS}>años de experiencia clínica</p>
        </Reveal>

        <Reveal
          delay={0.16}
          className="border-t-[0.5px] border-black/[.06] pt-6 sm:border-t-0 sm:border-l-[0.5px] sm:pt-0 sm:pl-6"
        >
          <span className={NUMBER_CLASS}>U. de Chile</span>
          <p className={LABEL_CLASS}>postítulo en Mindfulness (con distinción)</p>
        </Reveal>

        <Reveal
          delay={0.24}
          className="border-t-[0.5px] border-black/[.06] pt-6 sm:border-t-0 sm:border-l-[0.5px] sm:pt-0 sm:pl-6"
        >
          <NumberTicker value={SITE.proof.guaranteeDays} className={NUMBER_CLASS} />
          <p className={LABEL_CLASS}>días de garantía total</p>
        </Reveal>
      </div>
    </Section>
  );
}
