# Dr. Christian Aular — Landing "Libérate del estrés crónico"

Landing de venta rediseñada (Next.js 15 + Tailwind v4 + motion) bajo el sistema visual
**Augen Pro adaptado**: blanco clínico, tipografía ligera, un único azul señal. La venta se
procesa en Hotmart.

## Requisitos
- Node.js 18.18+ (recomendado 20+)

## Correr en local
```bash
npm install
npm run dev
# abre http://localhost:3000
```

## Compilar para producción
```bash
npm run build
npm run start
```

## Verificación previa a publicar
```bash
npx tsc --noEmit && npm run build
```

## Optimizar imágenes nuevas
Coloca los originales (.jpg/.png) en `public/images/` y ejecuta:
```bash
node scripts/optimize-images.mjs   # convierte a WebP ≤ 500 KB
```

## Estructura
```
src/
├── app/            layout.tsx, page.tsx, globals.css (tokens Augen Pro)
├── components/
│   ├── motion.tsx          primitivas de animación (SplitText, Reveal, Aurora, NumberTicker…)
│   ├── motion-provider.tsx MotionConfig reducedMotion="user"
│   ├── ui/                 Section, CTAButton, Tag, Accordion
│   └── sections/           Nav, Hero, StatsBar, Problem, Method, Benefits,
│                           About, Testimonials, Pricing, Faq, FinalCta, Footer
└── lib/            site.ts (enlaces/precio), utils.ts (cn)
```

## Publicar (Vercel)
Cada push a la rama principal se publica solo. Framework autodetectado (Next.js).

## Documentos del proyecto
- `audit-report.md` — diagnóstico del sitio original
- `design-direction.md` — dirección visual
- `site-architecture.md` — arquitectura y copy final
- `redesign-report.md` — comparativa antes/después
