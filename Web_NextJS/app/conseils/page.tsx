import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { DonneesPage } from "@/components/seo/StructuredData";
import FinalCTA from "@/components/sections/FinalCTA";
import { ARTICLES, THEMES, ancre, dateLisible } from "@/lib/articles";
import { metadonneesPage } from "@/lib/seo";

/* Rubrique Conseils : les articles par theme (ordre de THEMES), du plus recent
   au plus ancien dans chaque theme. Les articles sont dans lib/articles.ts. */

export const metadata: Metadata = metadonneesPage("/conseils");

export default function Conseils() {
  const themes = THEMES.map((theme) => ({
    theme,
    articles: ARTICLES.filter((a) => a.theme === theme).sort((a, b) =>
      b.datePublication.localeCompare(a.datePublication)),
  })).filter((t) => t.articles.length > 0);

  return (
    <>
      <DonneesPage chemin="/conseils" />

      <section className="border-b border-sand-200 bg-sand-50">
        <div className="mx-auto max-w-3xl px-gutter py-14 lg:py-16">
          <h1 className="mb-4 font-display text-h1 font-bold text-sand-900">Conseils</h1>
          <p className="text-lg leading-relaxed text-sand-600">
            Ce que nous expliquons le plus souvent à nos clients, mis par écrit : que faire
            quand Outlook, l&apos;imprimante, le poste ou le réseau ne suivent plus, comment
            protéger et sauvegarder ses données, et comment tenir ses logiciels de gestion à
            jour. Chaque article cite ses sources.
          </p>
          <nav aria-label="Thèmes" className="mt-6 flex flex-wrap gap-2">
            {themes.map(({ theme }) => (
              <a
                key={theme}
                href={`#${ancre(theme)}`}
                className="rounded-full border border-sand-200 bg-sand-0 px-4 py-1.5 text-sm font-semibold text-sand-800 hover:border-primary-200 hover:text-primary-600"
              >
                {theme}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-3xl space-y-12 px-gutter">
          {themes.map(({ theme, articles }) => (
            <section key={theme} aria-labelledby={ancre(theme)}>
              <h2 id={ancre(theme)} className="mb-5 scroll-mt-24 font-display text-h3 font-bold text-sand-900">
                {theme}
              </h2>
              <div className="space-y-6">
                {articles.map((a) => (
                  <article key={a.slug} className="rounded-2xl border border-sand-200 bg-sand-0 p-6 transition-colors hover:border-primary-200">
                    <p className="mb-2 text-sm text-sand-600">
                      <time dateTime={a.datePublication}>{dateLisible(a.datePublication)}</time>
                      {a.dateModification !== a.datePublication && (
                        <>
                          , mis à jour le <time dateTime={a.dateModification}>{dateLisible(a.dateModification)}</time>
                        </>
                      )}
                    </p>
                    <h3 className="mb-3 font-display text-lg font-semibold text-sand-900 sm:text-xl">
                      <Link href={`/conseils/${a.slug}/`} className="hover:text-primary-600">
                        {a.titre}
                      </Link>
                    </h3>
                    <p className="mb-4 leading-relaxed text-sand-600">{a.resume}</p>
                    <Link
                      href={`/conseils/${a.slug}/`}
                      className="inline-flex items-center gap-1.5 font-semibold text-primary-600 underline-offset-4 hover:underline"
                      aria-label={`Lire l'article : ${a.titre}`}
                    >
                      Lire l&apos;article
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
