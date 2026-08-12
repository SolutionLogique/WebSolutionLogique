import React from 'react';
import { EBPTemplate } from '@/components/ui';

export default function EBPBatiment() {
  return (
    <EBPTemplate
      title="EBP Bâtiment"
      description="Solutions spécialisées pour les professionnels du BTP. Gérez vos devis, chantiers, métrés et facturation avec des outils conçus spécifiquement pour le secteur du bâtiment. De l'artisan à l'entreprise générale, trouvez la solution adaptée à votre activité."
      category="Bâtiment"
      softwares={[
        {
          title: "EBP Gestion Bâtiment",
          subtitle: "La gestion de chantiers simplifiée",
          level: "Professionnel",
          features: [
            "Devis et métrés BTP",
            "Gestion des chantiers",
            "Planning et ressources",
            "Facturation situations",
            "Suivi de rentabilité",
            "Gestion fournisseurs BTP"
          ],
          pdfLink: "ebp-logiciel-gestion-batiment-2022.pdf"
        },
        {
          title: "EBP Expert Bâtiment",
          subtitle: "L'excellence pour les professionnels du BTP",
          level: "Expert",
          popular: true,
          features: [
            "Toutes fonctionnalités Gestion Bâtiment",
            "Métrés avancés et bibliothèques",
            "Gestion multi-chantiers",
            "Sous-traitance et co-traitance",
            "Planning Gantt interactif",
            "Tableaux de bord chantiers",
            "Interface comptabilité",
            "Application mobile chantier"
          ],
          pdfLink: "ebp-logiciel-expert-batiment-2022.pdf"
        },
        {
          title: "EBP Bâtiment PRO",
          subtitle: "Solution complète métré-devis-facture",
          level: "Professionnel",
          features: [
            "Métré et devis détaillés",
            "Bibliothèques d'ouvrages",
            "Gestion des prix et indexation",
            "Facturation progressive",
            "Suivi des affaires",
            "États réglementaires BTP"
          ],
          pdfLink: "ebp-logiciel-batiment-2022.pdf"
        }
      ]}
      formation={{
        titre: "Formation EBP Gestion Bâtiment",
        description:
          "Formation spécialisée pour les professionnels du BTP. Apprenez à gérer efficacement vos devis, chantiers, planning et facturation avec EBP Bâtiment. Une solution complète adaptée aux spécificités du secteur.",
        duree: "3 jours",
        niveau: "Spécialisé BTP",
        prix: "Sur devis",
        pdfUrl: "/assets/Programme_GestionBatiment_NivInitial.pdf",
        objectifs: [
          "Paramétrer EBP Bâtiment selon votre activité",
          "Créer des devis détaillés avec métrés",
          "Gérer le planning et l'avancement des chantiers",
          "Maîtriser la facturation et situations de travaux",
          "Suivre la rentabilité de vos chantiers",
          "Gérer les sous-traitants et fournisseurs",
        ],
        programme: [
          "Paramétrage spécifique BTP et bibliothèques d'ouvrages",
          "Création de devis et métrés détaillés",
          "Gestion des chantiers et planning",
          "Suivi d'avancement et situations de travaux",
          "Facturation et attachements",
          "Gestion des approvisionnements chantier",
          "Sous-traitance et co-traitance",
          "Analyse de rentabilité et tableaux de bord",
        ],
        prerequis: [
          "Expérience dans le secteur du BTP",
          "Connaissances en gestion de chantiers",
          "Maîtrise de base de l'informatique",
        ],
      }}
    />
  );
}
