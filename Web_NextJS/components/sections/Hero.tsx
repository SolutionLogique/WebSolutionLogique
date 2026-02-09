"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, Phone, Sparkles, Shield, Zap } from "lucide-react";
import Link from "next/link";

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-badge", { y: -30, opacity: 0, duration: 0.8 })
        .from(".hero-title", { y: 60, opacity: 0, duration: 1 }, "-=0.5")
        .from(".hero-subtitle", { y: 40, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-description", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".hero-stats", { y: 30, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(".hero-visual", { x: 100, opacity: 0, duration: 1.2 }, "-=1")
        .from(".floating-card", { y: 50, opacity: 0, duration: 0.8, stagger: 0.15 }, "-=0.8");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 40%, #1e40af 100%)",
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div ref={contentRef} className="relative container-wide py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium">30+ ans d&apos;expertise en Rhône-Alpes</span>
            </div>

            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <Image
                alt="Solution Logique Informatique"
                src="/assets/sli.webp"
                width={300}
                height={150}
                priority
                className="h-auto w-auto max-w-[280px]"
              />
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="hero-title text-white">
                Votre partenaire
                <br />
                <span className="gradient-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  IT de confiance
                </span>
              </h1>

              <p className="hero-subtitle text-xl lg:text-2xl text-white/70 font-medium">
                Solutions informatiques sur-mesure pour PME
              </p>
            </div>

            {/* Description */}
            <p className="hero-description text-lg text-white/60 max-w-xl leading-relaxed">
              Intégrateur de solutions complètes, nous accompagnons les entreprises
              de Rhône-Alpes dans leur transformation numérique avec un service de proximité et d&apos;excellence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/nosServices" className="hero-cta">
                <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:-translate-y-1">
                  <span>Découvrir nos services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <a href="tel:0450640233" className="hero-cta">
                <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                  <Phone className="w-5 h-5" />
                  <span>04 50 64 02 33</span>
                </button>
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats flex flex-wrap justify-center lg:justify-start gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-white">500+</div>
                <div className="text-sm text-white/50">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-emerald-400">99%</div>
                <div className="text-sm text-white/50">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-black text-white">24/7</div>
                <div className="text-sm text-white/50">Support</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual relative hidden lg:block">
            {/* Main Card */}
            <div className="relative z-10">
              <div className="glass-dark rounded-3xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Solutions complètes</h3>
                      <p className="text-white/50">Infrastructure & Services</p>
                    </div>
                  </div>

                  <Image
                    alt="Solutions informatiques"
                    src="/assets/solution.webp"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-2xl"
                  />

                  <p className="text-white/70 leading-relaxed">
                    De la maintenance à la sécurité, nous couvrons tous vos besoins IT
                    avec une approche personnalisée.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="floating-card absolute -top-4 right-0 translate-x-1/3 z-20 glass rounded-2xl p-4 border border-white/20 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Performance</div>
                  <div className="text-xs text-slate-500">Optimisée</div>
                </div>
              </div>
            </div>

            <div className="floating-card absolute bottom-8 -left-4 -translate-x-1/3 z-20 glass rounded-2xl p-4 border border-white/20 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Sécurité</div>
                  <div className="text-xs text-slate-500">Renforcée</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

export default Hero;
