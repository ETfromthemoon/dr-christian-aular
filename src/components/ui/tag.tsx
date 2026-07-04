import { cn } from "@/lib/utils";

/** Pill de categoría — borde azul señal 0.5px, sin relleno, texto azul. Firma Augen Pro. */
export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-[0.5px] border-[#0071e3] px-3 py-1 text-[12px] font-[400] tracking-[-0.01em] text-[#0071e3]",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Etiqueta de sección (preámbulo gris pequeño sobre título grande). */
export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("block text-[12px] font-[400] uppercase tracking-[0.14em] text-[#8f8f8f]", className)}>
      {children}
    </span>
  );
}
