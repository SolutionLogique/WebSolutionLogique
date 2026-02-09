"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Users, Award, Clock, ThumbsUp, TrendingUp, Building2 } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  size?: "lg" | "default";
}

function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    {
      icon: Clock,
      value: 30,
      suffix: "+",
      label: "Années",
      description: "D'expertise en solutions IT",
      color: "from-blue-500 to-blue-600",
      size: "lg",
    },
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Clients",
      description: "Nous font confiance",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Award,
      value: 8,
      suffix: "",
      label: "Experts",
      description: "Certifiés à votre service",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: ThumbsUp,
      value: 99,
      suffix: "%",
      label: "Satisfaction",
      description: "Client garantie",
      color: "from-emerald-500 to-teal-600",
      size: "lg",
    },
    {
      icon: TrendingUp,
      value: 24,
      suffix: "/7",
      label: "Support",
      description: "Assistance continue",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Building2,
      value: 1,
      suffix: "",
      label: "Agence",
      description: "En Rhône-Alpes",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-accent mb-6">
            <TrendingUp className="w-4 h-4" />
            Nos performances
          </div>
          <h2 className="text-slate-900 mb-6">
            Des chiffres qui{" "}
            <span className="gradient-text">parlent</span>
          </h2>
          <p className="text-xl text-slate-600">
            Notre engagement se mesure à travers des résultats concrets
            et une satisfaction client exceptionnelle.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                card-modern p-6 lg:p-8 group
                ${stat.size === "lg" ? "lg:col-span-2 lg:row-span-1" : ""}
              `}
            >
              <div className={`flex ${stat.size === "lg" ? "flex-row items-center gap-6" : "flex-col"}`}>
                {/* Icon */}
                <div
                  className={`
                    ${stat.size === "lg" ? "w-20 h-20" : "w-14 h-14"}
                    rounded-2xl bg-gradient-to-br ${stat.color}
                    flex items-center justify-center mb-4 lg:mb-0
                    group-hover:scale-110 transition-transform duration-500
                    shadow-lg
                  `}
                >
                  <stat.icon className={`${stat.size === "lg" ? "w-10 h-10" : "w-7 h-7"} text-white`} />
                </div>

                {/* Content */}
                <div className={stat.size === "lg" ? "flex-1" : ""}>
                  <div className={`${stat.size === "lg" ? "text-5xl lg:text-6xl" : "text-4xl lg:text-5xl"} font-black text-slate-900 mb-1`}>
                    {isVisible ? (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        suffix={stat.suffix}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <div className="text-lg font-bold text-slate-700 mb-1">
                    {stat.label}
                  </div>
                  <p className="text-sm text-slate-500">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <div className="flex items-center gap-3 text-slate-500">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium">Certifié Qualiopi</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm font-medium">Partenaire EBP</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-sm font-medium">Microsoft Partner</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-sm font-medium">Dell Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
