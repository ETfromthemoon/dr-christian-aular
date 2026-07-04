import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500"],
});

const SITE_URL = "https://www.drchristaular.com";
const DESCRIPTION =
  "Método médico para liberarte del estrés crónico, probado con más de 100.000 pacientes. Ciencia clínica y práctica contemplativa por el Dr. Christian Aular.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dr. Christian Aular — Libérate del estrés crónico",
  description: DESCRIPTION,
  keywords: [
    "estrés crónico",
    "manejo del estrés",
    "mindfulness",
    "Dr. Christian Aular",
    "método médico",
    "ansiedad",
    "bienestar",
  ],
  openGraph: {
    title: "Libérate del estrés crónico — Dr. Christian Aular",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Dr. Christian Aular",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/images/book.webp", width: 555, height: 722, alt: "Programa para la liberación del estrés" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Libérate del estrés crónico — Dr. Christian Aular",
    description: DESCRIPTION,
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#f2f2f4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
