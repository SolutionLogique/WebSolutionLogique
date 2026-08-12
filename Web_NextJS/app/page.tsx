import React from "react";
import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Metiers from "@/components/sections/Metiers";
import SurMesureIA from "@/components/sections/SurMesureIA";
import PourquoiNous from "@/components/sections/PourquoiNous";
import Preuves from "@/components/sections/Preuves";
import FinalCTA from "@/components/sections/FinalCTA";

/* Page d'accueil.

   app/home/page.tsx est fusionnee ici. Auparavant ce fichier importait
   simplement ce composant, si bien que le meme contenu etait servi sur / ET
   sur /home — du contenu duplique a deux URL. /home est desormais redirige
   en 301 vers / (regle a ajouter dans www/.htaccess).

   Sept sections deviennent six. Disparaissent : les temoignages signes de
   noms fictifs, et le second bloc partenaires qui faisait doublon. */

export const metadata: Metadata = {
  title: "Accueil - Solutions Informatiques & Logiciels EBP",
  description:
    "Solution Logique à Annecy : intégrateur de solutions informatiques complètes pour PME, TPE et collectivités. Logiciels EBP, développement sur-mesure, accompagnement IA, formations Qualiopi et télémaintenance depuis plus de 30 ans.",
  openGraph: {
    title: "Solution Logique - Votre partenaire informatique à Annecy",
    description:
      "Intégrateur de solutions informatiques complètes : logiciels EBP, développement sur-mesure, accompagnement IA, formations certifiées et télémaintenance. Plus de 30 ans d'expertise en Haute-Savoie.",
    type: "website",
    url: "https://www.solution-logique.fr",
    images: [
      {
        url: "/assets/solution.webp",
        width: 1200,
        height: 630,
        alt: "Solution Logique - Apporteur de solutions informatiques",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <Metiers />
      <SurMesureIA />
      <PourquoiNous />
      <Preuves />
      <FinalCTA />
    </>
  );
}
