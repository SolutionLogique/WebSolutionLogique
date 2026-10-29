import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { DonneesPage } from "@/components/seo/StructuredData";
import FinalCTA from "@/components/sections/FinalCTA";
import { ARTICLES, dateLisible } from "@/lib/articles";
import { metadonneesPage } from "@/lib/seo";

/* Rubrique Conseils : la liste des articles, du plus recent au plus ancien.
   Les articles sont dans lib/articles.ts. */

export const metadata: Metadata = metadonneesPage("/conseils");

export default function Conseils() {
  const articles = [...ARTICLES].sort((a, b) => b.datePublication.localeCompare(a.datePublication));

  return (
    <>
      <DonneesPage chemin="/conseils" />

      <section className="border-b border-sand-200 bg-sand-50">
        <div className="mx-auto max-w-3xl px-gutter py-14 lg:py-16">
          <h1 className="mb-4 font-display text-h1 font-bold text-sand-900">Conseils</h1>
          <p className="text-lg leading-relaxed text-sand-600">
            Ce que nous expliquons le plus souvent à nos clients, mis par écrit : les
            sauvegardes, la sécurité informatique d&apos;une PME, la facture électronique.
            Chaque article cite ses sources.
          </p>
        </div>
      </section>

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-3xl space-y-6 px-gutter">
          {articles.map((a) => (
            <article key={a.slug} className="rounded-2xl border border-sand-200 bg-sand-0 p-6 transition-colors hover:border-primary-200">
              <p className="mb-2 text-sm text-sand-600">
                <time dateTime={a.datePublication}>{dateLisible(a.datePublication)}</time>
              </p>
              <h2 className="mb-3 font-display text-h3 font-semibold text-sand-900">
                <Link href={`/conseils/${a.slug}/`} className="hover:text-primary-600">
                  {a.titre}
                </Link>
              </h2>
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

      <FinalCTA />
    </>
  );
}
