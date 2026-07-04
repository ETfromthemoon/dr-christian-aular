import { cn } from "@/lib/utils";

type Tone = "canvas" | "elevated" | "dark";

const TONES: Record<Tone, string> = {
  canvas: "bg-[#f2f2f4] text-[#0f1012]",
  elevated: "bg-[#fdfdfd] text-[#0f1012]",
  dark: "bg-[#0f1012] text-[#fdfdfd]",
};

/** Contenedor de sección estándar: ancho máx 1200px, ritmo vertical generoso. */
export function Section({
  id,
  tone = "canvas",
  children,
  className,
  containerClassName,
}: {
  id?: string;
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative w-full scroll-mt-24 py-[clamp(4.5rem,3rem+6vw,7rem)]", TONES[tone], className)}
    >
      <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", containerClassName)}>{children}</div>
    </section>
  );
}
