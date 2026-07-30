import type { Metadata, Viewport } from "next";
import { Outfit, Work_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `Astus - intégration ${site.integrationYear} au département Télécom`,
    template: `%s | Astus ${site.school}`,
  },
  description:
    "Tout ce qu'il faut pour arriver au département Télécommunications de l'INSA Lyon : planning de l'intégration, parrainage, démarches et vie associative.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: `Astus - intégration ${site.integrationYear}`,
    description:
      "Planning de l'intégration, kit du nouvel étudiant et vie du département Télécom de l'INSA Lyon.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1f44",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-3 focus:text-white"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
