"use client";

import React from "react";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

/* Hero de la page d'accueil.

   Trois corrections par rapport a la version precedente :
   - le badge flottant « Securite Renforcee » est retire : il recouvrait un
     paragraphe ;
   - sur mobile, les appels a l'action sont visibles SANS defiler. Avant,
     badge + illustration + titre + sous-titre + paragraphe remplissaient
     l'ecran et les boutons passaient sous la ligne de flottaison — le defaut
     le plus couteux en conversion ;
   - le fond degrade bleu nuit cede la place au sable, et le titre en degrade
     bleu-vers-vert a un aplat. */

const PREUVES = [
  { valeur: "30+", libelle: "Années d'expertise" },
  { valeur: "500+", libelle: "Clients accompagnés" },
  { valeur: "8", libelle: "Experts certifiés" },
  { valeur: "Qualiopi", libelle: "Organisme certifié" },
];

function Hero() {
  return (
    <section className="border-b border-sand-200 bg-sand-50">
      <div className="mx-auto max-w-container px-gutter py-14 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1.5 text-sm font-semibold text-primary-700">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            30 ans d&apos;expertise en Haute-Savoie
          </span>

          <h1 className="mb-5 font-display text-h1 font-bold text-sand-900">
            Votre partenaire <span className="text-primary-600">informatique</span> de confiance
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-sand-600">
            Logiciels EBP, infrastructure, développement sur-mesure et accompagnement IA
            pour les PME, TPE et collectivités de la région.
          </p>

          {/* Les appels a l'action viennent avant tout element decoratif :
              c'est ce qui garantit leur visibilite sans defilement sur mobile. */}
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg" icon={<ArrowRight />} iconPosition="right">
              Demander un devis
            </Button>
            <Button href="tel:0450640233" variant="secondary" size="lg" icon={<Phone />}>
              04 50 64 02 33
            </Button>
          </div>
        </div>

        {/* Bande de preuve */}
        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-sand-200 pt-10 sm:grid-cols-4">
          {PREUVES.map((p) => (
            <div key={p.libelle} className="text-center">
              <dt className="sr-only">{p.libelle}</dt>
              <dd>
                <span className="block font-display text-3xl font-bold text-primary-600">{p.valeur}</span>
                <span className="mt-1 block text-sm text-sand-500">{p.libelle}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;
