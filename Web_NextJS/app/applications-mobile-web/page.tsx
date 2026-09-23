import React from "react";
import type { Metadata } from "next";
import {
  Smartphone,
  Monitor,
  Plug,
  Database,
  WifiOff,
  RefreshCw,
  Lock,
  Wrench,
  CalendarDays,
  ArrowRightLeft,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ParcoursTerrain from "@/components/sections/ParcoursTerrain";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Applications mobile et web connectées à EBP ou à votre ERP",
  description:
    "Applications terrain, portails web et tableaux de bord connectés à EBP ou à votre ERP existant. Données synchronisées, usage hors ligne. Solution Logique, Annecy.",
};

const PRINCIPES = [
  {
    icon: Plug,
    titre: "Branchée sur votre ERP",
    texte:
      "L'application lit et écrit dans EBP, ou dans l'ERP que vous utilisez déjà. Vos données restent à un seul endroit, sans double saisie.",
  },
  {
    icon: WifiOff,
    titre: "Utilisable hors connexion",
    texte:
      "Sur un chantier ou en sous-sol, le réseau manque. L'application continue de fonctionner et se synchronise dès que la connexion revient.",
  },
  {
    icon: Monitor,
    titre: "Mobile et web, un seul outil",
    texte:
      "Le technicien sur son téléphone, le bureau sur son navigateur : les mêmes données, adaptées à chaque écran.",
  },
  {
    icon: Lock,
    titre: "Accès maîtrisés",
    texte:
      "Chaque utilisateur ne voit que ce qui le concerne. Les connexions à votre base sont limitées au strict nécessaire.",
  },
];

const REALISATIONS = [
  {
    icon: Wrench,
    contexte: "Entreprise de services informatiques",
    titre: "Application d'intervention pour les techniciens",
    texte:
      "Les techniciens consultent leur planning, la fiche client et l'historique sur leur téléphone, puis saisissent leur intervention sur place. Le bureau la retrouve dans EBP, prête à être facturée.",
    points: ["Application mobile et interface web", "Synchronisée avec EBP", "En production"],
  },
  {
    icon: CalendarDays,
    contexte: "Organisation professionnelle de santé",
    titre: "Plateforme de planning de garde",
    texte:
      "Plusieurs centaines de praticiens consultent leurs gardes, confirment leur présence et échangent leurs créneaux entre eux, avec une carte publique pour les patients.",
    points: ["Application web responsive", "Import des fichiers existants", "En production"],
  },
  {
    icon: ArrowRightLeft,
    contexte: "Groupe de quatre sociétés",
    titre: "Reprise de données vers EBP",
    texte:
      "Articles, stocks et grilles tarifaires de plusieurs réseaux de distribution repris depuis des classeurs, contrôlés ligne à ligne, puis importés dans chaque dossier EBP.",
    points: ["Plusieurs milliers de prix contrôlés", "Un dossier EBP par société", "Livré"],
  },
];

const ETAPES = [
  { n: "01", titre: "On part du terrain", texte: "Nous observons qui saisit quoi, où, et à quel moment la donnée se perd aujourd'hui." },
  { n: "02", titre: "On regarde votre ERP", texte: "Ce qu'il sait exposer, ce qu'il faut synchroniser, ce qui doit rester en lecture seule." },
  { n: "03", titre: "On livre un premier écran", texte: "Un parcours utile en quelques semaines, testé par vos équipes avant d'aller plus loin." },
  { n: "04", titre: "On fait évoluer", texte: "Nouveaux écrans, nouveaux utilisateurs, maintenance et mises à jour dans la durée." },
];

export default function ApplicationsMobileWebPage() {
  return (
    <>
      <PageHero
        badge={{ icon: <Smartphone />, text: "Applications mobile et web" }}
        title="Votre ERP dans la poche"
        titleHighlight="de vos équipes"
        description="Applications terrain, portails web et tableaux de bord connectés à EBP ou à l'ERP que vous utilisez déjà."
        primaryCTA={{ text: "Parler de votre projet", href: "/contact" }}
      />

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-container px-gutter">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">Ce qui ne change pas d'un projet à l'autre</h2>
            <p className="text-lg text-sand-600">
              Une application métier ne vaut que si elle s'appuie sur vos données réelles.
              Nous la construisons autour de votre ERP, pas à côté.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPES.map((p) => (
              <article key={p.titre} className="rounded-2xl border border-sand-200 bg-sand-0 p-6 shadow-card">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600">
                  <p.icon className="h-5 w-5 text-sand-0" aria-hidden="true" />
                </span>
                <h3 className="mb-2 font-display text-lg font-semibold text-sand-900">{p.titre}</h3>
                <p className="text-sm leading-relaxed text-sand-600">{p.texte}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-sand-200 bg-sand-50 py-section">
        <div className="mx-auto max-w-container px-gutter">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">Quelques réalisations</h2>
            <p className="text-lg text-sand-600">
              Des projets menés pour nos clients, décrits sans les nommer.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {REALISATIONS.map((r) => (
              <article key={r.titre} className="flex flex-col rounded-2xl border border-sand-200 bg-sand-0 p-7 shadow-card">
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600">
                    <r.icon className="h-5 w-5 text-sand-0" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wide text-accent-600">{r.contexte}</span>
                </div>
                <h3 className="mb-3 font-display text-h3 font-semibold text-sand-900">{r.titre}</h3>
                <p className="mb-5 text-sm leading-relaxed text-sand-600">{r.texte}</p>
                <ul className="mt-auto space-y-2.5 border-t border-sand-200 pt-5">
                  {r.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-sand-700">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-600" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-container px-gutter">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">Le terrain, côté bureau et côté mobile</h2>
            <p className="text-lg text-sand-600">
              Trois parcours de l&apos;application que nous utilisons au quotidien, avec des données fictives.
            </p>
          </div>
          <ParcoursTerrain />
        </div>
      </section>

      <section className="border-t border-sand-200 bg-sand-50 py-section">
        <div className="mx-auto max-w-container px-gutter">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">Votre ERP n'est pas EBP ?</h2>
            <p className="text-lg text-sand-600">
              Nous travaillons aussi avec d'autres ERP et logiciels métier, dès qu'ils proposent
              une API, un export ou un accès à leur base. Nous vérifions ce point ensemble,
              avant tout chiffrage.
            </p>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ETAPES.map((etape) => (
              <li key={etape.n} className="rounded-2xl border border-sand-200 bg-sand-0 p-6">
                <span className="mb-3 block font-display text-2xl font-bold text-accent-600">{etape.n}</span>
                <h3 className="mb-2 font-display text-lg font-semibold text-sand-900">{etape.titre}</h3>
                <p className="text-sm leading-relaxed text-sand-600">{etape.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-sand-200 bg-sand-0 py-section">
        <div className="mx-auto max-w-2xl px-gutter text-center">
          <div className="mb-6 flex justify-center gap-3 text-accent-600">
            <Database className="h-6 w-6" aria-hidden="true" />
            <RefreshCw className="h-6 w-6" aria-hidden="true" />
            <Smartphone className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">
            Dites-nous où vos équipes perdent l'information
          </h2>
          <p className="mb-8 text-lg text-sand-600">
            Un tableur tenu à côté du logiciel, une feuille papier ressaisie le soir :
            c'est souvent là qu'une application a le plus d'effet.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg" icon={<ArrowRight />} iconPosition="right">
              Parler de votre projet
            </Button>
            <Button href="/developpement-sur-mesure" variant="secondary" size="lg">
              Développement sur-mesure
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
