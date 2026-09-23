"use client";

import React, { useEffect, useRef, useState } from "react";
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
      { src: "semaine-liste", alt: "Liste des missions du jour avec leur statut", legende: "Les missions du jour, avec le temps restant sur celle en cours." },
      { src: "planning", alt: "Planning de l'équipe sur mobile, vue semaine", legende: "Le planning de l'équipe : aujourd'hui, la semaine, les techniciens actifs." },
      { src: "planning-jobs", alt: "Interventions du jour regroupées par technicien", legende: "Qui fait quoi aujourd'hui, technicien par technicien." },
      { src: "planning-mois", alt: "Vue mois du planning avec la charge de chaque jour", legende: "Le mois d'un coup d'œil, la charge de chaque jour." },
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
      { src: "pointage", alt: "Pointage du jour sur mobile, lignes par intervention", legende: "Le pointage du jour, envoyé au chef pour validation." },
      { src: "pointage-lignes", alt: "Lignes de pointage dont une en attente de validation du chef", legende: "Chaque ligne suit son statut, jusqu'à l'import dans EBP." },
      { src: "pointage-calcul", alt: "Détail du calcul des heures de la journée", legende: "Le détail du calcul : durée totale, heures soumises, hors intervention." },
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
      { src: "depot", alt: "Écran dépôt sur mobile avec les livraisons attendues", legende: "Les livraisons fournisseurs attendues, livrées ou partielles." },
      { src: "depot-receptions", alt: "Réceptions récentes au dépôt", legende: "Les réceptions enregistrées au dépôt." },
      { src: "depot-alertes", alt: "Alertes de stock bas au dépôt", legende: "Les articles sous leur seuil, avant la rupture." },
    ],
  },
];

const DUREE_ECRAN = 3500;

const webSrc = (name: string, theme: Theme) => `/assets/parcours/${name}-${theme}.webp`;
const mobileSrc = (name: string, theme: Theme) => `/assets/parcours/mobile-${name}-${theme}.webp`;

export default function ParcoursTerrain() {
  const [parcoursId, setParcoursId] = useState(PARCOURS[0].id);
  const [theme, setTheme] = useState<Theme>("light");
  const [mobileIndex, setMobileIndex] = useState(0);

  const [enPause, setEnPause] = useState(false);
  const [mouvementReduit, setMouvementReduit] = useState(false);
  const survol = useRef(false);

  const parcours = PARCOURS.find((p) => p.id === parcoursId) ?? PARCOURS[0];
  const index = Math.min(mobileIndex, parcours.mobile.length - 1);
  const phone = parcours.mobile[index];

  // Le telephone fait defiler ses ecrans seul. Pause au survol ou au focus,
  // et jamais si le visiteur a demande a reduire les animations.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const maj = () => setMouvementReduit(mq.matches);
    maj();
    mq.addEventListener("change", maj);
    return () => mq.removeEventListener("change", maj);
  }, []);

  const defileSeul = !mouvementReduit && !enPause && parcours.mobile.length > 1;
  // Un minuteur par ecran : cliquer une pastille repart d'une duree pleine,
  // et la barre de progression reste alignee sur le changement d'ecran.
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!defileSeul) return;
    const id = window.setTimeout(() => {
      if (document.hidden || survol.current) {
        setTick((t) => t + 1);
        return;
      }
      setMobileIndex((i) => (i + 1) % parcours.mobile.length);
    }, DUREE_ECRAN);
    return () => window.clearTimeout(id);
  }, [defileSeul, parcours.mobile.length, parcoursId, index, tick]);

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

        <figure
          className="mx-auto w-full max-w-[280px] lg:sticky lg:top-28"
          onMouseEnter={() => { survol.current = true; }}
          onMouseLeave={() => { survol.current = false; }}
          onFocus={() => { survol.current = true; }}
          onBlur={() => { survol.current = false; }}
        >
          <div className="overflow-hidden rounded-[2.5rem] border-[10px] border-sand-900 bg-sand-900 shadow-card">
            <div className="relative aspect-[540/1002] overflow-hidden rounded-[1.8rem]" aria-live="polite">
              {parcours.mobile.map((m, i) => (
                <Image
                  key={m.src + theme}
                  src={mobileSrc(m.src, theme)}
                  alt={i === index ? m.alt : ""}
                  aria-hidden={i !== index}
                  fill
                  sizes="280px"
                  className={`object-cover transition-opacity duration-700 ease-out ${i === index ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
          </div>
          <figcaption className="mt-3 min-h-[2.5rem] text-center text-sm text-sand-600">{phone.legende}</figcaption>
          {parcours.mobile.length > 1 && (
            <div className="mt-3 flex items-center justify-center gap-3">
              <div className="flex gap-1.5" role="group" aria-label="Écrans mobiles">
                {parcours.mobile.map((m, i) => (
                  <button
                    key={m.src}
                    type="button"
                    aria-pressed={i === index}
                    aria-label={m.alt}
                    onClick={() => setMobileIndex(i)}
                    className={`relative h-1.5 overflow-hidden rounded-full transition-all ${i === index ? "w-8 bg-sand-200" : "w-3 bg-sand-200 hover:bg-sand-500"}`}
                  >
                    {i === index && (
                      <span
                        key={`${parcoursId}-${index}-${theme}-${tick}`}
                        className={`absolute inset-y-0 left-0 rounded-full bg-primary-600 ${defileSeul ? "animate-[progression_3.5s_linear_forwards]" : "w-full"}`}
                      />
                    )}
                  </button>
                ))}
              </div>
              {!mouvementReduit && (
                <button
                  type="button"
                  onClick={() => setEnPause((v) => !v)}
                  className="text-xs font-medium text-sand-600 hover:text-sand-900"
                  aria-label={enPause ? "Reprendre le défilement" : "Mettre le défilement en pause"}
                >
                  {enPause ? "Lecture" : "Pause"}
                </button>
              )}
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
