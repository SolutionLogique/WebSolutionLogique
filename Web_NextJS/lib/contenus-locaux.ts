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

/* FAQ de reponses factuelles (referencement IA, 29/10/2026, branche
   seo/geo-ia-2910) : qui, quoi, ou, pour qui, quand, comment. Memes regles
   que le reste du fichier : chaque reponse reprend un fait deja publie sur le
   site, dans llms.txt ou les donnees structurees (zones servies), ou un fait
   du registre des entreprises. Aucun prix, delai, chiffre ni certification. */

const ZONE =
  "Annecy et son agglomération, le reste de la Haute-Savoie (Chablais, vallée de l'Arve, Genevois) et la Savoie";

const FAQ_SUR_PLACE_OU_A_DISTANCE: QuestionReponse = {
  question: "Intervenez-vous sur place ou à distance ?",
  reponse: `Les deux. Nous réglons à distance ce qui peut l'être, par télémaintenance et avec votre accord. Sinon, un technicien basé à Annecy se déplace dans vos locaux : ${ZONE}.`,
};

/* FAQ des pages d'offres qui n'en avaient pas (referencement IA, 24/11/2026,
   branche seo/geo-llms-2411) : audit de cybersecurite, sur-mesure,
   applications, IA, logiciels EBP. Chaque reponse reprend un texte deja
   affiche sur la page elle-meme (source citee au-dessus de chaque question).
   Aucun prix, aucune duree de formation (2 jours sur /logiciels, 3 jours sur
   les pages EBP : a trancher par la direction), aucune certification. */

const FAQ_HORAIRES: QuestionReponse = {
  question: "Quand peut-on joindre le support ?",
  reponse: `${HORAIRES.charAt(0).toUpperCase()}${HORAIRES.slice(1)}, au 04 50 64 02 33. En dehors de ces horaires, écrivez-nous par le formulaire de contact du site.`,
};

export const CONTENUS_LOCAUX: Record<string, ContenuLocal> = {
  "/nosServices": {
    requete: "services informatiques Annecy",
    titre: "Un prestataire informatique à Annecy",
    paragraphes: [
      "Solution Logique accompagne les PME, TPE et collectivités de Haute-Savoie depuis 1990 : infrastructure et postes de travail, hébergement et sauvegardes, téléphonie et réseaux, sécurité. Nos bureaux sont à Pringy, sur la commune d'Annecy.",
      `Nous intervenons dans vos locaux en Haute-Savoie et dans le bassin annécien, et à distance par télémaintenance. Vos interlocuteurs restent les mêmes d'une intervention à l'autre, et le support répond ${HORAIRES}.`,
    ],
    faq: [
      {
        // Seule reponse qui enumere les activites : dans l'ordre tranche par
        // Jordan le 29/10/2026 a 16:43 (technique et materiel, puis
        // developpement et IA, puis EBP).
        question: "Que fait Solution Logique ?",
        reponse:
          "Solution Logique fournit, installe et maintient l'informatique des entreprises : postes de travail, serveurs, réseau, sauvegardes, sécurité et téléphonie IP, avec une assistance à distance par télémaintenance. Elle développe aussi des applications sur mesure, accompagne ses clients dans l'usage de l'intelligence artificielle, et vend, installe et forme aux logiciels de gestion EBP.",
      },
      {
        question: "Pour quelles entreprises travaillez-vous ?",
        reponse:
          "Pour les PME, les TPE et les collectivités, à Annecy, en Haute-Savoie et en Savoie.",
      },
      {
        question: "Aurons-nous toujours le même interlocuteur ?",
        reponse:
          "Oui. Vos interlocuteurs sont les mêmes d'une intervention à l'autre : une équipe basée à Pringy, à Annecy, qui connaît votre installation.",
      },
      FAQ_SUR_PLACE_OU_A_DISTANCE,
    ],
  },
  "/informatique": {
    requete: "maintenance informatique Annecy",
    titre: "Votre informatique suivie depuis Annecy",
    paragraphes: [
      "Postes de travail, serveurs, sauvegardes, hébergement : Solution Logique fournit, installe et maintient l'informatique des entreprises de Haute-Savoie depuis ses bureaux de Pringy, à Annecy. Nous intervenons dans vos locaux en Haute-Savoie et dans le bassin annécien, et réglons à distance ce qui peut l'être par télémaintenance.",
      "Vos interlocuteurs sont les mêmes d'une intervention à l'autre.",
    ],
    faq: [
      {
        question: "Fournissez-vous aussi le matériel ?",
        reponse:
          "Oui. Nous fournissons, installons et maintenons les postes de travail, les serveurs, le réseau et les sauvegardes, puis nous suivons ce matériel une fois en service.",
      },
      {
        question: "Comment se passe un dépannage ?",
        reponse:
          "Vous appelez le support ou ouvrez une session de télémaintenance (RustDesk ou NinjaOne) depuis notre page Télémaintenance ; le technicien prend la main sur le poste avec votre accord. Si le problème demande un déplacement, il intervient dans vos locaux.",
      },
      FAQ_HORAIRES,
    ],
  },
  "/telecom": {
    requete: "téléphonie IP entreprise Annecy",
    titre: "Téléphonie d'entreprise en Haute-Savoie",
    paragraphes: [
      "Pour les entreprises d'Annecy et de Haute-Savoie, Solution Logique met en place la téléphonie IP, les trunks SIP, les softphones et les liaisons entre sites. Le même interlocuteur suit votre réseau, vos postes et votre téléphonie.",
    ],
    faq: [
      {
        question: "Que mettez-vous en place en téléphonie ?",
        reponse:
          "La téléphonie IP de l'entreprise, fixe et mobile : trunks SIP, softphones et liaisons entre vos sites.",
      },
      {
        question: "Le même prestataire peut-il suivre l'informatique et la téléphonie ?",
        reponse:
          "Oui. Chez Solution Logique, le même interlocuteur suit votre réseau, vos postes de travail et votre téléphonie.",
      },
    ],
  },
  "/securite": {
    requete: "sécurité informatique entreprise Annecy",
    titre: "Sécurité informatique pour les PME de Haute-Savoie",
    paragraphes: [
      "Pare-feu, sauvegardes, antivirus, surveillance du réseau : Solution Logique sécurise l'informatique des PME, TPE et collectivités de Haute-Savoie depuis Annecy. Quand une vérification plus poussée s'impose, notre audit de cybersécurité se déroule sur site, avec vos équipes informées.",
    ],
    faq: [
      {
        question: "Que couvre la sécurité informatique chez Solution Logique ?",
        reponse:
          "Le pare-feu, l'antivirus, les sauvegardes, la protection des données et la surveillance du réseau des PME, TPE et collectivités que nous suivons.",
      },
      {
        question: "Proposez-vous un audit de cybersécurité ?",
        reponse:
          "Oui : tests d'intrusion externe, applicatif et interne, sous mandat écrit et sur un périmètre défini à l'avance, avec un rapport qui classe les corrections par priorité. Le test interne se déroule dans vos locaux, avec vos équipes informées. Le détail est sur notre page Audit de cybersécurité.",
      },
    ],
  },
  "/audit-cybersecurite": {
    requete: "audit cybersécurité Annecy",
    titre: "Un audit mené sur place, en Haute-Savoie",
    paragraphes: [
      "Solution Logique réalise ses audits de sécurité et tests d'intrusion pour les entreprises d'Annecy et de Haute-Savoie. Le test interne se déroule dans vos locaux, avec vos équipes informées, sous mandat écrit et sur un périmètre défini à l'avance.",
    ],
    faq: [
      {
        // Source : section « Quatre niveaux d'analyse »
        question: "Quelle différence entre un audit de sécurité et un test d'intrusion ?",
        reponse:
          "Un audit dit ce qui est mal configuré ; un test d'intrusion montre ce qu'un attaquant peut en faire. Les deux se complètent, et nous vous aidons à choisir par où commencer.",
      },
      {
        // Source : section « Par où commencer ? »
        question: "Par où une PME doit-elle commencer ?",
        reponse:
          "Pour la plupart des PME, un audit suivi d'un test d'intrusion externe couvre l'essentiel. Nous en parlons avec vous avant de chiffrer quoi que ce soit.",
      },
      {
        // Source : section « Un cadre avant la technique » (mandat, perimetre)
        question: "Faut-il donner une autorisation écrite ?",
        reponse:
          "Oui. Aucun test ne commence sans autorisation signée par un représentant habilité de l'entreprise, car tester un système sans autorisation est un délit. Les cibles, les dates et les horaires sont fixés à l'avance : ce qui n'y figure pas n'est pas testé.",
      },
      {
        // Source : section « Un cadre avant la technique » (rapport, contre-audit)
        question: "Que contient le rapport ?",
        reponse:
          "Une synthèse pour la direction et un détail technique pour votre prestataire, chaque point classé par gravité. Une fois les corrections faites, un contre-audit vérifie qu'elles ferment réellement les failles relevées.",
      },
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
    faq: [
      {
        // Source : paragraphe ci-dessus et cartes de la page
        question: "Quels logiciels EBP proposez-vous ?",
        reponse:
          "EBP Comptabilité, EBP Gestion Commerciale et EBP Bâtiment. Nous les vendons, les installons, les paramétrons et formons vos équipes.",
      },
      FAQ_DEMO_EBP,
      {
        // Source : onglet « Nos Formations », bloc « Formations sur mesure »
        question: "Où se déroulent les formations ?",
        reponse:
          "Dans nos locaux ou sur site, en individuel ou en groupe, avec un programme adapté à vos besoins.",
      },
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
    faq: [
      {
        // Source : section « Trois façons d'intervenir »
        question: "Que pouvez-vous développer pour nous ?",
        reponse:
          "Des applications métier (applications terrain pour les techniciens, portails web pour vos clients, tableaux de bord de pilotage), des intégrations entre vos logiciels, et les états, rapports et requêtes que le logiciel standard ne sait pas produire.",
      },
      {
        // Source : carte « Intégrations et automatisations »
        question: "Pouvez-vous relier notre logiciel de gestion à nos autres outils ?",
        reponse:
          "Oui. Nous relions votre logiciel de gestion, EBP ou un autre, à votre CRM, votre banque, votre boutique en ligne ou vos outils métier, et nous supprimons les ressaisies.",
      },
      {
        // Source : section « Comment nous travaillons »
        question: "Comment se déroule un projet ?",
        reponse:
          "Nous partons de votre organisation réelle, puis nous posons le périmètre, le budget et le délai avant d'écrire la première ligne de code. Nous livrons par étapes, pour que vous voyiez fonctionner ce qui est développé, et nous assurons ensuite la formation des utilisateurs, les corrections et les évolutions.",
      },
      {
        // Source : dernier bloc de la page (« Décrivez-nous ce qui vous fait perdre du temps »)
        question: "Un développement est-il toujours nécessaire ?",
        reponse:
          "Non. Nous vous disons franchement si un développement se justifie, ou si un réglage de l'existant suffit.",
      },
    ],
  },
  "/applications-mobile-web": {
    requete: "application mobile EBP",
    titre: "Des applications pour les équipes de terrain de Haute-Savoie",
    paragraphes: [
      "Basés à Annecy, nous construisons ces applications pour les entreprises de Haute-Savoie, à partir d'EBP ou de l'ERP déjà en place : données synchronisées, usage hors ligne sur le terrain.",
    ],
    faq: [
      {
        // Source : carte « Branchée sur votre ERP »
        question: "Faudra-t-il ressaisir nos données dans l'application ?",
        reponse:
          "Non. L'application lit et écrit dans EBP, ou dans l'ERP que vous utilisez déjà : vos données restent à un seul endroit, sans double saisie.",
      },
      {
        // Source : section « Votre ERP n'est pas EBP ? »
        question: "Notre ERP n'est pas EBP : est-ce possible ?",
        reponse:
          "Oui, dès que votre ERP ou votre logiciel métier propose une API, un export ou un accès à sa base. Nous vérifions ce point ensemble, avant tout chiffrage.",
      },
      {
        // Source : carte « Utilisable hors connexion »
        question: "L'application fonctionne-t-elle sans réseau ?",
        reponse:
          "Oui. Sur un chantier ou en sous-sol, elle continue de fonctionner et se synchronise dès que la connexion revient.",
      },
      {
        // Source : section « Votre ERP n'est pas EBP ? », étape 03
        question: "Quand verrons-nous une première version ?",
        reponse:
          "Un premier parcours utile est livré en quelques semaines, et vos équipes le testent avant d'aller plus loin.",
      },
    ],
  },
  "/accompagnement-ia": {
    requete: "accompagnement intelligence artificielle PME Annecy",
    titre: "L'IA avec un prestataire de proximité",
    paragraphes: [
      "Audit des cas d'usage, formation des équipes, assistants connectés à vos données métier : Solution Logique accompagne les PME d'Annecy et de Haute-Savoie dans leurs projets d'IA, depuis ses bureaux de Pringy.",
    ],
    faq: [
      {
        // Source : section « Trois étapes, dans cet ordre »
        question: "Par quoi commence un projet d'IA ?",
        reponse:
          "Par l'usage, pas par l'outil : un audit des cas d'usage repère les tâches où l'IA fait gagner du temps, et celles où elle n'apporte rien. Viennent ensuite la formation des équipes, puis le déploiement d'assistants.",
      },
      {
        // Source : étape « Déploiement d'assistants », « Ce que nous ne ferons pas »
        // et l'exemple de l'assistant relié à EBP (lecture seule)
        question: "Que deviennent nos données ?",
        reponse:
          "Elles ne partent pas n'importe où sans que vous le sachiez : la maîtrise de ce qui sort de l'entreprise fait partie du déploiement d'un assistant. Un assistant qui interroge votre base EBP, par exemple, n'y a accès qu'en lecture seule : il consulte, il ne modifie rien.",
      },
      {
        // Source : étapes « Formation des équipes » et « Déploiement d'assistants »
        question: "Nos équipes seront-elles formées ?",
        reponse:
          "Oui. Nous formons vos collaborateurs sur leurs propres cas, avec leurs propres documents, jusqu'à ce qu'ils soient autonomes, puis nous suivons l'usage après la mise en service.",
      },
    ],
  },
  "/contact": {
    requete: "Solution Logique Annecy contact",
    titre: "Nous trouver, nous joindre",
    paragraphes: [
      `Nos bureaux sont au 475 route des Vernes, à Pringy, sur la commune d'Annecy. Le support répond ${HORAIRES} ; en dehors de ces horaires, écrivez-nous par le formulaire ou demandez à être rappelé.`,
      "Les toilettes et salles de réunion sont accessibles et aux normes PMR, et un parking réservé se trouve à proximité immédiate. Pour une assistance immédiate sur votre poste, passez par la page Télémaintenance.",
    ],
    faq: [
      {
        question: "Où se trouve Solution Logique ?",
        reponse:
          "Au 475 route des Vernes, 74370 Annecy, à Pringy (Haute-Savoie).",
      },
      {
        question: "Depuis quand Solution Logique existe-t-elle ?",
        reponse:
          "Depuis 1990 : la société a été créée le 8 novembre 1990. C'est une SAS immatriculée au RCS d'Annecy sous le numéro 379 868 540.",
      },
      {
        question: "Dans quelle zone intervenez-vous ?",
        reponse: `${ZONE}, dans vos locaux ou à distance par télémaintenance.`,
      },
      FAQ_HORAIRES,
    ],
  },
};

export function contenuLocal(chemin: string): ContenuLocal | undefined {
  return CONTENUS_LOCAUX[chemin];
}
