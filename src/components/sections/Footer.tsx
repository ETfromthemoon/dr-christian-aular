import { SITE, NAV_LINKS } from "@/lib/site";
import { KineticWord } from "@/components/scroll-fx";
import { ArrowUpRight } from "lucide-react";

/** Icono Instagram — SVG inline (lucide-react no lo incluye de forma estable). */
function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

/** Icono Facebook — SVG inline (lucide-react no lo incluye de forma estable). */
function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

/** Footer — banda oscura con marca, contacto, redes y aviso legal. */
export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0f1012] px-5 py-16 text-[#fdfdfd] sm:px-8">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <KineticWord text={SITE.name} className="text-white/[0.04]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="text-[20px] font-[400] tracking-[-0.01em] text-[#fdfdfd]">
              {SITE.name}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed font-[350] text-white/55">
              Ciencia y calma para tratar el estrés.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[14px] font-[350] text-white/65">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors duration-300 hover:text-[#0071e3]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${SITE.contact.email}`}
              className="group inline-flex items-center gap-1.5 text-[15px] font-[350] text-[#0071e3] transition-colors duration-300 hover:text-[#4aa3ff]"
            >
              {SITE.contact.email}
              <ArrowUpRight strokeWidth={1.5} size={14} className="arrow-slide" />
            </a>

            <div className="flex items-center gap-4">
              <a
                href={SITE.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Dr. Christian Aular"
                className="text-white transition-colors duration-300 hover:text-[#0071e3]"
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Dr. Christian Aular"
                className="text-white transition-colors duration-300 hover:text-[#0071e3]"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/[.08] pt-8">
          <p className="text-[12px] leading-relaxed font-[350] text-white/45">
            Este contenido es educativo y no reemplaza atención médica profesional.
          </p>
          <p className="text-[12px] font-[350] text-white/45">
            © 2026 Dr. Christian Aular. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
