/* Genere out/llms-full.txt apres un export statique (scripts postbuild et
   postexport de package.json).

   llms-full.txt est la version longue de llms.txt, pour les moteurs a
   reponses IA qui ingerent un site d'un bloc : en tete le resume de
   llms.txt (identite, coordonnees, zone), puis le texte utile de chaque page
   qu'il liste, dans son ordre, avec son adresse.

   Le texte vient des pages exportees dans out/, jamais d'une copie a la main :
   il suit chaque changement de texte au build suivant. On garde, dans <main>,
   les titres, paragraphes, listes et questions-reponses ; on ecarte la
   navigation, les formulaires, les boutons, les scripts, les compteurs
   animes et ce qui est marque decoratif (aria-hidden).

   Sans out/ (build sans NEXT_EXPORT, copie Vercel), ne fait rien.
   Une page listee absente du build, ou sans titre h1, arrete le build. */

/* Script Node lance par npm (CommonJS, comme jest.config.js) */
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const SITE = "https://solution-logique.fr";

/* Elements ecartes avec tout leur contenu */
const ECARTES = new Set([
  "script", "style", "svg", "nav", "form", "button", "noscript", "template",
  "select", "textarea", "iframe", "canvas", "dialog", "figure",
]);

/* Elements sans balise fermante */
const VIDES = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
  "source", "track", "wbr",
]);

/* Elements en ligne : pas d'espace ajoute a leurs bornes, sauf si une classe
   Tailwind les affiche en bloc (« Logiciels<span class="block">EBP</span> ») */
const EN_LIGNE = new Set([
  "a", "abbr", "b", "cite", "code", "em", "i", "mark", "q", "s", "small",
  "span", "strong", "sub", "sup", "time", "u",
]);
const CLASSE_BLOC = /\bclass=["'][^"']*\b(block|flex|inline-flex|inline-block|grid)\b/;

/* Blocs de texte gardes, et leur forme en Markdown. Les citations
   (blockquote) ne sont pas gardees : la page Logiciels n'en a que pour des
   temoignages sans source. */
const BLOCS = {
  h1: (t) => `### ${t}`,
  h2: (t) => `#### ${t}`,
  h3: (t) => `##### ${t}`,
  h4: (t) => `###### ${t}`,
  p: (t) => t,
  li: (t) => `- ${t}`,
  summary: (t) => `**${t}**`,
  dt: (t) => `**${t}**`,
  dd: (t) => t,
};

const ENTITES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

function decoder(texte) {
  return texte.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entier, nom) => {
    if (nom[0] === "#") {
      const code = nom[1] === "x" || nom[1] === "X" ? parseInt(nom.slice(2), 16) : parseInt(nom.slice(1), 10);
      return String.fromCodePoint(code);
    }
    return ENTITES[nom.toLowerCase()] ?? entier;
  });
}

/* Texte utile du <main> d'une page HTML exportee, en Markdown.
   Rend { titre, markdown } ; titre = texte du premier h1 (null sans h1). */
function htmlVersMarkdown(html) {
  const debut = html.search(/<main[\s>]/i);
  const fin = html.lastIndexOf("</main>");
  if (debut < 0 || fin < debut) return { titre: null, markdown: "" };
  const contenu = html.slice(debut, fin);

  const unites = [];
  const pile = []; // { nom, ecarte, bloc, texte }
  let titre = null;

  const ecarte = () => pile.some((e) => e.ecarte);
  const blocOuvert = () => {
    for (let i = pile.length - 1; i >= 0; i--) if (pile[i].bloc) return pile[i];
    return null;
  };
  const vider = (e) => {
    const texte = e.texte.replace(/\s+/g, " ").trim();
    e.texte = "";
    // Court et sans lettre : numero d'etape ou compteur (« 01 », « 0+ ») ;
    // « +3 autres… » : liste repliee. Un numero de telephone reste.
    if ((!/\p{L}/u.test(texte) && texte.length <= 6) || /^\+\d+ autres?\b/.test(texte)) return;
    if (e.nom === "h1" && titre === null) titre = texte;
    unites.push({ nom: e.nom, texte });
  };

  const jetons = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>|([^<]+)/g;
  let m;
  while ((m = jetons.exec(contenu))) {
    const [, fermante, nomBrut, attributs, texte] = m;
    if (texte !== undefined) {
      const bloc = blocOuvert();
      if (bloc && !ecarte()) bloc.texte += decoder(texte);
      continue;
    }
    if (!nomBrut) continue; // commentaire
    const nom = nomBrut.toLowerCase();
    const bloc = blocOuvert();
    if (VIDES.has(nom)) {
      if (bloc) bloc.texte += " ";
      continue;
    }

    if (fermante) {
      // Referme jusqu'a l'element du meme nom (HTML de React : bien forme)
      for (let i = pile.length - 1; i >= 0; i--) {
        if (pile[i].nom !== nom) continue;
        if (bloc && !pile[i].enLigne) bloc.texte += " ";
        const fermes = pile.splice(i);
        if (fermes[0].bloc && !ecarte() && !fermes.some((e) => e.ecarte)) vider(fermes[0]);
        break;
      }
      continue;
    }
    if (/\/\s*$/.test(attributs)) continue; // <x />

    const ecarteIci = ECARTES.has(nom) || /\baria-hidden=["']?true/i.test(attributs);
    const nouveau = {
      nom,
      // Un element ecarte laisse un espace (separateur « · » decoratif)
      enLigne: EN_LIGNE.has(nom) && !CLASSE_BLOC.test(attributs) && !ecarteIci,
      ecarte: ecarteIci,
      bloc: nom in BLOCS,
      texte: "",
    };
    // Un bloc dans un bloc : le texte du parent deja lu sort avant lui
    if (nouveau.bloc && bloc && !ecarte()) vider(bloc);
    else if (bloc && !nouveau.enLigne) bloc.texte += " ";
    pile.push(nouveau);
  }

  // Un titre suivi d'un titre de meme rang ou plus haut n'annonce rien : ecarte
  const rang = (u) => (/^h\d$/.test(u.nom) ? Number(u.nom[1]) : 9);
  const gardees = unites.filter((u, i) => rang(u) === 9 || (i + 1 < unites.length && rang(unites[i + 1]) > rang(u)));

  // Les puces qui se suivent restent groupees, le reste est separe d'une ligne
  let markdown = "";
  gardees.forEach((u, i) => {
    if (i > 0) markdown += u.nom === "li" && gardees[i - 1].nom === "li" ? "\n" : "\n\n";
    markdown += BLOCS[u.nom](u.texte);
  });
  return { titre, markdown };
}

/* En-tete (tout ce qui precede la 1re section) et liens des pages de llms.txt */
function lireLlms(llms) {
  const lignes = llms.split(/\r?\n/);
  const premiere = lignes.findIndex((l) => l.startsWith("## "));
  const entete = lignes.slice(0, premiere < 0 ? lignes.length : premiere).join("\n").trim();
  const pages = [];
  for (const ligne of lignes) {
    const lien = /^- \[([^\]]+)\]\(([^)]+)\)(?:\s*:\s*(.+))?$/.exec(ligne.trim());
    // Seules les pages HTML (adresse finie par /) : ni sitemap.xml ni llms-full.txt
    if (lien && lien[2].endsWith("/")) pages.push({ nom: lien[1], url: lien[2], resume: lien[3] });
  }
  return { entete, pages };
}

function genererLlmsFull(dossierOut) {
  const { entete, pages } = lireLlms(fs.readFileSync(path.join(dossierOut, "llms.txt"), "utf8"));
  if (pages.length === 0) throw new Error("llms-full : aucune page trouvee dans out/llms.txt");

  const sections = pages.map((page) => {
    if (!page.url.startsWith(`${SITE}/`)) {
      throw new Error(`llms-full : lien hors du site dans llms.txt : ${page.url}`);
    }
    const chemin = page.url.slice(SITE.length + 1);
    const fichier = path.join(dossierOut, chemin, "index.html");
    if (!fs.existsSync(fichier)) {
      throw new Error(`llms-full : page absente du build : ${fichier} (lien « ${page.nom} » de llms.txt)`);
    }
    const { titre, markdown } = htmlVersMarkdown(fs.readFileSync(fichier, "utf8"));
    if (!titre) throw new Error(`llms-full : page sans titre h1 : ${page.url}`);
    const resume = page.resume ? `\n${page.resume.charAt(0).toUpperCase()}${page.resume.slice(1)}.` : "";
    return `## ${page.nom}\n\nAdresse : ${page.url}${resume}\n\n${markdown}`;
  });

  const intro =
    `Ce fichier reprend le texte des pages du site, dans l'ordre de ${SITE}/llms.txt, ` +
    "sans la navigation ni les formulaires. Il est produit à chaque construction du site.";
  return `${entete}\n\n${intro}\n\n${sections.join("\n\n")}\n`;
}

if (require.main === module) {
  const dossierOut = path.join(__dirname, "..", "out");
  if (!fs.existsSync(path.join(dossierOut, "llms.txt"))) {
    console.log("llms-full : pas d'export statique (out/llms.txt absent), rien a faire");
    process.exit(0);
  }
  try {
    const texte = genererLlmsFull(dossierOut);
    fs.writeFileSync(path.join(dossierOut, "llms-full.txt"), texte, "utf8");
    console.log(`llms-full : out/llms-full.txt ecrit (${Buffer.byteLength(texte)} octets)`);
  } catch (erreur) {
    console.error(erreur.message);
    process.exit(1);
  }
}

module.exports = { htmlVersMarkdown, lireLlms, genererLlmsFull };
