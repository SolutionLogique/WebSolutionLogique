import { EBPTemplate } from '@/components/ui';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Logiciel EBP Comptabilité - ACTIV, PRO, ELITE",
  description: "Logiciels EBP Comptabilité à Annecy : solutions ACTIV, PRO et ELITE pour TPE et PME. Comptabilité générale, TVA, rapprochement bancaire. Démo et devis gratuits.",
  keywords: ["EBP comptabilité", "logiciel comptabilité", "EBP ACTIV", "EBP PRO", "logiciel compta Annecy", "solution comptable PME"],
  openGraph: {
    title: "Logiciel EBP Comptabilité - Solutions pour entreprises",
    description: "Découvrez les logiciels EBP Comptabilité adaptés à votre entreprise : ACTIV, PRO, ELITE. Comptabilité complète, TVA, états financiers.",
    type: "website",
    url: "https://www.solution-logique.fr/ebpcomptabilite",
    images: [
      {
        url: "/assets/EBP_Compta-Gesco.PNG",
        width: 1200,
        height: 630,
        alt: "Logiciels EBP Comptabilité",
      },
    ],
  },
};

export default function EBPComptabilite() {
  return (
    <EBPTemplate
      title="EBP Comptabilité"
      description="Bien que la comptabilité soit une discipline universelle, chaque activité détient ses propres spécificités : bilan et compte de résultat (CSE, associations, etc.), gestion des dons fiscaux, dossiers de gestion, etc. Pour répondre au mieux aux exigences de votre métier/secteur, choisissez le logiciel de comptabilité qui facilite la tenue de votre trésorerie."
      category="Comptabilité"
      colorScheme="blue"
      softwares={[
        {
          title: "EBP Comptabilité ACTIV",
          subtitle: "Solution essentielle pour débuter",
          level: "Essentiel",
          features: [
            "Comptabilité générale complète",
            "Saisie automatisée des écritures",
            "Tableau de bord synthétique",
            "États comptables de base",
            "Sauvegarde automatique"
          ],
          pdfLink: "ebp-logiciel-comptabilite-activ-2022.pdf"
        },
        {
          title: "EBP Comptabilité PRO",
          subtitle: "La solution professionnelle complète",
          level: "Professionnel",
          popular: true,
          features: [
            "Comptabilité générale avancée",
            "Saisie automatisée intelligente",
            "Tableau de bord personnalisable",
            "Déclaration de TVA intégrée",
            "Gestion complète des impayés",
            "Rapprochement bancaire automatique"
          ],
          pdfLink: "ebp-logiciel-comptabilite-pro-2022.pdf"
        },
        {
          title: "EBP Comptabilité ELITE",
          subtitle: "L'excellence pour les experts",
          level: "Expert",
          features: [
            "Toutes fonctionnalités PRO incluses",
            "Ratios financiers avancés",
            "Personnalisation complète du logiciel",
            "Fiches et vues sur mesure",
            "Reporting avancé et KPI",
            "Multi-dossiers et multi-utilisateurs",
            "API et connecteurs métier"
          ],
          pdfLink: "ebp-logiciel-comptabilite-elite-2022.pdf"
        }
      ]}
    />
  );
}
