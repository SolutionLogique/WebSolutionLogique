import React from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Course' | 'Product';
  data?: Record<string, unknown>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseOrganization = {
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
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services informatiques",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Logiciels EBP",
              "description": "Vente et installation de logiciels EBP (Comptabilité, Gestion Commerciale, Bâtiment)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Formations certifiées Qualiopi",
              "description": "Formations professionnelles sur les logiciels EBP, éligibles CPF et OPCO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Télémaintenance",
              "description": "Assistance technique à distance sécurisée"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Infrastructure informatique",
              "description": "Installation et maintenance d'infrastructures IT pour entreprises"
            }
          }
        ]
      }
    };

    switch (type) {
      case 'Organization':
      case 'LocalBusiness':
        return baseOrganization;

      case 'Course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "provider": {
            "@type": "Organization",
            "name": "Solution Logique",
            "url": "https://www.solution-logique.fr"
          },
          ...data
        };

      case 'Product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "brand": {
            "@type": "Brand",
            "name": "EBP"
          },
          ...data
        };

      default:
        return baseOrganization;
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default StructuredData;
