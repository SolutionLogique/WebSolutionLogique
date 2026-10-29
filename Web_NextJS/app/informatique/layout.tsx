import React from "react";
import type { Metadata } from "next";
import { DonneesPage } from "@/components/seo/StructuredData";
import { metadonneesPage } from "@/lib/seo";

/* Titre, description, canonical, partage et donnees structurees de la page :
   tout vient du registre des pages de lib/seo.ts. */

const CHEMIN = "/informatique";

export const metadata: Metadata = metadonneesPage(CHEMIN);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DonneesPage chemin={CHEMIN} />
      {children}
    </>
  );
}
