"use client";

import React, { useState } from "react";
import { ModernSection, ServiceCard, ModernButton } from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  Calculator,
  TrendingUp,
  Building,
  Award,
  BookOpen,
  Download,
  Play,
  Star,
  Users,
  CheckCircle,
  ArrowRight,
  Laptop,
  Shield
} from "lucide-react";
import Image from "next/image";

const logicielsData = [
  {
    id: "comptabilite",
    title: "EBP Comptabilité",
    description: "Optimisez la gestion de votre trésorerie et analysez la santé financière de votre entreprise avec nos logiciels de comptabilité professionnels.",
    image: "/assets/compta.webp",
    href: "/ebpcomptabilite",
    features: [
      "Saisie comptable simplifiée",
      "Déclarations fiscales automatiques",
      "Tableaux de bord en temps réel",
      "Synchronisation bancaire",
      "Sauvegarde cloud sécurisée"
    ],
    popular: false
  },
  {
    id: "gestion-commerciale",
    title: "EBP Gestion Commerciale",
    description: "Gérez tous les aspects commerciaux de votre entreprise et gagnez en efficacité avec nos solutions de gestion commerciale intégrées.",
    image: "/assets/gestion-co.webp",
    href: "/ebpgestionco",
    features: [
      "Gestion des devis et factures",
      "Suivi des stocks en temps réel",
      "CRM intégré",
      "Statistiques commerciales avancées",
      "Mobile et multi-sites"
    ],
    popular: true
  },
  {
    id: "batiment",
    title: "EBP Bâtiment",
    description: "Optimisez la rentabilité de vos chantiers, chiffrez et facturez efficacement. Gagnez un temps précieux pour vous consacrer à votre cœur de métier.",
    image: "/assets/batiments.webp",
    href: "/ebpbatiment",
    features: [
      "Devis et métrés automatisés",
      "Suivi de chantiers en temps réel",
      "Gestion des sous-traitants",
      "Planning et ressources",
      "Facturation intégrée"
    ],
    popular: false
  }
];

const formationsData = [
  {
    title: "Formation Comptabilité",
    description: "Maîtrisez EBP Comptabilité en quelques heures avec nos formateurs certifiés",
    duration: "2 jours",
    level: "Débutant à avancé",
    href: "/formationCompta",
    icon: <Calculator />
  },
  {
    title: "Formation Gestion Commerciale", 
    description: "Optimisez votre process commercial avec une formation personnalisée",
    duration: "2 jours",
    level: "Débutant à avancé",
    href: "/formationCommerciale",
    icon: <TrendingUp />
  },
  {
    title: "Formation Bâtiment",
    description: "Spécialisez-vous dans la gestion de projets BTP avec EBP Bâtiment",
    duration: "3 jours",
    level: "Intermédiaire",
    href: "/formationBatiment",
    icon: <Building />
  }
];

const testimonialsData = [
  {
    name: "Marie Dubois",
    company: "Artisan Menuiserie",
    content: "EBP Bâtiment a révolutionné ma gestion de chantiers. Gain de temps considérable !",
    rating: 5
  },
  {
    name: "Pierre Martin",
    company: "Comptable indépendant",
    content: "Interface intuitive, fonctionnalités complètes. Parfait pour mon cabinet.",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    company: "Commerce de détail",
    content: "La gestion des stocks en temps réel m'a fait économiser des milliers d'euros.",
    rating: 5
  }
];

export default function Logiciels() {
  const [activeTab, setActiveTab] = useState<'logiciels' | 'formations'>('logiciels');

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] overflow-hidden flex items-center"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #1e40af 100%)",
        }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute inset-0 bg-[url('/assets/ebp.webp')] bg-contain bg-center bg-no-repeat opacity-20" />
        </div>

        <div className="relative container-wide py-16 lg:py-24 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 mb-8">
              <Laptop className="w-4 h-4" />
              <span className="text-sm font-medium">Solutions EBP & Formations professionnelles</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Logiciels
              <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mt-2">
                EBP & Formations
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Decouvrez nos solutions EBP et nos formations certifiees pour optimiser
              la gestion de votre entreprise. Plus de 30 ans d&apos;expertise a votre service.
            </p>

            <div className="flex justify-center">
              <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/20">
                <button
                  onClick={() => setActiveTab('logiciels')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeTab === 'logiciels'
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Nos Logiciels
                </button>
                <button
                  onClick={() => setActiveTab('formations')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    activeTab === 'formations'
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Nos Formations
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Logiciels Section */}
      {activeTab === 'logiciels' && (
        <ModernSection background="white" padding="2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Solutions EBP Professionnelles
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choisissez la solution adaptée à votre secteur d'activité
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {logicielsData.map((logiciel) => (
              <div key={logiciel.id} className="relative h-full">
                {logiciel.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Plus populaire
                    </div>
                  </div>
                )}
                
                <div className={cn(
                  "group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col",
                  logiciel.popular && "rounded-3xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border-2 border-blue-200 shadow-xl hover:border-blue-300"
                )}>
                  {/* Image */}
                  <div className="relative h-48 lg:h-56 overflow-hidden">
                    <Image
                      src={logiciel.image}
                      alt={logiciel.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {logiciel.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-4 flex-1">
                      {logiciel.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {logiciel.features.slice(0, 5).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Badge et Boutons */}
                    <div className="mt-auto">
                      <div className="mb-4">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium block text-center">
                          Version d'essai gratuite
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <ModernButton 
                          variant="accent" 
                          className="w-full"
                          href={logiciel.href}
                        >
                          Découvrir
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </ModernButton>
                        
                        <ModernButton 
                          variant="outline" 
                          className="w-full"
                          href="/contact"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger la démo
                        </ModernButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Pourquoi choisir EBP ?
              </h3>
              <p className="text-lg text-slate-600">
                Leader français du logiciel de gestion pour PME depuis plus de 35 ans
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Shield />, title: "Sécurisé", desc: "Données protégées et sauvegardées" },
                { icon: <Users />, title: "Support expert", desc: "Accompagnement personnalisé" },
                { icon: <Award />, title: "Certifié", desc: "Conforme aux normes françaises" },
                { icon: <Laptop />, title: "Intuitif", desc: "Interface simple et moderne" }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 shadow-lg">
                    <div className="text-blue-600">
                      {benefit.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-slate-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ModernSection>
      )}

      {/* Formations Section */}
      {activeTab === 'formations' && (
        <ModernSection background="white" padding="2xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Organisme de formation certifié Qualiopi
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Formations EBP Certifiées
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Développez vos compétences avec nos formations personnalisées dispensées par des experts certifiés
            </p>
          </div>

          {/* Qualiopi Logo */}
          <div className="flex justify-center mb-12">
            <Image
              src="/assets/logo-qualiopi.webp"
              alt="Certification Qualiopi"
              width={150}
              height={100}
              className="opacity-80"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {formationsData.map((formation, index) => (
              <ServiceCard
                key={index}
                title={formation.title}
                description={formation.description}
                icon={formation.icon}
                href={formation.href}
                variant="default"
                features={[
                  `Durée: ${formation.duration}`,
                  `Niveau: ${formation.level}`,
                  "Formation sur-mesure",
                  "Certificat de réussite",
                  "Support post-formation"
                ]}
              />
            ))}
          </div>

          {/* Formation Benefits */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Formations sur mesure
                </h3>
                <div className="space-y-4">
                  {[
                    "Formations individuelles ou en groupe",
                    "Dans nos locaux ou sur site",
                    "Programme adapté à vos besoins",
                    "Formateurs certifiés EBP",
                    "Prise en charge OPCO possible"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <ModernButton 
                    variant="accent"
                    href="/contact"
                  >
                    Demander un devis formation
                  </ModernButton>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h4 className="text-xl font-semibold mb-4 text-white tracking-wide border-b border-white pb-2">📞 Contact formation</h4>
                <div className="space-y-3 text-slate-300">
                  <p>📧 site@solution-logique.fr</p>
                  <p>📞 04 50 64 02 33</p>
                  <p>📍 475 Route des Vernes, 74370 Annecy</p>
                </div>
              </div>
            </div>
          </div>
        </ModernSection>
      )}

      {/* Testimonials */}
      <ModernSection background="gray" padding="lg">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Ce que disent nos clients
          </h3>
          <p className="text-slate-600">
            Plus de 1000 entreprises nous font confiance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700 mb-4 italic">
                "{testimonial.content}"
              </blockquote>
              <div>
                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-slate-600 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </ModernSection>

      {/* CTA Final */}
      <ModernSection background="dark" padding="2xl">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Prêt à optimiser votre gestion ?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Découvrez nos solutions EBP lors d'une démonstration gratuite ou inscrivez-vous à l'une de nos formations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ModernButton 
              variant="accent" 
              size="lg"
              href="/contact"
            >
              <Play className="w-5 h-5 mr-2" />
              Démonstration gratuite
            </ModernButton>
            <ModernButton 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white hover:text-slate-900"
              onClick={() => {
                setActiveTab('formations');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Catalogue formations
            </ModernButton>
          </div>
        </div>
      </ModernSection>
    </main>
  );
}
