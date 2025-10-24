// 📌 Ce fichier ne doit pas avoir "use client"
import React, { ReactNode } from "react";
import { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import "./styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.solution-logique.fr'),
  title: {
    default: "Solution Logique - Expert Informatique & Logiciels EBP à Annecy",
    template: "%s | Solution Logique"
  },
  description: "Solution Logique à Annecy (74) : expert en solutions informatiques, logiciels EBP (comptabilité, gestion commerciale, bâtiment), formations certifiées Qualiopi, télémaintenance et sécurité. Plus de 30 ans d'expertise.",
  keywords: ["informatique Annecy", "logiciel EBP", "formation EBP", "télémaintenance", "solution informatique entreprise", "comptabilité EBP", "gestion commerciale", "sécurité informatique", "Haute-Savoie"],
  authors: [{ name: "Solution Logique" }],
  creator: "Solution Logique",
  publisher: "Solution Logique",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.solution-logique.fr",
    siteName: "Solution Logique",
    title: "Solution Logique - Expert Informatique & Logiciels EBP à Annecy",
    description: "Votre partenaire informatique depuis plus de 30 ans en Haute-Savoie. Logiciels EBP, formations Qualiopi, télémaintenance et solutions sur mesure pour entreprises.",
    images: [
      {
        url: "/assets/sli.webp",
        width: 1200,
        height: 630,
        alt: "Solution Logique Informatique - Annecy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solution Logique - Expert Informatique & Logiciels EBP à Annecy",
    description: "Expert en solutions informatiques et logiciels EBP depuis plus de 30 ans en Haute-Savoie.",
    images: ["/assets/sli.webp"],
  },
  icons: {
    icon: '/assets/logo.webp',
    shortcut: '/assets/logo.webp',
    apple: '/assets/logo.webp',
  },
  verification: {
    google: "votre-code-google-search-console",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Solution Logique",
    "alternateName": "Solution Logique Informatique",
    "url": "https://www.solution-logique.fr",
    "logo": "https://www.solution-logique.fr/assets/sli.webp",
    "image": "https://www.solution-logique.fr/assets/solution.webp",
    "description": "Expert en solutions informatiques, logiciels EBP, formations certifiées Qualiopi et télémaintenance depuis plus de 30 ans en Haute-Savoie.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "475 Route des Vernes",
      "addressLocality": "Annecy",
      "postalCode": "74370",
      "addressRegion": "Haute-Savoie",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.939567",
      "longitude": "6.126919"
    },
    "telephone": "+33450640233",
    "email": "site@solution-logique.fr",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "€€",
    "sameAs": [
      "https://www.facebook.com/solutionlogique",
      "https://www.linkedin.com/company/solution-logique"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "45.939567",
        "longitude": "6.126919"
      },
      "geoRadius": "50000"
    }
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white overflow-x-hidden">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
