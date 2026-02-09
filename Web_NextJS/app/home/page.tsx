"use client";

import React from "react";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Telemaintenance from "@/components/sections/Telemaintenance";
import Partners from "@/components/sections/Partners";
import FinalCTA from "@/components/sections/FinalCTA";

function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <Telemaintenance />
      <Partners />
      <FinalCTA />
    </main>
  );
}

export default Home;
