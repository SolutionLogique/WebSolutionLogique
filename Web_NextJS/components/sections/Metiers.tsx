import React from "react";
import Link from "next/link";
import { Package, Server, Code2, ShieldCheck, ArrowRight } from "lucide-react";

/* Les quatre metiers, en entree de site.
   Remplace l'ancienne section Services et ses six cartes en six accents
   differents (bleu, violet, vert, orange, bleu, rouge) : un arc-en-ciel
   sans hierarchie. */

/* Ordre de la maquette du 29/10/2026 : l'IA et le developpement d'abord,
   l'informatique ensuite (maintenance, puis securite et telephonie), EBP en
   dernier. */
const METIERS = [
  {
    href: "/sur-mesure",
    icon: Code2,
    titre: "IA & applications sur mesure",
    texte: "Applications métier, mobiles et web, intégrations entre vos logiciels, et l'IA appliquée à vos propres données.",
    misEnAvant: true,
  },
  {
    href: "/informatique",
    icon: Server,
    titre: "Infogérance & maintenance",
    texte: "Postes, serveurs, réseau et sauvegardes suivis sous contrat, dépannés à distance par télémaintenance.",
  },
  {
    href: "/nosServices",
    icon: ShieldCheck,
    titre: "Sécurité & téléphonie",
    texte: "Pare-feu, antivirus et antispam managés, audit de cybersécurité ; téléphonie IP et accès internet.",
  },
  {
    href: "/logiciels",
    icon: Package,
    titre: "Logiciels EBP",
    texte: "Comptabilité, gestion commerciale, bâtiment : installation, mises à jour, assistance et formation.",
  },
];

function Metiers() {
  return (
    <section className="bg-sand-0 py-section">
      <div className="mx-auto max-w-container px-gutter">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">Ce que nous faisons</h2>
          <p className="text-lg text-sand-600">
            Un interlocuteur unique pour votre système d&apos;information, de l&apos;application
            sur mesure au poste de travail, jusqu&apos;au logiciel de gestion.
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
