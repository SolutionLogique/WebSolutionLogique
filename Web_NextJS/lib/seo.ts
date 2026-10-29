import type { Metadata } from "next";

/* Referencement : une seule source pour les pages du site.

   Le titre, la description, l'adresse de reference (canonical), le partage
   (Open Graph), le fil d'Ariane et le plan du site viennent tous d'ici.
   Avant, chaque page portait ses propres morceaux, avec l'hote www, sans
   barre finale, et huit pages heritaient du titre par defaut.

   Regles :
   - hote unique SANS www, en https (le .htaccess redirige le reste en 301) ;
   - chaque adresse finit par « / » (trailingSlash: true en export) ;
   - une page ajoutee au site s'ajoute ici, sinon elle n'aura ni canonical
     ni place dans le plan du site. */

export const SITE_URL = "https://solution-logique.fr";
export const NOM_SITE = "Solution Logique";

/* Image de partage 1200 x 630, faite a partir du logo et des couleurs du site */
export const IMAGE_PARTAGE = {
  url: "/assets/partage-solution-logique.png",
  width: 1200,
  height: 630,
  alt: "Solution Logique, IA, applications sur mesure et informatique des PME depuis 1990, à Annecy",
};

export interface PageSite {
  /* Chemin sans barre finale, "" pour l'accueil */
  chemin: string;
  /* Titre court : le gabarit du layout ajoute « | Solution Logique » */
  titre: string;
  /* Titre complet sans gabarit (accueil seulement) */
  titreAbsolu?: string;
  description: string;
  /* Intitule court du fil d'Ariane */
  libelle: string;
  /* Chemin de la page parente dans le fil d'Ariane (l'accueil par defaut) */
  parent?: string;
  /* Service decrit par la page (donnees structurees schema.org Service) */
  service?: { nom: string; type: string };
  /* Fichiers dont la date de dernier commit donne le lastmod du plan du site */
  sources: string[];
  prioritePlan: number;
}

const GABARIT_EBP = "components/ui/ebpTemplate.tsx";

export const PAGES: PageSite[] = [
  {
    chemin: "",
    titre: "Accueil",
    titreAbsolu: "Solution Logique, IA, développement et informatique à Annecy",
    description:
      "Solution Logique, Annecy : IA et applications sur mesure pour les PME, informatique, sécurité et téléphonie avec un interlocuteur local, et logiciels EBP.",
    libelle: "Accueil",
    sources: ["app/page.tsx", "components/sections"],
    prioritePlan: 1,
  },
  {
    chemin: "/nosServices",
    titre: "Services informatiques à Annecy",
    description:
      "Services informatiques de Solution Logique à Annecy : infrastructure, hébergement et cloud, téléphonie IP, sécurité réseau et télémaintenance des entreprises.",
    libelle: "Nos services",
    sources: ["app/nosServices"],
    prioritePlan: 0.7,
  },
  {
    chemin: "/informatique",
    titre: "Infrastructure informatique et cloud",
    description:
      "Infrastructure IT, postes, serveurs, hébergement et cloud : Solution Logique conçoit et maintient l'informatique des PME de Haute-Savoie depuis Annecy.",
    libelle: "Informatique",
    parent: "/nosServices",
    service: { nom: "Infrastructure informatique", type: "Infrastructure informatique et maintenance" },
    sources: ["app/informatique"],
    prioritePlan: 0.7,
  },
  {
    chemin: "/telecom",
    titre: "Téléphonie IP et réseaux d'entreprise",
    description:
      "Téléphonie fixe et mobile, téléphonie IP, trunk SIP, softphone et connectivité réseau entre vos sites : les solutions télécom de Solution Logique à Annecy.",
    libelle: "Télécom",
    parent: "/nosServices",
    service: { nom: "Téléphonie et télécom d'entreprise", type: "Téléphonie IP et connectivité" },
    sources: ["app/telecom"],
    prioritePlan: 0.7,
  },
  {
    chemin: "/securite",
    titre: "Sécurité informatique de l'infrastructure",
    description:
      "Pare-feu, sécurité du réseau, protection et chiffrement des données, antivirus et surveillance : Solution Logique sécurise l'informatique des entreprises.",
    libelle: "Sécurité",
    parent: "/nosServices",
    service: { nom: "Sécurité informatique", type: "Sécurité de l'infrastructure et des données" },
    sources: ["app/securite"],
    prioritePlan: 0.7,
  },
  {
    chemin: "/audit-cybersecurite",
    titre: "Audit de cybersécurité, test d'intrusion",
    description:
      "Test d'intrusion externe, applicatif et interne pour les PME : mandat écrit, périmètre défini, rapport priorisé et contre-audit. Solution Logique, Annecy.",
    libelle: "Audit de cybersécurité",
    parent: "/securite",
    service: { nom: "Audit de cybersécurité et test d'intrusion", type: "Audit de sécurité informatique" },
    sources: ["app/audit-cybersecurite"],
    prioritePlan: 0.7,
  },
  {
    chemin: "/telemaintenance",
    titre: "Télémaintenance, assistance à distance",
    description:
      "Télémaintenance Solution Logique : assistance à distance sécurisée avec RustDesk ou NinjaOne, pour régler un problème informatique sans attendre un déplacement.",
    libelle: "Télémaintenance",
    parent: "/nosServices",
    service: { nom: "Télémaintenance", type: "Assistance informatique à distance" },
    sources: ["app/telemaintenance"],
    prioritePlan: 0.7,
  },
  {
    chemin: "/logiciels",
    titre: "Logiciels EBP et formations à Annecy",
    description:
      "Revendeur et intégrateur EBP à Annecy : Comptabilité, Gestion commerciale et Bâtiment. Démonstration gratuite, accompagnement personnalisé et formations.",
    libelle: "Logiciels EBP",
    service: { nom: "Logiciels EBP", type: "Revente, intégration et formation EBP" },
    sources: ["app/logiciels"],
    prioritePlan: 0.8,
  },
  {
    chemin: "/ebpcomptabilite",
    titre: "Logiciel EBP Comptabilité à Annecy",
    description:
      "Logiciels EBP Comptabilité à Annecy : solutions ACTIV, PRO et ELITE pour TPE et PME. Comptabilité générale, TVA, rapprochement bancaire. Démo et devis gratuits.",
    libelle: "EBP Comptabilité",
    parent: "/logiciels",
    service: { nom: "EBP Comptabilité", type: "Revente, intégration et formation EBP Comptabilité" },
    sources: ["app/ebpcomptabilite", GABARIT_EBP],
    prioritePlan: 0.8,
  },
  {
    chemin: "/ebpgestionco",
    titre: "Logiciel EBP Gestion Commerciale à Annecy",
    description:
      "EBP Gestion Commerciale ACTIV, PRO, ELITE : ventes, achats, stocks et relation client. Démonstration, accompagnement et formation par Solution Logique à Annecy.",
    libelle: "EBP Gestion Commerciale",
    parent: "/logiciels",
    service: { nom: "EBP Gestion Commerciale", type: "Revente, intégration et formation EBP Gestion Commerciale" },
    sources: ["app/ebpgestionco", GABARIT_EBP],
    prioritePlan: 0.8,
  },
  {
    chemin: "/ebpbatiment",
    titre: "Logiciel EBP Bâtiment pour le BTP",
    description:
      "EBP Gestion Bâtiment, Expert Bâtiment et Bâtiment PRO : devis, métrés, chantiers et facturation du BTP. Démonstration et formation par Solution Logique, Annecy.",
    libelle: "EBP Bâtiment",
    parent: "/logiciels",
    service: { nom: "EBP Bâtiment", type: "Revente, intégration et formation EBP Bâtiment" },
    sources: ["app/ebpbatiment", GABARIT_EBP],
    prioritePlan: 0.8,
  },
  {
    chemin: "/sur-mesure",
    titre: "Sur-mesure et intelligence artificielle",
    description:
      "Applications métier, intégrations, applications mobile et web et accompagnement IA pour les PME de Haute-Savoie. Solution Logique, Annecy.",
    libelle: "Sur-mesure & IA",
    sources: ["app/sur-mesure"],
    prioritePlan: 0.6,
  },
  {
    chemin: "/developpement-sur-mesure",
    titre: "Développement d'applications sur mesure",
    description:
      "Applications métier, intégrations et états sur mesure reliés à vos outils : EBP, CRM, banque, boutique en ligne. Solution Logique, Annecy, 30 ans de terrain.",
    libelle: "Développement sur-mesure",
    parent: "/sur-mesure",
    service: { nom: "Développement d'applications métier sur mesure", type: "Développement d'applications métier" },
    sources: ["app/developpement-sur-mesure"],
    prioritePlan: 0.7,
  },
  {
    chemin: "/applications-mobile-web",
    titre: "Applications mobile et web sur mesure",
    description:
      "Applications terrain, portails web et tableaux de bord connectés à EBP ou à votre ERP. Données synchronisées, usage hors ligne. Solution Logique, Annecy.",
    libelle: "Applications mobile et web",
    parent: "/sur-mesure",
    service: { nom: "Applications mobile et web sur mesure", type: "Développement d'applications mobile et web" },
    sources: ["app/applications-mobile-web", "components/sections/ParcoursTerrain.tsx"],
    prioritePlan: 0.7,
  },
  {
    chemin: "/accompagnement-ia",
    titre: "Accompagnement IA pour les PME",
    description:
      "Audit des cas d'usage, formation des équipes et déploiement d'assistants connectés à vos données métier. Solution Logique, Annecy.",
    libelle: "Accompagnement IA",
    parent: "/sur-mesure",
    service: { nom: "Accompagnement IA pour les PME", type: "Conseil en intelligence artificielle" },
    sources: ["app/accompagnement-ia"],
    prioritePlan: 0.7,
  },
  {
    chemin: "/contact",
    titre: "Contact, nous joindre à Annecy",
    description:
      "Contactez Solution Logique : 04 50 64 02 33, 475 route des Vernes, 74370 Annecy. Devis gratuit : sur-mesure, IA, informatique, téléphonie et logiciels EBP.",
    libelle: "Contact",
    sources: ["app/contact"],
    prioritePlan: 0.6,
  },
  {
    chemin: "/engagementHandicap",
    titre: "Notre engagement handicap",
    description:
      "Référent handicap, accessibilité des locaux et partenaires (MDPH 74, Agefiph, Cap Emploi) : l'engagement de Solution Logique pour l'inclusion à Annecy.",
    libelle: "Engagement handicap",
    sources: ["app/engagementHandicap"],
    prioritePlan: 0.4,
  },
  {
    chemin: "/conditionsGeneralesVente",
    titre: "Conditions générales de vente",
    description:
      "Conditions générales de vente des prestations, logiciels et services informatiques de Solution Logique (SAS, RCS Annecy 379 868 540).",
    libelle: "Conditions générales de vente",
    sources: ["app/conditionsGeneralesVente"],
    prioritePlan: 0.3,
  },
  {
    chemin: "/mentions-legales",
    titre: "Mentions légales",
    description:
      "Mentions légales du site solution-logique.fr : éditeur Solution Logique (SAS, RCS Annecy 379 868 540), directeur de la publication et hébergeur.",
    libelle: "Mentions légales",
    sources: ["app/mentions-legales"],
    prioritePlan: 0.3,
  },
  {
    chemin: "/confidentialite",
    titre: "Politique de confidentialité",
    description:
      "Données personnelles sur solution-logique.fr : ce que collectent le formulaire de contact et la demande de rappel, pourquoi, combien de temps, et vos droits.",
    libelle: "Confidentialité",
    sources: ["app/confidentialite"],
    prioritePlan: 0.3,
  },
];

/* Adresse complete d'une page, barre finale comprise */
export function urlPage(chemin: string): string {
  return chemin === "" ? `${SITE_URL}/` : `${SITE_URL}${chemin}/`;
}

export function pageSite(chemin: string): PageSite {
  const page = PAGES.find((p) => p.chemin === chemin);
  if (!page) {
    throw new Error(`Page absente de lib/seo.ts : « ${chemin} »`);
  }
  return page;
}

/* Metadonnees Next d'une page : titre, description, canonical, partage.
   Open Graph et Twitter sont remplaces en bloc par Next (pas de fusion avec
   le layout) : on les redonne donc en entier. */
export function metadonneesPage(chemin: string): Metadata {
  const page = pageSite(chemin);
  const titreComplet = page.titreAbsolu ?? `${page.titre} | ${NOM_SITE}`;
  const url = urlPage(chemin);

  return {
    title: page.titreAbsolu ? { absolute: page.titreAbsolu } : page.titre,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: NOM_SITE,
      url,
      title: titreComplet,
      description: page.description,
      images: [IMAGE_PARTAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: titreComplet,
      description: page.description,
      images: [IMAGE_PARTAGE.url],
    },
  };
}

/* Fil d'Ariane d'une page, de l'accueil jusqu'a elle */
export function filAriane(chemin: string): PageSite[] {
  const fil: PageSite[] = [];
  let courante: PageSite | undefined = pageSite(chemin);
  while (courante) {
    fil.unshift(courante);
    if (courante.chemin === "") break;
    courante = pageSite(courante.parent ?? "");
  }
  return fil;
}
