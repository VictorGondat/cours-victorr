import type { Metadata } from "next";
import { Bebas_Neue, Crimson_Pro, DM_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prototyper avec l'IA — Cours YNOV 2026",
  description:
    "Support du cours de Victor Gondat : prototyper une application avec Claude Code. 4 journées, 4 livrables, un projet.",
  openGraph: {
    title: "Prototyper avec l'IA — Cours YNOV 2026",
    description:
      "Support du cours : prototyper une application de A à Z avec Claude Code.",
    url: "https://cours.victorr.fr",
    siteName: "cours.victorr.fr",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bebasNeue.variable} ${crimsonPro.variable} ${dmMono.variable}`}
    >
      <body className="antialiased">
        <div className="fixed inset-0 -z-10" style={{ background: "#EAE5DC" }} />
        <div
          className="relative mx-auto"
          style={{
            maxWidth: "820px",
            minHeight: "100vh",
            background: "#FFFFFF",
            boxShadow: "0 0 60px rgba(0,0,0,0.06)",
          }}
        >
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
