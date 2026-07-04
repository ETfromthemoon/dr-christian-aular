/** Datos y enlaces reales del negocio — fuente única para todas las secciones. */
export const SITE = {
  name: "Dr. Christian Aular",
  productTitle: "Programa para la liberación del estrés",
  checkoutUrl: "https://pay.hotmart.com/Q104921212M",
  price: { current: 30, before: 97, currency: "US$" },
  cta: {
    primary: "Obtener el programa",
    primaryShort: "Obtener la guía",
    secondary: "Recibir un adelanto por correo",
  },
  contact: {
    email: "info@drchristaular.com",
    instagram: "https://www.instagram.com/dr.aular/",
    facebook: "https://www.facebook.com/aularMD",
  },
  proof: {
    patients: 100000,
    years: 14,
    guaranteeDays: 30,
  },
} as const;

/** Ancla de navegación → id de sección. */
export const NAV_LINKS = [
  { label: "El método", href: "#metodo" },
  { label: "Sobre mí", href: "#autor" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas", href: "#faq" },
] as const;
