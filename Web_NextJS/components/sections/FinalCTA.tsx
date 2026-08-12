import React from "react";
import { ArrowRight, Headphones, Phone, MapPin, Clock, Mail } from "lucide-react";
import Button from "@/components/ui/Button";

/* Section de contact finale.
   Le fond degrade bleu nuit et le bouton vert en degrade cedent la place aux
   aplats du design system. Les horaires affiches sont les horaires reels. */

const COORDONNEES = [
  {
    icon: Phone,
    libelle: "Téléphone",
    valeur: "04 50 64 02 33",
    href: "tel:0450640233",
  },
  {
    icon: Mail,
    libelle: "E-mail",
    valeur: "site@solution-logique.fr",
    href: "mailto:site@solution-logique.fr",
  },
  {
    icon: MapPin,
    libelle: "Adresse",
    valeur: "475 Rte des Vernes, 74370 Annecy",
  },
  {
    icon: Clock,
    libelle: "Horaires",
    valeur: "Lun - Ven : 8h30 - 12h00 / 14h00 - 17h30",
    complement: "Fermé samedi et dimanche",
  },
];

function FinalCTA() {
  return (
    <section className="border-t border-sand-200 bg-sand-50 py-section">
      <div className="mx-auto max-w-container px-gutter">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Appel a l'action */}
          <div>
            <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">
              Parlons de votre <span className="text-primary-600">projet</span>
            </h2>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-sand-600">
              Un diagnostic gratuit de votre système informatique, sans engagement.
              Nous vous dirons ce qui mérite d&apos;être fait, et dans quel ordre.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg" icon={<ArrowRight />} iconPosition="right">
                Demander un devis gratuit
              </Button>
              <Button href="/telemaintenance" variant="secondary" size="lg" icon={<Headphones />}>
                Télémaintenance
              </Button>
            </div>
          </div>

          {/* Coordonnees */}
          <div className="rounded-2xl border border-sand-200 bg-sand-0 p-7 shadow-card lg:p-8">
            <h3 className="mb-6 font-display text-h3 font-semibold text-sand-900">Nos coordonnées</h3>

            <dl className="space-y-5">
              {COORDONNEES.map((c) => (
                <div key={c.libelle} className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                    <c.icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-sm text-sand-500">{c.libelle}</dt>
                    <dd className="font-semibold text-sand-900">
                      {c.href ? (
                        <a href={c.href} className="transition-colors hover:text-primary-600">
                          {c.valeur}
                        </a>
                      ) : (
                        c.valeur
                      )}
                      {c.complement && (
                        <span className="block text-sm font-normal text-sand-500">{c.complement}</span>
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
