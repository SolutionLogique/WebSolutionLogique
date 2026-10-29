import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

/* Page d'erreur du site (404.html du build), en francais.

   Apache la sert pour toute adresse inconnue (404) et pour les anciennes
   adresses supprimees (410) : ErrorDocument du .htaccess. Sans ce fichier,
   Next affichait sa page par defaut, en anglais (« This page could not be
   found »). */

export const metadata: Metadata = {
  title: "Page introuvable",
  /* Remplace le « index, follow » du layout, qui contredisait le noindex
     ajoute par Next sur cette page */
  robots: { index: false, follow: true },
};

const LIENS = [
  { href: "/", libelle: "Accueil" },
  { href: "/nosServices/", libelle: "Nos services" },
  { href: "/logiciels/", libelle: "Logiciels EBP" },
  { href: "/telemaintenance/", libelle: "Télémaintenance" },
  { href: "/contact/", libelle: "Contact" },
];

export default function PageIntrouvable() {
  return (
    <section className="bg-sand-50">
      <div className="mx-auto max-w-3xl px-gutter py-20 text-center lg:py-28">
        <p className="mb-3 font-display text-sm font-semibold uppercase tracking-wide text-primary-600">
          Erreur 404
        </p>
        <h1 className="mb-5 font-display text-h1 font-bold text-sand-900">Page introuvable</h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-sand-600">
          Cette page n&apos;existe pas ou n&apos;existe plus. Les pages du site sont accessibles
          ci-dessous.
        </p>
        <nav aria-label="Pages principales">
          <ul className="flex flex-wrap justify-center gap-3">
            {LIENS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block rounded-xl border border-sand-300 bg-sand-0 px-5 py-3 text-sm font-semibold text-sand-900 transition-colors hover:border-primary-500 hover:text-primary-600"
                >
                  {l.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
