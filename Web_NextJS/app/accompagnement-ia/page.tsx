import React from "react";
import type { Metadata } from "next";
import { Sparkles, Search, GraduationCap, Rocket, ArrowRight, ShieldCheck, Users, FileSearch } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Accompagnement IA pour les PME",
  description:
    "Audit des cas d'usage, formation des équipes et déploiement d'assistants connectés à vos données métier. Solution Logique, Annecy.",
};

const ETAPES = [
  {
    icon: Search,
    titre: "Audit des cas d'usage",
    texte:
      "Nous regardons comment vos équipes travaillent réellement et nous identifions les tâches où l'IA fait gagner du temps — ainsi que celles où elle n'apporte rien.",
    points: [
      { icon: FileSearch, texte: "Analyse des tâches répétitives" },
      { icon: ShieldCheck, texte: "Cadrage des données mobilisables" },
      { icon: Search, texte: "Priorisation par gain réel" },
    ],
  },
  {
    icon: GraduationCap,
    titre: "Formation des équipes",
    texte:
      "Un outil que personne ne sait utiliser ne sert à rien. Nous formons vos collaborateurs sur leurs propres cas, avec leurs propres documents.",
    points: [
      { icon: Users, texte: "Sessions sur vos cas concrets" },
      { icon: ShieldCheck, texte: "Bonnes pratiques et limites à connaître" },
      { icon: GraduationCap, texte: "Montée en autonomie progressive" },
    ],
  },
  {
    icon: Rocket,
    titre: "Déploiement d'assistants",
    texte:
      "Des assistants connectés à vos données métier — documentation, historique commercial, procédures — plutôt qu'un outil générique déconnecté de votre activité.",
    points: [
      { icon: Rocket, texte: "Assistants connectés à vos données" },
      { icon: ShieldCheck, texte: "Maîtrise de ce qui sort de l'entreprise" },
      { icon: Users, texte: "Suivi de l'usage après mise en service" },
    ],
  },
];

export default function AccompagnementIAPage() {
  return (
    <>
      <PageHero
        badge={{ icon: <Sparkles />, text: "Accompagnement IA" }}
        title="L'IA dans votre PME,"
        titleHighlight="sans esbroufe"
        description="Identifier ce qui sert vraiment, former vos équipes, déployer ce qui tient dans la durée. Le reste, nous vous le déconseillerons."
      />

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-container px-gutter">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">Trois étapes, dans cet ordre</h2>
            <p className="text-lg text-sand-600">
              La plupart des projets d'IA échouent parce qu'ils commencent par l'outil.
              Nous commençons par l'usage.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {ETAPES.map((etape, i) => (
              <article key={etape.titre} className="rounded-2xl border border-sand-200 bg-sand-0 p-7 shadow-card">
                <div className="mb-5 flex items-center gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600">
                    <etape.icon className="h-5 w-5 text-sand-0" aria-hidden="true" />
                  </span>
                  <span className="font-display text-2xl font-bold text-accent-600">0{i + 1}</span>
                </div>
                <h3 className="mb-3 font-display text-h3 font-semibold text-sand-900">{etape.titre}</h3>
                <p className="mb-5 text-sm leading-relaxed text-sand-600">{etape.texte}</p>
                <ul className="space-y-2.5 border-t border-sand-200 pt-5">
                  {etape.points.map((p) => (
                    <li key={p.texte} className="flex items-start gap-3 text-sm text-sand-700">
                      <p.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-600" aria-hidden="true" />
                      {p.texte}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-sand-200 bg-sand-50 py-section">
        <div className="mx-auto max-w-3xl px-gutter">
          <h2 className="mb-6 text-center font-display text-h2 font-bold text-sand-900">
            Ce que nous ne ferons pas
          </h2>
          <ul className="space-y-4">
            {[
              "Vous vendre un outil dont vous n'avez pas l'usage.",
              "Promettre des gains que nous ne savons pas mesurer.",
              "Envoyer vos données sensibles n'importe où sans vous le dire.",
              "Vous laisser seul une fois l'outil installé.",
            ].map((ligne) => (
              <li key={ligne} className="flex items-start gap-3 rounded-xl border border-sand-200 bg-sand-0 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600" aria-hidden="true" />
                <span className="text-sand-700">{ligne}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-2xl px-gutter text-center">
          <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">
            Par où commencer ?
          </h2>
          <p className="mb-8 text-lg text-sand-600">
            Un échange suffit souvent à distinguer ce qui vaut le coup de ce qui n'est
            qu'un effet de mode.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg" icon={<ArrowRight />} iconPosition="right">
              Demander un échange
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
