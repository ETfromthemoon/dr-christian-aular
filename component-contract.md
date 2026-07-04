# Contrato de componentes — Dr. Christian Aular (Augen Pro adaptado)

Léelo COMPLETO antes de escribir tu sección. Todas las secciones deben verse como parte del
mismo sistema. La coherencia es más importante que la creatividad individual.

## Sistema visual (NO negociable)

- **Fondo:** lienzo `#f2f2f4`; superficies elevadas `#fdfdfd`; bandas oscuras `#0f1012`.
- **Texto:** `#0f1012` (primario), `#5e5e5e` (secundario), `#8f8f8f` (terciario). En banda oscura: `#fdfdfd` / `rgba(255,255,255,.65)`.
- **Acento único:** azul señal `#0071e3` — SOLO en bordes, iconos y texto de enlaces/tags. **NUNCA como relleno de fondo.**
- **Tipografía:** Inter. Pesos permitidos: 300, 350 (default via body), 400, 500 (máximo). **Nunca 600+ / bold / semibold.** Jerarquía por TAMAÑO, no por peso.
- **Tracking:** negativo, `tracking-[-0.02em]` heredado del body; títulos grandes `tracking-[-0.03em]`.
- **Radios:** tarjetas `rounded-[54px]` (o `rounded-[40px]` en tarjetas medianas), tarjeta de precio `rounded-[54px]`, botones `rounded-[26px]`, tags `rounded-full`, chips pequeños `rounded-2xl`.
- **Elevación:** CERO sombras (`shadow-*` prohibido). Diferenciar por tono (`#fdfdfd` sobre `#f2f2f4`) + hairline `border-[0.5px] border-black/[.06]` (o `.hairline`).
- **Alineación:** párrafos multilínea SIEMPRE a la izquierda. Nunca `text-center` en cuerpos de texto largos (títulos cortos sí pueden centrarse si el diseño lo pide).
- **Espacio en blanco:** generoso. Es la firma del sistema. No apiñar.

## Escala tipográfica sugerida (Tailwind)

- Display/H1 héroe: `text-[clamp(2.6rem,1rem+6vw,5.5rem)] leading-[1.02] tracking-[-0.03em] font-[350]`
- Título de sección (H2): `text-[clamp(1.9rem,1rem+2.6vw,3rem)] leading-[1.08] tracking-[-0.02em] font-[350]`
- Subtítulo: `text-[18px] md:text-[20px] text-[#5e5e5e] font-[350]`
- Cuerpo: `text-[16px] leading-relaxed text-[#5e5e5e] font-[350]`
- Caption/label: usar `<SectionLabel>`

## Cómo estructurar tu archivo

- Ruta: `src/components/sections/<Nombre>.tsx`
- Export **nombrado**: `export function Hero() { ... }` (no default export).
- **NO pongas `"use client"`** salvo que uses hooks de React directamente (useState/useEffect). Las
  primitivas de movimiento ya son client components; puedes componerlas desde un server component.
- Envuelve el contenido en `<Section>` (salvo Nav, Hero y Footer que tienen layout propio).
- Usa SIEMPRE datos de `@/lib/site` (SITE, NAV_LINKS) para enlaces/precio. No hardcodees el link de Hotmart.

## Primitivas disponibles (impórtalas, no las reescribas)

```tsx
import { Section } from "@/components/ui/section";        // <Section id="metodo" tone="canvas|elevated|dark">
import { Tag, SectionLabel } from "@/components/ui/tag";
import { CTAButton } from "@/components/ui/cta-button";    // <CTAButton href={SITE.checkoutUrl} variant="primary|ghost">
import { Accordion, type QA } from "@/components/ui/accordion";
import { SplitText, Reveal, FadeIn, Aurora, Magnetic, NumberTicker, Spotlight } from "@/components/motion";
import { SITE, NAV_LINKS } from "@/lib/site";
import Image from "next/image";
```

- `SplitText` → títulos above-the-fold (héroe). Llega enfocándose.
- `Reveal` → cualquier bloque que entra al hacer scroll (fade + subida). Usa `delay={i*0.1}` para stagger en listas.
- `FadeIn` → elementos above-the-fold que no son títulos (subhead, CTA del héroe).
- `NumberTicker` → cifras (`<NumberTicker value={100000} prefix="+" />`). Ya anima en viewport y muestra el final.
- `Aurora` → fondo azul difuso (`tone="light"` claro / `tone="dark"` oscuro). Colócalo dentro de un contenedor `relative overflow-hidden`.
- `Spotlight` → glow que sigue el cursor (solo en bandas oscuras `#0f1012`).
- `Magnetic` → ya está dentro de `CTAButton`; úsalo suelto solo si quieres otro elemento magnético.
- `CTAButton` variant="primary" es la ÚNICA acción dominante (relleno `#0f1012`). variant="ghost" para secundaria.

## Imágenes (en `/public/images`, servidas como `/images/x.webp`)

- `/images/book.webp` — portada 3D del libro sobre blanco (héroe / precio). ~555×722.
- `/images/book-hands.webp` — libro sostenido en manos (about / precio alternativo).
- `/images/testi-maria.webp` — avatar testimonio María (~101×101).
- `/images/testi-carlos.webp` — avatar testimonio Carlos (~98×100).
- Usa `next/image` con `alt` real y descriptivo, `sizes`, y `width/height` o `fill`. `priority` SOLO en la imagen del héroe.
- No hay foto del doctor: la sección "Sobre mí" es textual (credenciales), opcionalmente con `book-hands.webp`.

## Iconos

- `lucide-react` para iconos funcionales (ej: `Moon`, `BrainCircuit`, `HeartPulse`, `Activity`, `Check`, `ShieldCheck`, `Clock`, `Sparkles`, `ArrowRight`, `Mail`).
- Trazo fino: `strokeWidth={1.5}`, color `#0071e3` o `#0f1012`.
- **Iconos sociales (Instagram/Facebook): NO uses lucide** (algunos fueron removidos y rompen el build). Usa SVG inline.

## Copy

- Toma el copy EXACTO de `site-architecture.md`. No inventes claims nuevos ni cifras.
- Tono: médico cercano, sereno, sin hype. Prohibidas: "transforma", "revoluciona", "descubre", "potencia", "eleva".
- Español con acentos correctos.

## Ejemplo de sección de referencia (síguelo de cerca)

```tsx
import { Section } from "@/components/ui/section";
import { SectionLabel } from "@/components/ui/tag";
import { Reveal } from "@/components/motion";
import { Moon } from "lucide-react";

const ITEMS = [
  { icon: Moon, title: "Duermes, pero no descansas.", body: "Te despiertas igual de agotado que cuando te acostaste." },
  // ...
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
        {ITEMS.map((it, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <article className="h-full rounded-[40px] bg-[#fdfdfd] hairline p-8">
              <it.icon strokeWidth={1.5} className="size-6 text-[#0071e3]" />
              <h3 className="mt-5 text-[20px] font-[400] tracking-[-0.01em]">{it.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-[#5e5e5e] font-[350]">{it.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
```

## Checklist antes de terminar tu sección

- [ ] Export nombrado, ruta correcta.
- [ ] Sin sombras. Sin azul de relleno. Sin peso > 500.
- [ ] Enlaces/precio desde `@/lib/site`.
- [ ] Copy exacto de `site-architecture.md`, con acentos.
- [ ] Mobile: sin overflow horizontal, legible a 375px (usa grid responsivo).
- [ ] Movimiento con las primitivas provistas (no reinventes motion).
- [ ] Contraste AA: nunca `#8f8f8f` para texto esencial largo sobre blanco (úsalo solo en labels/captions).
