import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Search,
  Globe,
  Network,
  Code2,
  FileText,
  RefreshCw,
  FileSignature,
  Target,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Audit de cybersécurité et test d'intrusion",
  description:
    "Audit de sécurité, test d'intrusion externe, applicatif et interne pour les PME. Mandat écrit, périmètre défini, rapport priorisé et contre-audit. Solution Logique, Annecy.",
};

const OFFRES = [
  {
    icon: Search,
    titre: "Audit de sécurité",
    texte:
      "Un état des lieux de votre informatique tel qu'elle est réellement configurée : postes, serveurs, messagerie, sauvegardes, comptes et droits d'accès.",
    points: [
      "Revue des configurations et des mises à jour",
      "Comptes, mots de passe et droits d'administration",
      "Sauvegardes testées, pas seulement planifiées",
    ],
  },
  {
    icon: Globe,
    titre: "Test d'intrusion externe",
    texte:
      "Nous regardons votre entreprise comme le ferait un attaquant depuis Internet : ce qui est exposé, ce qui répond, ce qui ne devrait pas être visible.",
    points: [
      "Services et ports accessibles depuis l'extérieur",
      "Messagerie, accès distants et VPN",
      "Sous-domaines et services oubliés",
    ],
  },
  {
    icon: Code2,
    titre: "Test d'intrusion applicatif",
    texte:
      "Votre site, votre extranet ou votre application métier sont testés contre les failles web les plus courantes, selon le référentiel OWASP.",
    points: [
      "Authentification et gestion des sessions",
      "Injections et contrôles d'accès",
      "Exposition de données sensibles",
    ],
  },
  {
    icon: Network,
    titre: "Test d'intrusion interne",
    texte:
      "Que peut faire un poste compromis, ou un visiteur branché sur votre réseau ? Le test se déroule sur site, avec vos équipes informées.",
    points: [
      "Cloisonnement du réseau",
      "Annuaire et partages de fichiers",
      "Élévation de privilèges",
    ],
  },
];

const CADRE = [
  {
    icon: FileSignature,
    titre: "Un mandat écrit",
    texte:
      "Aucun test ne commence sans autorisation signée par un représentant habilité de l'entreprise.",
  },
  {
    icon: Target,
    titre: "Un périmètre défini",
    texte:
      "Cibles, dates et horaires sont fixés à l'avance. Ce qui n'y figure pas n'est pas testé.",
  },
  {
    icon: FileText,
    titre: "Un rapport lisible",
    texte:
      "Une synthèse pour la direction, un détail technique pour votre prestataire, chaque point classé par gravité.",
  },
  {
    icon: RefreshCw,
    titre: "Un contre-audit",
    texte:
      "Une fois les corrections faites, nous vérifions qu'elles ferment réellement les failles relevées.",
  },
];

export default function AuditCybersecuritePage() {
  return (
    <>
      <PageHero
        badge={{ icon: <ShieldCheck />, text: "Audit et test d'intrusion" }}
        title="Savoir où vous êtes vulnérable,"
        titleHighlight="avant un attaquant"
        description="Audit de sécurité et tests d'intrusion pour les PME, dans un cadre écrit et avec un rapport que votre direction peut lire."
        primaryCTA={{ text: "Demander un audit", href: "/contact" }}
      />

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-container px-gutter">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">Quatre niveaux d'analyse</h2>
            <p className="text-lg text-sand-600">
              Un audit dit ce qui est mal configuré. Un test d'intrusion montre ce qu'on peut
              en faire. Les deux se complètent, et nous vous aidons à choisir par où commencer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {OFFRES.map((offre) => (
              <article key={offre.titre} className="rounded-2xl border border-sand-200 bg-sand-0 p-7 shadow-card">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600">
                  <offre.icon className="h-5 w-5 text-sand-0" aria-hidden="true" />
                </span>
                <h3 className="mb-3 font-display text-h3 font-semibold text-sand-900">{offre.titre}</h3>
                <p className="mb-5 text-sm leading-relaxed text-sand-600">{offre.texte}</p>
                <ul className="space-y-2.5 border-t border-sand-200 pt-5">
                  {offre.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-sand-700">
                      <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-600" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-sand-200 bg-sand-50 py-section">
        <div className="mx-auto max-w-container px-gutter">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">Un cadre avant la technique</h2>
            <p className="text-lg text-sand-600">
              Tester la sécurité d'un système sans autorisation est un délit. Chaque mission
              est donc encadrée, du premier échange au rapport final.
            </p>
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CADRE.map((etape, i) => (
              <li key={etape.titre} className="rounded-2xl border border-sand-200 bg-sand-0 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <etape.icon className="h-5 w-5 text-accent-600" aria-hidden="true" />
                  <span className="font-display text-lg font-bold text-accent-600">0{i + 1}</span>
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-sand-900">{etape.titre}</h3>
                <p className="text-sm leading-relaxed text-sand-600">{etape.texte}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-sand-0 py-section">
        <div className="mx-auto max-w-2xl px-gutter text-center">
          <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">
            Par où commencer ?
          </h2>
          <p className="mb-8 text-lg text-sand-600">
            Pour la plupart des PME, un audit suivi d'un test externe couvre l'essentiel.
            Nous en parlons avant de chiffrer quoi que ce soit.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg" icon={<ArrowRight />} iconPosition="right">
              Parler de votre sécurité
            </Button>
            <Button href="/securite" variant="secondary" size="lg">
              Nos solutions de protection
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
