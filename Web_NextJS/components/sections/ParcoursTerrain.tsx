"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CalendarDays, Clock, PackageCheck, Sun, Moon } from "lucide-react";

/* Parcours terrain en images : captures web a gauche (elles defilent),
   telephone fixe a droite. Chaque capture existe en clair et en sombre.

   Les captures viennent de l'application en production, avec des donnees
   entierement fictives : noms, societes, adresses et montants sont remplaces
   avant l'affichage. Aucun client reel n'apparait. */

type Theme = "light" | "dark";
type Capture = { src: string; alt: string; legende: string };
type Parcours = {
  id: string;
  label: string;
  icon: React.ElementType;
  intro: string;
  web: Capture[];
  mobile: Capture[];
};

const PARCOURS: Parcours[] = [
  {
    id: "planning",
    label: "Planifier et suivre",
    icon: CalendarDays,
    intro:
      "Au bureau, on répartit la charge et on affecte les interventions. Sur le terrain, chacun voit ce qu'il a à faire, dans l'ordre, avec le trajet.",
    web: [
      { src: "charge-equipe", alt: "Charge de l'équipe sur la semaine, par technicien et par jour", legende: "La charge de l'équipe sur la semaine : qui est disponible, qui est saturé, où un délai dérape." },
      { src: "dispatch", alt: "Dispatch du jour avec les interventions sur la ligne de chaque technicien", legende: "Le dispatch du jour : chaque intervention sur la ligne de son technicien, et celles qui restent à affecter." },
      { src: "calendrier", alt: "Planning de la semaine par type d'intervention", legende: "Le planning de la semaine, coloré par type d'intervention." },
      { src: "affectation-jour", alt: "Affectation du jour, une tâche par personne", legende: "L'affectation du jour : une tâche par personne, que chacun retrouve sur son téléphone." },
      { src: "fiche-intervention", alt: "Fiche d'une intervention avec planification, client et technicien", legende: "La fiche d'intervention : planification, client, pièces, temps passé, signatures et rapport PDF." },
    ],
    mobile: [
      { src: "aujourdhui", alt: "Écran Aujourd'hui du technicien avec l'intervention en cours", legende: "Ma journée : l'intervention en cours et ce qui reste à faire." },
      { src: "journee", alt: "Chronologie des interventions de la journée", legende: "La tournée du jour, intervention par intervention." },
      { src: "planning", alt: "Planning de l'équipe sur mobile, jour par jour", legende: "Le planning de l'équipe, jour par jour." },
    ],
  },
  {
    id: "pointage",
    label: "Pointage et paie",
    icon: Clock,
    intro:
      "Le technicien pointe son temps depuis son téléphone. Le responsable valide la journée, puis les heures partent en paie dans EBP. Rien ne part sans validation.",
    web: [
      { src: "pointages", alt: "Journées de pointage en attente d'approbation par le responsable", legende: "Les journées soumises par les techniciens, à valider avant l'envoi en paie EBP." },
    ],
    mobile: [
      { src: "pointage", alt: "Pointage du jour sur mobile, lignes par intervention", legende: "Le pointage du jour, ligne par intervention, envoyé au chef pour validation." },
    ],
  },
  {
    id: "stock",
    label: "Stock et chantier",
    icon: PackageCheck,
    intro:
      "Au dépôt, la douchette enregistre les réceptions et les départs vers les chantiers. Chaque mouvement arrive dans EBP, rattaché à la bonne affaire.",
    web: [
      { src: "scan-reception", alt: "Poste de scan en réception, panier d'articles scannés", legende: "Réception au dépôt : chaque scan ajoute l'article au bon d'entrée." },
      { src: "scan-chantier", alt: "Poste de scan en sortie vers un chantier", legende: "Départ chantier : le matériel sort du stock et se rattache à l'affaire ou au chantier." },
    ],
    mobile: [
      { src: "depot", alt: "Écran dépôt sur mobile avec les livraisons attendues", legende: "Les livraisons attendues et les alertes de stock, côté terrain." },
    ],
  },
];

const webSrc = (name: string, theme: Theme) => `/assets/parcours/${name}-${theme}.webp`;
const mobileSrc = (name: string, theme: Theme) => `/assets/parcours/mobile-${name}-${theme}.webp`;

export default function ParcoursTerrain() {
  const [parcoursId, setParcoursId] = useState(PARCOURS[0].id);
  const [theme, setTheme] = useState<Theme>("light");
  const [mobileIndex, setMobileIndex] = useState(0);

  const parcours = PARCOURS.find((p) => p.id === parcoursId) ?? PARCOURS[0];
  const phone = parcours.mobile[Math.min(mobileIndex, parcours.mobile.length - 1)];

  const choisirParcours = (id: string) => {
    setParcoursId(id);
    setMobileIndex(0);
  };

  return (
    <div>
      <div className="mb-10 flex flex-col items-center gap-5">
        <div role="tablist" aria-label="Parcours" className="flex flex-wrap justify-center gap-2">
          {PARCOURS.map((p) => {
            const actif = p.id === parcours.id;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={actif}
                onClick={() => choisirParcours(p.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  actif
                    ? "border-primary-600 bg-primary-600 text-sand-0"
                    : "border-sand-200 bg-sand-0 text-sand-700 hover:border-primary-600 hover:text-primary-600"
                }`}
              >
                <p.icon className="h-4 w-4" aria-hidden="true" />
                {p.label}
              </button>
            );
          })}
        </div>

        <div className="inline-flex rounded-full border border-sand-200 bg-sand-0 p-1" role="group" aria-label="Thème des captures">
          {([
            ["light", "Clair", Sun],
            ["dark", "Sombre", Moon],
          ] as const).map(([value, label, Icon]) => (
            <button
              key={value}
              type="button"
              aria-pressed={theme === value}
              onClick={() => setTheme(value)}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                theme === value ? "bg-sand-900 text-sand-0" : "text-sand-600 hover:text-sand-900"
              }`}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>

        <p className="max-w-2xl text-center text-sand-600">{parcours.intro}</p>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          {parcours.web.map((c) => (
            <figure key={c.src}>
              <div className="overflow-hidden rounded-xl border border-sand-200 bg-sand-900 shadow-card">
                <div className="flex items-center gap-1.5 px-4 py-2.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-sand-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-sand-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-sand-600" />
                </div>
                <Image src={webSrc(c.src, theme)} alt={c.alt} width={1200} height={833} className="h-auto w-full" />
              </div>
              <figcaption className="mt-3 text-sm text-sand-600">{c.legende}</figcaption>
            </figure>
          ))}
        </div>

        <figure className="mx-auto w-full max-w-[280px] lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-[2.5rem] border-[10px] border-sand-900 bg-sand-900 shadow-card">
            <Image
              src={mobileSrc(phone.src, theme)}
              alt={phone.alt}
              width={540}
              height={1002}
              className="h-auto w-full rounded-[1.8rem]"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-sand-600">{phone.legende}</figcaption>
          {parcours.mobile.length > 1 && (
            <div className="mt-4 flex justify-center gap-2" role="group" aria-label="Écrans mobiles">
              {parcours.mobile.map((m, i) => (
                <button
                  key={m.src}
                  type="button"
                  aria-pressed={i === mobileIndex}
                  aria-label={m.alt}
                  onClick={() => setMobileIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === mobileIndex ? "w-6 bg-primary-600" : "w-2.5 bg-sand-200 hover:bg-sand-500"
                  }`}
                />
              ))}
            </div>
          )}
        </figure>
      </div>

      <p className="mt-8 text-center text-xs text-sand-500">
        Captures de l&apos;application en production. Les noms, sociétés, adresses et montants affichés sont fictifs.
      </p>
    </div>
  );
}
