import React from "react";
import Link from "next/link";
import { pageSite } from "@/lib/seo";

/* « Voir aussi » : liens vers les pages proches, places sous les boutons du
   bloc d'appel en bas de page (zone de liens qui existait deja).

   Maillage interne (revue SEO du 29/10/2026) : les pages EBP ne se citaient
   pas entre elles, les pages Informatique, Telecom et Securite ne menaient
   qu'a Contact, /sur-mesure/ ne liait pas /applications-mobile-web/. Les
   intitules viennent du registre lib/seo.ts (libelle du fil d'Ariane) : un
   lien vers une page absente du registre fait echouer le build. */

interface LiensVoisinsProps {
  chemins: string[];
  /* Fond du bloc qui accueille les liens : couleurs lisibles sur l'un et l'autre */
  fond?: "clair" | "sombre";
  className?: string;
}

export default function LiensVoisins({ chemins, fond = "clair", className = "" }: LiensVoisinsProps) {
  const couleurs =
    fond === "sombre"
      ? { texte: "text-slate-300", lien: "text-white hover:text-accent-200" }
      : { texte: "text-sand-600", lien: "text-primary-600 hover:text-primary-700" };

  return (
    <nav aria-label="Voir aussi" className={`mt-8 text-sm ${couleurs.texte} ${className}`}>
      <span className="mr-2">Voir aussi :</span>
      {chemins.map((chemin, i) => (
        <React.Fragment key={chemin}>
          {i > 0 && <span aria-hidden="true" className="mx-2">·</span>}
          <Link href={`${chemin}/`} className={`font-semibold underline-offset-4 hover:underline ${couleurs.lien}`}>
            {pageSite(chemin).libelle}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}
