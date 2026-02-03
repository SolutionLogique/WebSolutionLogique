import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";
import { Monitor, Phone as PhoneIcon, Shield, Layers, ArrowRight, Headphones, CheckCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Nos Services - Informatique, Telecom & Securite",
  description: "Decouvrez nos services informatiques a Annecy : infrastructure, hebergement cloud, telephonie IP, securite reseau et telemaintenance. Solutions completes pour entreprises.",
  keywords: ["services informatiques", "infrastructure IT", "telephonie IP", "securite informatique", "cloud", "telemaintenance", "Annecy"],
  openGraph: {
    title: "Services Informatiques Professionnels - Solution Logique",
    description: "Infrastructure IT, telecom, securite et cloud. Solutions completes pour votre entreprise a Annecy.",
    type: "website",
    url: "https://www.solution-logique.fr/nosServices",
  },
};

const servicesData = [
  {
    title: "Informatique",
    backgroundImage: "/assets/informatique.webp",
    link: "/informatique",
    icon: Monitor,
    description:
      "Optimisez vos performances avec des solutions informatiques fiables et securisees.",
    details: [
      {
        category: "Infrastructure",
        items: [
          "Materiel Informatique",
          "Serveur de stockage",
          "Securite de l'infrastructure",
          "Interconnexion de sites",
          "Virtualisation de l'infrastructure",
          "Video surveillance",
        ],
      },
      {
        category: "Environnement Utilisateur",
        items: ["Poste de travail", "Securite antivirus", "Outil collaboratif"],
      },
      {
        category: "Hebergement & Cloud",
        items: [
          "Sauvegarde Externalisee",
          "Sauvegarde sur place",
          "Hebergement site web",
          "Hebergement et gestion des boites mails",
        ],
      },
    ],
  },
  {
    title: "Telecom",
    backgroundImage: "/assets/telecom.webp",
    link: "/telecom",
    icon: PhoneIcon,
    description:
      "Restez connectes grace a nos solutions telecom innovantes et performantes.",
    details: [
      {
        category: "Telephonie fixe et mobile",
        items: [
          "Telephonie IP",
          "Trunksip",
          "Softphone",
          "Forfait 4G et mobile",
          "Operateur Telecom (fibre, SDSL, ...)",
        ],
      },
      {
        category: "Connectivite",
        items: ["Interconnexion", "Acces a Internet", "Acces sans fil - Wifi"],
      },
    ],
  },
  {
    title: "Securite",
    backgroundImage: "/assets/securite_info.webp",
    link: "/securite",
    icon: Shield,
    description:
      "Protegez vos donnees et votre reseau avec nos solutions de securite avancees.",
    details: [
      {
        category: "Securite du SI",
        items: [
          "Securite de l'infrastructure",
          "Securite du reseau",
          "Securite des donnees",
        ],
      },
    ],
  },
];

function NosServices() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <PageHero
        badge={{
          icon: <Layers className="w-4 h-4" />,
          text: "Solutions IT completes"
        }}
        title="Nos"
        titleHighlight="Services"
        description="Decouvrez notre gamme complete de services informatiques, telecom et securite. Des solutions sur mesure pour accompagner la transformation digitale de votre entreprise."
        primaryCTA={{ text: "Demander un devis", href: "/contact" }}
        secondaryCTA={{ text: "04 50 64 02 33", href: "tel:0450640233" }}
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link key={index} href={service.link} className="group">
                  <div className="relative h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-slate-200">
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${service.backgroundImage})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

                      {/* Icon Badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-4">
                        {service.details.map((detail, i) => (
                          <div key={i}>
                            <h4 className="font-semibold text-slate-800 text-sm mb-2">
                              {detail.category}
                            </h4>
                            <ul className="space-y-1">
                              {detail.items.slice(0, 3).map((item, j) => (
                                <li key={j} className="flex items-center text-sm text-slate-500">
                                  <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                              {detail.items.length > 3 && (
                                <li className="text-sm text-slate-400 ml-6">
                                  +{detail.items.length - 3} autres...
                                </li>
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary-600 font-semibold mt-6 group-hover:gap-4 transition-all">
                        <span>En savoir plus</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Telemaintenance Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="glass-dark rounded-3xl p-8 lg:p-12 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Image */}
              <div className="flex-shrink-0 lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <Image
                    alt="Assistance telemaintenance Solution Logique"
                    src="/assets/assistance.webp"
                    width={500}
                    height={350}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
                  <Headphones className="w-4 h-4 mr-2 text-emerald-400" />
                  <span className="text-sm font-medium">Support technique instantane</span>
                </div>

                {/* Title */}
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    Besoin d&apos;une aide en
                  </h2>
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    telemaintenance ?
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/70 text-lg leading-relaxed">
                  Accedez a notre service de telemaintenance pour que nos experts Solution Logique
                  interviennent directement et de maniere securisee sur votre ordinateur.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Connexion securisee",
                    "Support en temps reel",
                    "Resolution rapide",
                    "Expertise certifiee"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center text-white/70">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link href="/telemaintenance">
                    <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:-translate-y-1">
                      <Headphones className="w-5 h-5" />
                      <span>Acceder a la telemaintenance</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>

                {/* Alternative contact */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-white/50 mb-3">Besoin d&apos;une autre forme de support ?</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors"
                    >
                      Nous ecrire
                    </Link>
                    <span className="text-white/30">|</span>
                    <a
                      href="tel:0450640233"
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm transition-colors"
                    >
                      Nous appeler
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NosServices;
