import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Route } from "lucide-react";
import { DonneesPage } from "@/components/seo/StructuredData";
import FinalCTA from "@/components/sections/FinalCTA";
import LiensVoisins from "@/components/ui/LiensVoisins";
import { SECTEURS, secteur } from "@/lib/secteurs";
import { metadonneesPage } from "@/lib/seo";

/* Page locale d'un secteur (Chablais, vallee de l'Arve, Savoie).
   Textes et sources des faits : lib/secteurs.ts. */

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SECTEURS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return metadonneesPage(`/secteurs/${slug}`);
}

export default async function PageSecteur({ params }: Props) {
  const { slug } = await params;
  const s = secteur(slug);
  const autres = SECTEURS.filter((x) => x.slug !== slug).map((x) => `/secteurs/${x.slug}`);

  return (
    <>
      <DonneesPage chemin={`/secteurs/${slug}`} />

      <section className="border-b border-sand-200 bg-sand-50">
        <div className="mx-auto max-w-3xl px-gutter py-14 lg:py-16">
          <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-700">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {s.nom}
          </p>
          <h1 className="mb-4 font-display text-h1 font-bold text-sand-900">{s.titre}</h1>
          <p className="text-lg leading-relaxed text-sand-600">{s.accroche}</p>
        </div>
      </section>

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-3xl space-y-10 px-gutter">
          <div className="space-y-4 text-lg leading-relaxed text-sand-600">
            {s.paragraphes.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div>
            <h2 className="mb-4 font-display text-h3 font-semibold text-sand-900">Où nous intervenons</h2>
            <p className="mb-4 leading-relaxed text-sand-600">
              Nous suivons des entreprises dans ces communes et dans les communes voisines :
            </p>
            <ul className="flex flex-wrap gap-2">
              {s.communes.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-sand-200 bg-sand-50 px-3.5 py-1.5 text-sm font-medium text-sand-700"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 flex items-start gap-3 leading-relaxed text-sand-600">
              <Route className="mt-1 h-4 w-4 flex-shrink-0 text-primary-600" aria-hidden="true" />
              {s.acces}
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-display text-h3 font-semibold text-sand-900">Ce que nous faisons pour vous</h2>
            <ul className="space-y-2.5">
              {s.services.map((sv) => (
                <li key={sv.chemin} className="leading-relaxed text-sand-600">
                  <Link href={`${sv.chemin}/`} className="font-semibold text-primary-600 underline-offset-4 hover:underline">
                    {sv.texte.charAt(0).toUpperCase() + sv.texte.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <LiensVoisins chemins={[...autres, "/contact"]} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
