"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Headphones, Phone, MapPin, Clock } from "lucide-react";

function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #1e40af 100%)",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-wide relative section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="badge badge-glass mb-6">
              <Phone className="w-4 h-4" />
              Contactez-nous
            </div>

            <h2 className="text-white mb-6">
              Prêt à transformer votre{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                infrastructure IT
              </span>{" "}
              ?
            </h2>

            <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-xl">
              Contactez nos experts pour un diagnostic gratuit de votre système informatique
              et découvrez comment optimiser votre productivité.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 btn-glow">
                  <span>Demander un devis gratuit</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="/telemaintenance">
                <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <Headphones className="w-5 h-5" />
                  <span>Télémaintenance</span>
                </button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Réponse sous 24h</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Basé à Annecy</span>
              </div>
            </div>
          </div>

          {/* Right content - Contact card */}
          <div className="glass rounded-3xl p-8 lg:p-10 text-slate-800">
            <h3 className="text-2xl font-bold mb-6">Nos coordonnées</h3>

            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:0450640233"
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Téléphone</p>
                  <p className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    04 50 64 02 33
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Adresse</p>
                  <p className="font-bold text-slate-900">
                    13 rue Président Favre
                  </p>
                  <p className="text-slate-600">74000 Annecy</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Horaires</p>
                  <p className="font-bold text-slate-900">
                    Lun - Ven : 8h30 - 18h00
                  </p>
                  <p className="text-slate-600">Support 24/7 disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
