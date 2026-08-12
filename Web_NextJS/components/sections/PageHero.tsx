"use client";

import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import Button from "@/components/ui/Button";

/* Hero des pages interieures.

   Passe en clair. L'ancienne version etait un degrade bleu nuit avec deux
   halos flous animes en boucle infinie, un quadrillage et un fondu blanc en
   pied. Elle imposait aussi un titre en degrade bleu-vers-vert.

   L'API est inchangee : 5 pages l'utilisent deja. */

interface PageHeroProps {
  badge?: {
    icon: React.ReactNode;
    text: string;
  };
  title: string;
  titleHighlight: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
}

function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  primaryCTA = { text: "Demander un devis", href: "/contact" },
  secondaryCTA = { text: "04 50 64 02 33", href: "tel:0450640233" },
}: PageHeroProps) {
  return (
    <section className="border-b border-sand-200 bg-sand-50">
      <div className="mx-auto max-w-container px-gutter py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3.5 py-1.5 text-sm font-semibold text-primary-700">
              <span className="flex items-center [&>svg]:h-4 [&>svg]:w-4" aria-hidden="true">
                {badge.icon}
              </span>
              {badge.text}
            </span>
          )}

          <h1 className="mb-5 font-display text-h1 font-bold text-sand-900">
            {title}{" "}
            <span className="text-primary-600">{titleHighlight}</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-sand-600">
            {description}
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={primaryCTA.href} size="lg" icon={<ArrowRight />} iconPosition="right">
              {primaryCTA.text}
            </Button>
            <Button href={secondaryCTA.href} variant="secondary" size="lg" icon={<Phone />}>
              {secondaryCTA.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
