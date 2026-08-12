import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

/* Pied de page.

   Il passe en clair. Raison : il n'existe qu'un seul fichier logo
   (public/assets/logo.webp), sans variante blanche, et son motif bleu/turquoise
   multicolore ne supporte pas une inversion CSS. Plutot que d'afficher un logo
   illisible sur fond sombre, aucune surface sombre ne porte le logo. Le registre
   chaleureux de la direction retenue y gagne aussi.

   Il porte desormais le plan de site COMPLET. Sept pages n'etaient referencees
   ni ici ni dans la navigation — les trois logiciels EBP, les trois formations
   et engagementHandicap. Cette derniere est exigee par la certification
   Qualiopi, qui impose de rendre l'engagement accessible. */

const LIENS = {
  logiciels: [
    { href: "/logiciels", label: "Tous les logiciels EBP" },
    { href: "/ebpcomptabilite", label: "EBP Comptabilité" },
    { href: "/ebpgestionco", label: "EBP Gestion commerciale" },
    { href: "/ebpbatiment", label: "EBP Bâtiment" },
  ],
  services: [
    { href: "/nosServices", label: "Tous nos services" },
    { href: "/informatique", label: "Informatique" },
    { href: "/telecom", label: "Télécom" },
    { href: "/securite", label: "Sécurité" },
    { href: "/telemaintenance", label: "Télémaintenance" },
  ],
  formations: [
    { href: "/formationCompta", label: "Formation Comptabilité" },
    { href: "/formationCommerciale", label: "Formation Gestion commerciale" },
    { href: "/formationBatiment", label: "Formation Bâtiment" },
    { href: "/engagementHandicap", label: "Engagement handicap" },
  ],
  legal: [
    { href: "/conditionsGeneralesVente", label: "Conditions générales de vente" },
  ],
};

function ColonneLiens({ titre, liens }: { titre: string; liens: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-sand-900">
        {titre}
      </h2>
      <ul className="space-y-2.5">
        {liens.map((lien) => (
          <li key={lien.href}>
            <Link
              href={lien.href}
              className="text-sm text-sand-600 transition-colors hover:text-primary-600"
            >
              {lien.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-200 bg-sand-100">
      <div className="mx-auto max-w-container px-gutter">
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
          {/* Identite et coordonnees */}
          <div className="lg:col-span-2">
            <Image
              alt="Solution Logique Informatique"
              src="/assets/logo.webp"
              width={160}
              height={50}
              className="mb-5 h-auto w-auto max-h-11"
            />
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-sand-600">
              Votre partenaire informatique depuis plus de 30 ans. Solutions complètes
              pour PME, TPE et collectivités en Haute-Savoie.
            </p>

            <address className="space-y-3 not-italic">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600" aria-hidden="true" />
                <span className="text-sm text-sand-600">475 Route des Vernes, 74370 Annecy</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-600" aria-hidden="true" />
                <a href="tel:+33450640233" className="text-sm text-sand-600 transition-colors hover:text-primary-600">
                  04 50 64 02 33
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary-600" aria-hidden="true" />
                <a href="mailto:site@solution-logique.fr" className="text-sm text-sand-600 transition-colors hover:text-primary-600">
                  site@solution-logique.fr
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600" aria-hidden="true" />
                <span className="text-sm text-sand-600">
                  Lun - Ven : 8h30 - 12h00 / 14h00 - 17h30
                  <br />
                  <span className="text-sand-500">Fermé samedi et dimanche</span>
                </span>
              </div>
            </address>
          </div>

          <ColonneLiens titre="Logiciels EBP" liens={LIENS.logiciels} />
          <ColonneLiens titre="Services" liens={LIENS.services} />
          <ColonneLiens titre="Formations" liens={LIENS.formations} />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-sand-200 py-6 sm:flex-row">
          <p className="text-sm text-sand-500">
            © {annee} Solution Logique Informatique. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {LIENS.legal.map((lien) => (
              <Link
                key={lien.href}
                href={lien.href}
                className="text-sm text-sand-500 transition-colors hover:text-primary-600"
              >
                {lien.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
