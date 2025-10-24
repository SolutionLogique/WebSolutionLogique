import React from "react";
import Home from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil - Solutions Informatiques & Logiciels EBP",
  description: "Solution Logique à Annecy : intégrateur de solutions informatiques complètes pour PME, TPE et collectivités. Logiciels EBP, formations Qualiopi, télémaintenance et sécurité informatique depuis plus de 30 ans.",
  openGraph: {
    title: "Solution Logique - Votre partenaire informatique à Annecy",
    description: "Intégrateur de solutions informatiques complètes : logiciels EBP, formations certifiées, télémaintenance. Plus de 30 ans d'expertise en Haute-Savoie.",
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
    <div className="homepage">
      <Home />
    </div>
  );
}
