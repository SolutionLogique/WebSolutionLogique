"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact_Btn from "@/components/ui/contact_btn/Contact_Btn";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Lien d'evitement : premier element focalisable de la page, visible
          uniquement au clavier. Il n'en existait aucun. */}
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]
                   focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-3
                   focus:text-sm focus:font-semibold focus:text-sand-0"
      >
        Aller au contenu
      </a>

      <Navbar />

      {/* pt-[var(--nav-height)] compense la barre fixe. Sans ce decalage, le
          contenu passait DESSOUS : sur /contact, le titre H1 se retrouvait
          litteralement derriere la barre de navigation. */}
      <main id="contenu" className="min-h-screen pt-[var(--nav-height)]">
        {children}
      </main>

      {pathname !== "/contact" && <Contact_Btn />}
      <Footer />
    </>
  );
}
