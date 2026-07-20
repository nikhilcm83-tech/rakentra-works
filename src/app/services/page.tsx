"use client";

import { 
  Building2, Home, Factory, Construction, Drill, 
  Briefcase, CheckCircle, ArrowRight, ShieldCheck 
} from "lucide-react";
import { services } from "@/data/mockData";
import { FadeIn, ScrollReveal, StaggerContainer } from "@/components/Animate";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case "Building2": return Building2;
      case "Home": return Home;
      case "Factory": return Factory;
      case "Construction": return Construction;
      case "Drill": return Drill;
      case "Briefcase": return Briefcase;
      default: return Building2;
    }
  };

  return (
    <div className="bg-navy-deep min-h-screen text-slate-200">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-20 bg-navy-dark border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-accent/5 skew-x-12 origin-top border-l border-white/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          <div className="max-w-3xl space-y-4">
            <FadeIn delay={0.1}>
              <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("services.hero.badge")}</span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl font-manrope font-extrabold text-white tracking-tight">
                {t("services.hero.h1")}
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-inter">
                {t("services.hero.desc")}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. SERVICES ANCHOR LINKS */}
      <section className="py-8 bg-navy-deep/80 backdrop-blur-md sticky top-[72px] z-30 border-b border-white/5 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex gap-4 sm:gap-6 min-w-max pb-2 sm:pb-0">
            {services.map((service) => {
              const IconComponent = getIcon(service.iconName);
              const label = service.id === "commercial"
                ? t("nav.commercial")
                : service.id === "residential"
                  ? t("nav.residential")
                  : service.id === "industrial"
                    ? t("nav.industrial")
                    : service.id === "infrastructure"
                      ? t("nav.infrastructure")
                      : service.id === "renovation"
                        ? t("nav.renovation")
                        : t("nav.projectManagement");
              return (
                <a 
                  key={service.id}
                  href={`#${service.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-navy-light/40 border border-white/5 hover:border-orange-accent/40 rounded-md text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-all duration-200"
                >
                  <IconComponent className="w-4 h-4 text-orange-accent" />
                  <span>{label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DETAILED SERVICES LAYOUT */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {services.map((service, serviceIdx) => {
          const IconComponent = getIcon(service.iconName);
          const isEven = serviceIdx % 2 === 0;

          return (
            <div 
              key={service.id} 
              id={service.id}
              className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              
              {/* Image & Gallery Column */}
              <div className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <ScrollReveal>
                  <div className="h-72 sm:h-96 overflow-hidden rounded-lg border border-white/10 relative group shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 p-3 bg-navy-dark/90 border border-white/5 rounded-lg text-orange-accent flex items-center gap-3">
                      <IconComponent className="w-6 h-6" />
                      <span className="font-manrope font-extrabold text-sm uppercase tracking-wider text-white">{service.title}</span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Gallery thumbnails */}
                <StaggerContainer>
                  <div className="grid grid-cols-3 gap-4">
                    {service.gallery.map((imgUrl, imgIdx) => (
                      <ScrollReveal key={imgIdx}>
                        <div 
                          className="h-20 sm:h-24 overflow-hidden rounded-md border border-white/5 relative hover:border-orange-accent/50 transition-colors cursor-pointer group"
                        >
                          <img 
                            src={imgUrl} 
                            alt={`${service.title} gallery ${imgIdx + 1}`} 
                            className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                          />
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </StaggerContainer>
              </div>

              {/* Information Column */}
              <div className={`lg:col-span-7 space-y-8 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <ScrollReveal>
                  <div className="space-y-4">
                    <span className="text-xs font-extrabold text-orange-accent uppercase tracking-widest block font-manrope">
                      {t("services.division")} {serviceIdx + 1 < 10 ? `0${serviceIdx + 1}` : serviceIdx + 1}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-manrope font-extrabold text-white tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-inter">
                      {service.overview}
                    </p>
                  </div>
                </ScrollReveal>

                {/* Key Benefits */}
                <ScrollReveal>
                  <div className="space-y-3.5">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 font-manrope">
                      {t("services.benefits")}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {service.benefits.map((benefit, benefitIdx) => (
                        <div key={benefitIdx} className="flex items-start gap-2 text-xs text-slate-300 font-inter">
                          <CheckCircle className="w-4.5 h-4.5 text-orange-accent shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Process Steps */}
                <ScrollReveal>
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 font-manrope">
                      {t("services.process")}
                    </h3>
                    <div className="relative border-l border-white/10 pl-4 space-y-4">
                      {service.process.map((p) => (
                        <div key={p.step} className="relative">
                          <div className="absolute left-[-22px] top-1 w-3.5 h-3.5 bg-orange-accent rounded-full border-2 border-navy-deep" />
                          <h4 className="text-xs font-bold text-white flex items-center gap-2 font-manrope">
                            <span className="text-[10px] text-orange-accent font-extrabold bg-orange-accent/10 px-1.5 py-0.5 rounded">
                              {t("services.step")} 0{p.step}
                            </span>
                            {p.name}
                          </h4>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed font-inter">
                            {p.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Action button */}
                <ScrollReveal>
                  <div className="pt-4">
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-orange-accent hover:bg-orange-hover text-white text-xs font-bold tracking-wider uppercase rounded shadow transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {t("services.cta")}
                    </a>
                  </div>
                </ScrollReveal>

              </div>

            </div>
          );
        })}
      </section>

      {/* 4. CERTIFIED CREDENTIALS CTA */}
      <section className="py-20 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <ScrollReveal>
              <div className="max-w-2xl space-y-4 text-left">
                <h2 className="text-2xl sm:text-3xl font-manrope font-extrabold text-white">
                  {t("services.certs.h")}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed font-inter">
                  {t("services.certs.desc")}
                </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
              <div className="shrink-0 flex items-center gap-3 px-6 py-4 bg-navy-light/60 border border-white/10 rounded-lg shadow-lg">
                <ShieldCheck className="w-10 h-10 text-orange-accent" />
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-manrope">{t("services.certs.label")}</span>
                  <span className="text-sm font-bold text-white font-manrope">{t("services.certs.reg")}</span>
                </div>
              </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
