import Image from "next/image";
import { Sparkles } from "lucide-react";
import { SplitText, FadeIn, Aurora } from "@/components/motion";
import { Tag } from "@/components/ui/tag";
import { CTAButton } from "@/components/ui/cta-button";
import { SITE } from "@/lib/site";

/** Héroe — titular blur-to-focus, portada del libro flotando con halo azul sutil. */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#f2f2f4] pt-32 pb-16 sm:pt-40"
    >
      <Aurora tone="light" />

      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="max-w-[640px]">
          <Tag>
            <Sparkles strokeWidth={1.5} className="size-3.5" />
            Método médico · estrés crónico
          </Tag>

          <h1 className="mt-6 text-[clamp(2.4rem,1rem+4.4vw,4.4rem)] font-[350] leading-[1.05] tracking-[-0.03em] text-[#0f1012]">
            <SplitText text="El estrés crónico no es" startIndex={0} />
            <br />
            <SplitText text="tu forma normal de vivir." startIndex={5} />
          </h1>

          <FadeIn delay={0.5}>
            <p className="mt-7 text-[18px] leading-relaxed font-[350] text-[#5e5e5e] md:text-[20px]">
              Un método creado por un médico cirujano, probado con más de 100.000 pacientes, que
              une la evidencia clínica con la práctica contemplativa. Sin milagros: pasos claros
              que puedes sostener en 15 minutos al día.
            </p>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton href={SITE.checkoutUrl}>Obtener el programa</CTAButton>
              <CTAButton href="#metodo" variant="ghost">
                Ver el método
              </CTAButton>
            </div>

            <p className="mt-6 text-[13px] font-[350] text-[#8f8f8f]">
              108 páginas + plantillas · Garantía de 30 días · PDF, ePub y Mobi
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full bg-[#0071e3]/10 blur-[100px]"
          />
          <div className="group relative mx-auto w-[70%] max-w-[340px] transition-transform duration-500 ease-[var(--ease-expo)] hover:-translate-y-1 hover:scale-[1.02] hover:rotate-[0.6deg] lg:w-full">
            <Image
              src="/images/book.webp"
              alt="Programa para la liberación del estrés — libro del Dr. Christian Aular"
              width={555}
              height={722}
              priority
              sizes="(max-width: 768px) 70vw, (max-width: 1200px) 35vw, 420px"
              className="h-auto w-full"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
