import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Sparkles, ArrowRight, Plug, FileSpreadsheet, GraduationCap } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Développement sur-mesure & accompagnement IA",
  description:
    "Applications métier autour d'EBP, intégrations, états sur-mesure et accompagnement IA pour les PME de Haute-Savoie. Solution Logique, Annecy.",
};

const POLES = [
  {
    href: "/developpement-sur-mesure",
    icon: Code2,
    titre: "Développement sur-mesure",
    resume:
      "Quand le logiciel standard s'arrête, on continue. Applications métier, intégrations et états conçus pour votre organisation.",
    points: [
      { icon: Code2, texte: "Applications métier autour d'EBP" },
      { icon: Plug, texte: "Intégrations et automatisations" },
      { icon: FileSpreadsheet, texte: "États, rapports et requêtes" },
    ],
  },
  {
    href: "/accompagnement-ia",
    icon: Sparkles,
    titre: "Accompagnement IA",
    resume:
      "Passer de la curiosité à l'usage. On identifie les cas d'usage réels, on forme vos équipes, on déploie ce qui sert vraiment.",
    points: [
      { icon: Sparkles, texte: "Audit des cas d'usage" },
      { icon: GraduationCap, texte: "Formation des équipes" },
      { icon: Plug, texte: "Assistants connectés à vos données" },
    ],
  },
];

export default function SurMesurePage() {
  return (
    <>
      <PageHero
        badge={{ icon: <Sparkles />, text: "Au-delà du logiciel standard" }}
        title="Sur-mesure"
        titleHighlight="& intelligence artificielle"
        description="Trente ans à installer et maintenir des systèmes nous ont appris où le standard s'arrête. Nous développons ce qui manque, et nous vous accompagnons sur l'IA sans promesse en l'air."
      />

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-container px-gutter">
          <div className="grid gap-6 lg:grid-cols-2">
            {POLES.map((pole) => (
              <article
                key={pole.href}
                className="flex flex-col rounded-2xl border border-sand-200 bg-sand-0 p-8 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600">
                  <pole.icon className="h-6 w-6 text-sand-0" aria-hidden="true" />
                </span>

                <h2 className="mb-3 font-display text-h3 font-semibold text-sand-900">{pole.titre}</h2>
                <p className="mb-6 leading-relaxed text-sand-600">{pole.resume}</p>

                <ul className="mb-8 space-y-3">
                  {pole.points.map((p) => (
                    <li key={p.texte} className="flex items-center gap-3 text-sm text-sand-700">
                      <p.icon className="h-4 w-4 flex-shrink-0 text-accent-600" aria-hidden="true" />
                      {p.texte}
                    </li>
                  ))}
                </ul>

                <Link
                  href={pole.href}
                  className="mt-auto inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
                >
                  En savoir plus
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-sand-200 bg-sand-50 py-section">
        <div className="mx-auto max-w-2xl px-gutter text-center">
          <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">
            Un besoin que le standard ne couvre pas ?
          </h2>
          <p className="mb-8 text-lg text-sand-600">
            Décrivez-nous votre situation. Nous vous dirons franchement si un développement
            se justifie, ou si une solution existante suffit.
          </p>
          <Button href="/contact" size="lg" icon={<ArrowRight />} iconPosition="right">
            Parlons de votre projet
          </Button>
        </div>
      </section>
    </>
  );
}
