import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Metiers from "@/components/sections/Metiers";
import SurMesureIA from "@/components/sections/SurMesureIA";
import PourquoiNous from "@/components/sections/PourquoiNous";
import Preuves from "@/components/sections/Preuves";
import FinalCTA from "@/components/sections/FinalCTA";
import { metadonneesPage } from "@/lib/seo";

/* Page d'accueil.

   app/home/page.tsx est fusionnee ici. Auparavant ce fichier importait
   simplement ce composant, si bien que le meme contenu etait servi sur / ET
   sur /home — du contenu duplique a deux URL. /home est desormais redirige
   en 301 vers / (regle posee dans www/.htaccess le 29/10/2026).

   Sept sections deviennent six. Disparaissent : les temoignages signes de
   noms fictifs, et le second bloc partenaires qui faisait doublon. */

export const metadata: Metadata = metadonneesPage("");

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
