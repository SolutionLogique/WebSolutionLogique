import React from "react";
import Link from "next/link";
import { Code2, Plug, Sparkles, ArrowRight } from "lucide-react";

/* Mise en vedette du nouveau positionnement.
   C'est ce qui distingue l'entreprise d'un simple revendeur EBP : il merite
   une section, pas une ligne dans une liste. */

const VOLETS = [
  {
    href: "/developpement-sur-mesure",
    icon: Code2,
    titre: "Applications métier",
    texte:
      "Pointage, interventions, affectation des techniciens : les outils que le logiciel standard ne fournit pas, construits autour de votre organisation.",
  },
  {
    href: "/developpement-sur-mesure",
    icon: Plug,
    titre: "Intégrations",
    texte:
      "EBP relié à votre CRM, votre banque, votre boutique en ligne. Fin des doubles saisies et des exports manuels.",
  },
  {
    href: "/accompagnement-ia",
    icon: Sparkles,
    titre: "Accompagnement IA",
    texte:
      "Identifier les cas d'usage qui servent vraiment, former vos équipes, déployer des assistants connectés à vos données métier.",
  },
];

function SurMesureIA() {
  return (
    <section className="border-y border-sand-200 bg-sand-50 py-section">
      <div className="mx-auto max-w-container px-gutter">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent-100 bg-accent-50 px-3.5 py-1.5 text-sm font-semibold text-accent-700">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Notre différence
          </span>
          <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">
            Quand EBP s&apos;arrête, <span className="text-primary-600">on continue</span>
          </h2>
          <p className="text-lg text-sand-600">
            Trente ans à installer et maintenir des systèmes nous ont appris où le standard
            s&apos;arrête. Nous développons ce qui manque.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {VOLETS.map((v) => (
            <Link
              key={v.titre}
              href={v.href}
              className="group flex flex-col rounded-2xl border border-sand-200 bg-sand-0 p-7 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600">
                <v.icon className="h-5 w-5 text-sand-0" aria-hidden="true" />
              </span>
              <h3 className="mb-3 font-display text-lg font-semibold text-sand-900">{v.titre}</h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-sand-600">{v.texte}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600">
                Découvrir
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

export default SurMesureIA;
