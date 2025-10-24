import React from 'react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import NinjaOneInput from './NinjaOneInput'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Télémaintenance - Assistance à Distance Sécurisée",
  description: "Service de télémaintenance Solution Logique à Annecy : assistance technique à distance sécurisée via NinjaOne, support en temps réel pour vos problèmes informatiques.",
  keywords: ["télémaintenance", "assistance à distance", "support informatique", "dépannage distance", "NinjaOne", "Annecy"],
  openGraph: {
    title: "Service de Télémaintenance Sécurisé - Solution Logique",
    description: "Accédez à notre service de télémaintenance NinjaOne pour une assistance technique à distance immédiate et sécurisée.",
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
        <NinjaOneInput />
      </Container>
    </Section>
  )
}

export default Telemaintenance