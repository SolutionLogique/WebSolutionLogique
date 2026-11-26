import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { DonneesPage } from "@/components/seo/StructuredData";
import FinalCTA from "@/components/sections/FinalCTA";
import LiensVoisins from "@/components/ui/LiensVoisins";
import { ARTICLES, ancre, article, articlesLies, dateLisible, type Bloc } from "@/lib/articles";
import { IMAGE_PARTAGE, NOM_SITE, SITE_URL, metadonneesPage, urlPage } from "@/lib/seo";

/* Article de la rubrique Conseils : sommaire, texte, appel a l'aide, articles
   lies, liens vers nos services, sources datees en fin d'article, donnees
   structurees BlogPosting. */

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = article(slug);
  const base = metadonneesPage(`/conseils/${slug}`);
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: a.datePublication,
      modifiedTime: a.dateModification,
      authors: [NOM_SITE],
    },
  };
}

/* Liens dans le texte : [libelle](/chemin) devient un lien interne */
function TexteAvecLiens({ texte }: { texte: string }) {
  const morceaux = texte.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {morceaux.map((m, i) => {
        const lien = m.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!lien) return <React.Fragment key={i}>{m}</React.Fragment>;
        const [, libelle, href] = lien;
        const interne = href.startsWith("/");
        return interne ? (
          <Link key={i} href={href} className="font-semibold text-primary-600 underline-offset-4 hover:underline">
            {libelle}
          </Link>
        ) : (
          <a key={i} href={href} className="font-semibold text-primary-600 underline-offset-4 hover:underline" rel="noopener">
            {libelle}
          </a>
        );
      })}
    </>
  );
}

function RenduBloc({ bloc }: { bloc: Bloc }) {
  switch (bloc.type) {
    case "h2":
      return (
        <h2 id={ancre(bloc.texte)} className="scroll-mt-24 pt-4 font-display text-h3 font-semibold text-sand-900">
          {bloc.texte}
        </h2>
      );
    case "liste":
      return (
        <ul className="list-disc space-y-2 pl-6">
          {bloc.items.map((it) => (
            <li key={it}>
              <TexteAvecLiens texte={it} />
            </li>
          ))}
        </ul>
      );
    case "encadre":
      return (
        <p className="rounded-2xl border border-primary-100 bg-primary-50 px-5 py-4 text-sand-800">
          <TexteAvecLiens texte={bloc.texte} />
        </p>
      );
    default:
      return (
        <p>
          <TexteAvecLiens texte={bloc.texte} />
        </p>
      );
  }
}

export default async function PageArticle({ params }: Props) {
  const { slug } = await params;
  const a = article(slug);
  const chemin = `/conseils/${slug}`;
  const mots = a.blocs
    .flatMap((b) => (b.type === "liste" ? b.items : [b.texte]))
    .join(" ")
    .replace(/\]\([^)]+\)/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
  const intertitres = a.blocs.flatMap((b) => (b.type === "h2" ? [b.texte] : []));
  const lies = articlesLies(a);

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": a.titre,
    "description": a.description,
    "datePublished": a.datePublication,
    "dateModified": a.dateModification,
    "inLanguage": "fr-FR",
    "articleSection": a.theme,
    "wordCount": mots,
    "author": { "@type": "Organization", "name": NOM_SITE, "url": `${SITE_URL}/` },
    "publisher": { "@id": `${SITE_URL}/#organisation` },
    "image": `${SITE_URL}${IMAGE_PARTAGE.url}`,
    "mainEntityOfPage": urlPage(chemin),
    "url": urlPage(chemin),
  };

  return (
    <>
      <DonneesPage chemin={chemin} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }} />

      <article>
        <header className="border-b border-sand-200 bg-sand-50">
          <div className="mx-auto max-w-3xl px-gutter py-14 lg:py-16">
            <p className="mb-3 text-sm text-sand-600">
              <Link href="/conseils/" className="font-semibold text-primary-600 hover:underline">
                Conseils
              </Link>
              <span aria-hidden="true" className="mx-2">·</span>
              Publié le <time dateTime={a.datePublication}>{dateLisible(a.datePublication)}</time>
              {a.dateModification !== a.datePublication && (
                <>
                  , mis à jour le <time dateTime={a.dateModification}>{dateLisible(a.dateModification)}</time>
                </>
              )}
              <span aria-hidden="true" className="mx-2">·</span>
              Par {NOM_SITE}
            </p>
            <h1 className="mb-4 font-display text-h1 font-bold text-sand-900">{a.titre}</h1>
            <p className="text-lg leading-relaxed text-sand-600">{a.resume}</p>
          </div>
        </header>

        <div className="bg-sand-0 py-section">
          <div className="mx-auto max-w-3xl space-y-5 px-gutter text-lg leading-relaxed text-sand-700">
            {intertitres.length >= 4 && (
              <nav aria-labelledby="sommaire" className="rounded-2xl border border-sand-200 bg-sand-50 px-5 py-4 text-base">
                <p id="sommaire" className="mb-2 font-semibold text-sand-900">
                  Dans cet article
                </p>
                <ol className="list-decimal space-y-1 pl-6">
                  {intertitres.map((t) => (
                    <li key={t}>
                      <a href={`#${ancre(t)}`} className="text-primary-600 underline-offset-4 hover:underline">
                        {t.replace(/^\d+\.\s*/, "")}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {a.blocs.map((b, i) => (
              <RenduBloc key={i} bloc={b} />
            ))}

            {/* Le lecteur d'un conseil a souvent un probleme en cours : l'aide d'abord */}
            <aside aria-label="Besoin d'aide" className="mt-10 rounded-2xl border border-primary-100 bg-primary-50 px-5 py-5 text-base text-sand-800">
              <p className="mb-1 font-display text-lg font-semibold text-sand-900">Besoin d&apos;aide ?</p>
              <p>
                Une question, ou un problème qui continue : appelez-nous au{" "}
                <a href="tel:0450640233" className="font-semibold text-primary-600 underline-offset-4 hover:underline">
                  04 50 64 02 33
                </a>{" "}
                (du lundi au vendredi, 8h30-12h00 et 14h00-17h30). Un technicien peut aussi prendre la main sur votre poste
                à distance avec la{" "}
                <Link href="/telemaintenance/" className="font-semibold text-primary-600 underline-offset-4 hover:underline">
                  télémaintenance
                </Link>
                .
              </p>
            </aside>

            <LiensVoisins chemins={a.services} />

            {lies.length > 0 && (
              <section aria-labelledby="a-lire-aussi" className="mt-10 border-t border-sand-200 pt-8 text-base">
                <h2 id="a-lire-aussi" className="mb-4 font-display text-lg font-semibold text-sand-900">
                  À lire aussi
                </h2>
                <ul className="space-y-2">
                  {lies.map((l) => (
                    <li key={l.slug}>
                      <Link href={`/conseils/${l.slug}/`} className="font-semibold text-primary-600 underline-offset-4 hover:underline">
                        {l.titre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section aria-labelledby="sources" className="mt-10 border-t border-sand-200 pt-8 text-base">
              <h2 id="sources" className="mb-4 font-display text-lg font-semibold text-sand-900">
                Sources
              </h2>
              <ol className="list-decimal space-y-2 pl-6 text-sand-600">
                {a.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} className="text-primary-600 underline-offset-4 hover:underline" rel="noopener">
                      {s.titre}
                    </a>
                    , {s.editeur}
                    {s.datePage ? `, page mise à jour le ${dateLisible(s.datePage)}` : ""}, consultée le{" "}
                    {dateLisible(s.consultee)}.
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
