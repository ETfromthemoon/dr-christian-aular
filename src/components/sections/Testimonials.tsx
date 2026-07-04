import Image from "next/image";
import { Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/tag";
import { Reveal } from "@/components/motion";
import { DotGrid, Parallax, WordReveal } from "@/components/scroll-fx";

const TESTIMONIALS = [
  {
    quote:
      "Después de años de terapias y medicamentos para mi ansiedad, este programa me dio herramientas que de verdad funcionaron. Por primera vez en décadas, puedo decir que vivo en lugar de sobrevivir.",
    avatar: "/images/testi-maria.webp",
    name: "María C.",
    role: "42 años",
    alt: "Retrato de María C., paciente que completó el programa",
  },
  {
    quote:
      "Como médico escéptico, abrí este libro con reservas. La solidez científica me conquistó, pero fueron los resultados en mi propia vida los que me convencieron. Ahora lo recomiendo a mis pacientes.",
    avatar: "/images/testi-carlos.webp",
    name: "Carlos P.",
    role: "médico",
    alt: "Retrato de Carlos P., médico que recomienda el programa",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonios" tone="canvas">
      <DotGrid opacity={0.05} />

      <div className="max-w-2xl">
        <SectionLabel>Lo que dicen</SectionLabel>
        <h2 className="mt-4 text-[clamp(1.9rem,1rem+2.6vw,3rem)] leading-[1.08] tracking-[-0.02em] font-[350]">
          <WordReveal text="Historias reales, no promesas." />
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((testimonial, i) => (
          <Reveal key={testimonial.name} delay={i * 0.1}>
            <article className="group card-lift flex h-full flex-col rounded-[54px] bg-[#fdfdfd] hairline p-10">
              <Quote strokeWidth={1.5} className="size-9 text-[#0071e3] opacity-20" />
              <p className="mt-6 text-[18px] md:text-[20px] leading-relaxed text-[#0f1012] font-[350]">
                {testimonial.quote}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <Parallax speed={0.12}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.alt}
                    width={56}
                    height={56}
                    className="size-14 rounded-full object-cover"
                  />
                </Parallax>
                <div>
                  <p className="text-[16px] font-[400] tracking-[-0.01em]">{testimonial.name}</p>
                  <p className="text-[13px] text-[#8f8f8f] font-[350]">{testimonial.role}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
