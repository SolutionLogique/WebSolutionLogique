import React from 'react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import RustDeskSection from './RustDeskSection'
import NinjaOneInput from './NinjaOneInput'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Télémaintenance - Assistance à Distance Sécurisée",
  description: "Service de télémaintenance Solution Logique à Annecy : assistance technique à distance sécurisée via RustDesk et NinjaOne, support en temps réel pour vos problèmes informatiques.",
  keywords: ["télémaintenance", "assistance à distance", "support informatique", "dépannage distance", "RustDesk", "NinjaOne", "Annecy"],
  openGraph: {
    title: "Service de Télémaintenance Sécurisé - Solution Logique",
    description: "Accédez à notre service de télémaintenance RustDesk ou NinjaOne pour une assistance technique à distance immédiate et sécurisée.",
    type: "website",
    url: "https://www.solution-logique.fr/telemaintenance",
  },
};

function Telemaintenance() {
  return (
    <Section background="subtle" padding="lg">
      <Container size="md">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Télémaintenance
          </h1>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Connectez-vous rapidement et en sécurité à notre service de télémaintenance
            pour obtenir une assistance technique à distance.
          </p>
        </div>

        {/* Section RustDesk - Solution principale */}
        <RustDeskSection />

        {/* Séparateur */}
        <div className="my-12 flex items-center justify-center">
          <div className="flex-1 border-t border-border"></div>
          <span className="px-4 text-sm text-foreground-muted font-medium">OU</span>
          <div className="flex-1 border-t border-border"></div>
        </div>

        {/* Section NinjaOne - Solution alternative */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Connexion NinjaOne
          </h2>
          <p className="text-sm text-foreground-muted">
            Alternative si vous disposez déjà d'un code NinjaOne
          </p>
        </div>
        <NinjaOneInput />
      </Container>
    </Section>
  )
}

export default Telemaintenance