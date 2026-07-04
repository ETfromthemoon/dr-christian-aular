import { Section } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/tag";
import { Reveal } from "@/components/motion";
import { Moon, BrainCircuit, HeartPulse, CloudLightning } from "lucide-react";

const ITEMS = [
  {
    icon: Moon,
    title: "Duermes, pero no descansas.",
    body: "Te despiertas igual de agotado que cuando te acostaste.",
  },
  {
    icon: BrainCircuit,
    title: "La mente no para.",
    body: "Pensamientos en bucle que no puedes apagar, aunque quieras.",
  },
  {
    icon: HeartPulse,
    title: "El cuerpo pasa la cuenta.",
    body: "Tensión, digestión, dolores que aparecen sin causa clara.",
  },
  {
    icon: CloudLightning,
    title: "Reaccionas distinto.",
    body: "Menos paciencia, más irritable, lejos de la persona que quieres ser.",
  },
];

export function Problem() {
  return (
    <Section id="problema" tone="canvas">
      <div className="max-w-2xl">
        <SectionLabel>El problema</SectionLabel>
        <h2 className="mt-4 text-[clamp(1.9rem,1rem+2.6vw,3rem)] leading-[1.08] tracking-[-0.02em] font-[350]">
          Vivir en alerta todo el día tiene un costo.
        </h2>
        <p className="mt-5 text-[18px] leading-relaxed text-[#5e5e5e] font-[350]">
          El estrés sostenido no es solo sentirse cansado. Se mete en el cuerpo, en el sueño y en las decisiones.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <article className="h-full rounded-[40px] bg-[#fdfdfd] hairline p-8">
              <item.icon strokeWidth={1.5} className="size-6 text-[#0071e3]" />
              <h3 className="mt-5 text-[20px] font-[400] tracking-[-0.01em]">{item.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-[#5e5e5e] font-[350]">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
