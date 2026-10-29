/* Pages locales : les secteurs de Haute-Savoie et de Savoie ou Solution
   Logique suit des clients en dehors du bassin annecien.

   D'ou viennent les faits (relus le 29/10/2026) :
   - les communes : adresses des clients factures depuis deux ans dans la base
     de gestion de l'entreprise, regroupees par secteur ; seules les communes
     ou plusieurs entreprises sont suivies sont citees, jamais un nom ni un
     nombre de clients ;
   - les distances : itineraire routier depuis le 475 route des Vernes
     (point de la Base Adresse Nationale), sans trafic, arrondi ;
   - les services : ceux que ces clients ont reellement achetes (logiciels
     EBP, maintenance, telephonie, deplacements factures sur place), plus
     l'offre de developpement et d'IA, proposee partout sans pretendre que
     des clients du secteur l'ont deja.
   Ordre de mise en avant (direction, 29/10/2026) : l'IA et le developpement
   d'abord, l'informatique ensuite, EBP en dernier.
   Chaque page a son propre texte : pas de page copiee d'un secteur a l'autre.
   Une page ajoutee ici doit l'etre aussi dans lib/seo.ts (fait par SECTEURS). */

export interface Secteur {
  slug: string;
  nom: string;
  /* Titre de la page (H1) */
  titre: string;
  /* Titre pour les moteurs : 41 caracteres au plus */
  titreSeo: string;
  description: string;
  accroche: string;
  communes: string[];
  paragraphes: string[];
  services: { chemin: string; texte: string }[];
  acces: string;
}

export const SECTEURS: Secteur[] = [
  {
    slug: "chablais",
    nom: "Chablais",
    titre: "Votre prestataire informatique dans le Chablais",
    titreSeo: "Prestataire informatique dans le Chablais",
    description:
      "Entreprises du Chablais, de Thonon-les-Bains à Publier : applications sur mesure et IA, maintenance informatique, télémaintenance et logiciels EBP.",
    accroche:
      "Des entreprises de Thonon-les-Bains et de ses environs nous confient leur informatique et leurs logiciels de gestion, à plus d'une heure de route de nos bureaux.",
    communes: ["Thonon-les-Bains", "Allinges", "Publier"],
    paragraphes: [
      "Le Chablais est l'un des secteurs les plus éloignés de nos bureaux de Pringy : un peu plus de 70 km et environ une heure de route jusqu'à Thonon-les-Bains. Nous y suivons pourtant des entreprises depuis des années, pour la maintenance de leur informatique et pour leurs logiciels EBP.",
      "La distance change notre façon de travailler, pas le service. Un poste bloqué, un logiciel qui refuse de démarrer ou une question sur une écriture se règlent d'abord à distance, par télémaintenance, sans attendre un déplacement. Nous venons sur place quand il le faut : installation d'un serveur ou de postes, mise en route d'un logiciel, formation des équipes dans vos locaux.",
      "Une application sur mesure ou un accompagnement à l'IA se mènent de la même façon : les ateliers de cadrage et la formation dans vos locaux, le développement et le suivi à distance.",
      "Pour une installation ou une formation, nous convenons de la date avec vous ; pour le reste, le support répond du lundi au vendredi, de 8 h 30 à 12 h et de 14 h à 17 h 30, au 04 50 64 02 33.",
    ],
    services: [
      { chemin: "/developpement-sur-mesure", texte: "applications métier sur mesure" },
      { chemin: "/accompagnement-ia", texte: "accompagnement IA" },
      { chemin: "/informatique", texte: "maintenance des postes et des serveurs" },
      { chemin: "/telemaintenance", texte: "assistance à distance" },
      { chemin: "/logiciels", texte: "logiciels EBP, installation et formation" },
    ],
    acces:
      "Depuis nos bureaux de Pringy : environ 74 km et 1 h 05 de route jusqu'à Thonon-les-Bains, sans trafic.",
  },
  {
    slug: "vallee-de-l-arve",
    nom: "Vallée de l'Arve et Faucigny",
    titre: "Votre prestataire informatique dans la vallée de l'Arve",
    titreSeo: "Prestataire informatique vallée de l'Arve",
    description:
      "Applications sur mesure et IA, maintenance, téléphonie et logiciels EBP pour les entreprises de la vallée de l'Arve, de La Roche-sur-Foron à Sallanches.",
    accroche:
      "De La Roche-sur-Foron à Sallanches, en passant par Bonneville et Cluses, nous suivons des entreprises de la vallée pour leur informatique, leur téléphonie et leurs logiciels de gestion.",
    communes: [
      "La Roche-sur-Foron",
      "Saint-Pierre-en-Faucigny",
      "Amancy",
      "Bonneville",
      "Fillinges",
      "Viuz-en-Sallaz",
      "La Tour",
      "Taninges",
      "Marnaz",
      "Thyez",
      "Cluses",
      "Sallanches",
    ],
    paragraphes: [
      "La vallée de l'Arve et le Faucigny sont, après le bassin annécien, l'un des secteurs où nous suivons le plus d'entreprises : leur informatique, leur téléphonie et, pour la plupart, leurs logiciels EBP en comptabilité, en gestion commerciale ou dans le bâtiment.",
      "La Roche-sur-Foron et Bonneville sont à une demi-heure de nos bureaux de Pringy, Cluses à quarante minutes. Nous venons sur place pour installer une nouvelle version, former une équipe ou reprendre un dossier, et nous réglons à distance, par télémaintenance, les questions du quotidien.",
      "Plusieurs entreprises de la vallée nous confient aussi leur téléphonie et la maintenance de leur informatique : un seul interlocuteur pour le logiciel, les postes et le téléphone. Quand le logiciel standard ne suffit plus, nous développons l'application qui manque, et nous accompagnons les équipes qui veulent se servir de l'IA.",
    ],
    services: [
      { chemin: "/applications-mobile-web", texte: "applications mobile et web pour les équipes de terrain" },
      { chemin: "/accompagnement-ia", texte: "accompagnement IA" },
      { chemin: "/telecom", texte: "téléphonie d'entreprise" },
      { chemin: "/informatique", texte: "maintenance informatique" },
      { chemin: "/logiciels", texte: "logiciels EBP (comptabilité, gestion commerciale, bâtiment)" },
    ],
    acces:
      "Depuis nos bureaux de Pringy : environ 33 km et 30 min de route jusqu'à La Roche-sur-Foron, 51 km et 40 min jusqu'à Cluses, sans trafic.",
  },
  {
    slug: "savoie",
    nom: "Savoie",
    titre: "Votre prestataire informatique en Savoie",
    titreSeo: "Prestataire informatique en Savoie",
    description:
      "Entreprises de Savoie, d'Aix-les-Bains et Chambéry à Ugine et Moûtiers : applications sur mesure et IA, maintenance, télémaintenance, logiciels EBP.",
    accroche:
      "Aix-les-Bains est à une demi-heure de nos bureaux, Chambéry à peine plus : nous suivons aussi des entreprises de l'autre côté de la limite du département.",
    communes: ["Aix-les-Bains", "Viviers-du-Lac", "Chambéry", "Ugine", "Moûtiers"],
    paragraphes: [
      "Nos clients de Savoie se trouvent surtout autour du lac du Bourget et de Chambéry, et jusqu'à Ugine et en Tarentaise. Pour la plupart, nous assurons la maintenance de leur informatique, et beaucoup utilisent aussi les logiciels EBP.",
      "Nos bureaux de Pringy sont au nord d'Annecy, près de l'autoroute qui mène à Aix-les-Bains et Chambéry : une demi-heure de route environ, sans trafic. Les demandes courantes se traitent à distance par télémaintenance ; nous venons dans vos locaux pour ce qui demande d'être sur place.",
      "Pour les entreprises plus éloignées, vers Ugine ou en Tarentaise, l'assistance passe d'abord par la télémaintenance, et les déplacements se prévoient avec vous. Il en va de même pour une application sur mesure ou un accompagnement à l'IA : le cadrage et la formation sur place, le reste à distance.",
    ],
    services: [
      { chemin: "/developpement-sur-mesure", texte: "applications métier sur mesure" },
      { chemin: "/accompagnement-ia", texte: "accompagnement IA" },
      { chemin: "/informatique", texte: "maintenance informatique" },
      { chemin: "/securite", texte: "sécurité du réseau et des données" },
      { chemin: "/telemaintenance", texte: "assistance à distance" },
      { chemin: "/logiciels", texte: "logiciels EBP" },
    ],
    acces:
      "Depuis nos bureaux de Pringy : environ 38 km et 30 min de route jusqu'à Aix-les-Bains, 51 km et 35 min jusqu'à Chambéry, sans trafic.",
  },
];

export function secteur(slug: string): Secteur {
  const s = SECTEURS.find((x) => x.slug === slug);
  if (!s) throw new Error(`Secteur absent de lib/secteurs.ts : « ${slug} »`);
  return s;
}
