/* Rubrique Conseils : les articles du site.

   Regles d'ecriture (revue SEO du 29/10/2026) :
   - chaque fait vient d'une source officielle ou de l'editeur, listee en fin
     d'article avec la date de la page et la date de lecture ;
   - aucun chiffre sans source, aucun nom de client ;
   - chaque article renvoie vers les pages de service concernees ;
   - une date de publication reelle ; dateModification change a chaque
     mise a jour du texte.
   Les liens dans le texte s'ecrivent [libelle](/chemin/).
   Un article ajoute ici apparait seul dans la liste, le plan du site et
   lib/seo.ts (fil d'Ariane, canonical). */

export type Bloc =
  | { type: "p"; texte: string }
  | { type: "h2"; texte: string }
  | { type: "liste"; items: string[] }
  | { type: "encadre"; texte: string };

export interface Source {
  titre: string;
  editeur: string;
  url: string;
  /* Date de mise a jour affichee par la page (AAAA-MM-JJ), si elle en a une */
  datePage?: string;
  consultee: string;
}

/* Themes de la rubrique, dans l'ordre d'affichage : la technique et le
   materiel d'abord, les logiciels de gestion en dernier (choix de Jordan, 29/10) */
export const THEMES = [
  "Postes et matériel",
  "Réseau et téléphonie",
  "Sécurité et sauvegardes",
  "Logiciels de gestion",
] as const;
export type Theme = (typeof THEMES)[number];

export interface Article {
  slug: string;
  /* Titre de l'article (H1) */
  titre: string;
  /* Titre de la page pour les moteurs : 41 caracteres au plus (le gabarit
     ajoute « | Solution Logique ») */
  titreSeo: string;
  libelle: string;
  description: string;
  resume: string;
  theme: Theme;
  datePublication: string;
  dateModification: string;
  blocs: Bloc[];
  /* Pages de service liees en fin d'article (chemins du registre lib/seo.ts) */
  services: string[];
  sources: Source[];
}

const LU_LE = "2026-10-29";

export const ARTICLES: Article[] = [
  {
    slug: "sauvegardes-pme-regle-3-2-1",
    titre: "Sauvegardes d'une PME : appliquer la règle 3-2-1",
    titreSeo: "Sauvegardes d'une PME : la règle 3-2-1",
    libelle: "Sauvegardes et règle 3-2-1",
    description:
      "Trois copies, deux supports, une hors ligne : la règle 3-2-1 de l'ANSSI expliquée pour une PME, avec la fréquence, les tests de restauration et le chiffrement.",
    resume:
      "Un rançongiciel, un incendie ou un disque qui lâche : le jour où les données disparaissent, seule une sauvegarde intacte permet de repartir. L'ANSSI recommande la règle 3-2-1. Ce qu'elle veut dire, et comment l'appliquer dans une PME.",
    theme: "Sécurité et sauvegardes",
    datePublication: "2026-10-30",
    dateModification: "2026-10-30",
    blocs: [
      { type: "h2", texte: "Pourquoi les sauvegardes sont une cible" },
      {
        type: "p",
        texte:
          "Une sauvegarde sert le jour où tout le reste a échoué. Les attaquants le savent : l'ANSSI note qu'il est fréquent qu'un attaquant tente de chiffrer, d'effacer ou de rendre indisponible l'infrastructure de sauvegarde avant de déclencher un rançongiciel. Une sauvegarde rangée à côté du serveur, branchée en permanence sur le même réseau, partira avec lui. Elle ne protège pas non plus d'un incendie, d'un dégât des eaux ou d'un vol.",
      },
      { type: "h2", texte: "La règle 3-2-1 telle que l'ANSSI la formule" },
      {
        type: "p",
        texte:
          "Dans son guide « Sauvegarde des systèmes d'information : les fondamentaux » (version 1.1 du 27 novembre 2025), l'ANSSI recommande d'appliquer la règle « 3-2-1 » : trois copies distinctes des données, c'est-à-dire les données en production et deux sauvegardes, stockées sur des supports différents, dont une hors ligne.",
      },
      {
        type: "encadre",
        texte:
          "Hors ligne veut dire déconnectée de tout système informatique, pas seulement rangée ailleurs. L'ANSSI juge une sauvegarde hors ligne indispensable, même si elle est moins fréquente que les sauvegardes en ligne. La CNIL reprend la même règle.",
      },
      {
        type: "p",
        texte:
          "Cybermalveillance.gouv.fr ne cite pas la règle par son nom, mais ses conseils vont dans le même sens : plusieurs sauvegardes sur des supports différents, une copie conservée dans un autre lieu que les données d'origine, et un support de sauvegarde déconnecté de l'ordinateur ou du réseau quand il ne sert pas.",
      },
      { type: "h2", texte: "À quoi cela ressemble dans une PME" },
      {
        type: "p",
        texte:
          "Prenons une PME dont les fichiers et les dossiers de gestion sont sur un serveur au bureau. La première copie est l'original, sur le serveur. La deuxième est une sauvegarde automatique, chaque jour, sur un autre support : un stockage réseau dédié, par exemple. La troisième est la copie hors ligne : un support qui n'est branché que le temps de la sauvegarde puis rangé ailleurs, ou une bande. L'ANSSI note que la bande magnétique reste le moyen le plus efficace pour la sauvegarde hors ligne.",
      },
      {
        type: "p",
        texte:
          "Une copie dans le nuage peut tenir le rôle de la copie hors site, sous conditions. L'ANSSI considère toutefois qu'une sauvegarde hors ligne reste plus robuste qu'une sauvegarde en ligne, même protégée contre l'effacement.",
      },
      { type: "h2", texte: "Combien de fois sauvegarder, et combien de temps garder" },
      {
        type: "p",
        texte:
          "Il n'y a pas de fréquence imposée. L'ANSSI demande de partir de deux questions : combien de données l'entreprise peut-elle perdre au plus, et combien de temps peut-elle rester arrêtée ? Un fichier sur lequel on travaille toute la journée peut, selon Cybermalveillance, demander plusieurs sauvegardes par jour. Dans une entreprise, mieux vaut écrire la procédure : qui sauvegarde, quoi, et à quelle fréquence.",
      },
      {
        type: "p",
        texte:
          "Pour la durée de conservation, l'ANSSI donne un exemple de répartition : quinze jours de sauvegardes journalières, un an de sauvegardes mensuelles et cinq ans de sauvegardes annuelles. Les anciennes versions servent quand un fichier a été abîmé sans que personne le voie tout de suite.",
      },
      { type: "h2", texte: "Une sauvegarde qui n'a jamais été restaurée n'est pas une sauvegarde" },
      {
        type: "p",
        texte:
          "Les deux sources insistent : il faut tester. L'ANSSI demande de tester les sauvegardes régulièrement et de rédiger une procédure de restauration, mise en œuvre elle aussi régulièrement. Restaurer de temps en temps un dossier sur un autre poste et vérifier qu'il s'ouvre suffit déjà à éviter les mauvaises surprises.",
      },
      {
        type: "p",
        texte:
          "Pensez aussi à ce qui permet de se servir des données : l'ANSSI recommande de sauvegarder les médias d'installation et la configuration des applications métier, et Cybermalveillance les logiciels indispensables à l'exploitation des données. Une base de comptabilité sans le logiciel qui la lit ne sert pas à grand-chose.",
      },
      { type: "h2", texte: "Protéger les sauvegardes elles-mêmes" },
      {
        type: "liste",
        items: [
          "Chiffrer les sauvegardes, surtout celles qui quittent le bureau, et protéger l'accès à l'outil de sauvegarde par un mot de passe unique et robuste.",
          "Ne pas mettre les serveurs de sauvegarde dans le même domaine Windows que la production : un compte volé ne doit pas ouvrir les deux.",
          "En cas d'attaque, isoler d'abord la sauvegarde du reste du réseau, puis vérifier qu'elle ne contient pas déjà le code de l'attaquant avant de restaurer.",
          "Surveiller l'âge des supports et des logiciels de sauvegarde : un outil qui n'est plus mis à jour ne garantit plus la sécurité des copies.",
        ],
      },
      { type: "h2", texte: "La liste à vérifier" },
      {
        type: "liste",
        items: [
          "Trois copies des données, sur deux supports différents.",
          "Au moins une copie hors ligne, débranchée hors des sauvegardes.",
          "Une copie hors du bureau.",
          "Une fréquence choisie selon la perte de données acceptable, et écrite.",
          "Un test de restauration régulier.",
          "Des sauvegardes chiffrées et un accès protégé.",
        ],
      },
      {
        type: "p",
        texte:
          "Nous mettons en place et suivons les sauvegardes de nos clients dans le cadre de leur [infrastructure informatique](/informatique/), et nous les vérifions lors d'un [audit de cybersécurité](/audit-cybersecurite/). Pour aller plus loin sur la protection du poste et du réseau, lisez aussi notre article sur [les mesures de cybersécurité de base](/conseils/cybersecurite-pme-mesures-de-base/).",
      },
    ],
    services: ["/informatique", "/securite", "/audit-cybersecurite"],
    sources: [
      {
        titre: "Sauvegarde des systèmes d'information : les fondamentaux (ANSSI-BP-100, v1.1)",
        editeur: "ANSSI",
        url: "https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
        datePage: "2025-11-27",
        consultee: LU_LE,
      },
      {
        titre: "Pourquoi et comment bien gérer ses sauvegardes ?",
        editeur: "Cybermalveillance.gouv.fr",
        url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/sauvegardes",
        datePage: "2026-09-14",
        consultee: LU_LE,
      },
      {
        titre: "Photos, fichiers, messages : comment protéger ses données numériques grâce aux sauvegardes ?",
        editeur: "Cybermalveillance.gouv.fr",
        url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/sauvegarde-des-donnees-numeriques",
        datePage: "2026-02-25",
        consultee: LU_LE,
      },
      {
        titre: "Sécurité : sauvegarder",
        editeur: "CNIL",
        url: "https://www.cnil.fr/fr/securite-sauvegarder",
        datePage: "2024-03-14",
        consultee: LU_LE,
      },
    ],
  },
  {
    slug: "cybersecurite-pme-mesures-de-base",
    titre: "Cybersécurité d'une PME : les mesures de base",
    titreSeo: "Cybersécurité d'une PME : mesures de base",
    libelle: "Cybersécurité : mesures de base",
    description:
      "Mises à jour, mots de passe et double authentification, sauvegardes, pare-feu, droits d'administration : les mesures de base des guides de l'ANSSI pour une PME.",
    resume:
      "Les petites entreprises sont des cibles de choix quand elles n'ont pas de protection, rappelle l'ANSSI. La bonne nouvelle : les mesures qui arrêtent la plupart des attaques sont connues et à la portée d'une PME. Les voici, d'après les guides officiels.",
    theme: "Sécurité et sauvegardes",
    datePublication: "2026-10-30",
    dateModification: "2026-10-30",
    blocs: [
      {
        type: "p",
        texte:
          "L'ANSSI a écrit pour les petites structures un guide court, « La cybersécurité pour les TPE/PME en 13 questions » (version de décembre 2024). Il complète son « Guide d'hygiène informatique » de 42 mesures, plus technique, qui s'adresse d'abord aux entreprises dotées d'un service informatique. Sa question d'ouverture résume l'enjeu : si vos données disparaissent et que votre informatique s'arrête, êtes-vous prêts à retourner au papier et au crayon ?",
      },
      { type: "h2", texte: "1. Savoir ce que l'on a" },
      {
        type: "p",
        texte:
          "C'est la première des treize questions : connaître son parc informatique et ses actifs métier. Quels postes, quels serveurs, quels logiciels, quels comptes, et surtout quelles données font tourner l'entreprise. On ne protège bien que ce que l'on connaît. Le guide d'hygiène demande aussi de tenir à jour la liste des comptes qui ont des droits d'administration et d'organiser l'arrivée et le départ des salariés : un compte resté ouvert après un départ est une porte ouverte.",
      },
      { type: "h2", texte: "2. Appliquer les mises à jour" },
      {
        type: "p",
        texte:
          "Pour l'ANSSI, il est indispensable d'installer dès que possible les mises à jour des systèmes et des logiciels quand l'éditeur publie un correctif de sécurité, et d'activer les mises à jour automatiques proposées. Tout matériel ou logiciel qui ne peut plus être mis à jour doit être désinstallé et remplacé : un vieux poste sous un système abandonné ou un logiciel plus suivi reste vulnérable pour toujours.",
      },
      { type: "h2", texte: "3. Des mots de passe solides et la double authentification" },
      {
        type: "p",
        texte:
          "De nombreuses attaques sont facilitées par des mots de passe trop simples ou réutilisés d'un service à l'autre, rappelle l'ANSSI. Un mot de passe différent par service, long, et rangé dans un gestionnaire de mots de passe règle une bonne partie du problème. Il faut aussi changer les mots de passe par défaut des équipements (box, imprimantes, caméras, routeurs).",
      },
      {
        type: "p",
        texte:
          "Surtout, activez l'authentification à plusieurs facteurs partout où elle est proposée, à commencer par la messagerie et la banque. Le guide va plus loin pour les PME : idéalement, un facteur physique comme une clé ou une carte. Un mot de passe volé ne suffit plus alors à entrer.",
      },
      { type: "h2", texte: "4. Des sauvegardes, dont une hors ligne" },
      {
        type: "p",
        texte:
          "Les sauvegardes font l'objet de la deuxième question du guide. Une sauvegarde déconnectée du réseau et testée est ce qui permet de repartir après un rançongiciel sans négocier. Nous y consacrons un article : [appliquer la règle 3-2-1](/conseils/sauvegardes-pme-regle-3-2-1/).",
      },
      { type: "h2", texte: "5. Antivirus et pare-feu" },
      {
        type: "p",
        texte:
          "Le guide demande un antivirus à jour sur chaque poste, de préférence avec une protection contre l'hameçonnage, et un pare-feu dont on connaît les règles de filtrage. Le guide d'hygiène ajoute d'activer le pare-feu de chaque poste de travail, et de sécuriser le Wi-Fi en séparant celui des invités de celui de l'entreprise.",
      },
      { type: "h2", texte: "6. Séparer les usages et limiter les droits" },
      {
        type: "p",
        texte:
          "Un salarié n'a pas besoin des droits d'administrateur pour travailler : le guide d'hygiène demande de les limiter au strict besoin. Un logiciel malveillant ouvert par erreur a alors bien moins de prise. Le guide des 13 questions recommande aussi de séparer les usages personnels et professionnels, et de prévoir les déplacements : poste chiffré, connexion protégée hors du bureau.",
      },
      { type: "h2", texte: "7. Protéger la messagerie et former les équipes" },
      {
        type: "p",
        texte:
          "La messagerie est la porte d'entrée la plus fréquente : faux livreur, fausse facture, faux dirigeant qui demande un virement urgent. Les deux guides de l'ANSSI consacrent une mesure à la sécurité de la messagerie et une autre à la sensibilisation des utilisateurs. Quelques minutes pour apprendre à reconnaître un message piégé, et une règle simple (toute demande de virement ou de changement de RIB se vérifie par téléphone, au numéro habituel) évitent beaucoup de dégâts.",
      },
      { type: "h2", texte: "8. Préparer la suite : assurance, réaction, prestataires" },
      {
        type: "p",
        texte:
          "Les dernières questions du guide portent sur ce qui se passe le jour où l'attaque réussit : votre assurance couvre-t-elle le risque cyber ? Savez-vous comment réagir ? Qui appeler, quels postes débrancher, où sont les sauvegardes, qui prévient les clients : mieux vaut l'avoir écrit avant. Si vous utilisez des services en ligne, vérifiez qu'ils proposent la double authentification, des sauvegardes et des alertes en cas d'accès inhabituel. Enfin, le guide d'hygiène rappelle de maîtriser les risques de l'infogérance : votre prestataire informatique doit appliquer les mêmes règles que vous.",
      },
      { type: "h2", texte: "Par où commencer cette semaine" },
      {
        type: "liste",
        items: [
          "Activer la double authentification sur la messagerie et la banque.",
          "Vérifier que les mises à jour automatiques sont actives sur tous les postes et serveurs.",
          "Vérifier qu'une sauvegarde hors ligne existe et la restaurer une fois.",
          "Retirer les droits d'administrateur des comptes de travail courants.",
          "Fermer les comptes des personnes parties.",
          "Écrire sur une page qui appeler et quoi faire en cas d'attaque.",
        ],
      },
      {
        type: "p",
        texte:
          "Nous pouvons vous aider à mettre ces mesures en place : [sécurité de l'infrastructure](/securite/) (pare-feu, protection des données, antivirus), [maintenance des postes et serveurs](/informatique/), et [audit de cybersécurité](/audit-cybersecurite/) pour savoir où vous en êtes.",
      },
    ],
    services: ["/securite", "/audit-cybersecurite", "/informatique", "/telemaintenance"],
    sources: [
      {
        titre: "La cybersécurité pour les TPE/PME en 13 questions",
        editeur: "ANSSI",
        url: "https://messervices.cyber.gouv.fr/documents-guides/20241212_np_anssi_guide_tpe-pme_v2.pdf",
        datePage: "2024-12-12",
        consultee: LU_LE,
      },
      {
        titre: "Guide d'hygiène informatique : renforcer la sécurité de son système d'information en 42 mesures",
        editeur: "ANSSI",
        url: "https://messervices.cyber.gouv.fr/guides/guide-dhygiene-informatique",
        datePage: "2017-01-23",
        consultee: LU_LE,
      },
      {
        titre: "Sauvegarde des systèmes d'information : les fondamentaux (ANSSI-BP-100, v1.1)",
        editeur: "ANSSI",
        url: "https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf",
        datePage: "2025-11-27",
        consultee: LU_LE,
      },
    ],
  },
  {
    slug: "facture-electronique-pme-2026-2027",
    titre: "Facture électronique : ce qui change pour les PME en 2026 et 2027",
    titreSeo: "Facture électronique : guide pour les PME",
    libelle: "Facture électronique et PME",
    description:
      "Facture électronique 2026-2027 pour les PME : calendrier, plateforme agréée, nouvelles mentions, e-reporting, sanctions, et comment préparer vos logiciels.",
    resume:
      "Depuis le 1er septembre 2026, toutes les entreprises doivent pouvoir recevoir des factures électroniques. Les PME et les micro-entreprises devront aussi les émettre au 1er septembre 2027. Le calendrier, les obligations, et comment préparer ses logiciels et ses équipes.",
    theme: "Logiciels de gestion",
    datePublication: "2026-10-30",
    dateModification: "2026-10-30",
    blocs: [
      { type: "h2", texte: "Le calendrier en vigueur" },
      {
        type: "p",
        texte:
          "La réforme est entrée en application le 1er septembre 2026. Depuis cette date, toutes les entreprises assujetties à la TVA en France, quelle que soit leur taille, doivent être en mesure de recevoir des factures électroniques. Les grandes entreprises et les entreprises de taille intermédiaire doivent, elles, déjà émettre leurs factures sous forme électronique et transmettre à l'administration leurs données de transaction et de paiement.",
      },
      {
        type: "p",
        texte:
          "Pour les PME et les micro-entreprises, l'obligation d'émettre arrive au 1er septembre 2027, en même temps que la transmission des données (l'e-reporting). L'administration fiscale parle d'un « maintien du calendrier légal » : aucune page officielle ne fait état d'un report. Une entreprise peut aussi passer à l'émission électronique avant son échéance si elle le souhaite.",
      },
      {
        type: "encadre",
        texte:
          "Qui est une PME ? Une entreprise de moins de 250 personnes dont le chiffre d'affaires ne dépasse pas 50 millions d'euros, ou dont le total de bilan ne dépasse pas 43 millions. Une micro-entreprise compte moins de 10 personnes, avec un chiffre d'affaires ou un total de bilan d'au plus 2 millions d'euros.",
      },
      { type: "h2", texte: "Une facture électronique n'est pas un PDF envoyé par mail" },
      {
        type: "p",
        texte:
          "C'est le point qui surprend le plus. Une facture électronique contient des données structurées, lisibles par un logiciel, dans un format reconnu : UBL, CII, ou un format mixte qui associe un fichier de données et une image de la facture. Le Factur-X est de ce type. Un PDF ordinaire joint à un mail ne compte pas.",
      },
      {
        type: "p",
        texte:
          "Les factures ne circulent plus directement d'une entreprise à l'autre : elles passent par des plateformes agréées, autrefois appelées PDP, immatriculées par la DGFiP pour trois ans renouvelables. Chaque entreprise en choisit une pour recevoir ses factures. L'État n'a pas créé de portail unique d'échange, mais il tient un annuaire national qui indique à quelle adresse chaque entreprise reçoit ses factures. Une facture reçue par mail ou sur papier pendant la mise en route ne doit pas être rejetée pour ce seul motif.",
      },
      { type: "h2", texte: "Quatre nouvelles mentions sur vos factures" },
      {
        type: "liste",
        items: [
          "le numéro SIREN du client ;",
          "la catégorie de l'opération : vente, prestation de services, ou les deux ;",
          "l'option pour le paiement de la TVA sur les débits, le cas échéant ;",
          "l'adresse de livraison du bien, si elle diffère de l'adresse de facturation.",
        ],
      },
      {
        type: "p",
        texte:
          "Dans un logiciel de gestion, cela veut dire des fiches clients complètes (le SIREN surtout) et des articles bien rangés entre biens et services.",
      },
      { type: "h2", texte: "L'e-reporting, pour ce qui n'est pas facturé entre entreprises françaises" },
      {
        type: "p",
        texte:
          "Les ventes aux particuliers et les opérations avec l'étranger (exportations, échanges intracommunautaires) ne donnent pas lieu à une facture électronique, mais leurs données doivent être transmises à l'administration. S'y ajoutent les données de paiement des prestations de services quand la TVA est due à l'encaissement. Cette transmission ne se fait ni au fil de l'eau ni chaque jour : sa fréquence dépend du régime de TVA de l'entreprise.",
      },
      { type: "h2", texte: "Préparer ses logiciels" },
      {
        type: "p",
        texte:
          "Toute la chaîne est concernée : le logiciel de gestion commerciale ou l'ERP qui émet les factures, le logiciel métier ou la boutique en ligne s'ils en produisent aussi, et la comptabilité, qui reçoit les factures des fournisseurs. Chaque logiciel doit savoir produire ou lire une facture structurée et échanger avec une plateforme agréée.",
      },
      {
        type: "liste",
        items: [
          "Recensez les logiciels qui émettent des factures et ceux qui doivent en recevoir.",
          "Pour chacun, demandez à l'éditeur quelle plateforme agréée il raccorde, à partir de quelle version, et si une offre ou un abonnement particulier est nécessaire.",
          "Vérifiez que les outils qui se passent des données aujourd'hui par export ou ressaisie (facturation, comptabilité, banque, boutique en ligne) le feront encore une fois la réforme en place.",
        ],
      },
      {
        type: "p",
        texte:
          "Un exemple parmi les logiciels que nous installons : EBP s'appuie sur la plateforme agréée Shine (numéro délivré le 21 mai 2026) ; seules ses versions Plus émettent les factures électroniques et automatisent l'e-reporting, l'émission arrive avec les versions de novembre, déployées progressivement depuis le 27 octobre 2026, et l'éditeur annonce encore des cas d'e-reporting des paiements à traiter d'ici la fin de 2026. Pour un autre logiciel, c'est la page de son éditeur qui fait foi.",
      },
      { type: "h2", texte: "Les sanctions" },
      {
        type: "p",
        texte:
          "La loi de finances pour 2026 a relevé les amendes : 50 € par facture non émise sous forme électronique et 500 € par transmission d'e-reporting manquante, avec un plafond de 15 000 € par année civile dans les deux cas. Une entreprise qui ne s'est pas dotée d'une plateforme de réception est mise en demeure, puis, trois mois plus tard, s'expose à 500 €, et à 1 000 € de plus tous les trois mois. Une première infraction réparée à temps n'est pas sanctionnée. Le ministère a annoncé qu'aucune sanction ne serait prononcée avant la fin de 2026, sans que ce soit un report de l'obligation.",
      },
      { type: "h2", texte: "Par où commencer" },
      {
        type: "liste",
        items: [
          "Vérifiez que votre entreprise a bien désigné sa plateforme de réception : c'est obligatoire depuis le 1er septembre 2026.",
          "Demandez à l'éditeur de chaque logiciel qui facture la version et la plateforme prévues.",
          "Complétez les fiches clients (SIREN, adresses de livraison) et rangez les articles entre biens et services.",
          "Si vous êtes une PME, prévoyez le passage à l'émission avant le 1er septembre 2027, sans attendre l'été.",
        ],
      },
      {
        type: "p",
        texte:
          "Nous accompagnons les PME de Haute-Savoie sur l'ensemble : liaisons entre facturation, comptabilité, banque et boutique en ligne, mises à jour et paramétrage des logiciels de gestion, formation des équipes. Voir nos pages [Développement sur mesure](/developpement-sur-mesure/) et [Logiciels EBP](/logiciels/). L'administration répond aussi aux questions au 0806 807 807.",
      },
      {
        type: "encadre",
        texte:
          "Article à jour au 29 octobre 2026. Les versions et les conditions des éditeurs évoluent : les notes de version de votre logiciel font foi.",
      },
    ],
    services: ["/developpement-sur-mesure", "/telemaintenance", "/logiciels"],
    sources: [
      {
        titre: "À partir de quand suis-je concerné par la réforme de la facturation électronique ?",
        editeur: "impots.gouv.fr",
        url: "https://www.impots.gouv.fr/professionnel/questions/partir-de-quand-suis-je-concerne-par-la-reforme-de-la-facturation",
        datePage: "2026-01-16",
        consultee: LU_LE,
      },
      {
        titre: "Facturation électronique : guide pratique de démarrage au 1er septembre 2026",
        editeur: "DGFiP",
        url: "https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/guide_pratique_facturation_electronique.pdf",
        datePage: "2026-07-09",
        consultee: LU_LE,
      },
      {
        titre: "Je découvre la facturation électronique",
        editeur: "impots.gouv.fr",
        url: "https://www.impots.gouv.fr/professionnel/je-decouvre-la-facturation-electronique",
        datePage: "2026-05-26",
        consultee: LU_LE,
      },
      {
        titre: "J'approfondis mes connaissances sur la réforme",
        editeur: "impots.gouv.fr",
        url: "https://www.impots.gouv.fr/japprofondis-mes-connaissances-sur-la-reforme",
        datePage: "2026-01-06",
        consultee: LU_LE,
      },
      {
        titre: "Foire aux questions : j'approfondis la facturation électronique",
        editeur: "DGFiP",
        url: "https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/faq---fe_japprofondis-la-facturation-electronique.pdf",
        datePage: "2026-09-01",
        consultee: LU_LE,
      },
      {
        titre: "Je consulte la liste des plateformes agréées",
        editeur: "impots.gouv.fr",
        url: "https://www.impots.gouv.fr/je-consulte-la-liste-des-plateformes-agreees",
        datePage: "2026-10-13",
        consultee: LU_LE,
      },
      {
        titre: "Facturation électronique : les sanctions évoluent",
        editeur: "Service Public Entreprendre",
        url: "https://entreprendre.service-public.gouv.fr/actualites/A18802",
        datePage: "2026-02-20",
        consultee: LU_LE,
      },
      {
        titre: "Facturation électronique : le premier comité dresse le bilan du déploiement et engage la préparation de 2027",
        editeur: "ministère de l'Économie (communiqué)",
        url: "https://presse.economie.gouv.fr/facturation-electronique-le-premier-comite-dresse-le-bilan-du-deploiement-et-engage-la-preparation-de-2027/",
        datePage: "2026-10-09",
        consultee: LU_LE,
      },
      {
        titre: "FAQ : réforme de la facturation électronique",
        editeur: "EBP",
        url: "https://support.ebp.com/hc/fr/articles/37858547802653-FAQ-R%C3%A9forme-de-la-facturation-%C3%A9lectronique",
        datePage: "2026-10-02",
        consultee: LU_LE,
      },
      {
        titre: "Nouveautés et corrections des versions EBP Gestion Commerciale",
        editeur: "EBP",
        url: "https://support.ebp.com/hc/fr/articles/360015954438-Nouveaut%C3%A9s-et-corrections-des-versions-EBP-Gestion-Commerciale",
        datePage: "2026-10-27",
        consultee: LU_LE,
      },
      {
        titre: "Nouveautés et corrections des versions Bâtiment",
        editeur: "EBP",
        url: "https://support.ebp.com/hc/fr/articles/4407465019281-Nouveaut%C3%A9s-et-corrections-des-versions-B%C3%A2timent",
        datePage: "2026-10-27",
        consultee: LU_LE,
      },
      {
        titre: "Nouveautés et corrections des versions EBP Comptabilité",
        editeur: "EBP",
        url: "https://support.ebp.com/hc/fr/articles/360015870817-Nouveaut%C3%A9s-et-corrections-des-versions-EBP-Comptabilit%C3%A9",
        datePage: "2026-10-29",
        consultee: LU_LE,
      },
      {
        titre: "Désigner la Plateforme Agréée Shine : solution EBP Plus",
        editeur: "EBP",
        url: "https://support.ebp.com/hc/fr/articles/33416588642333-D%C3%A9signer-la-Plateforme-Agr%C3%A9%C3%A9e-Shine-Solution-EBP-Plus",
        datePage: "2026-09-08",
        consultee: LU_LE,
      },
    ],
  },
  {
    slug: "ordinateur-lent-se-fige-ne-demarre-plus",
    titre: "Ordinateur lent, qui se fige ou ne démarre plus : que faire ?",
    titreSeo: "PC lent, figé ou qui ne démarre plus",
    libelle: "PC lent ou qui ne démarre plus",
    description:
      "PC Windows 11 lent, figé, écran noir ou écran bleu : les causes fréquentes, les étapes à essayer avec les bons menus, les erreurs à éviter, et quand appeler.",
    resume:
      "Un ordinateur qui rame ou refuse de démarrer bloque toute une journée de travail. Souvent, la cause est simple : disque plein, trop de logiciels au démarrage, mise à jour en attente. Voici quoi vérifier sous Windows 11, dans l'ordre, et à quel moment passer la main.",
    theme: "Postes et matériel",
    datePublication: "2026-11-25",
    dateModification: "2026-11-25",
    blocs: [
      { type: "h2", texte: "Ce que vous voyez" },
      {
        type: "p",
        texte:
          "Les symptômes se ressemblent d'un poste à l'autre : un démarrage interminable, des logiciels qui mettent longtemps à s'ouvrir, une souris qui se fige quelques secondes, des fenêtres publicitaires qui s'ouvrent seules dans le navigateur. Dans les cas plus graves, l'écran reste noir, ou Windows s'arrête net sur un écran bleu ou noir (la couleur varie selon la version de Windows 11) avec le message « Votre appareil a rencontré un problème et doit redémarrer ». Un code d'arrêt s'affiche alors en bas de l'écran, par exemple MEMORY_MANAGEMENT.",
      },
      { type: "h2", texte: "Les causes les plus fréquentes" },
      {
        type: "p",
        texte:
          "Microsoft cite d'abord quatre raisons à un PC lent : un espace de stockage trop limité, trop d'applications qui se lancent au démarrage et tournent en arrière-plan, des logiciels pas à jour, et un matériel qui ne suit plus les besoins actuels. Les programmes malveillants, eux, peuvent consommer du processeur et du disque.",
      },
      {
        type: "liste",
        items: [
          "Un disque presque plein : Windows a besoin d'espace libre pour fonctionner, et Microsoft juge prudent d'en garder 10 à 15 %.",
          "Une mise à jour de Windows en cours, ou restée incomplète.",
          "Un poste ancien : Microsoft prévient que ses conseils peuvent ne rien changer sur un PC au matériel dépassé, et que le remplacer peut être la meilleure solution à long terme. Un poste encore sous Windows 10 ne reçoit plus de mises à jour de sécurité depuis le 14 octobre 2025, sauf inscription au programme de mises à jour de sécurité étendues (ESU) de Microsoft.",
          "Pour un écran bleu : un périphérique matériel, son pilote ou un logiciel.",
        ],
      },
      { type: "h2", texte: "Le PC est lent : quoi essayer, dans l'ordre" },
      {
        type: "liste",
        items: [
          "Redémarrez vraiment, pas une simple mise en veille : menu Démarrer, bouton d'alimentation, puis « Redémarrer ». Fermez avant les logiciels et les onglets dont vous n'avez pas besoin.",
          "Installez les mises à jour : Démarrer > Paramètres > Windows Update, puis « Rechercher des mises à jour ». Laissez l'installation aller jusqu'au bout et redémarrez si Windows le demande.",
          "Libérez de l'espace : Paramètres > Système > Stockage. Sous « Fichiers temporaires », cochez ce qui peut partir, puis « Supprimer les fichiers ». Une fois activé, l'« Assistant Stockage » fait ce ménage tout seul.",
          "Allégez le démarrage : Ctrl + Maj + Échap ouvre le Gestionnaire des tâches. Choisissez « Applications au démarrage » dans le menu de gauche, faites un clic droit sur un logiciel dont vous n'avez pas besoin dès l'ouverture de session, puis « Désactiver ». Laissez en place l'antivirus et les outils installés par votre prestataire.",
          "Repérez ce qui consomme : dans le même Gestionnaire des tâches, l'onglet « Processus » montre les applications qui occupent le processeur, la mémoire et le disque.",
          "Si des fenêtres publicitaires s'ouvrent seules, ou par simple précaution, ouvrez « Sécurité Windows » et lancez une « Analyse rapide ».",
        ],
      },
      { type: "h2", texte: "Écran noir ou écran bleu" },
      {
        type: "p",
        texte:
          "Écran noir : vérifiez d'abord le plus simple. L'ordinateur est-il bien allumé (voyant, bouton de marche) ? L'écran est-il branché, allumé, et ses câbles bien enfoncés des deux côtés ? Microsoft propose aussi le raccourci Windows + Ctrl + Maj + B, qui réinitialise le pilote graphique : un bip ou un bref scintillement indique qu'il a fonctionné.",
      },
      {
        type: "p",
        texte:
          "Un écran noir avec un simple curseur qui clignote, au démarrage, signifie selon Microsoft que l'ordinateur ne trouve pas de périphérique de démarrage. Ce n'est plus un problème à régler soi-même.",
      },
      {
        type: "p",
        texte:
          "Écran bleu : d'après Microsoft, dans la plupart des cas le redémarrage suffit et rien d'autre n'est nécessaire. Si le même code revient, photographiez l'écran ou notez le code d'arrêt, l'heure et ce que vous faisiez juste avant. Si un nouveau matériel vient d'être branché, éteignez le PC, retirez-le et redémarrez : c'est la première étape que conseille Microsoft.",
      },
      { type: "h2", texte: "Ce qu'il ne faut pas faire" },
      {
        type: "liste",
        items: [
          "Couper un ordinateur qui installe une mise à jour. Microsoft demande au contraire de le garder branché sur secteur, et une installation qui reste longtemps au même pourcentage se relance depuis Windows Update, pas au bouton d'alimentation.",
          "Réinitialiser Windows vous-même. « Réinitialiser le PC » réinstalle Windows : selon l'option choisie, les applications, les paramètres et les fichiers personnels peuvent être supprimés, et un poste chiffré demandera sa clé de récupération BitLocker.",
          "Multiplier les arrêts forcés. L'appui long sur le bouton d'alimentation arrive en dernier dans les gestes que Microsoft propose face à un écran noir. Répété deux ou trois fois, il fait entrer Windows dans son mode de récupération, dont les options sont à laisser à un technicien.",
        ],
      },
      { type: "h2", texte: "Quand nous appeler" },
      {
        type: "p",
        texte:
          "Appelez-nous si le poste reste lent après ces étapes, s'il se fige ou affiche un écran bleu régulièrement, s'il ne démarre plus, ou s'il tourne encore sous Windows 10. Les vérifications suivantes (mode sans échec, pilotes, état du disque, options de récupération) demandent souvent un compte administrateur, et une erreur peut coûter des données.",
      },
      {
        type: "p",
        texte:
          "Tant que le poste démarre, un technicien peut prendre la main à distance grâce à la [télémaintenance](/telemaintenance/). Sinon, il vérifiera le matériel et la garantie du constructeur, et vous dira s'il vaut mieux réparer ou remplacer un poste trop ancien. Notre standard : 04 50 64 02 33. Préparez le code d'arrêt, l'heure du problème et ce qui a changé récemment (mise à jour, nouveau logiciel, nouveau matériel).",
      },
      {
        type: "p",
        texte:
          "Nous fournissons, installons et maintenons les postes de travail de nos clients dans le cadre de leur [infrastructure informatique](/informatique/), et intervenons à distance par [télémaintenance](/telemaintenance/). Les mises à jour sont aussi votre première protection : lisez notre article sur [les mesures de cybersécurité de base](/conseils/cybersecurite-pme-mesures-de-base/).",
      },
    ],
    services: ["/informatique", "/telemaintenance"],
    sources: [
      {
        titre: "Conseils pour améliorer les performances de votre PC sous Windows",
        editeur: "Microsoft",
        url: "https://support.microsoft.com/fr-fr/windows/experience/performance-optimization/tips-to-improve-pc-performance-in-windows",
        consultee: "2026-11-25",
      },
      {
        titre: "Résolution des erreurs de code d'arrêt et de redémarrage inattendu de Windows",
        editeur: "Microsoft",
        url: "https://support.microsoft.com/fr-fr/windows/experience/performance-optimization/troubleshooting-windows-unexpected-restarts-and-stop-code-errors",
        consultee: "2026-11-25",
      },
      {
        titre: "Résolution des problèmes liés aux écrans vides dans Windows",
        editeur: "Microsoft",
        url: "https://support.microsoft.com/fr-fr/windows/hardware/display-graphics/troubleshooting-blank-screens-in-windows",
        consultee: "2026-11-25",
      },
      {
        titre: "Résoudre les problèmes de mise à jour de Windows",
        editeur: "Microsoft",
        url: "https://support.microsoft.com/fr-fr/windows/deployment/updates-lifecycle/troubleshoot-problems-updating-windows",
        consultee: "2026-11-25",
      },
      {
        titre: "Windows 10 support a pris fin le 14 octobre 2025",
        editeur: "Microsoft",
        url: "https://support.microsoft.com/fr-fr/windows/la-prise-en-charge-de-windows-10-a-pris-fin-le-14-octobre-2025-2ca8b313-1946-43d3-b55c-2b95b107f281",
        consultee: "2026-11-25",
      },
      {
        titre: "Réinitialiser votre PC",
        editeur: "Microsoft",
        url: "https://support.microsoft.com/fr-fr/windows/experience/backup-recovery/reset-your-pc",
        consultee: "2026-11-25",
      },
    ],
  },
  {
    slug: "plus-internet-wifi-dossiers-partages",
    titre: "Plus d'internet, Wi-Fi qui coupe, dossiers partagés inaccessibles : que faire ?",
    titreSeo: "Plus d'internet ou de Wi-Fi au bureau",
    libelle: "Internet, Wi-Fi et dossiers partagés",
    description:
      "Plus d'internet au bureau, Wi-Fi qui coupe, lecteur réseau à croix rouge, VPN qui ne se connecte plus : les vérifications à faire sous Windows 11, dans l'ordre.",
    resume:
      "Quand le réseau lâche, la première question est toujours la même : un seul poste est-il touché, ou tout le bureau ? La réponse dit où chercher. Voici les vérifications à faire sous Windows 11 pour internet, le Wi-Fi, les dossiers partagés et le VPN, et ce qu'il vaut mieux nous laisser.",
    theme: "Réseau et téléphonie",
    datePublication: "2026-11-25",
    dateModification: "2026-11-25",
    blocs: [
      {
        type: "p",
        texte:
          "Première question, avant de toucher à quoi que ce soit : un seul poste est-il touché, ou tout le bureau ? Si vos collègues travaillent normalement, le souci vient de votre poste : son câble, son Wi-Fi ou ses réglages. Si personne n'a internet, ou si personne n'ouvre les dossiers partagés, cherchez du côté de la box, d'un équipement du bureau, du serveur ou de l'opérateur. Microsoft propose le même test : si un autre appareil se connecte au même réseau, la cause est probablement sur le vôtre.",
      },
      { type: "h2", texte: "Les symptômes et les messages de Windows" },
      {
        type: "liste",
        items: [
          "« Pas d'Internet » sous le nom du réseau Wi-Fi : le poste est relié au réseau du bureau, mais pas à internet.",
          "En câble, Paramètres > Réseau et Internet doit afficher « Connecté » sous le nom de la connexion ; un message comme « Action requise » signale un problème.",
          "Un lecteur réseau (Z:, par exemple) marqué d'une croix rouge dans l'Explorateur, parfois avec la notification « Impossible de reconnecter tous les lecteurs réseau ».",
          "Un Wi-Fi qui se coupe plusieurs fois par jour, ou un VPN de télétravail qui n'affiche jamais « Connecté ».",
        ],
      },
      { type: "h2", texte: "Les causes les plus fréquentes" },
      {
        type: "liste",
        items: [
          "Tout le bureau : un incident chez l'opérateur, une box ou un routeur bloqué, un équipement réseau débranché ou en panne.",
          "Un seul poste : un câble débranché, ou branché sur le port Internet de la box au lieu d'un port Ethernet ; le mode Avion activé ; un poste connecté au Wi-Fi des invités au lieu de celui du bureau.",
          "Le Wi-Fi : une borne éteinte ou débranchée, ou un équipement changé récemment (box, pare-feu).",
          "Les dossiers partagés : selon Microsoft, l'ordinateur qui les partage est peut-être éteint, ou vous n'avez pas les autorisations suffisantes. Un mot de passe de session changé peut aussi couper l'accès.",
          "Le VPN : la connexion internet de la maison, ou un mot de passe changé ou expiré.",
        ],
      },
      { type: "h2", texte: "Tout le bureau est coupé : la box" },
      {
        type: "liste",
        items: [
          "Testez internet sur un téléphone en 4G ou 5G, Wi-Fi coupé, et regardez sur le site de votre opérateur s'il annonce un incident.",
          "Regardez les voyants de la box et notez leur couleur, ainsi que l'heure du début de la coupure.",
          "Redémarrez la box : débranchez son alimentation, attendez au moins 30 secondes, rebranchez-la, puis patientez jusqu'à ce que les voyants cessent de clignoter. Cela peut prendre quelques minutes, et tout le monde est déconnecté pendant ce temps.",
        ],
      },
      { type: "h2", texte: "Un seul poste : les étapes dans Windows 11" },
      {
        type: "liste",
        items: [
          "Cliquez sur les icônes réseau, son et batterie, à droite de la barre des tâches : le Wi-Fi doit être activé, et « Connecté » doit apparaître sous le nom du réseau du bureau.",
          "Vérifiez le mode Avion : Paramètres > Réseau et Internet > Mode avion, qui doit être désactivé.",
          "En câble, vérifiez que la prise est bien enfoncée des deux côtés, et essayez un autre câble si vous en avez un.",
          "Si le Wi-Fi refuse de se connecter : Paramètres > Réseau et Internet > Wi-Fi > « Gérer les réseaux connus », choisissez le réseau, « Oublier », puis reconnectez-vous avec le mot de passe.",
          "Redémarrez l'ordinateur.",
          "Lancez l'utilitaire de résolution des problèmes réseau et Internet, dans l'application « Obtenir de l'aide » : il fait seul les diagnostics courants.",
        ],
      },
      {
        type: "encadre",
        texte:
          "En dernier recours seulement, Microsoft propose la « Réinitialisation du réseau » : Paramètres > Réseau et Internet > Paramètres réseau avancés > Réinitialisation du réseau, puis « Réinitialiser maintenant ». Elle supprime puis réinstalle toutes les cartes réseau avec leurs réglages par défaut, et il faudra peut-être réinstaller et reconfigurer le logiciel de VPN. Sur un poste d'entreprise, appelez-nous avant.",
      },
      { type: "h2", texte: "Lecteur réseau ou dossiers partagés inaccessibles" },
      {
        type: "liste",
        items: [
          "Demandez à un collègue s'il ouvre les dossiers. Si personne n'y arrive, le problème vient du serveur : appelez-nous. Si vous êtes seul touché, cherchez du côté de votre poste.",
          "Vérifiez que vous êtes bien sur le réseau du bureau : câble branché, bon Wi-Fi, ou VPN connecté si vous êtes en télétravail.",
          "Redémarrez : un lecteur créé avec l'option « Se reconnecter à la connexion » se rebranche à l'ouverture de la session.",
        ],
      },
      { type: "h2", texte: "Le VPN de télétravail ne se connecte plus" },
      {
        type: "p",
        texte:
          "Les logiciels de VPN diffèrent d'une entreprise à l'autre, mais les premiers gestes sont les mêmes.",
      },
      {
        type: "liste",
        items: [
          "Vérifiez qu'internet fonctionne à la maison, sans le VPN.",
          "Redémarrez l'ordinateur et la box de la maison.",
          "Essayez avec le partage de connexion de votre téléphone : si le VPN passe ainsi, le souci vient de la box de la maison.",
          "Demandez-vous si votre mot de passe a changé récemment, et notez le message exact affiché par le VPN.",
          "Si votre VPN est celui intégré à Windows : Paramètres > Réseau et Internet > VPN, puis « Se connecter » à côté de la connexion. Une fois connecté, « Connecté » s'affiche sous son nom.",
        ],
      },
      { type: "h2", texte: "Ce qu'il ne faut pas faire" },
      {
        type: "liste",
        items: [
          "Appuyer sur le bouton de réinitialisation (reset) de la box ou d'une borne Wi-Fi : un retour aux paramètres d'usine efface leur configuration, et peut couper la téléphonie et les accès à distance qui passent par elles.",
          "Lancer la réinitialisation du réseau sur un poste qui utilise un VPN, sans nous en parler.",
          "Redémarrer le serveur vous-même pendant que d'autres l'utilisent ou pendant une sauvegarde.",
          "Installer un autre logiciel de VPN ou d'accès à distance de votre propre initiative.",
        ],
      },
      { type: "h2", texte: "Quand nous appeler" },
      {
        type: "p",
        texte:
          "Appelez-nous si la coupure dure après le redémarrage de la box, si elle revient souvent ou si elle touche aussi la téléphonie IP ; si plusieurs bornes Wi-Fi sont éteintes ; si plus personne n'accède au serveur, ou si un seul poste reste coupé après redémarrage ; si plusieurs personnes perdent le VPN en même temps, ou si son message parle du serveur ou d'un certificat. Notre standard : 04 50 64 02 33. Si le poste a encore internet, un technicien peut prendre la main par [télémaintenance](/telemaintenance/). Donnez l'heure de début, la couleur des voyants et le message exact.",
      },
      {
        type: "p",
        texte:
          "Nous installons et maintenons le réseau, le Wi-Fi et les serveurs de nos clients dans le cadre de leur [infrastructure informatique](/informatique/), ainsi que leurs [téléphonie IP et réseaux d'entreprise](/telecom/). Pour le pare-feu et la sécurité du réseau, voir [sécurité de l'infrastructure](/securite/), et notre article sur [les mesures de cybersécurité de base](/conseils/cybersecurite-pme-mesures-de-base/).",
      },
    ],
    services: ["/informatique", "/telecom", "/securite", "/telemaintenance"],
    sources: [
      {
        titre: "Résoudre les problèmes de connexion Wi-Fi dans Windows",
        editeur: "Microsoft",
        url: "https://support.microsoft.com/fr-fr/windows/experience/connectivity-networking/fix-wi-fi-connection-issues-in-windows",
        consultee: "2026-11-25",
      },
      {
        titre: "Résoudre les problèmes de connexion sous Windows",
        editeur: "Microsoft",
        url: "https://support.microsoft.com/fr-fr/windows/experience/connectivity-networking/fix-ethernet-connection-problems-in-windows",
        consultee: "2026-11-25",
      },
      {
        titre: "Partage de fichiers sur un réseau dans Windows",
        editeur: "Microsoft",
        url: "https://support.microsoft.com/fr-fr/windows/experience/connectivity-networking/file-sharing-over-a-network-in-windows",
        consultee: "2026-11-25",
      },
      {
        titre: "Le lecteur réseau mappé peut échouer à se reconnecter dans Windows 10, version 1809",
        editeur: "Microsoft Learn",
        url: "https://learn.microsoft.com/fr-fr/troubleshoot/windows-client/networking/mapped-network-drive-fail-reconnect",
        consultee: "2026-11-25",
      },
      {
        titre: "Se connecter à un VPN dans Windows",
        editeur: "Microsoft",
        url: "https://support.microsoft.com/fr-fr/windows/experience/connectivity-networking/connect-to-a-vpn-in-windows",
        consultee: "2026-11-25",
      },
    ],
  },
  {
    slug: "ebp-mise-a-jour-sauvegarde-sans-blocage",
    titre: "Mettre à jour EBP sans bloquer le travail : sauvegarde, versions et dossier verrouillé",
    titreSeo: "Mettre à jour EBP sans bloquer le travail",
    libelle: "Mettre à jour EBP sans blocage",
    description:
      "Mettre à jour EBP Gestion Commerciale, Comptabilité ou Bâtiment sans bloquer l'équipe : sauvegarde, même version partout, dossier verrouillé, restauration.",
    resume:
      "Une mise à jour d'EBP faite sur un seul poste, ou avec un collègue encore dans le dossier, peut arrêter toute l'équipe. Voici comment sauvegarder avant, mettre tous les postes à la même version, débloquer un dossier verrouillé et revenir en arrière si besoin, avec les libellés exacts du logiciel.",
    theme: "Logiciels de gestion",
    datePublication: "2026-11-25",
    dateModification: "2026-11-25",
    blocs: [
      { type: "h2", texte: "Les symptômes" },
      {
        type: "p",
        texte:
          "Premier cas : un poste n'ouvre plus le dossier et EBP affiche, dans une fenêtre « Informations », le message « Impossible d'ouvrir une base de données plus récente que la version de l'application. » Il apparaît à l'ouverture du dossier, ou juste après la restauration d'une sauvegarde.",
      },
      {
        type: "p",
        texte:
          "Autre cas : le dossier reste bloqué après l'opération. EBP affiche « la base de données est verrouillée et ouverte en mode exclusif », ou se comporte comme si un utilisateur était encore connecté alors que personne ne travaille dedans. Un poste resté ouvert sur le dossier pendant la mise à jour est la première chose à vérifier.",
      },
      { type: "h2", texte: "Pourquoi ça bloque" },
      {
        type: "liste",
        items: [
          "Les postes n'ont pas tous la même version. En réseau, EBP demande la même version sur tous les ordinateurs où le logiciel est installé. Quand une personne met à jour son logiciel puis le dossier, les postes restés sur l'ancienne version ne peuvent plus l'ouvrir.",
          "Il n'y a pas de retour arrière : un dossier ouvert avec une version plus récente ne s'ouvre plus dans l'ancienne.",
          "Sur un poste seul, plusieurs versions peuvent cohabiter après des mises à jour, et une ancienne icône lance l'ancienne version.",
          "Une sauvegarde faite avec un logiciel plus récent ne se restaure pas sur un poste en retard : elle donne le même message.",
          "Un verrou ou une connexion restés dans le dossier empêchent de travailler normalement : ils se retirent par une maintenance des données (voir plus bas).",
        ],
      },
      { type: "h2", texte: "Avant la mise à jour : sauvegarder le dossier" },
      {
        type: "p",
        texte:
          "Choisissez un moment où personne ne travaille dans EBP et prévenez l'équipe. Puis sauvegardez chaque dossier concerné :",
      },
      {
        type: "liste",
        items: [
          "Menu « Paramètres » > « Sauvegarde | Restauration » > « Sauvegarde ». L'assistant s'ouvre : cliquez sur « Suivant ».",
          "« Inclure le dossier » est coché d'office. Cochez « Inclure la configuration et l'environnement » si vous avez personnalisé des vues, puis « Suivant ».",
          "Choisissez la destination, de préférence hors du serveur, puis « Suivant », vérifiez les paramètres, « Lancer » et enfin « Fermer ».",
        ],
      },
      {
        type: "p",
        texte:
          "Si la Gestion Commerciale ou le Bâtiment est lié à la Comptabilité, sauvegardez les deux dossiers. Et gardez des sauvegardes plus anciennes ailleurs : c'est le principe de la [règle 3-2-1](/conseils/sauvegardes-pme-regle-3-2-1/).",
      },
      { type: "h2", texte: "En réseau : le serveur, puis chaque poste" },
      {
        type: "liste",
        items: [
          "Notez la version de chaque poste : « Mes paramètres » > « À propos », ligne « Version de l'application ».",
          "Commencez par le serveur, le poste qui héberge les données : « Mes paramètres » > « Activation | Mises à jour » > « Rechercher les mises à jour », puis téléchargez et installez la mise à jour proposée.",
          "Une fois le logiciel à jour, le dossier est mis à jour à son tour. Dès ce moment, les postes restés sur l'ancienne version ne l'ouvrent plus.",
          "Faites donc la même mise à jour sur chaque poste client, portables compris, avant que l'équipe reprenne.",
          "Vérifiez « À propos » partout : le numéro doit être identique sur tous les postes.",
        ],
      },
      {
        type: "p",
        texte:
          "C'est l'ordre de l'installation en réseau décrite par EBP : d'abord le poste serveur (option « Poste client + serveur »), puis chaque poste client (option « Poste client »). Sur un poste seul, si le message apparaît, ouvrez le menu « Démarrer », cherchez le répertoire EBP qui liste les logiciels installés, et lancez la version la plus récente.",
      },
      { type: "h2", texte: "Le dossier reste verrouillé" },
      {
        type: "p",
        texte:
          "Demandez d'abord à chacun de fermer EBP, sur tous les postes. Puis lancez la maintenance que l'éditeur indique pour le message « la base de données est verrouillée et ouverte en mode exclusif » :",
      },
      {
        type: "liste",
        items: [
          "Menu « Paramètres » > « Gestion de dossiers » > « Maintenance des données ».",
          "Dans l'assistant, cliquez sur « Sauvegarder mon dossier maintenant ! » si vous n'avez pas de sauvegarde toute récente, puis sur « Suivant ».",
          "Vérifiez que le dossier affiché est le bon, puis « Suivant ».",
          "Cochez « Supprimer les verrous de tous les utilisateurs », « Déconnecter tous les utilisateurs » et « Supprimer la position des fenêtres », puis « Suivant » jusqu'à « Lancer ».",
          "Un message confirme que la maintenance s'est bien déroulée : fermez la fenêtre et reprenez.",
        ],
      },
      { type: "h2", texte: "Si ça tourne mal : restaurer la sauvegarde" },
      {
        type: "p",
        texte:
          "La sauvegarde faite avant la mise à jour est votre point de retour. Attention : une restauration écrase le dossier, et tout ce qui a été saisi depuis la sauvegarde est perdu. EBP conseille de faire une nouvelle sauvegarde juste avant de restaurer, pour pouvoir revenir à l'état d'avant.",
      },
      {
        type: "liste",
        items: [
          "Menu « Paramètres » > « Sauvegarde | Restauration » > « Restauration », puis « Suivant ».",
          "Choisissez la sauvegarde avec le bouton aux trois petits points, puis « Suivant ». En réseau, indiquez le poste où sont stockées les sauvegardes.",
          "Laissez « Inclure le dossier » coché. EBP déconseille de cocher « Inclure la configuration et l'environnement ».",
          "À l'étape de la destination, vous pouvez décocher « Utiliser le nom du dossier d'origine » et donner un autre nom : la sauvegarde crée alors un nouveau dossier au lieu d'écraser le dossier de travail. Cliquez enfin sur « Lancer ».",
        ],
      },
      {
        type: "p",
        texte:
          "Si la restauration affiche « Impossible d'ouvrir une base de données plus récente que la version de l'application », la sauvegarde vient d'un logiciel plus récent que celui du poste : mettez d'abord ce poste à jour.",
      },
      { type: "h2", texte: "Ce qu'il ne faut pas faire" },
      {
        type: "liste",
        items: [
          "Mettre à jour un seul poste en réseau et garder les autres pour plus tard : ils ne pourront plus ouvrir le dossier.",
          "Lancer la mise à jour ou la maintenance pendant que des collègues saisissent : « Déconnecter tous les utilisateurs » les coupe en plein travail.",
          "Cocher dans la maintenance d'autres opérations que celles indiquées par l'éditeur.",
          "Restaurer une sauvegarde sur le dossier de travail sans avoir sauvegardé juste avant.",
          "Désactiver l'antivirus du serveur de vous-même pour forcer une installation.",
        ],
      },
      { type: "h2", texte: "Quand nous appeler" },
      {
        type: "p",
        texte:
          "Appelez-nous avant de commencer si vous avez un serveur et plusieurs postes, des logiciels liés entre eux (Gestion Commerciale, Comptabilité, Bâtiment), ou si l'installation demande un compte administrateur que vous n'avez pas. Appelez aussi si l'installation s'arrête sur l'erreur 1406 ou 1935 : EBP l'attribue à une protection résidente trop élevée de l'antivirus, un réglage à faire sans laisser le poste sans protection. Et avant toute restauration sur le dossier de travail : nous pouvons restaurer la sauvegarde sous un autre nom pour comparer et récupérer seulement ce qui manque. Standard : 04 50 64 02 33 ; nous pouvons aussi intervenir à distance par [télémaintenance](/telemaintenance/).",
      },
      {
        type: "p",
        texte:
          "Nous installons, mettons à jour et suivons les [logiciels EBP](/logiciels/) de nos clients, en monoposte comme en réseau, et pouvons préparer avec vous la prochaine mise à jour. Voir aussi nos pages [EBP Gestion Commerciale](/ebpgestionco/) et [EBP Comptabilité](/ebpcomptabilite/).",
      },
    ],
    services: ["/logiciels", "/ebpgestionco", "/ebpcomptabilite", "/ebpbatiment", "/telemaintenance"],
    sources: [
      {
        titre: "Erreur : Impossible d'ouvrir une base de données plus récente que la version de l'application",
        editeur: "EBP",
        url: "https://support.ebp.com/hc/fr/articles/360000068397-Erreur-Impossible-d-ouvrir-une-base-de-donn%C3%A9es-plus-r%C3%A9cente-que-la-version-de-l-application",
        datePage: "2026-09-30",
        consultee: "2026-11-25",
      },
      {
        titre: "Installer les solutions EBP",
        editeur: "EBP",
        url: "https://support.ebp.com/hc/fr/articles/4408487549713-Installer-les-solutions-EBP",
        datePage: "2026-09-29",
        consultee: "2026-11-25",
      },
      {
        titre: "Sauvegarder un dossier dans ma solution EBP",
        editeur: "EBP",
        url: "https://support.ebp.com/hc/fr/articles/360000021678-Sauvegarder-un-dossier-dans-ma-solution-EBP",
        datePage: "2026-01-15",
        consultee: "2026-11-25",
      },
      {
        titre: "Restaurer une sauvegarde dans ma solution EBP",
        editeur: "EBP",
        url: "https://support.ebp.com/hc/fr/articles/360000065218-Restaurer-une-sauvegarde-dans-ma-solution-EBP",
        datePage: "2026-01-15",
        consultee: "2026-11-25",
      },
      {
        titre: "Message : la base de données est verrouillée et ouverte en mode exclusif",
        editeur: "EBP",
        url: "https://support.ebp.com/hc/fr/articles/360000068417-Message-la-base-de-donn%C3%A9es-est-verrouill%C3%A9e-et-ouverte-en-mode-exclusif",
        datePage: "2026-11-02",
        consultee: "2026-11-25",
      },
    ],
  },
  {
    slug: "outlook-ne-recoit-plus-boite-pleine",
    titre: "Outlook ne reçoit plus, redemande le mot de passe ou la boîte est pleine",
    titreSeo: "Outlook ne reçoit plus : que faire ?",
    libelle: "Outlook bloqué ou boîte pleine",
    description:
      "Outlook ne reçoit plus, redemande le mot de passe ou annonce une boîte pleine : les causes et les étapes à essayer, dans Outlook classique et le nouvel Outlook.",
    resume:
      "Plus aucun mail n'arrive, Outlook réclame le mot de passe en boucle, ou un message annonce que la boîte est pleine. Ces pannes ont souvent une cause simple. Comment trouver d'où vient le problème, quoi essayer soi-même, et quand appeler.",
    theme: "Postes et matériel",
    datePublication: "2026-11-25",
    dateModification: "2026-11-25",
    blocs: [
      { type: "h2", texte: "Les symptômes" },
      {
        type: "liste",
        items: [
          "Plus aucun message n'arrive, ou les messages restent dans la boîte d'envoi.",
          "Outlook réclame le mot de passe à chaque démarrage, même tapé correctement.",
          "Un message annonce « Quota dépassé, votre compte est au-dessus des limites de quota », ou vos correspondants reçoivent une erreur disant que votre boîte est pleine.",
          "Outlook classique indique en bas de sa fenêtre qu'il travaille hors connexion.",
          "Outlook classique ne démarre plus.",
        ],
      },
      { type: "h2", texte: "D'abord : quel Outlook, et d'où vient la panne ?" },
      {
        type: "p",
        texte:
          "Il existe deux Outlook pour Windows. Dans Outlook classique, tout part de l'onglet Fichier. Le nouvel Outlook n'a pas les mêmes menus : on y passe par le bouton Paramètres, en haut de la fenêtre. Les étapes ci-dessous précisent à chaque fois de quelle version il s'agit.",
      },
      {
        type: "p",
        texte:
          "Ouvrez ensuite votre messagerie dans un navigateur (Outlook sur le web), avec le même compte. Si les messages y arrivent, la boîte fonctionne : le souci vient d'Outlook sur votre poste. S'ils n'y sont pas non plus, ou si la connexion est refusée, il vient du compte ou de la boîte elle-même.",
      },
      { type: "h2", texte: "Les causes les plus fréquentes" },
      {
        type: "liste",
        items: [
          "La boîte est pleine. Selon Microsoft, une boîte qui dépasse sa capacité ne peut plus envoyer ni recevoir de messages. Le dossier Éléments supprimés compte dans cet espace tant qu'il n'est pas vidé.",
          "Le mot de passe a été changé ou a expiré, et Outlook garde l'ancien. Certains comptes d'entreprise imposent d'en changer tous les quelques mois.",
          "Outlook classique est resté en mode hors connexion, ou le poste n'a plus accès à Internet.",
          "Le profil Outlook du poste est abîmé : la boîte fonctionne en ligne, mais Outlook n'arrive plus à s'y connecter.",
        ],
      },
      { type: "h2", texte: "Les étapes à essayer, dans l'ordre" },
      {
        type: "p",
        texte:
          "Commencez par fermer complètement Outlook et redémarrer l'ordinateur. Si le problème reste, suivez la piste qui correspond à ce que vous voyez.",
      },
      {
        type: "p",
        texte: "Boîte pleine : faites de la place.",
      },
      {
        type: "liste",
        items: [
          "Nouvel Outlook : Paramètres > Comptes > Stockage. La page montre la place prise par chaque dossier et permet de supprimer définitivement tout son contenu, ou seulement les éléments de plus de 3, 6 ou 12 mois. Dans Outlook sur le web, le chemin est Paramètres > Compte > Stockage.",
          "Outlook classique : onglet Fichier, puis Outils > Nettoyage de boîte aux lettres. L'outil affiche la taille de la boîte et de chaque dossier, retrouve les éléments anciens ou volumineux, et vide le dossier Éléments supprimés.",
          "Dans les deux cas : videz Éléments supprimés et Courrier indésirable, puis triez vos messages par taille pour repérer les gros envois avec pièces jointes. Une pièce jointe à garder peut d'abord être enregistrée dans OneDrive. Les touches Maj + Suppr suppriment définitivement le message sélectionné.",
        ],
      },
      {
        type: "p",
        texte:
          "Mot de passe demandé en boucle : vérifiez la touche de verrouillage des majuscules, et que l'identifiant est bien votre adresse mail complète. Connectez-vous ensuite à Outlook sur le web. Si votre mot de passe y fonctionne, c'est lui qu'il faut saisir dans Outlook : Microsoft cite comme causes un mot de passe changé sans être mis à jour dans Outlook, ou un mot de passe expiré. S'il est refusé partout, le compte a besoin de son administrateur. Dans Outlook classique, l'application Obtenir de l'aide de Windows propose un utilitaire de résolution des problèmes : tapez « problème de mot de passe Outlook » dans sa barre de recherche.",
      },
      {
        type: "p",
        texte:
          "Plus rien n'arrive dans Outlook classique : si le bas de la fenêtre indique un travail hors connexion, cliquez sur le bouton Travailler hors connexion, dans l'onglet d'envoi et de réception, pour repasser en ligne. Vérifiez aussi qu'une page web s'ouvre dans votre navigateur.",
      },
      {
        type: "p",
        texte:
          "La boîte fonctionne en ligne mais pas dans Outlook classique : réparez le profil. Allez dans Fichier > Paramètres du compte > Paramètres du compte, onglet Courrier, sélectionnez votre compte, puis Réparer. Suivez l'assistant et redémarrez Outlook. Microsoft précise que ce bouton n'est pas proposé dans tous les cas (Outlook 2016 relié à un compte Exchange, par exemple).",
      },
      {
        type: "encadre",
        texte:
          "Microsoft propose, dans l'application Obtenir de l'aide de Windows, des utilitaires de résolution des problèmes pour Outlook classique : démarrage d'Outlook, connectivité, mot de passe, configuration de la messagerie Microsoft 365. Ils ne s'appliquent pas au nouvel Outlook.",
      },
      { type: "h2", texte: "Ce qu'il ne faut pas faire" },
      {
        type: "liste",
        items: [
          "Supprimer vous-même le profil Outlook ou les fichiers .pst et .ost. Avec un compte Microsoft 365, le .ost n'est qu'une copie de la boîte ; mais avec une ancienne boîte POP, tout le contenu du compte est rangé dans un .pst, et il n'existe peut-être nulle part ailleurs.",
          "Déplacer vos anciens messages dans un fichier .pst sans savoir qui le sauvegarde : s'il n'est que sur votre poste, il disparaîtra avec lui. Voir notre article sur [la règle 3-2-1](/conseils/sauvegardes-pme-regle-3-2-1/).",
          "Désactiver la double authentification pour vous dépanner, ou valider une demande de connexion que vous n'avez pas faite vous-même.",
          "Donner votre mot de passe à quelqu'un qui vous le demande par mail ou par téléphone, même s'il se présente comme le support.",
        ],
      },
      { type: "h2", texte: "Quand nous appeler" },
      {
        type: "p",
        texte: "Certaines réparations demandent un compte administrateur Microsoft 365 ou une intervention sur le poste :",
      },
      {
        type: "liste",
        items: [
          "la boîte reste pleine malgré le ménage : il faut déplacer des éléments vers une boîte d'archivage, ou obtenir davantage d'espace de l'administrateur ;",
          "le profil doit être recréé, ou une ancienne archive .pst doit être reprise dans la boîte en ligne ;",
          "le mot de passe doit être réinitialisé, le compte est verrouillé, ou la double authentification doit être enregistrée sur un nouveau téléphone ;",
          "le nouvel Outlook pose problème, puisque les utilitaires d'Obtenir de l'aide ne le couvrent pas ;",
          "plusieurs personnes ont la même panne en même temps : la cause est peut-être le service Microsoft 365 ou le réseau.",
        ],
      },
      {
        type: "p",
        texte:
          "Notez le message exact affiché, puis appelez le standard au 04 50 64 02 33. Un technicien peut aussi intervenir sur votre poste à distance grâce à la [télémaintenance](/telemaintenance/).",
      },
      {
        type: "p",
        texte:
          "La messagerie professionnelle et les postes de travail font partie de notre offre d'[infrastructure informatique](/informatique/). Pour protéger vos comptes, lisez aussi notre article sur [les mesures de cybersécurité de base](/conseils/cybersecurite-pme-mesures-de-base/).",
      },
    ],
    services: ["/informatique", "/telemaintenance", "/contact"],
    sources: [
      {
        titre: "Limites de stockage de boîtes aux lettres dans Outlook",
        editeur: "Microsoft Support",
        url: "https://support.microsoft.com/fr-fr/outlook/mailbox-storage-limits-in-outlook",
        consultee: "2026-11-25",
      },
      {
        titre: "Réduire la taille de votre boîte aux lettres et des fichiers de données Outlook (.pst et .ost)",
        editeur: "Microsoft Support",
        url: "https://support.microsoft.com/fr-fr/outlook/reduce-the-size-of-your-mailbox-and-outlook-data-files-pst-and-ost",
        consultee: "2026-11-25",
      },
      {
        titre: "Résoudre les problèmes de configuration d'e-mail liés à Outlook",
        editeur: "Microsoft Support",
        url: "https://support.microsoft.com/fr-fr/outlook/getstarted/troubleshoot-outlook-email-setup",
        consultee: "2026-11-25",
      },
      {
        titre: "Réparer la connexion à votre courrier Outlook en réparant votre profil",
        editeur: "Microsoft Support",
        url: "https://support.microsoft.com/fr-fr/outlook/fix-your-outlook-email-connection-by-repairing-your-profile",
        consultee: "2026-11-25",
      },
      {
        titre: "Utilitaires de résolution des problèmes Outlook classiques",
        editeur: "Microsoft Support",
        url: "https://support.microsoft.com/fr-fr/support/get-help/classic-outlook-troubleshooters",
        consultee: "2026-11-25",
      },
    ],
  },
  {
    slug: "imprimante-scanner-copieur-ne-marche-plus",
    titre: "Impossible d'imprimer, scans du copieur qui n'arrivent plus : que vérifier ?",
    titreSeo: "Imprimante ou scan bloqué : que faire ?",
    libelle: "Imprimante et scans du copieur",
    description:
      "Impression bloquée, imprimante hors connexion, scans du copieur qui n'arrivent plus par mail ou dans un dossier : causes et étapes à essayer sous Windows 11.",
    resume:
      "Un document coincé dans la file d'attente, une imprimante « hors connexion », des numérisations qui ne partent plus : la cause est souvent un réglage qui a changé. Ce que vous pouvez vérifier vous-même, ce qu'il vaut mieux ne pas toucher, et quand appeler.",
    theme: "Postes et matériel",
    datePublication: "2026-11-25",
    dateModification: "2026-11-25",
    blocs: [
      { type: "h2", texte: "Les symptômes" },
      {
        type: "liste",
        items: [
          "Le document part à l'impression mais rien ne sort, et il reste dans la file d'attente.",
          "Windows indique que l'imprimante est hors connexion alors qu'elle est allumée.",
          "L'imprimante n'apparaît plus dans la liste de l'ordinateur.",
          "Les numérisations envoyées par mail n'arrivent plus. Avec Microsoft 365, l'erreur peut prendre la forme « 535 5.7.3 » (échec de l'authentification) ou « 5.7.57 Client non authentifié pour envoyer du courrier ».",
          "Le scan vers un dossier partagé échoue. Chez un fabricant, les erreurs s'appellent par exemple « Erreur de connexion du serveur », « Erreur d'identification » ou « Dossier absent ».",
        ],
      },
      { type: "h2", texte: "Les causes les plus fréquentes" },
      { type: "p", texte: "Pour l'impression :" },
      {
        type: "liste",
        items: [
          "des documents restés en attente dans la file d'impression ;",
          "une imprimante déconnectée du réseau, ou reliée à un autre réseau Wi-Fi que l'ordinateur ;",
          "le service de Windows qui gère la file d'attente (le Spouleur d'impression) bloqué, ou un pilote à réinstaller.",
        ],
      },
      { type: "p", texte: "Pour le scan vers mail avec Microsoft 365 :" },
      {
        type: "liste",
        items: [
          "le mot de passe du compte qui envoie les scans a changé : quand il envoie par SMTP AUTH, le copieur se connecte avec une adresse et un mot de passe enregistrés dans ses réglages ;",
          "ce compte a été bloqué pour envoi de courrier indésirable, ou l'envoi authentifié n'est pas autorisé sur sa boîte ;",
          "le copieur ne gère pas le chiffrement TLS 1.2 exigé par Microsoft : une mise à jour de son microprogramme peut l'apporter ;",
          "le port d'envoi (587 ou 25) est bloqué par le pare-feu ou par le fournisseur d'accès.",
        ],
      },
      { type: "p", texte: "Pour le scan vers un dossier partagé, le manuel d'un fabricant de copieurs cite notamment :" },
      {
        type: "liste",
        items: [
          "un nom d'utilisateur ou un mot de passe incorrect dans le carnet d'adresses du copieur, par exemple parce que le mot de passe du compte Windows utilisé a changé ;",
          "un dossier renommé, qui n'est plus partagé, ou dont les droits ne permettent plus au compte du copieur d'y écrire ;",
          "une adresse du poste de destination qui n'est plus la bonne dans le carnet d'adresses ;",
          "le pare-feu du poste qui bloque le partage de fichiers (port TCP 445) ;",
          "une signature SMB exigée par le poste et non activée sur le copieur. Or Microsoft indique que Windows 11 version 24H2, en éditions Professionnel, Entreprise et Éducation, exige cette signature pour les connexions entrantes et sortantes : un poste passé à cette version peut refuser un copieur qui ne signe pas ses échanges.",
        ],
      },
      { type: "h2", texte: "À essayer vous-même pour imprimer" },
      {
        type: "liste",
        items: [
          "Regardez l'écran de l'imprimante : papier, bourrage, toner ou message d'erreur.",
          "Demandez si vos collègues impriment. Si oui, le souci vient de votre poste ; sinon, de l'imprimante ou du réseau.",
          "Sous Windows 11, Microsoft conseille de commencer par l'utilitaire de résolution des problèmes d'imprimante de l'application Obtenir de l'aide : il lance des diagnostics et tente de corriger seul la plupart des problèmes.",
          "Éteignez l'imprimante, débranchez-la, attendez 30 secondes, rebranchez-la et rallumez-la.",
          "Imprimante en Wi-Fi : vérifiez dans son menu qu'elle est connectée au même réseau Wi-Fi que l'ordinateur. Imprimante câblée : vérifiez son câble réseau.",
          "Videz la file d'attente : Démarrer > Paramètres > Bluetooth et appareils > Imprimantes et scanners, sélectionnez l'imprimante, puis Ouvrir la file d'attente d'impression. Cliquez sur les points de suspension (...) et choisissez Annuler tout.",
          "Si le document part sur une autre imprimante, sélectionnez la bonne dans Imprimantes et scanners puis Définir par défaut. Si ce bouton manque, désactivez d'abord l'option Laisser Windows gérer mon imprimante par défaut.",
          "Redémarrez l'ordinateur.",
        ],
      },
      { type: "h2", texte: "À vérifier quand les scans n'arrivent plus" },
      {
        type: "liste",
        items: [
          "Regardez dans le courrier indésirable du destinataire.",
          "Notez le message exact affiché par le copieur.",
          "Le mot de passe de la boîte qui envoie les scans, ou du compte Windows du dossier, a-t-il changé ces derniers jours ? Il doit alors être changé aussi dans les réglages du copieur.",
          "Scan vers mail : Microsoft conseille de se connecter à Outlook sur le web avec l'adresse et le mot de passe du copieur, puis d'envoyer un message d'essai, pour vérifier que la boîte est active et n'est pas bloquée.",
          "Scan vers dossier : le poste qui contient le dossier est-il allumé ? Le dossier a-t-il été renommé, déplacé, ou ses droits modifiés ? Le poste vient-il de recevoir une mise à jour importante de Windows ?",
          "Vérifiez le câble réseau du copieur.",
        ],
      },
      {
        type: "encadre",
        texte:
          "À savoir avant la fin de l'année : Microsoft a annoncé que l'envoi de mails par un appareil avec une simple adresse et un mot de passe (l'authentification de base de SMTP AUTH) sera désactivé par défaut fin décembre 2026 pour les organisations Microsoft 365 existantes. L'administrateur pourra encore le réactiver ; la date de suppression définitive sera annoncée au second semestre 2027. Si votre copieur envoie ses scans de cette façon, faites vérifier son réglage : l'authentification moderne (OAuth) devient la méthode prise en charge, et Microsoft décrit d'autres méthodes d'envoi, comme le relais par un connecteur.",
      },
      { type: "h2", texte: "Ce qu'il ne faut pas faire" },
      {
        type: "liste",
        items: [
          "Désactiver l'antivirus ou le pare-feu du poste pour faire passer les scans : le fabricant cité plus haut demande seulement d'autoriser le port du partage de fichiers.",
          "Désactiver la double authentification ou les paramètres de sécurité par défaut de Microsoft 365 pour le compte du copieur. Microsoft prévient de ne pas toucher aux paramètres de sécurité par défaut sans en comprendre les risques.",
          "Désactiver la signature SMB du poste ou ouvrir le dossier aux comptes invités : Microsoft le déconseille. C'est le réglage du copieur qu'il faut adapter.",
          "Donner à tout le monde le contrôle total du dossier de destination pour régler un problème de droits : réservez l'accès au compte utilisé par le copieur.",
          "Installer un pilote trouvé sur un site de téléchargement quelconque : prenez-le sur le site du fabricant de l'imprimante.",
        ],
      },
      { type: "h2", texte: "Quand nous appeler" },
      {
        type: "liste",
        items: [
          "L'imprimante a disparu de tous les postes, ou l'impression passe par un serveur.",
          "Le Spouleur d'impression doit être relancé, ou le pilote réinstallé.",
          "Le réglage du copieur est à reprendre : compte d'envoi, carnet d'adresses, dossier de destination, signature SMB, microprogramme.",
          "Un réglage Microsoft 365 est à faire par l'administrateur : envoi authentifié de la boîte du copieur, connecteur de relais, passage à une autre méthode d'envoi avant la fin de 2026.",
          "Une exception de pare-feu ou d'antivirus est à créer pour le copieur.",
        ],
      },
      {
        type: "p",
        texte:
          "Notez le message exact et le modèle de l'appareil, puis appelez le standard au 04 50 64 02 33. Ce qui se règle depuis un poste peut se faire à distance, par [télémaintenance](/telemaintenance/).",
      },
      {
        type: "p",
        texte:
          "Les postes, le réseau et le matériel de nos clients font partie de notre offre d'[infrastructure informatique](/informatique/). Pour le pare-feu et l'antivirus des postes, voir notre page [sécurité de l'infrastructure](/securite/).",
      },
    ],
    services: ["/informatique", "/telemaintenance", "/securite"],
    sources: [
      {
        titre: "Résolution des problèmes d'imprimante hors connexion dans Windows",
        editeur: "Microsoft Support",
        url: "https://support.microsoft.com/fr-fr/windows/hardware/printer/troubleshooting-offline-printer-problems-in-windows",
        consultee: "2026-11-25",
      },
      {
        titre: "Résoudre les problèmes liés aux imprimantes, aux scanneurs et aux applications métier qui envoient des e-mails à l'aide de Microsoft 365",
        editeur: "Microsoft Learn",
        url: "https://learn.microsoft.com/fr-fr/troubleshoot/exchange/email-delivery/fix-issues-with-printers-scanners-and-lob-applications-that-send-email-using-off",
        datePage: "2025-08-11",
        consultee: "2026-11-25",
      },
      {
        titre: "Updated Exchange Online SMTP AUTH Basic Authentication Deprecation Timeline",
        editeur: "Microsoft Tech Community (équipe Exchange)",
        url: "https://techcommunity.microsoft.com/blog/exchange/updated-exchange-online-smtp-auth-basic-authentication-deprecation-timeline/4489835",
        datePage: "2026-01-29",
        consultee: "2026-11-25",
      },
      {
        titre: "Contrôler le comportement de la signature SMB",
        editeur: "Microsoft Learn",
        url: "https://learn.microsoft.com/fr-fr/windows-server/storage/file-server/smb-signing",
        datePage: "2025-08-14",
        consultee: "2026-11-25",
      },
      {
        titre: "Erreurs de transmission SMB (manuel bizhub C650i/C550i/C450i)",
        editeur: "Konica Minolta",
        url: "https://manuals.konicaminolta.eu/bizhub-C650i-C550i-C450i-UD/FR/contents/id16-_104516425.html",
        consultee: "2026-11-25",
      },
    ],
  },
];

/* Articles a lire ensuite : le meme theme d'abord, puis les plus recents */
export function articlesLies(a: Article, nombre = 3): Article[] {
  return ARTICLES.filter((x) => x.slug !== a.slug)
    .sort((x, y) =>
      Number(y.theme === a.theme) - Number(x.theme === a.theme) ||
      y.datePublication.localeCompare(x.datePublication))
    .slice(0, nombre);
}

/* Ancre d'un intertitre : « 2. Appliquer les mises à jour » devient « appliquer-les-mises-a-jour » */
export function ancre(texte: string): string {
  return texte
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function article(slug: string): Article {
  const a = ARTICLES.find((x) => x.slug === slug);
  if (!a) throw new Error(`Article absent de lib/articles.ts : « ${slug} »`);
  return a;
}

const MOIS = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

/* « 2026-10-29 » devient « 29 octobre 2026 » (sans dependre de la locale du build) */
export function dateLisible(iso: string): string {
  const [annee, mois, jour] = iso.split("-").map(Number);
  return `${jour === 1 ? "1er" : jour} ${MOIS[mois - 1]} ${annee}`;
}
