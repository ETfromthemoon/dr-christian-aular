# Reporte de rediseño — Dr. Christian Aular

## Antes → Después

| Dimensión | Antes (WordPress + Brizy) | Después (Next.js + Augen Pro) |
|---|---|---|
| Plataforma | WordPress + Brizy (pesado) | Next.js 15 estático (161 kB First Load) |
| Dirección visual | Plantilla genérica de infoproducto | "Consultorio clínico en blanco infinito" (Augen Pro) |
| Tipografía | Sans por defecto, pesos mixtos | Inter peso 300–400, jerarquía por escala |
| Mensaje del héroe | "Libérate del estrés crónico… método probado en +100.000 pacientes" (mucho texto) | "El estrés crónico no es tu forma normal de vivir." (tensión + claridad) |
| Prueba social arriba del fold | Enterrada | Barra de cifras animadas justo bajo el héroe (+100.000 · 14 años · U. de Chile · 30 días) |
| Autoridad del médico | Aparecía tarde, sin peso | Cifras + credenciales con jerarquía propia |
| Hilo de conversión | Salta directo a "compra" | Problema → método (4 pasos) → beneficios → prueba → oferta |
| CTA primario | Repetido pero sin sistema | "Obtener el programa" único, repetido 5× (nav, héroe, método, precio, cierre) |
| Movimiento | Cero | 7+ efectos (blur-to-focus, reveal, cifras, magnético, aurora, spotlight, acordeón) |
| Sombras | Sí (look plantilla) | Cero — elevación por tono + hairlines 0.5px |
| Mobile | Funcional | Mobile-first, 0 px de overflow horizontal a 390px |
| Imágenes | JPG sin optimizar servidos por WP | WebP 17–20 kB |

## Scorecard (rúbrica quality-gate)

- **Performance:** ✅ Build limpio, 161 kB First Load JS, imágenes WebP ≤ 20 kB, sin overflow.
- **Layout estable:** ✅ El titular se enfoca en su lugar final (SplitText), no barre de izq. a der.
- **Jerarquía visual:** ✅ Escala clara, máx. pesos 300–400.
- **Micro-interacciones (≥5):** ✅ SplitText, Reveal on-scroll, NumberTicker, CTA magnético, Aurora, Spotlight, acordeón, hover de portada.
- **Fondo dinámico:** ✅ Aurora azul difusa + spotlight en bandas oscuras.
- **CTA único repetido:** ✅ "Obtener el programa" ×5.
- **Prueba social primer pantallazo:** ✅ Cifras + microcopy de confianza.
- **Copy humano:** ✅ Sin AI-slop; tono de médico cercano.
- **Sin stock genérico:** ✅ Solo portada real + avatares reales.
- **prefers-reduced-motion:** ✅ MotionConfig reducedMotion="user" + CSS.
- **Paridad mobile:** ✅ Verificada a 390px.

## Verificación

- `npx tsc --noEmit` → sin errores.
- `npm run build` → exitoso (Next.js 15.5.20).
- Capturas Playwright desktop (1440) y mobile (390): en `shots/` (no versionadas).
- Rondas de revisión: 2. Ajuste aplicado en ronda 2: reducción del tamaño máximo del titular del héroe para que el CTA quede dentro del primer pantallazo en laptops estándar.

## Notas

- No existía foto del doctor en los activos originales; la sección "Sobre mí" es textual (credenciales),
  coherente con el sistema text-dominant de Augen Pro, apoyada por la imagen real del libro.
- La venta sigue procesándose en Hotmart (`Q104921212M`). El CTA secundario del héroe hace scroll al
  método (no se creó un formulario de captura sin backend para no mostrar una promesa no funcional).
