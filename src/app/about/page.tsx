"use client";

import { ShieldCheck, Target, Award, Eye, Calendar, UserCheck, ShieldAlert } from "lucide-react";
import { FadeIn, ScrollReveal, StaggerContainer, ScaleHover } from "@/components/Animate";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const timelineMilestones = [
    {
      year: "2008",
      title: "Company Foundation",
      desc: "Rakentra Works was founded in Helsinki by a group of senior civil engineers, focusing on commercial office masonry and concrete frame projects."
    },
    {
      year: "2012",
      title: "First €10M Breakthrough",
      desc: "Contracted to build the Espoo Logistics Terminal, our first large-scale structural project, completed 3 weeks ahead of schedule."
    },
    {
      year: "2016",
      title: "Expansion to Tampere & RALA",
      desc: "Opened our Tampere regional office to manage growing industrial demands. Received our first official RALA contractor certification."
    },
    {
      year: "2020",
      title: "Heavy Industrial division",
      desc: "Launched our specialized Heavy Industrial and Infrastructure division to construct chemical facilities and public civil bridge works."
    },
    {
      year: "2025",
      title: "Full BIM Integration",
      desc: "Standardized 100% of our planning processes into Level 3 BIM (Building Information Modeling) and launched geothermal heat recovery systems."
    }
  ];

  const leadership = [
    {
      name: "Jari Rajamäki",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
      bio: "25+ years in civil engineering. Ex-YIT Projects Director. Oversees corporate strategy and municipality relations."
    },
    {
      name: "Laura Hämäläinen",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
      bio: "Specializes in supply chain mechanics and large-scale industrial project scheduling. Sweco alumna."
    },
    {
      name: "Hannu Rajala",
      role: "Director of HSE & Safety",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
      bio: "Pioneered Finland's Arctic Winter Safety Protocols. Oversees our zero-accident site audits."
    }
  ];

  const certifications = [
    { name: "RALA Quality Certification", body: "Rakentamisen Laatu RALA ry", code: "Reg #2849", desc: "Recognizes high standards in technical capability, financial stability, and quality control." },
    { name: "ISO 9001:2015", body: "SFS Certification", code: "ISO 9001", desc: "International standard for structural quality management systems." },
    { name: "ISO 14001:2015", body: "SFS Certification", code: "ISO 14001", desc: "Validation of our green building waste reduction and carbon mitigation metrics." },
    { name: "Safe Contractor FI", body: "Finnish Occupational Safety", code: "HSE-Gold", desc: "Top-tier rating for zero-accident protocols and on-site workforce protection." }
  ];

  return (
    <div className="bg-navy-deep min-h-screen text-slate-200">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-20 bg-navy-dark border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 filter grayscale pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop')` }} />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-accent/5 skew-x-12 origin-top border-l border-white/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          <div className="max-w-3xl space-y-4">
            <FadeIn delay={0.1}>
              <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("about.hero.badge")}</span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl font-manrope font-extrabold text-white tracking-tight">
                {t("about.hero.h1")} <br />
                {t("about.hero.h2")}
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-inter">
                {t("about.hero.desc")}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <ScrollReveal>
              <div className="p-8 rounded-lg border border-white/10 space-y-4 relative h-full hover:border-orange-accent/30 transition-colors duration-300" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
                <div className="p-3 bg-orange-accent/15 border border-orange-accent/20 rounded-lg text-orange-accent w-max">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-manrope font-bold text-white">{t("about.mission.title")}</h2>
                <p className="text-sm text-slate-400 leading-relaxed font-inter">
                  {t("about.mission.desc")}
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal>
              <div className="p-8 rounded-lg border border-white/10 space-y-4 relative h-full hover:border-orange-accent/30 transition-colors duration-300" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
                <div className="p-3 bg-orange-accent/15 border border-orange-accent/20 rounded-lg text-orange-accent w-max">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-manrope font-bold text-white">{t("about.vision.title")}</h2>
                <p className="text-sm text-slate-400 leading-relaxed font-inter">
                  {t("about.vision.desc")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </StaggerContainer>
      </section>

      {/* 3. INTERACTIVE TIMELINE */}
      <section className="py-24 bg-navy-dark border-t border-b border-white/5" id="history">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("about.history.badge")}</span>
              <h2 className="text-3xl sm:text-4xl font-manrope font-extrabold text-white tracking-tight">
                {t("about.history.h")}
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="relative border-l border-white/10 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12">
              {timelineMilestones.map((item, idx) => (
                <ScrollReveal key={idx}>
                  <div className="relative">
                    {/* Timeline node dot */}
                    <div className="absolute left-[-31px] sm:left-[-39px] top-1.5 w-4 h-4 bg-orange-accent rounded-full border-4 border-navy-dark" />
                    
                    <div className="p-6 rounded-lg border border-white/10 space-y-2 hover:border-orange-accent/30 transition-colors duration-300" style={{ background: "linear-gradient(135deg, #0D1424 0%, #080E1E 100%)" }}>
                      <span className="inline-block text-xs font-extrabold text-orange-accent tracking-wider font-manrope bg-orange-accent/10 px-2.5 py-1 rounded">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-2 font-manrope">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed font-inter">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. SAFETY & CERTIFICATIONS */}
      <section className="py-24 bg-navy-deep" id="safety">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Safety Pillar description */}
            <ScrollReveal>
              <div className="space-y-6 lg:col-span-1">
                <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("about.safety.badge")}</span>
                <h2 className="text-3xl font-manrope font-extrabold text-white tracking-tight leading-tight">
                  {t("about.safety.h")}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed font-inter">
                  {t("about.safety.desc")}
                </p>
                <div className="p-4 bg-navy-dark border border-white/10 rounded-lg flex items-start gap-4 hover:border-orange-accent/30 transition-colors duration-350">
                  <ShieldAlert className="w-8 h-8 text-orange-accent shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-manrope">{t("about.safety.zeroTitle")}</h4>
                    <p className="text-xs text-slate-400 mt-1 font-inter">{t("about.safety.zeroDesc")}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Certifications Grid */}
            <div className="lg:col-span-2">
              <StaggerContainer>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="certifications">
                  {certifications.map((c, idx) => (
                    <ScrollReveal key={idx}>
                      <div className="p-6 rounded-lg border border-white/10 flex flex-col justify-between h-full hover:border-orange-accent/30 transition-all duration-300" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <h3 className="text-base font-bold text-white font-manrope">{c.name}</h3>
                            <span className="text-[10px] font-bold text-orange-accent bg-orange-accent/10 border border-orange-accent/25 px-1.5 py-0.5 rounded uppercase">
                              {c.code}
                            </span>
                          </div>
                          <span className="text-[10px] font-medium text-slate-500 uppercase block font-manrope">{c.body}</span>
                          <p className="text-xs text-slate-400 leading-relaxed pt-2 font-inter">
                            {c.desc}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-300">
                          <ShieldCheck className="w-4 h-4 text-orange-accent" />
                          <span className="font-manrope">Verified Compliant</span>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP SECTION */}
      <section className="py-24 bg-navy-dark border-t border-white/5" id="leadership">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("about.leadership.badge")}</span>
              <h2 className="text-3xl sm:text-4xl font-manrope font-extrabold text-white tracking-tight">
                {t("about.leadership.h")}
              </h2>
              <p className="text-sm text-slate-400 font-inter">
                {t("about.leadership.sub")}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((member, idx) => (
                <ScrollReveal key={idx}>
                  <ScaleHover>
                    <div className="rounded-lg border border-white/10 overflow-hidden group h-full" style={{ background: "linear-gradient(160deg, #111827 0%, #0D1424 100%)" }}>
                      <div className="h-64 overflow-hidden relative">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover filter brightness-90 grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
                      </div>
                      <div className="p-6 space-y-3">
                        <div>
                          <h3 className="text-lg font-bold text-white font-manrope">{member.name}</h3>
                          <span className="text-xs font-semibold text-orange-accent block mt-0.5 font-manrope">{member.role}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pt-2 font-inter">
                          {member.bio}
                        </p>
                        <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                          <UserCheck className="w-4 h-4 text-orange-accent" />
                          <span className="font-manrope">RALA Audited Signatory</span>
                        </div>
                      </div>
                    </div>
                  </ScaleHover>
                </ScrollReveal>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}
