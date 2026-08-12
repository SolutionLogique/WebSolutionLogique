import React from "react";
import Link from "next/link";
import { Package, Server, Code2, Headphones, ArrowRight } from "lucide-react";

/* Les quatre metiers, en entree de site.
   Remplace l'ancienne section Services et ses six cartes en six accents
   differents (bleu, violet, vert, orange, bleu, rouge) : un arc-en-ciel
   sans hierarchie. */

const METIERS = [
  {
    href: "/logiciels",
    icon: Package,
    titre: "Logiciels EBP",
    texte: "Comptabilité, gestion commerciale, bâtiment. Installation, migration et formation associée.",
  },
  {
    href: "/nosServices",
    icon: Server,
    titre: "Services IT",
    texte: "Infrastructure, télécom et sécurité. De l'audit au maintien en conditions opérationnelles.",
  },
  {
    href: "/sur-mesure",
    icon: Code2,
    titre: "Sur-mesure & IA",
    texte: "Applications métier, intégrations et accompagnement IA quand le standard s'arrête.",
    misEnAvant: true,
  },
  {
    href: "/telemaintenance",
    icon: Headphones,
    titre: "Télémaintenance",
    texte: "Intervention à distance sur votre poste, sans déplacement ni délai.",
  },
];

function Metiers() {
  return (
    <section className="bg-sand-0 py-section">
      <div className="mx-auto max-w-container px-gutter">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">Nos quatre métiers</h2>
          <p className="text-lg text-sand-600">
            Un interlocuteur unique pour votre système d&apos;information, du logiciel de gestion
            au développement spécifique.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METIERS.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className={`group flex flex-col rounded-2xl border bg-sand-0 p-6 shadow-card transition-shadow hover:shadow-card-hover ${
                m.misEnAvant ? "border-accent-200 bg-accent-50/40" : "border-sand-200"
              }`}
            >
              <span
                className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                  m.misEnAvant ? "bg-accent-600" : "bg-primary-600"
                }`}
              >
                <m.icon className="h-5 w-5 text-sand-0" aria-hidden="true" />
              </span>

              <h3 className="mb-2 font-display text-lg font-semibold text-sand-900">{m.titre}</h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-sand-600">{m.texte}</p>

              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                En savoir plus
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Metiers;
