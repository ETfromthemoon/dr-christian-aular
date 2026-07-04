import { Section } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/tag";
import { Reveal } from "@/components/motion";
import { Accordion, type QA } from "@/components/ui/accordion";

const FAQ: QA[] = [
  {
    q: "¿Esto reemplaza mi tratamiento médico?",
    a: "No. Complementa, nunca sustituye. Consulta siempre con tu médico antes de cambiar un tratamiento.",
  },
  {
    q: "¿Cuánto tiempo necesito al día?",
    a: "Desde 15 minutos hasta 1 hora. Se adapta a ti; la constancia pesa más que la cantidad.",
  },
  {
    q: "¿Necesito experiencia en meditación o yoga?",
    a: "No. Está pensado para empezar de cero, con una progresión gradual.",
  },
  {
    q: "¿Tiene contenido religioso?",
    a: "No. Las prácticas se presentan desde una mirada secular y basada en evidencia; respeta todas las creencias.",
  },
];

export function Faq() {
  return (
    <Section id="faq" tone="elevated">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
        <div className="max-w-md">
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <h2 className="mt-4 text-[clamp(1.9rem,1rem+2.6vw,3rem)] leading-[1.08] tracking-[-0.02em] font-[350]">
            Lo que probablemente te estás preguntando.
          </h2>
        </div>

        <Reveal>
          <Accordion items={FAQ} />
        </Reveal>
      </div>
    </Section>
  );
}
