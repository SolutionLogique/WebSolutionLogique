import React from "react";
import { contenuLocal } from "@/lib/contenus-locaux";

/* Bloc « ancrage local » d'une page : un titre, un ou deux paragraphes qui
   disent ou et pour qui Solution Logique travaille, et la FAQ de la page s'il
   y en a une (balisee FAQPage pour les moteurs).

   Les textes sont dans lib/contenus-locaux.ts (un seul fichier a relire).
   Les questions s'ouvrent avec <details> : aucune dependance JavaScript, le
   texte reste dans le HTML pour les moteurs. */

export default function AncrageLocal({ chemin }: { chemin: string }) {
  const contenu = contenuLocal(chemin);
  if (!contenu) return null;

  const faqJsonLd = contenu.faq && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contenu.faq.map((qr) => ({
      "@type": "Question",
      "name": qr.question,
      "acceptedAnswer": { "@type": "Answer", "text": qr.reponse },
    })),
  };

  return (
    <section className="border-t border-sand-200 bg-sand-50 py-section">
      <div className="mx-auto max-w-3xl px-gutter">
        <h2 className="mb-5 font-display text-h3 font-semibold text-sand-900">{contenu.titre}</h2>
        <div className="space-y-4 text-lg leading-relaxed text-sand-600">
          {contenu.paragraphes.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {contenu.faq && (
          <div className="mt-12">
            <h2 className="mb-5 font-display text-h3 font-semibold text-sand-900">Questions fréquentes</h2>
            <div className="divide-y divide-sand-200 rounded-2xl border border-sand-200 bg-sand-0">
              {contenu.faq.map((qr) => (
                <details key={qr.question} className="group px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-sand-900">
                    {qr.question}
                    <span aria-hidden="true" className="text-primary-600 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-sand-600">{qr.reponse}</p>
                </details>
              ))}
            </div>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
