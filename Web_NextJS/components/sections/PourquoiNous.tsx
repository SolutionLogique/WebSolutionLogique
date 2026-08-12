import React from "react";
import { MapPin, History, BadgeCheck, PhoneCall } from "lucide-react";

/* Section « Pourquoi nous ».
   Concue pour tenir sans photo : ni portraits d'equipe, ni vues des locaux
   ne sont disponibles. Ce sont le texte, les chiffres et les certifications
   qui portent la credibilite. */

const RAISONS = [
  {
    icon: MapPin,
    titre: "Une équipe sur place",
    texte:
      "Basés à Annecy, nous intervenons en Haute-Savoie et dans le bassin annécien. Vos interlocuteurs sont les mêmes d'une intervention à l'autre.",
  },
  {
    icon: History,
    titre: "Trente ans de continuité",
    texte:
      "Nous accompagnons certains clients depuis leur première installation. Cette durée nous a appris ce qui tient dans le temps, et ce qui ne tient pas.",
  },
  {
    icon: BadgeCheck,
    titre: "Des compétences certifiées",
    texte:
      "Organisme de formation certifié Qualiopi, partenaire EBP, Microsoft et Dell Technologies. Nos techniciens sont formés sur les solutions qu'ils déploient.",
  },
  {
    icon: PhoneCall,
    titre: "Un support qui répond",
    texte:
      "Du lundi au vendredi, 8h30-12h00 et 14h00-17h30. Une intervention à distance règle la plupart des situations dans la journée.",
  },
];

function PourquoiNous() {
  return (
    <section className="bg-sand-0 py-section">
      <div className="mx-auto max-w-container px-gutter">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">
            Pourquoi les PME de la région nous font confiance
          </h2>
          <p className="text-lg text-sand-600">
            Ni le moins cher, ni le plus gros. Le plus proche et le plus constant.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {RAISONS.map((r) => (
            <div key={r.titre} className="flex gap-5 rounded-2xl border border-sand-200 p-6">
              <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50">
                <r.icon className="h-5 w-5 text-primary-600" aria-hidden="true" />
              </span>
              <div>
                <h3 className="mb-2 font-display text-lg font-semibold text-sand-900">{r.titre}</h3>
                <p className="text-sm leading-relaxed text-sand-600">{r.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PourquoiNous;
