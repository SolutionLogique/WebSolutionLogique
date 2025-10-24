import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Nous contacter à Annecy",
  description: "Contactez Solution Logique à Annecy (74) : 04 50 64 02 33 - 475 Route des Vernes, 74370. Devis gratuit pour logiciels EBP, formations et solutions informatiques.",
  keywords: ["contact informatique Annecy", "devis logiciel EBP", "contact Solution Logique", "informatique Haute-Savoie"],
  openGraph: {
    title: "Contactez Solution Logique à Annecy",
    description: "Besoin d'un devis ou d'informations ? Contactez nos experts informatiques à Annecy. Tel : 04 50 64 02 33",
    type: "website",
    url: "https://www.solution-logique.fr/contact",
    images: [
      {
        url: "/assets/data.png",
        width: 1200,
        height: 630,
        alt: "Bureau Solution Logique Informatique Annecy",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
