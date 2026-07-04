import Image from "next/image";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/tag";
import { Reveal } from "@/components/motion";
import { WordReveal, Parallax, DotGrid } from "@/components/scroll-fx";

const CREDENTIALS = [
  "Medicina General — Universidad Nacional Experimental Francisco de Miranda",
  "Postítulo en Mindfulness y Habilidades Relacionales — Universidad de Chile (con distinción)",
  "Formación en Cirugía General (3 años de postgrado)",
  "Diplomado de Ultrasonido",
  "Estudios en prácticas contemplativas y medicina del estilo de vida",
  "Practicante de yoga desde 2022",
];

export function About() {
  return (
    <Section id="autor" tone="elevated">
      <DotGrid opacity={0.04} />
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal className="order-last md:order-first">
          <Parallax speed={0.22}>
            <div className="relative mx-auto max-w-[398px] overflow-hidden rounded-[40px] hairline">
              <Image
                src="/images/book-hands.webp"
                alt="Ejemplar impreso del programa para la liberación del estrés"
                width={398}
                height={468}
                sizes="(max-width: 768px) 80vw, 398px"
                className="h-auto w-full object-cover"
              />
            </div>
          </Parallax>
        </Reveal>

        <Reveal>
          <SectionLabel>Sobre mí</SectionLabel>
          <h2 className="mt-4 text-[clamp(1.9rem,1rem+2.6vw,3rem)] leading-[1.08] tracking-[-0.02em] font-[350]">
            <WordReveal text="Soy médico. Y también busqué esto para mí." />
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-[#5e5e5e] font-[350]">
            Soy Christian Aular, médico cirujano con más de 14 años de práctica clínica. He
            atendido a más de 100.000 pacientes, desde medicina forense hasta dirección médica.
            En el camino entendí algo que la facultad no enseña: el estrés crónico se trata, y se
            trata mejor cuando la ciencia y la calma trabajan juntas.
          </p>

          <ul className="mt-8 flex flex-col">
            {CREDENTIALS.map((credential, index) => (
              <Reveal
                key={credential}
                as="li"
                delay={index * 0.06}
                className="flex gap-3 border-t-[0.5px] border-black/[.06] py-4 first:border-t-0 first:pt-0"
              >
                <Check strokeWidth={1.5} className="mt-0.5 size-4 shrink-0 text-[#0071e3]" />
                <span className="text-[16px] leading-relaxed text-[#5e5e5e] font-[350]">
                  {credential}
                </span>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
