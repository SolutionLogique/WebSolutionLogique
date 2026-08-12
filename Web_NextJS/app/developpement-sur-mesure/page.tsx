import React from "react";
import type { Metadata } from "next";
import { Code2, Plug, FileSpreadsheet, ArrowRight, Smartphone, Database, RefreshCw } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Développement sur-mesure autour d'EBP",
  description:
    "Applications métier, intégrations et états sur-mesure autour de vos logiciels EBP. Solution Logique, Annecy — 30 ans d'expérience terrain.",
};

const OFFRES = [
  {
    icon: Code2,
    titre: "Applications métier",
    texte:
      "Quand vos équipes saisissent deux fois la même information, ou tiennent un tableur en parallèle du logiciel, c'est qu'il manque un outil. Nous le construisons.",
    exemples: [
      { icon: Smartphone, texte: "Applications terrain pour les techniciens" },
      { icon: Database, texte: "Portails web pour vos clients" },
      { icon: FileSpreadsheet, texte: "Tableaux de bord de pilotage" },
    ],
  },
  {
    icon: Plug,
    titre: "Intégrations et automatisations",
    texte:
      "Vos outils se parlent rarement d'eux-mêmes. Nous relions EBP à votre CRM, votre banque, votre boutique en ligne ou vos outils métier, et nous supprimons les ressaisies.",
    exemples: [
      { icon: RefreshCw, texte: "Synchronisation entre applications" },
      { icon: Database, texte: "Imports et exports automatisés" },
      { icon: Plug, texte: "Connexions vers des services tiers" },
    ],
  },
  {
    icon: FileSpreadsheet,
    titre: "États, rapports et requêtes",
    texte:
      "Documents commerciaux à votre image, états comptables spécifiques, extractions ciblées dans la base : le standard couvre le général, nous couvrons votre cas.",
    exemples: [
      { icon: FileSpreadsheet, texte: "Devis, factures et bons de livraison personnalisés" },
      { icon: Database, texte: "États comptables et analytiques sur mesure" },
      { icon: RefreshCw, texte: "Extractions et requêtes récurrentes" },
    ],
  },
];

const DEMARCHE = [
  { n: "01", titre: "On écoute", texte: "Nous partons de votre organisation réelle, pas d'un cahier des charges théorique." },
  { n: "02", titre: "On cadre", texte: "Périmètre, budget et délai sont posés avant d'écrire la première ligne de code." },
  { n: "03", titre: "On livre par étapes", texte: "Vous voyez fonctionner ce qui est développé au fur et à mesure, sans effet tunnel." },
  { n: "04", titre: "On accompagne", texte: "Formation des utilisateurs, corrections et évolutions dans la durée." },
];

export default function DeveloppementSurMesurePage() {
  return (
    <>
      <PageHero
        badge={{ icon: <Code2 />, text: "Développement sur-mesure" }}
        title="Quand EBP s'arrête,"
        titleHighlight="on continue"
        description="Applications métier, intégrations et états conçus autour de vos logiciels et de votre façon de travailler."
      />

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-container px-gutter">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">Trois façons d'intervenir</h2>
            <p className="text-lg text-sand-600">
              Selon que le manque porte sur un outil absent, des outils qui ne communiquent pas,
              ou un document que le standard ne sait pas produire.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {OFFRES.map((offre) => (
              <article key={offre.titre} className="rounded-2xl border border-sand-200 bg-sand-0 p-7 shadow-card">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600">
                  <offre.icon className="h-5 w-5 text-sand-0" aria-hidden="true" />
                </span>
                <h3 className="mb-3 font-display text-h3 font-semibold text-sand-900">{offre.titre}</h3>
                <p className="mb-5 text-sm leading-relaxed text-sand-600">{offre.texte}</p>
                <ul className="space-y-2.5 border-t border-sand-200 pt-5">
                  {offre.exemples.map((ex) => (
                    <li key={ex.texte} className="flex items-start gap-3 text-sm text-sand-700">
                      <ex.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-600" aria-hidden="true" />
                      {ex.texte}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-sand-200 bg-sand-50 py-section">
        <div className="mx-auto max-w-container px-gutter">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">Comment nous travaillons</h2>
            <p className="text-lg text-sand-600">
              Un développement rate rarement pour des raisons techniques. Il rate quand le besoin
              a été mal compris ou le périmètre mal tenu.
            </p>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DEMARCHE.map((etape) => (
              <li key={etape.n} className="rounded-2xl border border-sand-200 bg-sand-0 p-6">
                <span className="mb-3 block font-display text-2xl font-bold text-accent-600">{etape.n}</span>
                <h3 className="mb-2 font-display text-lg font-semibold text-sand-900">{etape.titre}</h3>
                <p className="text-sm leading-relaxed text-sand-600">{etape.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-2xl px-gutter text-center">
          <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">
            Décrivez-nous ce qui vous fait perdre du temps
          </h2>
          <p className="mb-8 text-lg text-sand-600">
            Nous vous dirons franchement si un développement se justifie, ou si un réglage
            de l'existant suffit.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg" icon={<ArrowRight />} iconPosition="right">
              Parler de votre projet
            </Button>
            <Button href="tel:0450640233" variant="secondary" size="lg">
              04 50 64 02 33
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
