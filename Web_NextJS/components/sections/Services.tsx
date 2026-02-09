"use client";

import React from "react";
import Link from "next/link";
import {
  Monitor,
  Server,
  Printer,
  HardDrive,
  Phone,
  Shield,
  ArrowRight,
  Layers,
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
  href: string;
}

function Services() {
  const services: Service[] = [
    {
      icon: Monitor,
      title: "Matériels Informatique",
      description: "Solutions sur mesure pour équiper votre entreprise",
      features: ["Postes de travail", "Périphériques", "Accessoires"],
      color: "from-blue-500 to-blue-600",
      href: "/informatique",
    },
    {
      icon: Server,
      title: "Virtualisation & Serveur",
      description: "Optimisez votre infrastructure et votre productivité",
      features: ["Serveurs dédiés", "Cloud privé", "Haute disponibilité"],
      color: "from-indigo-500 to-purple-600",
      href: "/informatique",
    },
    {
      icon: Printer,
      title: "Système d'impression",
      description: "Solutions d'impression professionnelles et économiques",
      features: ["Imprimantes", "Copieurs", "Gestion de parc"],
      color: "from-emerald-500 to-teal-600",
      href: "/informatique",
    },
    {
      icon: HardDrive,
      title: "Sauvegarde de données",
      description: "Protégez vos données critiques en toute sérénité",
      features: ["Backup local", "Cloud sécurisé", "PRA/PCA"],
      color: "from-orange-500 to-red-500",
      href: "/securite",
    },
    {
      icon: Phone,
      title: "Opérateur Télécom",
      description: "Téléphonie moderne et solutions de communication",
      features: ["VoIP", "Fibre optique", "Solutions unifiées"],
      color: "from-cyan-500 to-blue-500",
      href: "/telecom",
    },
    {
      icon: Shield,
      title: "Sécurité Informatique",
      description: "Protégez votre système contre les menaces",
      features: ["Antivirus", "Firewall", "Audit sécurité"],
      color: "from-red-500 to-pink-600",
      href: "/securite",
    },
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-primary mb-6">
            <Layers className="w-4 h-4" />
            Nos expertises
          </div>
          <h2 className="text-slate-900 mb-6">
            Solutions IT{" "}
            <span className="gradient-text">complètes</span>
          </h2>
          <p className="text-xl text-slate-600">
            Une équipe d&apos;experts certifiés à votre service pour renforcer
            la performance de votre système informatique.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <div className="group h-full card-modern p-8 cursor-pointer">
                {/* Icon */}
                <div
                  className={`
                    w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color}
                    flex items-center justify-center mb-6
                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-500
                    shadow-lg
                  `}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-4 transition-all">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link href="/nosServices">
            <button className="btn-primary">
              <span>Voir tous nos services</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
