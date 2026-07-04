# Auditoría — drchristaular.com

## Clasificación (router)

```
caso: rediseño
alcance: solo-home (página de venta única)
tecnología_actual: WordPress + Brizy (page builder)
tecnología_destino: Next.js 15 App Router (single-page marketing con animación premium)
idioma: es
industria: salud / bienestar — medicina + mindfulness (manejo del estrés crónico)
extraction_method: webfetch
images_status: reusar las actuales (uploads de WordPress)
```

## Qué es el sitio

Página de venta de un libro/programa digital del **Dr. Christian Aular** (médico cirujano) para
liberarse del estrés crónico mediante un método que fusiona ciencia y prácticas contemplativas.
La venta se procesa en **Hotmart** (`https://pay.hotmart.com/Q104921212M`). Precio: **30 USD**
(tachado desde 97). Producto digital: 108 páginas + plantillas, PDF/ePub/Mobi, comunidad privada,
garantía de 30 días.

**Objetivo primario del negocio:** click a Hotmart = compra.
**Objetivo secundario:** captar email ("Recibir libro en mi correo").

## Activos reutilizables (de la web actual)

| Activo | URL origen | Uso en rediseño |
|---|---|---|
| Foto del autor | `.../2.jpg` (398×497), `.../3.jpg` (577×722) | Sección "Sobre el autor" + posible héroe |
| Portada del libro | una de las dos anteriores | Héroe / sección precio |
| Avatar testimonio 1 | `.../bdb027…jpg` (102×102) | Testimonios |
| Avatar testimonio 2 | `.../d03-Img-Guy-Beanie.jpg` (100×100) | Testimonios |
| Checkout | `https://pay.hotmart.com/Q104921212M` | Todos los CTA primarios |
| Instagram | `https://www.instagram.com/dr.aular/` | Footer |
| Facebook | `https://www.facebook.com/aularMD` | Footer |
| Email | `info@drchristaular.com` | Footer / contacto |
| WhatsApp | widget Joinchat | Botón flotante opcional |

## Diagnóstico — qué frena la conversión hoy

### Estética (heredada de Brizy/WordPress)
- Layout de plantilla genérica: bloques apilados sin jerarquía tipográfica real.
- Sin dirección visual propia — se ve como "otra landing de Hotmart".
- Cero sistema de movimiento; todo estático, sin sensación premium.
- Contraste médico/calma desaprovechado: el tema (estrés → calma) pide un lenguaje visual sereno y de precisión que el sitio actual no tiene.

### Conversión
- La propuesta de valor compite con ruido; el "por qué creerle" (100.000 pacientes, 14 años, Universidad de Chile) no está jerarquizado arriba del fold.
- La prueba social (solo 2 testimonios) está enterrada y es poco creíble visualmente.
- La autoridad del médico —su mayor activo— aparece tarde y sin peso visual.
- No hay un hilo problema → método → resultado; se salta directo a "compra".
- CTA repetido pero sin diseño de contraste ni copy de cierre.

### Técnico / mobile
- WordPress + Brizy: carga pesada, muchas peticiones, imágenes sin optimizar servidas con recortes en la URL.
- Sin control fino de performance ni de layout stability.

## Análisis competitivo rápido (referentes del sector calma/mindfulness/salud digital)

| Referente | Qué hace bien | Qué robamos |
|---|---|---|
| **Calm / Headspace** | Paleta serena, mucho aire, una sola acción clara | Espacio en blanco generoso, un CTA dominante |
| **Apple (salud/keynote)** | Blanco clínico, tipografía ligera, jerarquía por escala | Es exactamente el north-star de Augen Pro que usaremos |
| **Landings de autores médicos premium** | Autoridad arriba del fold (credenciales, cifras), portada del libro con peso | Cifras animadas + credenciales visibles de entrada |

## Conclusión

El sitio tiene un producto sólido y una autoridad real desaprovechada por una estética de plantilla.
El sistema **Augen Pro** (blanco clínico, tipografía de peso 350, un único azul señal, cero sombras,
tarjetas de radio grande) encaja como un guante con una marca médica de calma y precisión: convierte
el "estrés → serenidad" en lenguaje visual. El rediseño reordena la página alrededor de un hilo
**problema → método médico → prueba → oferta**, con la autoridad del Dr. Aular como columna vertebral.
