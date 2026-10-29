import React from "react";
import { SITE_URL, filAriane, pageSite, urlPage } from "@/lib/seo";

/* Donnees structurees schema.org (JSON-LD).

   - ORGANISATION : bloc global de l'entreprise, pose une fois par le layout.
     Identite verifiee le 29/10/2026 au registre (annuaire des entreprises,
     BODACC) et dans VIES pour la TVA.
   - <DonneesPage chemin="..." /> : fil d'Ariane (BreadcrumbList) de la page
     et, pour les pages metier, le service decrit (Service). Tout vient du
     registre des pages de lib/seo.ts. */

const ID_ORGANISATION = `${SITE_URL}/#organisation`;

/* Secteurs ou Solution Logique travaille, releves le 29/10/2026 sur les
   adresses des clients factures depuis deux ans (base EBP de l'entreprise) :
   Annecy et son agglomeration d'abord, puis le reste de la Haute-Savoie
   (Chablais, vallee de l'Arve, Genevois) et la Savoie. Une zone ne s'ajoute
   ici que si des clients y sont vraiment suivis. */
export const ZONES_SERVIES = [
  { "@type": "City", "name": "Annecy", "sameAs": "https://fr.wikipedia.org/wiki/Annecy" },
  { "@type": "AdministrativeArea", "name": "Haute-Savoie", "sameAs": "https://fr.wikipedia.org/wiki/Haute-Savoie" },
  { "@type": "Place", "name": "Chablais", "sameAs": "https://fr.wikipedia.org/wiki/Chablais" },
  { "@type": "Place", "name": "Vallée de l'Arve", "sameAs": "https://fr.wikipedia.org/wiki/Vall%C3%A9e_de_l%27Arve" },
  { "@type": "Place", "name": "Genevois haut-savoyard" },
  { "@type": "AdministrativeArea", "name": "Savoie", "sameAs": "https://fr.wikipedia.org/wiki/Savoie_(d%C3%A9partement)" },
];

export const ORGANISATION = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": ID_ORGANISATION,
  "name": "Solution Logique",
  "legalName": "SOLUTION LOGIQUE",
  "alternateName": "Solution Logique Informatique",
  "url": `${SITE_URL}/`,
  "logo": `${SITE_URL}/assets/sli.webp`,
  "image": `${SITE_URL}/assets/solution.webp`,
  "description":
    "Solutions informatiques, logiciels EBP, développement sur-mesure, accompagnement IA et télémaintenance depuis plus de 30 ans en Haute-Savoie.",
  "foundingDate": "1990-11-08",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "SIREN",
    "value": "379868540",
  },
  "vatID": "FR65379868540",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "475 Route des Vernes",
    "addressLocality": "Annecy",
    "postalCode": "74370",
    "addressRegion": "Haute-Savoie",
    "addressCountry": "FR",
  },
  /* Point de la Base Adresse Nationale pour le 475 route des Vernes
     (api-adresse.data.gouv.fr, 29/10/2026) */
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.939847,
    "longitude": 6.127539,
  },
  "telephone": "+33450640233",
  "email": "site@solution-logique.fr",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "14:00",
      "closes": "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "00:00",
    },
  ],
  "priceRange": "€€",
  "sameAs": [
    "https://www.facebook.com/solutionlogique",
    "https://www.linkedin.com/company/solution-logique",
  ],
  "areaServed": ZONES_SERVIES,
};

function JsonLd({ donnees }: { donnees: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(donnees) }}
    />
  );
}

export function DonneesOrganisation() {
  return <JsonLd donnees={ORGANISATION} />;
}

export function DonneesPage({ chemin }: { chemin: string }) {
  const page = pageSite(chemin);
  const fil = filAriane(chemin);

  const ariane = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fil.map((etape, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": etape.libelle,
      "item": urlPage(etape.chemin),
    })),
  };

  const service = page.service && {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": page.service.nom,
    "serviceType": page.service.type,
    "description": page.description,
    "url": urlPage(chemin),
    "provider": { "@id": ID_ORGANISATION },
    "areaServed": ZONES_SERVIES,
  };

  return (
    <>
      {fil.length > 1 && <JsonLd donnees={ariane} />}
      {service && <JsonLd donnees={service} />}
    </>
  );
}

export default DonneesPage;
