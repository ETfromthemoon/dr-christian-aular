# Dirección visual — Dr. Christian Aular

## North-star: "Consultorio clínico en blanco infinito"

Adaptación del sistema **Augen Pro** (keynote de Apple sobre blanco quirúrgico) a una marca médica
de calma. El estrés crónico es ruido; la solución del Dr. Aular es método y precisión. El lenguaje
visual traduce ese contraste: **vacío clínico + un solo acento azul instrumental**. Nada grita.
La jerarquía nace del tamaño y del aire, nunca del peso ni del color.

### Por qué esta dirección convierte más

1. **Serenidad = credibilidad médica.** Un visitante estresado que aterriza en una página tranquila,
   ordenada y respirada siente alivio antes de leer una palabra. El medio es el mensaje.
2. **La autoridad se ve, no se grita.** El blanco y la tipografía ligera dejan que las cifras
   (100.000 pacientes, 14 años, Universidad de Chile) sean las protagonistas sin adornos.
3. **Un solo azul = una sola acción.** El azul señal marca exclusivamente lo interactivo. El ojo
   siempre sabe dónde hacer click: hacia Hotmart.
4. **Anti-plantilla Hotmart.** Se despega por completo del look "landing de infoproducto" y se
   posiciona como marca de salud premium.

## Sistema (Augen Pro adaptado)

- **Fondo:** blanco cálido-frío `#f2f2f4` (lienzo) con superficies elevadas `#fdfdfd`.
- **Texto:** casi-negro `#0f1012` (primario), `#5e5e5e` (secundario/muted).
- **Acento único:** azul señal `#0071e3` — solo bordes y texto de enlaces/tags. **Nunca como fondo lleno.**
- **Tipografía:** Inter con peso **300–400** (sustituto de PP Neue Montreal 350). Jerarquía por escala,
  no por peso. Tracking negativo uniforme (`-0.02em`).
- **Formas:** tarjetas de radio grande (54px), pills (9999px), botones (26px). Sensación de "recinto suave".
- **Cero sombras.** Elevación por diferencia de tono (`#fdfdfd` sobre `#f2f2f4`) + hairlines de 0.5px.
- **Fondo dinámico permitido (regla premium de la skill):** un *aurora* azul muy sutil y difuso en el
  héroe y en el CTA final — coherente con el acento, sin romper el vacío clínico. Blur alto, opacidad baja.

## Movimiento (sirve a la calma, no distrae)

- **Blur-to-focus** en la entrada del héroe (el título llega enfocándose, nunca de izquierda a derecha).
- **Reveal on-scroll suave** (fade + 12px de subida) por sección, respetando `prefers-reduced-motion`.
- **Cifras que cuentan** (count-up) en la barra de prueba social.
- **CTA magnético** sutil en el botón primario.
- **Spotlight/cursor glow** muy tenue solo en secciones oscuras (footer / CTA final).
- Todo compositor-friendly (`transform`, `opacity`, `filter`). Duraciones 300–600ms, easing expo-out.

## Ajuste de acento para el sector salud

El azul señal `#0071e3` se mantiene: lee simultáneamente como **clínico** (confianza médica) y
**sereno** (agua/cielo). No se introduce verde ni turquesa para no diluir el sistema monocromo + azul.

## Qué NO hacer (heredado de las reglas Augen Pro)

- Nada de sombras para elevar.
- Nunca azul como relleno de fondo.
- Nunca peso > 400.
- Nunca centrar párrafos multilínea (izquierda siempre).
- Sin gradientes decorativos salvo el aurora azul difuso permitido.
- Sin fotos de stock genéricas: solo la foto real del doctor y la portada del libro.
