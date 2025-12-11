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
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">{children}</main>
      {pathname !== "/contact" && <Contact_Btn />}
      <Footer />
    </>
  );
}
