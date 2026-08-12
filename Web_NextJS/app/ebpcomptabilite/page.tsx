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
      formation={{
        titre: "Formation EBP Comptabilité",
        description:
          "Notre formation EBP Comptabilité vous permettra d'acquérir une maîtrise complète du logiciel. De la saisie des écritures à l'édition des états comptables, vous apprendrez toutes les fonctionnalités essentielles pour une gestion comptable efficace.",
        duree: "3 jours",
        niveau: "Débutant à intermédiaire",
        prix: "Sur devis",
        pdfUrl: "/assets/Programme_Comptabilite_NivInitial.pdf",
        objectifs: [
          "Maîtriser les bases de la comptabilité dans EBP",
          "Paramétrer et personnaliser le logiciel",
          "Effectuer la saisie comptable au quotidien",
          "Réaliser les opérations de fin de période",
          "Éditer les états comptables réglementaires",
          "Gérer la TVA et les déclarations fiscales",
        ],
        programme: [
          "Découverte de l'interface et paramétrage initial",
          "Création et gestion du plan comptable",
          "Saisie des écritures comptables",
          "Rapprochement bancaire et lettrage",
          "Gestion des immobilisations",
          "TVA et déclarations fiscales",
          "Clôture d'exercice et états de synthèse",
          "Sauvegarde et archivage des données",
        ],
        prerequis: [
          "Connaissances de base en comptabilité générale",
          "Utilisation courante de Windows",
          "Notions de base en informatique",
        ],
      }}
    />
  );
}
