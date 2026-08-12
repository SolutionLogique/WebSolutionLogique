import React from "react";
import Image from "next/image";

/* Certifications et partenaires.

   Remplace deux sections : les temoignages, signes « Marie Dupont »,
   « Jean-Luc Bernard » et « Sophie Laurent » — des noms fictifs en
   production — et le second bloc partenaires, qui faisait doublon.

   Aucun avis client reel n'etant disponible, mieux vaut rien qu'un faux.
   Ces logos-ci sont reels et verifiables. */

const PARTENAIRES = [
  { src: "/assets/logo-qualiopi.webp", alt: "Certifié Qualiopi", legende: "Organisme de formation certifié" },
  { src: "/assets/ebp.webp", alt: "Partenaire EBP", legende: "Revendeur et intégrateur agréé" },
  { src: "/assets/dell.webp", alt: "Dell Technologies", legende: "Partenaire matériel" },
  { src: "/assets/lenovo.webp", alt: "Lenovo", legende: "Partenaire matériel" },
  { src: "/assets/stormshield.webp", alt: "Stormshield", legende: "Sécurité réseau" },
  { src: "/assets/vmware.webp", alt: "VMware", legende: "Virtualisation" },
  { src: "/assets/3cx.webp", alt: "3CX", legende: "Téléphonie sur IP" },
  { src: "/assets/kyocera.webp", alt: "Kyocera", legende: "Impression" },
];

function Preuves() {
  return (
    <section className="border-t border-sand-200 bg-sand-0 py-section">
      <div className="mx-auto max-w-container px-gutter">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 font-display text-h2 font-bold text-sand-900">
            Certifications et partenaires
          </h2>
          <p className="text-lg text-sand-600">
            Nos compétences sont validées par les éditeurs et constructeurs dont nous
            déployons les solutions.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {PARTENAIRES.map((p) => (
            <li
              key={p.alt}
              className="flex flex-col items-center gap-3 rounded-2xl border border-sand-200 bg-sand-0 p-6 text-center"
            >
              <div className="flex h-14 items-center justify-center">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={120}
                  height={56}
                  className="h-auto max-h-14 w-auto object-contain"
                />
              </div>
              <span className="text-sm text-sand-500">{p.legende}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Preuves;
