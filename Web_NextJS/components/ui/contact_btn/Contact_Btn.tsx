"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Mail, Headphones, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/* Bouton de contact flottant.

   La version precedente posait plusieurs problemes :
   - un badge rouge « ! » rebondissant en permanence alors qu'aucune
     notification n'existe : une urgence fabriquee ;
   - un anneau de texte en rotation infinie (12 s), illisible a 5,5 px, et
     un halo pulse — deux animations sans fin qui ignoraient
     prefers-reduced-motion ;
   - aucun nom accessible sur le bouton principal : un lecteur d'ecran
     n'annoncait rien d'exploitable, et aucun aria-expanded ;
   - un premier clic ouvrait le menu, un second naviguait vers /contact.
     Un utilisateur qui cliquait deux fois se retrouvait deplace sans
     l'avoir demande.

   Ici : une action, un libelle explicite, aucune animation en boucle, et le
   focus qui revient sur le declencheur a la fermeture. */

const CANAUX = [
  {
    href: "tel:0450640233",
    icon: Phone,
    libelle: "Appeler",
    detail: "04 50 64 02 33",
    externe: true,
  },
  {
    href: "mailto:site@solution-logique.fr",
    icon: Mail,
    libelle: "Écrire",
    detail: "site@solution-logique.fr",
    externe: true,
  },
  {
    href: "/telemaintenance",
    icon: Headphones,
    libelle: "Télémaintenance",
    detail: "Prise en main à distance",
    externe: false,
  },
  {
    href: "/contact",
    icon: MessageCircle,
    libelle: "Être rappelé",
    detail: "Formulaire de contact",
    externe: false,
  },
];

function Contact_Btn() {
  const [ouvert, setOuvert] = useState(false);
  const declencheur = useRef<HTMLButtonElement>(null);
  const panneau = useRef<HTMLDivElement>(null);

  // Echap ferme et rend le focus au declencheur
  useEffect(() => {
    if (!ouvert) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOuvert(false);
        declencheur.current?.focus();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      const cible = e.target as Node;
      if (!panneau.current?.contains(cible) && !declencheur.current?.contains(cible)) {
        setOuvert(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [ouvert]);

  // Le premier lien du panneau prend le focus a l'ouverture
  useEffect(() => {
    if (ouvert) panneau.current?.querySelector("a")?.focus();
  }, [ouvert]);

  return (
    <div className="fixed bottom-5 right-5 z-40 print:hidden">
      {ouvert && (
        <div
          ref={panneau}
          id="panneau-contact"
          role="dialog"
          aria-label="Nous contacter"
          className="absolute bottom-full right-0 mb-3 w-[min(19rem,calc(100vw-2.5rem))] overflow-hidden rounded-2xl border border-sand-200 bg-sand-0 shadow-lg animate-fade-in-scale"
        >
          <div className="flex items-center justify-between border-b border-sand-200 px-4 py-3">
            <span className="font-display text-sm font-bold text-sand-900">Nous contacter</span>
            <button
              type="button"
              onClick={() => {
                setOuvert(false);
                declencheur.current?.focus();
              }}
              aria-label="Fermer"
              className="rounded-lg p-1.5 text-sand-500 transition-colors hover:bg-sand-50 hover:text-sand-900"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <ul className="p-1.5">
            {CANAUX.map((canal) => {
              const contenu = (
                <>
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50">
                    <canal.icon className="h-4 w-4 text-primary-600" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-sand-900">{canal.libelle}</span>
                    <span className="block truncate text-xs text-sand-500">{canal.detail}</span>
                  </span>
                </>
              );
              const classes =
                "flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-sand-50";

              return (
                <li key={canal.href}>
                  {canal.externe ? (
                    <a href={canal.href} className={classes} onClick={() => setOuvert(false)}>
                      {contenu}
                    </a>
                  ) : (
                    <Link href={canal.href} className={classes} onClick={() => setOuvert(false)}>
                      {contenu}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Declencheur. Libelle visible des sm: — un bouton nomme convertit
          mieux qu'une icone seule, et reste comprehensible sans survol. */}
      <button
        ref={declencheur}
        type="button"
        onClick={() => setOuvert(!ouvert)}
        aria-expanded={ouvert}
        aria-controls="panneau-contact"
        aria-label={ouvert ? "Fermer le menu de contact" : "Nous contacter"}
        className={cn(
          "flex min-h-[52px] items-center gap-2.5 rounded-full px-4 shadow-lg transition-colors sm:px-5",
          ouvert
            ? "bg-sand-800 text-sand-0 hover:bg-sand-900"
            : "bg-primary-600 text-sand-0 hover:bg-primary-700"
        )}
      >
        {ouvert ? (
          <X className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
        ) : (
          <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
        )}
        <span className="hidden text-sm font-semibold sm:inline">
          {ouvert ? "Fermer" : "Nous contacter"}
        </span>
      </button>
    </div>
  );
}

export default Contact_Btn;
