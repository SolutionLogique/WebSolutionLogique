"use client";

import React from "react";
import { ModernSection, ModernCard, ModernButton } from "@/components/ui";
import PageHero from "@/components/sections/PageHero";
import { 
  Building2, 
  Phone, 
  Mail, 
  Accessibility, 
  UserCircle,
  ExternalLink,
  CheckCircle2
} from "lucide-react";

export default function EngagementHandicap() {
  const organizations = [
    {
      title: "Maison Départementale (MDPH 74)",
      description: "Administration départementale à Annecy",
      icon: <Building2 className="w-6 h-6" />,
      details: [
        { label: "Adresse", value: "26 Av. de Chevéne, 74000 Annecy" },
        { label: "Téléphone", value: "04 50 33 22 50", href: "tel:0450332250" },
      ],
      links: [
        { label: "Site internet MDPH", href: "https://www.mdph74.fr" }
      ]
    },
    {
      title: "Agefiph Auvergne-Rhône-Alpes",
      description: "Association de gestion pour l'insertion des personnes handicapées",
      icon: <Accessibility className="w-6 h-6" />,
      details: [
        { label: "Numéro Gratuit", value: "0 800 11 10 09", href: "tel:0800111009" },
        { label: "Contact Départemental", value: "Mme Gruyelle : 04.74.94.20.21" },
        { label: "Mobile", value: "Mme Barot : 06.22.10.01.52" }
      ],
      links: [
        { label: "Site internet AGEFIPH", href: "https://www.agefiph.fr/auvergne-rhone-alpes" }
      ]
    },
    {
      title: "Chambre Métier et de l’Artisanat",
      description: "Haute-Savoie",
      icon: <Building2 className="w-6 h-6" />,
      details: [
        { label: "Adresse", value: "28 avenue de France 74000 Annecy" },
        { label: "Téléphone", value: "04 50 23 92 22", href: "tel:0450239222" },
      ],
      links: [
        { label: "Courriel", href: "mailto:contact.hautesavoie@cma-auvergnerhonealpes.fr" },
      ]
    },
    {
      title: "Cap Emploi Savoie Haute-Savoie",
      description: "Organisme de placement spécialisé",
      icon: <UserCircle className="w-6 h-6" />,
      details: [
        { label: "Adresse", value: "5 Rue du Chaudairon, 74960 Annecy" },
        { label: "Téléphone", value: "09 70 19 26 09", href: "tel:0970192609" },
      ],
      links: [
        { label: "Site internet CAP Emploi", href: "https://www.capemploi-73-74.com" },
        { label: "Espace Employeur", href: "https://www.capemploi-73-74.com/espace-employeur/" }
      ]
    }
  ];

  return (
    <main>
      <PageHero
        title="Notre engagement"
        titleHighlight="Handicap"
        description="Une entreprise inclusive et accessible. Nous nous engageons pour l'insertion professionnelle et l'accessibilité de nos locaux."
        backgroundImage="/assets/handicap-hero.webp" 
      />

      <ModernSection background="white" padding="xl">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Notre Référent */}
            <ModernCard variant="elevated" className="h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary-100 rounded-xl">
                  <UserCircle className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Référent en Entreprise</h2>
                  <p className="text-slate-600">Votre contact privilégié chez Solution Logique</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <UserCircle className="w-5 h-5 text-primary-500" />
                  <span className="font-semibold">M. Pascal REY</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <a href="tel:0450640233" className="hover:text-primary-600 transition-colors">04 50 64 02 33</a>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Mail className="w-5 h-5 text-primary-500" />
                  <a href="mailto:pr@solution-logique.fr" className="hover:text-primary-600 transition-colors">pr@solution-logique.fr</a>
                </div>
              </div>
            </ModernCard>

            {/* Accessibilité */}
            <ModernCard variant="elevated" className="h-full bg-gradient-to-br from-white to-emerald-50/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <Accessibility className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Accessibilité des locaux</h2>
                  <p className="text-slate-600">Nos aménagements pour votre confort</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                  <span className="text-slate-700">Porte d’entrée et ascenseur adaptés pour l'accessibilité aux candidats</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                  <span className="text-slate-700">Toilettes et salles de réunion accessibles et aux normes PMR</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                  <span className="text-slate-700">Parking réservé à proximité immédiate</span>
                </li>
              </ul>
            </ModernCard>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Partenaires & Ressources</h2>
            <p className="text-slate-600 mt-2">Les organismes qui nous accompagnent</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {organizations.map((org, index) => (
              <ModernCard key={index} variant="outline" className="group hover:border-primary-200 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-primary-50 transition-colors text-slate-600 group-hover:text-primary-600">
                    {org.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{org.title}</h3>
                    <p className="text-sm text-slate-500">{org.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {org.details.map((detail, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-sm">
                      <span className="font-semibold text-slate-700">{detail.label} :</span>
                      {detail.href ? (
                        <a href={detail.href} className="text-primary-600 hover:underline">{detail.value}</a>
                      ) : (
                        <span className="text-slate-600">{detail.value}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  {org.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                    >
                      {link.label}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  ))}
                </div>
              </ModernCard>
            ))}
          </div>

          <div className="mt-16 text-center">
            <ModernButton 
              href="https://www.monparcourshandicap.gouv.fr/services/autodiag/#/home/accueil-questionnaire"
              target="_blank"
              variant="outline"
              size="lg"
            >
              Réalisez le bilan de vos actions handicap
              <ExternalLink className="w-4 h-4 ml-2" />
            </ModernButton>
          </div>
        </div>
      </ModernSection>
    </main>
  );
}