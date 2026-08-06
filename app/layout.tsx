import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Itagra | Parcelas de agrado",
  description: "Proyectos inmobiliarios que conectan naturaleza, tranquilidad y futuro. Conoce Pircas de Lliu Lliu, nuestro primer proyecto en Limache.",
  metadataBase: new URL("https://itagra.cl"),
  icons: { icon: "/images/itagra-mark.png", apple: "/images/itagra-mark.png" },
  openGraph: {
    title: "Itagra | Tierra para vivir lo que importa",
    description: "Conoce Pircas de Lliu Lliu, parcelas de agrado en Limache.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Itagra · Pircas de Lliu Lliu" }],
    locale: "es_CL",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#eee9df" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
