/* Textes d'ancrage local et FAQ des pages de services et des pages EBP.

   Proposition du 29/10/2026 (revue SEO, actions 13, 14 et 21 du rapport
   d'audit), validee et publiee le 29/10/2026. Chaque phrase reprend un fait
   deja publie sur le site ou un fait du registre des entreprises :
   - « Basés à Annecy, nous intervenons en Haute-Savoie et dans le bassin
     annécien. Vos interlocuteurs sont les mêmes d'une intervention à
     l'autre. » (components/sections/PourquoiNous.tsx) ;
   - horaires du support : PourquoiNous.tsx et pied de page ;
   - « PME, TPE et collectivités » : Hero.tsx, Footer.tsx ;
   - creation le 08/11/1990, siege 475 route des Vernes a Pringy (Annecy) :
     annuaire des entreprises, SIREN 379 868 540 ;
   - gammes, durees de formation, outils de telemaintenance : textes des
     pages concernees.
   Aucun prix, delai, nom de client ni certification nouvelle.

   `requete` : la recherche Google que la page vise (non affichee). */

export interface QuestionReponse {
  question: string;
  reponse: string;
}

export interface ContenuLocal {
  requete: string;
  titre: string;
  paragraphes: string[];
  faq?: QuestionReponse[];
}

const HORAIRES = "du lundi au vendredi, de 8 h 30 à 12 h et de 14 h à 17 h 30";

const FAQ_DEMO_EBP: QuestionReponse = {
  question: "Peut-on voir le logiciel avant de l'acheter ?",
  reponse:
    "Oui. Demandez une démonstration personnalisée depuis cette page ou au 04 50 64 02 33.",
};

const FAQ_SUR_MESURE_EBP: QuestionReponse = {
  question: "Et si EBP ne fait pas exactement ce dont nous avons besoin ?",
  reponse:
    "Quand le paramétrage ne suffit pas, nous développons autour d'EBP les applications, intégrations et états sur-mesure qui manquent. C'est l'objet de notre page Développement sur-mesure.",
};

export const CONTENUS_LOCAUX: Record<string, ContenuLocal> = {
  "/nosServices": {
    requete: "services informatiques Annecy",
    titre: "Un prestataire informatique à Annecy",
    paragraphes: [
      "Solution Logique accompagne les PME, TPE et collectivités de Haute-Savoie depuis 1990 : infrastructure et postes de travail, hébergement et sauvegardes, téléphonie et réseaux, sécurité. Nos bureaux sont à Pringy, sur la commune d'Annecy.",
      `Nous intervenons dans vos locaux en Haute-Savoie et dans le bassin annécien, et à distance par télémaintenance. Vos interlocuteurs restent les mêmes d'une intervention à l'autre, et le support répond ${HORAIRES}.`,
    ],
  },
  "/informatique": {
    requete: "maintenance informatique Annecy",
    titre: "Votre informatique suivie depuis Annecy",
    paragraphes: [
      "Postes de travail, serveurs, sauvegardes, hébergement : Solution Logique fournit, installe et maintient l'informatique des entreprises de Haute-Savoie depuis ses bureaux de Pringy, à Annecy. Nous intervenons dans vos locaux en Haute-Savoie et dans le bassin annécien, et réglons à distance ce qui peut l'être par télémaintenance.",
      "Vos interlocuteurs sont les mêmes d'une intervention à l'autre.",
    ],
  },
  "/telecom": {
    requete: "téléphonie IP entreprise Annecy",
    titre: "Téléphonie d'entreprise en Haute-Savoie",
    paragraphes: [
      "Pour les entreprises d'Annecy et de Haute-Savoie, Solution Logique met en place la téléphonie IP, les trunks SIP, les softphones et les liaisons entre sites. Le même interlocuteur suit votre réseau, vos postes et votre téléphonie.",
    ],
  },
  "/securite": {
    requete: "sécurité informatique entreprise Annecy",
    titre: "Sécurité informatique pour les PME de Haute-Savoie",
    paragraphes: [
      "Pare-feu, sauvegardes, antivirus, surveillance du réseau : Solution Logique sécurise l'informatique des PME, TPE et collectivités de Haute-Savoie depuis Annecy. Quand une vérification plus poussée s'impose, notre audit de cybersécurité se déroule sur site, avec vos équipes informées.",
    ],
  },
  "/audit-cybersecurite": {
    requete: "audit cybersécurité Annecy",
    titre: "Un audit mené sur place, en Haute-Savoie",
    paragraphes: [
      "Solution Logique réalise ses audits de sécurité et tests d'intrusion pour les entreprises d'Annecy et de Haute-Savoie. Le test interne se déroule dans vos locaux, avec vos équipes informées, sous mandat écrit et sur un périmètre défini à l'avance.",
    ],
  },
  "/telemaintenance": {
    requete: "télémaintenance informatique Annecy",
    titre: "Une assistance à distance, un technicien près de chez vous",
    paragraphes: [
      "La télémaintenance permet à un technicien de Solution Logique de prendre la main sur votre poste, avec votre accord, pour diagnostiquer et corriger un problème sans attendre un déplacement.",
      `Le support répond ${HORAIRES}, au 04 50 64 02 33. Si le problème demande une intervention sur place, nos techniciens, basés à Annecy, interviennent en Haute-Savoie et dans le bassin annécien.`,
    ],
    faq: [
      {
        question: "Faut-il installer un logiciel ?",
        reponse:
          "Non, avec la version EXE de RustDesk : il suffit de la lancer, elle ne demande pas d'installation. La version MSI, elle, s'installe sur le poste.",
      },
      {
        question: "Que dois-je communiquer au technicien ?",
        reponse:
          "L'identifiant affiché par RustDesk, une série de chiffres, et le mot de passe temporaire affiché juste en dessous.",
      },
      {
        question: "La connexion est-elle sécurisée ?",
        reponse:
          "RustDesk chiffre la session de bout en bout et la connexion est temporaire. Avec NinjaOne, vous êtes dirigé vers notre plateforme sécurisée et les sessions sont également chiffrées de bout en bout.",
      },
      {
        question: "J'ai reçu un code NinjaOne, que dois-je faire ?",
        reponse:
          "Saisissez-le dans le champ « Connexion NinjaOne » de cette page, puis cliquez sur « Se connecter ». Si vous n'avez pas de code, notre support vous le donne.",
      },
      {
        question: "Quand puis-je joindre le support ?",
        reponse: `${HORAIRES.charAt(0).toUpperCase()}${HORAIRES.slice(1)}, au 04 50 64 02 33.`,
      },
    ],
  },
  "/logiciels": {
    requete: "revendeur EBP Annecy",
    titre: "Votre partenaire EBP à Annecy",
    paragraphes: [
      "Revendeur et intégrateur EBP à Annecy, Solution Logique présente les logiciels EBP Comptabilité, Gestion Commerciale et Bâtiment, les installe, les paramètre et forme vos équipes. Nos bureaux sont à Pringy et nous accompagnons les entreprises de Haute-Savoie et du bassin annécien.",
    ],
  },
  "/ebpcomptabilite": {
    requete: "logiciel EBP Comptabilité Annecy",
    titre: "EBP Comptabilité avec un intégrateur à Annecy",
    paragraphes: [
      "Revendeur et intégrateur EBP à Annecy, Solution Logique vous aide à choisir entre EBP Comptabilité ACTIV, PRO et ELITE, installe le logiciel, le paramètre et forme vos équipes. Nous accompagnons les entreprises de Haute-Savoie et du bassin annécien depuis nos bureaux de Pringy.",
    ],
    faq: [
      {
        question: "Quelle version d'EBP Comptabilité choisir ?",
        reponse:
          "ACTIV pour débuter avec une comptabilité générale complète. PRO pour la déclaration de TVA intégrée, la gestion des impayés et le rapprochement bancaire automatique. ELITE pour le multi-dossiers, le multi-utilisateurs, les ratios financiers et le reporting avancé.",
      },
      FAQ_DEMO_EBP,
      {
        question: "Combien de temps dure la formation ?",
        reponse:
          "Trois jours, du niveau débutant à intermédiaire, sur devis. Le programme détaillé figure dans la section Formation de cette page.",
      },
      FAQ_SUR_MESURE_EBP,
    ],
  },
  "/ebpgestionco": {
    requete: "EBP Gestion Commerciale Annecy",
    titre: "EBP Gestion Commerciale installé et suivi depuis Annecy",
    paragraphes: [
      "Solution Logique, revendeur et intégrateur EBP à Annecy, vous aide à choisir entre EBP Gestion Commerciale ACTIV, PRO et ELITE, le paramètre selon vos besoins et forme vos équipes au cycle de vente complet. Nous intervenons en Haute-Savoie et dans le bassin annécien.",
    ],
    faq: [
      {
        question: "Quelle version d'EBP Gestion Commerciale choisir ?",
        reponse:
          "ACTIV pour débuter : clients, fournisseurs, articles, devis et factures. PRO pour le cycle de vente complet, la gestion avancée des stocks, les règlements et les relances clients. ELITE pour le multi-sociétés, le multi-devises, le multi-magasins et les connecteurs e-commerce.",
      },
      FAQ_DEMO_EBP,
      {
        question: "Combien de temps dure la formation ?",
        reponse:
          "Trois jours, du niveau débutant à confirmé, sur devis. Le programme détaillé figure dans la section Formation de cette page.",
      },
      FAQ_SUR_MESURE_EBP,
    ],
  },
  "/ebpbatiment": {
    requete: "logiciel EBP Bâtiment Haute-Savoie",
    titre: "EBP Bâtiment pour les entreprises du BTP de Haute-Savoie",
    paragraphes: [
      "Artisans et entreprises du BTP de Haute-Savoie : Solution Logique, revendeur et intégrateur EBP à Annecy, vous aide à choisir entre EBP Gestion Bâtiment, Bâtiment PRO et Expert Bâtiment, paramètre vos bibliothèques d'ouvrages et forme vos équipes aux devis, métrés et situations de travaux.",
    ],
    faq: [
      {
        question: "Quelle version d'EBP Bâtiment choisir ?",
        reponse:
          "EBP Gestion Bâtiment pour les devis, métrés, chantiers et la facturation de situations. Bâtiment PRO pour le métré-devis-facture détaillé avec bibliothèques d'ouvrages et indexation des prix. Expert Bâtiment pour le multi-chantiers, la sous-traitance, le planning Gantt et l'application mobile chantier.",
      },
      FAQ_DEMO_EBP,
      {
        question: "Combien de temps dure la formation ?",
        reponse:
          "Trois jours, sur devis. Elle s'adresse à des personnes qui connaissent déjà le BTP et la gestion de chantiers ; le programme détaillé figure dans la section Formation de cette page.",
      },
      FAQ_SUR_MESURE_EBP,
    ],
  },
  "/sur-mesure": {
    requete: "développement logiciel sur mesure Annecy",
    titre: "Trois offres, une même équipe à Annecy",
    paragraphes: [
      "Développement sur-mesure, applications mobile et web, accompagnement IA : ces trois offres partent de trente ans passés à installer et maintenir les systèmes des entreprises de Haute-Savoie. Elles s'appuient sur les logiciels que vous utilisez déjà : logiciel de gestion, CRM, messagerie.",
      "Elles sont menées par l'équipe de Solution Logique, basée à Annecy.",
    ],
  },
  "/developpement-sur-mesure": {
    requete: "développement sur mesure Annecy",
    titre: "Développement sur mesure, en Haute-Savoie",
    paragraphes: [
      "Nous développons pour les entreprises d'Annecy et de Haute-Savoie : applications métier, intégrations entre logiciels, états sur-mesure, reliés au logiciel de gestion qu'elles utilisent déjà, EBP ou un autre. Vous gardez le même interlocuteur pour le logiciel standard et pour ce qui le complète.",
    ],
  },
  "/applications-mobile-web": {
    requete: "application mobile EBP",
    titre: "Des applications pour les équipes de terrain de Haute-Savoie",
    paragraphes: [
      "Basés à Annecy, nous construisons ces applications pour les entreprises de Haute-Savoie, à partir d'EBP ou de l'ERP déjà en place : données synchronisées, usage hors ligne sur le terrain.",
    ],
  },
  "/accompagnement-ia": {
    requete: "accompagnement intelligence artificielle PME Annecy",
    titre: "L'IA avec un prestataire de proximité",
    paragraphes: [
      "Audit des cas d'usage, formation des équipes, assistants connectés à vos données métier : Solution Logique accompagne les PME d'Annecy et de Haute-Savoie dans leurs projets d'IA, depuis ses bureaux de Pringy.",
    ],
  },
  "/contact": {
    requete: "Solution Logique Annecy contact",
    titre: "Nous trouver, nous joindre",
    paragraphes: [
      `Nos bureaux sont au 475 route des Vernes, à Pringy, sur la commune d'Annecy. Le support répond ${HORAIRES} ; en dehors de ces horaires, écrivez-nous par le formulaire ou demandez à être rappelé.`,
      "Les toilettes et salles de réunion sont accessibles et aux normes PMR, et un parking réservé se trouve à proximité immédiate. Pour une assistance immédiate sur votre poste, passez par la page Télémaintenance.",
    ],
  },
};

export function contenuLocal(chemin: string): ContenuLocal | undefined {
  return CONTENUS_LOCAUX[chemin];
}
