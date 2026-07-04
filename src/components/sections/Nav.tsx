"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { SITE, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Nav flotante tipo pill — se compacta al hacer scroll, sin sombras. */
export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <div
        className={cn(
          "w-full max-w-[720px] rounded-[14px] border-[0.5px] border-black/[.06] bg-[#fdfdfd]/85 backdrop-blur-md transition-[padding] duration-300 ease-[var(--ease-expo)]",
          isScrolled ? "px-4 py-2" : "px-5 py-3"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="flex items-center gap-1.5 text-[15px] font-[400] tracking-[-0.01em] text-[#0f1012] whitespace-nowrap"
          >
            {SITE.name}
            <span aria-hidden className="size-[5px] rounded-full bg-[#0071e3]" />
          </a>

          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-[350] text-[#5e5e5e] transition-colors duration-200 hover:text-[#0071e3]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <CTAButton href={SITE.checkoutUrl} size="md">
              {SITE.cta.primaryShort}
            </CTAButton>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex size-9 items-center justify-center rounded-full border-[0.5px] border-black/[.06] text-[#0f1012] md:hidden"
          >
            {isMenuOpen ? (
              <X strokeWidth={1.5} className="size-4.5" />
            ) : (
              <Menu strokeWidth={1.5} className="size-4.5" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav
            aria-label="Navegación móvil"
            className="mt-3 flex flex-col gap-1 border-t-[0.5px] border-black/[.06] pt-3 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-3 py-2.5 text-[15px] font-[350] text-[#5e5e5e] transition-colors duration-200 hover:bg-black/[.03] hover:text-[#0071e3]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 px-3">
              <CTAButton
                href={SITE.checkoutUrl}
                size="md"
                magnetic={false}
                className="w-full"
              >
                {SITE.cta.primaryShort}
              </CTAButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
