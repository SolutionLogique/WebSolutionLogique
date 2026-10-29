import React from "react";
import Link from "next/link";

/* Mentions legales (loi pour la confiance dans l'economie numerique, art. 6).

   Chaque information vient d'une source publique, relue le 29/10/2026 :
   - denomination, forme, siege, RCS, president : annuaire des entreprises
     (API recherche-entreprises) et annonces BODACC du greffe d'Annecy ;
   - TVA intracommunautaire : calculee depuis le SIREN, validee par VIES ;
   - hebergeur : mentions legales publiees par OVHcloud
     (www.ovhcloud.com/fr/terms-and-conditions/) ; telephone 1007 : documents
     d'OVHcloud (« appelez-nous au 1007 », relu le 29/10/2026).
   Le capital social n'a pas ete retrouve dans une source publique : il n'est
   pas ecrit ici tant que la direction ne l'a pas confirme. */

const EDITEUR = [
  { libelle: "Dénomination", valeur: "SOLUTION LOGIQUE" },
  { libelle: "Forme", valeur: "Société par actions simplifiée (SAS)" },
  { libelle: "Siège social", valeur: "475 route des Vernes, Pringy, 74370 Annecy" },
  { libelle: "Immatriculation", valeur: "RCS Annecy 379 868 540" },
  { libelle: "SIRET du siège", valeur: "379 868 540 00038" },
  { libelle: "TVA intracommunautaire", valeur: "FR65 379 868 540" },
  { libelle: "Téléphone", valeur: "04 50 64 02 33", href: "tel:+33450640233" },
  { libelle: "E-mail", valeur: "site@solution-logique.fr", href: "mailto:site@solution-logique.fr" },
];

const HEBERGEUR = [
  { libelle: "Hébergeur", valeur: "OVH SAS" },
  { libelle: "Adresse", valeur: "2 rue Kellermann, 59100 Roubaix, France" },
  { libelle: "Immatriculation", valeur: "RCS Lille Métropole 424 761 419" },
  { libelle: "Téléphone", valeur: "1007 (depuis la France)", href: "tel:1007" },
  { libelle: "Site", valeur: "www.ovhcloud.com", href: "https://www.ovhcloud.com/fr/" },
];

function Fiche({ lignes }: { lignes: { libelle: string; valeur: string; href?: string }[] }) {
  return (
    <dl className="divide-y divide-sand-200 rounded-2xl border border-sand-200 bg-sand-0">
      {lignes.map((l) => (
        <div key={l.libelle} className="grid gap-1 px-5 py-3.5 sm:grid-cols-3 sm:gap-4">
          <dt className="text-sm text-sand-600">{l.libelle}</dt>
          <dd className="font-medium text-sand-900 sm:col-span-2">
            {l.href ? (
              <a href={l.href} className="text-primary-600 hover:underline">
                {l.valeur}
              </a>
            ) : (
              l.valeur
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function MentionsLegales() {
  return (
    <>
      <section className="border-b border-sand-200 bg-sand-50">
        <div className="mx-auto max-w-3xl px-gutter py-14 lg:py-16">
          <h1 className="mb-4 font-display text-h1 font-bold text-sand-900">Mentions légales</h1>
          <p className="text-lg leading-relaxed text-sand-600">
            Le site solution-logique.fr est édité par Solution Logique, entreprise de services
            informatiques créée en 1990.
          </p>
        </div>
      </section>

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-3xl space-y-12 px-gutter">
          <div>
            <h2 className="mb-5 font-display text-h3 font-semibold text-sand-900">Éditeur du site</h2>
            <Fiche lignes={EDITEUR} />
          </div>

          <div>
            <h2 className="mb-5 font-display text-h3 font-semibold text-sand-900">
              Directeur de la publication
            </h2>
            <p className="leading-relaxed text-sand-600">Pascal Rey, président de Solution Logique.</p>
          </div>

          <div>
            <h2 className="mb-5 font-display text-h3 font-semibold text-sand-900">Hébergement</h2>
            <Fiche lignes={HEBERGEUR} />
          </div>

          <div>
            <h2 className="mb-5 font-display text-h3 font-semibold text-sand-900">
              Propriété intellectuelle
            </h2>
            <p className="leading-relaxed text-sand-600">
              Les contenus de ce site (textes, images, logo) sont protégés par le droit d&apos;auteur.
              Les logos et marques des éditeurs et constructeurs cités (EBP, Dell, Lenovo,
              Stormshield, VMware, 3CX, Kyocera et les autres) appartiennent à leurs titulaires
              respectifs. Toute reproduction sans autorisation écrite est interdite.
            </p>
          </div>

          <div>
            <h2 className="mb-5 font-display text-h3 font-semibold text-sand-900">
              Données personnelles
            </h2>
            <p className="leading-relaxed text-sand-600">
              Ce que le site collecte, pourquoi et comment exercer vos droits :{" "}
              <Link href="/confidentialite" className="font-medium text-primary-600 hover:underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
