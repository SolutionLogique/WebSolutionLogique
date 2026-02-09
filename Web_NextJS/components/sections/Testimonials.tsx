"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Quote, Star, MessageSquare } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonial {
  name: string;
  company: string;
  role: string;
  text: string;
  initials: string;
  rating: number;
}

function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Pierre Martin",
      company: "PME Services Annecy",
      role: "Directeur Général",
      text: "Solution Logique nous accompagne depuis 15 ans. Leur réactivité et leur expertise technique sont remarquables. Un vrai partenaire de confiance pour notre infrastructure IT.",
      initials: "PM",
      rating: 5,
    },
    {
      name: "Marie Dupont",
      company: "Cabinet Médical du Lac",
      role: "Médecin associée",
      text: "L'équipe a su comprendre nos besoins spécifiques en matière de sécurité des données patients. La mise en place de notre système a été fluide et professionnelle.",
      initials: "MD",
      rating: 5,
    },
    {
      name: "Jean-Luc Bernard",
      company: "Groupe Bernard Industries",
      role: "DSI",
      text: "La virtualisation de nos serveurs a transformé notre productivité. Solution Logique a su nous accompagner avec pédagogie dans cette transition majeure.",
      initials: "JB",
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      company: "Association Solidarité 74",
      role: "Directrice",
      text: "Même en tant qu'association, nous avons bénéficié d'un accompagnement premium. Leur service de télémaintenance nous fait gagner un temps précieux.",
      initials: "SL",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-50" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-primary mb-6">
            <MessageSquare className="w-4 h-4" />
            Témoignages
          </div>
          <h2 className="text-slate-900 mb-6">
            Ce que disent{" "}
            <span className="gradient-text">nos clients</span>
          </h2>
          <p className="text-xl text-slate-600">
            Découvrez les retours d&apos;expérience de ceux qui nous font confiance au quotidien.
          </p>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper !pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="card-modern p-8 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 leading-relaxed flex-grow mb-6 text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-emerald-600 font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #1e40af;
          background: white;
          width: 48px;
          height: 48px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .testimonials-swiper .swiper-button-next:hover,
        .testimonials-swiper .swiper-button-prev:hover {
          background: #1e40af;
          color: white;
          transform: scale(1.05);
        }

        .testimonials-swiper .swiper-button-next::after,
        .testimonials-swiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: bold;
        }

        .testimonials-swiper .swiper-pagination-bullet {
          background: #1e40af;
          opacity: 0.3;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: #10b981;
          width: 32px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
