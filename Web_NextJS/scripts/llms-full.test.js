/* Decoupage HTML -> Markdown de scripts/llms-full.js */
/* eslint-disable @typescript-eslint/no-require-imports */
const { htmlVersMarkdown, lireLlms } = require("./llms-full");

const PAGE = `<html><body><nav><a href="/">Menu</a></nav>
<main id="contenu"><script type="application/ld+json">{"a":1}</script>
<nav aria-label="Fil d'Ariane"><a href="/">Accueil</a></nav>
<h1>Logiciels<span class="block">EBP &amp; formations</span></h1>
<p>Un paragraphe avec <strong>du gras</strong> et l&#x27;apostrophe<span aria-hidden="true">·</span>Fin</p>
<dl><dt>Téléphone</dt><dd><a href="tel:0450640233">04 50 64 02 33</a></dd></dl>
<button>Envoyer</button>
<div aria-hidden="true">Décor</div>
<div><span>0</span>+</div>
<h2>Titre vide</h2>
<h2>Étapes</h2>
<ol><li><span>01</span><h3>On écoute</h3><p>Nous partons du terrain.</p></li></ol>
<ul><li>Point A</li><li>Point B</li><li>+3 autres…</li></ul>
<blockquote>Témoignage</blockquote>
<details><summary>Une question ?<span aria-hidden="true">+</span></summary><p>La réponse.</p></details>
<form><p>Votre nom</p><input name="nom"></form>
</main><footer><p>Pied de page</p></footer></body></html>`;

test("garde titres, paragraphes, listes et questions, ecarte le reste", () => {
  const { titre, markdown } = htmlVersMarkdown(PAGE);
  expect(titre).toBe("Logiciels EBP & formations");
  expect(markdown).toBe(
    [
      "### Logiciels EBP & formations",
      "Un paragraphe avec du gras et l'apostrophe Fin",
      "**Téléphone**",
      "04 50 64 02 33",
      "#### Étapes",
      "##### On écoute",
      "Nous partons du terrain.",
      "- Point A\n- Point B",
      "**Une question ?**",
      "La réponse.",
    ].join("\n\n"),
  );
});

test("une page sans h1 ou sans main n'a pas de titre", () => {
  expect(htmlVersMarkdown("<main><p>Texte</p></main>").titre).toBeNull();
  expect(htmlVersMarkdown("<body><h1>Hors main</h1></body>").titre).toBeNull();
});

test("llms.txt : en-tete et pages HTML seulement", () => {
  const { entete, pages } = lireLlms(
    "# Site\n\n> Resume\n\n## Pages\n\n- [Une](https://solution-logique.fr/une/) : la premiere\n- [Plan](https://solution-logique.fr/sitemap.xml)\n",
  );
  expect(entete).toBe("# Site\n\n> Resume");
  expect(pages).toEqual([{ nom: "Une", url: "https://solution-logique.fr/une/", resume: "la premiere" }]);
});
