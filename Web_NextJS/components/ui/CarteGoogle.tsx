"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

/* Carte Google Maps chargee seulement au clic.

   Avant, l'iframe se chargeait avec la page Contact : le navigateur du
   visiteur contactait Google (adresse IP, cookies possibles) sans qu'il l'ait
   demande, et la page telechargeait la carte meme quand personne ne la
   regardait. Le bloc garde la meme hauteur (h-96) : la mise en page ne bouge
   pas quand la carte apparait.

   Le lien « Voir sur Google Maps » ouvre la fiche de l'etablissement (meme
   identifiant cid que l'iframe d'origine). */

const CARTE_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.5863184807336!2d6.126918815830903!3d45.93956730961823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8fac0b9e7fbf%3A0x857a5fad72b9eb0!2sSolution%20Logique%20Informatique!5e0!3m2!1sfr!2sfr!4v1651504531648!5m2!1sfr!2sfr";

export const LIEN_GOOGLE_MAPS = "https://maps.google.com/?cid=601131572047617712";

export default function CarteGoogle() {
  const [affichee, setAffichee] = useState(false);

  if (affichee) {
    return (
      <iframe
        title="Carte Google Maps : Solution Logique, 475 route des Vernes, Annecy"
        className="h-96 w-full"
        src={CARTE_EMBED}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="flex h-96 w-full flex-col items-center justify-center gap-5 bg-sand-50 px-6 text-center">
      <FaMapMarkerAlt className="h-8 w-8 text-primary-600" aria-hidden="true" />
      <p className="font-medium text-sand-900">475 Route des Vernes, 74370 Annecy</p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setAffichee(true)}
          className="rounded-xl bg-primary-600 px-5 py-3 text-sm font-semibold text-sand-0 transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Afficher la carte
        </button>
        <a
          href={LIEN_GOOGLE_MAPS}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-sand-300 bg-sand-0 px-5 py-3 text-sm font-semibold text-sand-900 transition-colors hover:border-primary-500 hover:text-primary-600"
        >
          Voir sur Google Maps
        </a>
      </div>
      <p className="max-w-md text-sm text-sand-600">
        La carte est fournie par Google : elle ne se charge que si vous cliquez sur « Afficher la
        carte ».
      </p>
    </div>
  );
}
