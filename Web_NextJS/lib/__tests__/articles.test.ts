import { ARTICLES, THEMES, ancre, article, articlesLies } from "../articles";

describe("rubrique Conseils", () => {
  test("ancre : sans numero, accents ni ponctuation", () => {
    expect(ancre("2. Appliquer les mises à jour")).toBe("appliquer-les-mises-a-jour");
    expect(ancre("D'abord : quel Outlook, et d'où vient la panne ?")).toBe("d-abord-quel-outlook-et-d-ou-vient-la-panne");
  });

  test("slugs uniques, theme connu, intertitres d'un article aux ancres distinctes (sommaire)", () => {
    expect(new Set(ARTICLES.map((a) => a.slug)).size).toBe(ARTICLES.length);
    for (const a of ARTICLES) {
      expect(THEMES).toContain(a.theme);
      const ancres = a.blocs.flatMap((b) => (b.type === "h2" ? [ancre(b.texte)] : []));
      expect(new Set(ancres).size).toBe(ancres.length);
      expect(a.titreSeo.length).toBeLessThanOrEqual(41);
    }
  });

  test("articles lies : jamais lui-meme, le meme theme d'abord, 3 au plus", () => {
    const a = article("outlook-ne-recoit-plus-boite-pleine");
    const lies = articlesLies(a);
    expect(lies).toHaveLength(3);
    expect(lies.map((l) => l.slug)).not.toContain(a.slug);
    const memeTheme = ARTICLES.filter((x) => x.theme === a.theme && x.slug !== a.slug).length;
    lies.slice(0, Math.min(memeTheme, 3)).forEach((l) => expect(l.theme).toBe(a.theme));
  });
});
