import { FormationTemplate } from '@/components/ui';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Formation EBP Gestion Commerciale - Qualiopi",
  description: "Formation EBP Gestion Commerciale à Annecy : maîtrisez vos ventes, achats et stocks. Formation certifiée Qualiopi, 3 jours, éligible CPF et OPCO. Formateurs experts.",
  keywords: ["formation EBP", "gestion commerciale", "formation Qualiopi", "EBP vente", "formation Annecy", "CPF gestion commerciale"],
  openGraph: {
    title: "Formation EBP Gestion Commerciale - Certifiée Qualiopi",
    description: "Apprenez à maîtriser EBP Gestion Commerciale : ventes, achats, stocks, facturation. Formation 3 jours, certifiée Qualiopi, éligible CPF.",
    type: "website",
    url: "https://www.solution-logique.fr/formationCommerciale",
    images: [
      {
        url: "/assets/formations_ebp.webp",
        width: 1200,
        height: 630,
        alt: "Formation EBP Gestion Commerciale",
      },
    ],
  },
};

export default function FormationCommerciale() {
  return (
    <FormationTemplate
      title="Formation EBP Gestion Commerciale"
      subtitle="Optimisez votre gestion commerciale avec EBP et boostez votre activité"
      description="Apprenez à maîtriser toutes les fonctionnalités d'EBP Gestion Commerciale pour gérer efficacement vos ventes, achats, stocks et relations clients. Une formation complète pour transformer votre approche commerciale."
      logoImage="/assets/EBP_Compta-Gesco.PNG"
      formationImage="/assets/formations_ebp.webp"
      pdfUrl="/assets/Programme_GestionCommerciale_NivInitial.pdf"
      duration="3 jours"
      level="Débutant à confirmé"
      price="Sur devis"
      objectives={[
        "Paramétrer EBP Gestion Commerciale selon vos besoins",
        "Gérer efficacement vos fichiers clients et fournisseurs",
        "Maîtriser le processus de vente complet",
        "Optimiser la gestion des stocks et approvisionnements",
        "Éditer devis, factures et documents commerciaux",
        "Analyser vos performances commerciales"
      ]}
      program={[
        "Installation et paramétrage du logiciel",
        "Création des fichiers clients et fournisseurs",
        "Gestion du catalogue articles et tarifs",
        "Cycle de vente : devis, commandes, livraisons, factures",
        "Gestion des achats et des stocks",
        "Encaissements et règlements",
        "États et statistiques commerciales",
        "Liaison avec la comptabilité"
      ]}
      prerequisites={[
        "Connaissances de base en gestion commerciale",
        "Maîtrise de l'environnement Windows",
        "Expérience en gestion d'entreprise recommandée"
      ]}
      colorScheme="green"
    />
  );
}
