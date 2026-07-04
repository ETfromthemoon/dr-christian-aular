"use client";

import { Magnetic } from "@/components/motion";
import { cn } from "@/lib/utils";

/**
 * CTA principal del sistema Augen Pro adaptado.
 * variant="primary": relleno casi-negro (única acción dominante).
 * variant="ghost": sin relleno, borde hairline (acción secundaria).
 * El azul señal NUNCA se usa como relleno; solo como acento en el icono/texto.
 */
export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  magnetic = true,
  className,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  size?: "lg" | "md";
  magnetic?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-[26px] font-[400] tracking-[-0.01em] transition-all duration-300 ease-[var(--ease-expo)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071e3]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f2f2f4]";
  const sizes = size === "lg" ? "px-7 py-3.5 text-[15px]" : "px-5 py-2.5 text-[13px]";
  const variants =
    variant === "primary"
      ? "bg-[#0f1012] text-[#fdfdfd] hover:bg-[#020201] hover:-translate-y-0.5"
      : variant === "light"
        ? "bg-[#fdfdfd] text-[#0f1012] hover:bg-white hover:-translate-y-0.5"
        : "bg-transparent text-current border-[0.5px] border-current/30 hover:border-[#0071e3] hover:text-[#0071e3]";

  const isExternal = href.startsWith("http");
  const link = (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(base, sizes, variants, className)}
    >
      {children}
    </a>
  );

  return magnetic ? <Magnetic>{link}</Magnetic> : link;
}
