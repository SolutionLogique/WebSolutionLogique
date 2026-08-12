import { EBPTemplate } from '@/components/ui';
import React from 'react';

export default function EBPGestionCo() {
  return (
    <EBPTemplate
      title="EBP Gestion Commerciale"
      description="Optimisez votre gestion commerciale avec les solutions EBP dédiées aux ventes, achats, stocks et relation client. Des outils puissants pour développer votre chiffre d'affaires et fidéliser votre clientèle avec une gestion commerciale professionnelle et intuitive."
      category="Gestion Commerciale"
      softwares={[
        {
          title: "EBP Gestion Commerciale ACTIV",
          subtitle: "L'essentiel pour débuter en gestion commerciale",
          level: "Essentiel",
          features: [
            "Gestion clients et fournisseurs",
            "Catalogue articles et tarifs",
            "Devis et factures simples",
            "Suivi des stocks de base",
            "Statistiques commerciales"
          ],
          pdfLink: "ebp-logiciel-gestion-commerciale-activ-2022.pdf"
        },
        {
          title: "EBP Gestion Commerciale PRO",
          subtitle: "La solution complète pour professionnels",
          level: "Professionnel",
          popular: true,
          features: [
            "Gestion commerciale complète",
            "Cycle de vente intégral",
            "Gestion avancée des stocks",
            "Encaissements et règlements",
            "CRM et relances clients",
            "Tableaux de bord commerciaux"
          ],
          pdfLink: "ebp-logiciel-gestion-commerciale-pro-2022.pdf"
        },
        {
          title: "EBP Gestion Commerciale ELITE",
          subtitle: "L'excellence pour les experts du commerce",
          level: "Expert",
          features: [
            "Toutes fonctionnalités PRO incluses",
            "Multi-sociétés et multi-devises",
            "Gestion multi-magasins",
            "Personnalisation avancée",
            "API et connecteurs e-commerce",
            "Workflow et automatisations",
            "Reporting et analytics avancés"
          ],
          pdfLink: "ebp-logiciel-gestion-commerciale-elite-2022.pdf"
        }
      ]}
      formation={{
        titre: "Formation EBP Gestion Commerciale",
        description:
          "Apprenez à maîtriser toutes les fonctionnalités d'EBP Gestion Commerciale pour gérer efficacement vos ventes, achats, stocks et relations clients. Une formation complète pour transformer votre approche commerciale.",
        duree: "3 jours",
        niveau: "Débutant à confirmé",
        prix: "Sur devis",
        pdfUrl: "/assets/Programme_GestionCommerciale_NivInitial.pdf",
        objectifs: [
          "Paramétrer EBP Gestion Commerciale selon vos besoins",
          "Gérer efficacement vos fichiers clients et fournisseurs",
          "Maîtriser le processus de vente complet",
          "Optimiser la gestion des stocks et approvisionnements",
          "Éditer devis, factures et documents commerciaux",
          "Analyser vos performances commerciales",
        ],
        programme: [
          "Installation et paramétrage du logiciel",
          "Création des fichiers clients et fournisseurs",
          "Gestion du catalogue articles et tarifs",
          "Cycle de vente : devis, commandes, livraisons, factures",
          "Gestion des achats et des stocks",
          "Encaissements et règlements",
          "États et statistiques commerciales",
          "Liaison avec la comptabilité",
        ],
        prerequis: [
          "Connaissances de base en gestion commerciale",
          "Maîtrise de l'environnement Windows",
          "Expérience en gestion d'entreprise recommandée",
        ],
      }}
    />
  );
}
