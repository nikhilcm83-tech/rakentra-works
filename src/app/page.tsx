"use client";

import Link from "next/link";
import { 
  Building2, Home, Factory, Construction, ShieldCheck, 
  Award, Laptop, Calendar, ChevronRight, ArrowRight, Quote, Clock,
  MapPin, Star
} from "lucide-react";
import { statistics, services, projects, whyChooseUs, testimonials, partners } from "@/data/mockData";
import { FadeIn, ScrollReveal, StaggerContainer, ScaleHover, Counter } from "@/components/Animate";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case "ShieldAlert": return ShieldCheck;
      case "Award":       return Award;
      case "Laptop":      return Laptop;
      case "Calendar":    return Calendar;
      default:            return ShieldCheck;
    }
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "commercial":    return Building2;
      case "residential":   return Home;
      case "industrial":    return Factory;
      case "infrastructure": return Construction;
      default:              return Building2;
    }
  };

  return (
    <div className="relative overflow-hidden">

      {/* ═══════════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden">
        {/* BG Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop')`,
            filter: "brightness(0.2) saturate(0.7)",
          }}
        />
        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/85 to-navy-mid/40 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent z-0" />

        {/* Decorative grid */}
        <div className="absolute inset-0 grid-bg opacity-60 z-0" />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-[-5%] w-[600px] h-[600px] bg-orange-accent/6 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-[5%] w-[500px] h-[400px] bg-orange-accent/4 rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Orange diagonal accent strip */}
        <div className="absolute top-0 right-0 w-[28%] h-full bg-gradient-to-l from-orange-accent/8 to-transparent skew-x-[-6deg] origin-top-right z-0 border-l border-orange-accent/10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-8">
            
            <FadeIn delay={0.05}>
              <div className="badge-pill">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-accent animate-pulse" />
                {t("hero.badge")}
              </div>
            </FadeIn>

            <FadeIn delay={0.15} duration={0.7}>
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-manrope font-extrabold tracking-tight text-white leading-[1.0]">
                {t("hero.h1a")}<br />
                {t("hero.h1b")}{" "}
                <span className="text-gradient-orange">{t("hero.h1c")}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.25} duration={0.65}>
              <p className="text-lg sm:text-xl text-frost-dim font-inter font-normal leading-relaxed max-w-2xl">
                {t("hero.desc")}
              </p>
            </FadeIn>

            <FadeIn delay={0.35} duration={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-orange-accent hover:bg-orange-hover text-white text-sm font-bold tracking-wider uppercase rounded-md shadow-2xl shadow-orange-accent/20 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-orange-accent/35"
                >
                  {t("hero.viewProjects")}
                  <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-white/5 hover:bg-white/10 text-white text-sm font-bold tracking-wider uppercase border border-white/15 hover:border-white/30 rounded-md backdrop-blur-sm transition-all duration-250 hover:-translate-y-0.5"
                >
                  {t("hero.requestQuote")}
                </Link>
              </div>
            </FadeIn>

            {/* Trust indicators */}
            <FadeIn delay={0.45}>
              <div className="flex items-center gap-6 pt-2">
                <div className="flex -space-x-2">
                  {["HK","EM","MK"].map((initials, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-navy-deep bg-navy-light flex items-center justify-center text-[9px] font-bold text-slate-300">
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <div className="flex">
                    {[...Array(5)].map((_,i) => <Star key={i} className="w-3 h-3 text-orange-glow fill-orange-glow" />)}
                  </div>
                  <span><strong className="text-white">98%</strong> {t("hero.trust")}</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-deep to-transparent z-10 pointer-events-none" />
      </section>

      {/* ═══════════════════════════════════════════
          2. STATISTICS — Floating Cards
      ═══════════════════════════════════════════ */}
      <section className="relative z-20 -mt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {statistics.map((stat, idx) => (
                <ScrollReveal key={idx}>
                  <div className="group card-hover rounded-xl p-6 border border-white/10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
                    {/* Orange left accent bar */}
                    <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-accent/0 via-orange-accent to-orange-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Background number watermark */}
                    <div className="absolute -right-2 -top-2 text-[80px] font-extrabold text-white/[0.02] font-manrope leading-none select-none pointer-events-none">
                      {idx + 1}
                    </div>
                    <div className="relative z-10">
                      <div className="text-4xl sm:text-5xl font-manrope font-extrabold text-white tracking-tight">
                        <Counter value={stat.value} />
                      </div>
                      <div className="h-0.5 w-8 accent-bar mt-3 mb-3 transition-all duration-300 group-hover:w-14" />
                      <h4 className="text-xs font-bold tracking-widest uppercase text-orange-glow">{t(`stat.${idx}.label`)}</h4>
                      <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">{t(`stat.${idx}.desc`)}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. CORE SERVICES
      ═══════════════════════════════════════════ */}
      <section className="py-28 bg-navy-deep relative" id="services">
        {/* Subtle top border line */}
        <div className="absolute top-0 left-1/4 right-1/4 section-divider" />
        <div className="absolute top-10 right-[-5%] w-[400px] h-[400px] bg-orange-accent/4 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="space-y-3">
                <span className="badge-pill">{t("home.services.badge")}</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-extrabold text-white tracking-tight mt-3">
                  {t("home.services.h1")} <br />
                  <span className="text-gradient-orange">{t("home.services.h2")}</span>
                </h2>
              </div>
              <Link
                href="/services"
                className="group inline-flex items-center text-sm font-bold text-orange-glow hover:text-white transition-colors mt-6 md:mt-0"
              >
                {t("home.services.link")}
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 6).map((service) => {
                const ServiceIcon = getServiceIcon(service.id);
                return (
                  <ScrollReveal key={service.id}>
                    <ScaleHover>
                      <div className="group card-hover rounded-xl border border-white/10 overflow-hidden flex flex-col h-full" style={{ background: "linear-gradient(160deg, #0D1424 0%, #080E1E 100%)" }}>
                        {/* Image */}
                        <div className="h-52 overflow-hidden relative">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            style={{ filter: "brightness(0.75) saturate(0.9)" }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/30 to-transparent" />
                          {/* Icon badge */}
                          <div className="absolute bottom-4 left-4 p-2.5 bg-orange-accent rounded-lg text-white shadow-lg glow-orange-sm">
                            <ServiceIcon className="w-5 h-5" />
                          </div>
                          {/* Category tag */}
                          <span className="absolute top-4 right-4 badge-pill text-[9px] capitalize">{service.id}</span>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-lg font-bold text-white group-hover:text-orange-glow transition-colors duration-200 font-manrope">
                            {service.title}
                          </h3>
                          <p className="text-sm text-slate-400 mt-2.5 leading-relaxed flex-1">{service.overview}</p>
                          <div className="mt-5 pt-4 border-t border-white/5">
                            <Link
                              href={`/services#${service.id}`}
                              className="group/btn inline-flex items-center text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-orange-accent transition-colors"
                            >
                              {t("home.services.cardCta")}
                              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </ScaleHover>
                  </ScrollReveal>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. FEATURED PROJECTS
      ═══════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #080E1E 0%, #060C1A 60%, #040910 100%)" }}>
        <div className="absolute top-0 left-1/3 right-1/3 section-divider" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute bottom-0 left-[-10%] w-[700px] h-[500px] bg-orange-accent/3 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="space-y-3">
                <span className="badge-pill">{t("home.projects.badge")}</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-extrabold text-white tracking-tight mt-3">
                  {t("home.projects.h1")} <span className="text-gradient-orange">{t("home.projects.h2")}</span>
                </h2>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center text-sm font-bold text-orange-glow hover:text-white transition-colors mt-6 md:mt-0"
              >
                {t("home.projects.link")}
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.slice(0, 2).map((project) => (
                <ScrollReveal key={project.id}>
                  <div className="group card-hover rounded-xl border border-white/10 overflow-hidden flex flex-col h-full" style={{ background: "linear-gradient(160deg, #111827 0%, #0D1424 100%)" }}>
                    {/* Large Image */}
                    <div className="h-72 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        style={{ filter: "brightness(0.7) saturate(0.85)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/30 to-transparent" />
                      
                      {/* Category label */}
                      <span className="absolute top-4 left-4 badge-pill">{project.category}</span>

                      {/* Project title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-wider mb-1.5">
                          <MapPin className="w-3 h-3 text-orange-accent" />
                          {project.location}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-manrope font-extrabold text-white leading-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Project Stats Bar */}
                    <div className="grid grid-cols-3 border-b border-white/5 bg-navy-dark/60 divide-x divide-white/5">
                      {[
                        { label: t("home.projects.budget"), value: project.budget },
                        { label: t("home.projects.location"), value: project.location.split(",")[0] },
                        { label: t("home.projects.year"), value: project.completion.split(" ")[0] },
                      ].map((item) => (
                        <div key={item.label} className="py-3 px-4 text-center">
                          <span className="block text-[9px] uppercase tracking-wider text-slate-500 mb-0.5">{item.label}</span>
                          <span className="text-xs font-bold text-white truncate block">{item.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-sm text-slate-400 leading-relaxed">{project.overview.substring(0, 155)}…</p>
                      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[11px] text-slate-500 font-medium">{t("home.projects.client")} <span className="text-slate-300">{project.client}</span></span>
                        <Link
                          href={`/projects/${project.id}`}
                          className="group/item inline-flex items-center text-xs font-bold uppercase tracking-wider text-orange-accent hover:text-white transition-colors"
                        >
                          {t("home.projects.viewDetails")}
                          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/item:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. WHY RAKENTRA
      ═══════════════════════════════════════════ */}
      <section className="py-28 bg-navy-deep relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute top-[-10%] right-[-8%] w-[500px] h-[500px] bg-orange-accent/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <span className="badge-pill mx-auto">{t("home.why.badge")}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-extrabold text-white tracking-tight mt-3">
                {t("home.why.h1")} <span className="text-gradient-orange">{t("home.why.h2")}</span>
              </h2>
              <p className="text-base text-slate-400 leading-relaxed">
                {t("home.why.desc")}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, idx) => {
                const IconComp = getIcon(item.icon);
                return (
                  <ScrollReveal key={idx}>
                    <div className="group card-hover rounded-xl border border-white/10 p-8 flex gap-6 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
                      {/* BG index number watermark */}
                      <div className="absolute right-4 top-4 text-[120px] font-extrabold leading-none text-white/[0.02] font-manrope select-none pointer-events-none">
                        {idx + 1}
                      </div>
                      {/* Icon */}
                      <div className="shrink-0">
                        <div className="p-3.5 bg-orange-accent/10 border border-orange-accent/20 rounded-xl text-orange-accent group-hover:bg-orange-accent group-hover:text-white group-hover:border-orange-accent transition-all duration-300 h-max">
                          <IconComp className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="space-y-2 relative z-10">
                        <div className="h-0.5 w-6 accent-bar mb-3 group-hover:w-10 transition-all duration-300" />
                        <h3 className="text-lg font-bold text-white font-manrope">{t(`why.${idx}.title`)}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{t(`why.${idx}.desc`)}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(175deg, #08111f 0%, #060a15 100%)" }}>
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute bottom-0 right-[-5%] w-[600px] h-[400px] bg-orange-accent/4 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <span className="badge-pill mx-auto">{t("home.testimonials.badge")}</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope font-extrabold text-white tracking-tight mt-3">
                {t("home.testimonials.h1")} <br />
                <span className="text-gradient-orange">{t("home.testimonials.h2")}</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, idx) => (
                <ScrollReveal key={idx}>
                  <div className="group card-hover rounded-xl border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden h-full" style={{ background: "linear-gradient(155deg, #0D1424 0%, #080E1E 60%, #060C18 100%)" }}>
                    {/* Large decorative quote */}
                    <Quote className="w-12 h-12 absolute top-5 right-5 text-orange-accent/10 group-hover:text-orange-accent/20 transition-colors duration-300" />
                    
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-5">
                      {[...Array(5)].map((_,i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-orange-glow fill-orange-glow" />
                      ))}
                    </div>

                    <p className="text-sm text-slate-300 leading-[1.8] italic relative z-10 flex-1">
                      &ldquo;{t(`testimonial.${idx}.quote`)}&rdquo;
                    </p>

                    <div className="mt-8 pt-5 border-t border-white/5 flex items-center gap-3">
                      {/* Avatar initials */}
                      <div className="w-10 h-10 rounded-full bg-orange-accent/15 border border-orange-accent/25 flex items-center justify-center text-xs font-extrabold text-orange-accent font-manrope shrink-0">
                        {testimonial.author.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-manrope">{testimonial.author}</h4>
                        <p className="text-[11px] text-orange-glow mt-0.5">{t(`testimonial.${idx}.title`)}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">{testimonial.location}, Finland</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. PARTNERS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-navy-dark relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.25em]">
                {t("home.partners.label")}
              </span>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-items-center">
              {partners.map((partner, idx) => (
                <ScrollReveal key={idx}>
                  <div className="group w-full min-w-[110px] py-3 px-4 border border-white/5 hover:border-orange-accent/30 bg-white/2 hover:bg-orange-accent/5 rounded-lg flex items-center justify-center text-slate-500 group-hover:text-white text-xs tracking-widest font-extrabold uppercase transition-all duration-250 grayscale hover:grayscale-0">
                    {partner.logoText}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. CALL TO ACTION
      ═══════════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(145deg, #080E1E 0%, #040910 50%, #050D1A 100%)" }}>
        <div className="absolute top-0 left-0 right-0 section-divider" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        
        {/* Dual glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-accent/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[400px] bg-orange-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <ScrollReveal>
            <span className="badge-pill mx-auto mb-6 block w-max">{t("home.cta.badge")}</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-manrope font-extrabold text-white leading-tight">
              {t("home.cta.h1")}<br />
              <span className="text-gradient-orange">{t("home.cta.h2")}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              {t("home.cta.desc")}
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-orange-accent hover:bg-orange-hover text-white text-sm font-bold tracking-wider uppercase rounded-md shadow-2xl shadow-orange-accent/25 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-orange-accent/40"
              >
                {t("home.cta.btn1")}
                <ArrowRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white/5 hover:bg-white/10 text-white text-sm font-bold tracking-wider uppercase border border-white/15 hover:border-white/30 rounded-md backdrop-blur-sm transition-all duration-250 hover:-translate-y-0.5"
              >
                {t("home.cta.btn2")}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
