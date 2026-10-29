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
    datePublication: "2026-10-29",
    dateModification: "2026-10-29",
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
    datePublication: "2026-10-29",
    dateModification: "2026-10-29",
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
    datePublication: "2026-10-29",
    dateModification: "2026-10-29",
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
];

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
