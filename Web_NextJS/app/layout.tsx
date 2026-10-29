// 📌 Ce fichier ne doit pas avoir "use client"
import React, { ReactNode } from "react";
import { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import ClientLayout from "./ClientLayout";
import { DonneesOrganisation } from "@/components/seo/StructuredData";
import { IMAGE_PARTAGE, SITE_URL } from "@/lib/seo";
import "./styles/globals.css";

/* Les polices sont telechargees et auto-hebergees par next/font : pas de requete
   vers Google, pas de decalage au chargement. Avant, Inter etait declaree partout
   mais jamais chargee — le site rendait dans la police systeme, donc differemment
   selon l'OS du visiteur. */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

/* Metadonnees par defaut. Chaque page donne les siennes (titre, description,
   canonical, partage) par metadonneesPage() de lib/seo.ts. Pas de code de
   verification Google ici : la propriete Search Console est verifiee par le
   DNS du domaine. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Solution Logique, informatique et logiciels EBP à Annecy",
    template: "%s | Solution Logique",
  },
  description:
    "Solution Logique à Annecy (74) : solutions informatiques, logiciels EBP (comptabilité, gestion commerciale, bâtiment), formations, télémaintenance et sécurité. Plus de 30 ans d'expertise.",
  keywords: ["informatique Annecy", "logiciel EBP", "formation EBP", "télémaintenance", "solution informatique entreprise", "comptabilité EBP", "gestion commerciale", "sécurité informatique", "Haute-Savoie"],
  authors: [{ name: "Solution Logique" }],
  creator: "Solution Logique",
  publisher: "Solution Logique",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Solution Logique",
    images: [IMAGE_PARTAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [IMAGE_PARTAGE.url],
  },
  icons: {
    icon: "/assets/logo.webp",
    shortcut: "/assets/logo.webp",
    apple: "/assets/logo.webp",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <DonneesOrganisation />
      </head>
      <body className="bg-sand-50 text-sand-600 font-sans antialiased overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
