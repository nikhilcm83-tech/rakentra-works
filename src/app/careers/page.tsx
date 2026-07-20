"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, CheckCircle, MapPin, Clock, X, 
  Send, Users2, ShieldCheck, HeartHandshake, Award, FileText 
} from "lucide-react";
import { openPositions } from "@/data/mockData";
import { FadeIn, ScrollReveal, StaggerContainer, ScaleHover } from "@/components/Animate";
import { useLanguage } from "@/context/LanguageContext";

export default function CareersPage() {
  const { t } = useLanguage();
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [isApplied, setIsApplied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    coverLetter: "",
  });

  const handleApply = (posTitle: string) => {
    setSelectedPosition(posTitle);
    setIsApplied(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplied(true);
    setTimeout(() => {
      setSelectedPosition(null);
      setFormData({ name: "", email: "", phone: "", linkedin: "", coverLetter: "" });
    }, 2500);
  };

  const benefits = [
    { title: t("careers.benefits.0.title"), desc: t("careers.benefits.0.desc") },
    { title: t("careers.benefits.1.title"), desc: t("careers.benefits.1.desc") },
    { title: t("careers.benefits.2.title"), desc: t("careers.benefits.2.desc") },
    { title: t("careers.benefits.3.title"), desc: t("careers.benefits.3.desc") }
  ];

  const recruitmentSteps = [
    { step: 1, title: t("careers.steps.0.title"), desc: t("careers.steps.0.desc") },
    { step: 2, title: t("careers.steps.1.title"), desc: t("careers.steps.1.desc") },
    { step: 3, title: t("careers.steps.2.title"), desc: t("careers.steps.2.desc") },
    { step: 4, title: t("careers.steps.3.title"), desc: t("careers.steps.3.desc") }
  ];

  return (
    <div className="bg-navy-deep min-h-screen text-slate-200 relative">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-20 bg-navy-dark border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-accent/5 skew-x-12 origin-top border-l border-white/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          <div className="max-w-3xl space-y-4">
            <FadeIn delay={0.1}>
              <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("careers.hero.badge")}</span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl font-manrope font-extrabold text-white tracking-tight animate-pulse-slow">
                {t("careers.hero.h1")} {t("careers.hero.h2")}
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-inter">
                {t("careers.hero.desc")}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. CULTURE & VALUES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("careers.culture.badge")}</span>
                <h2 className="text-3xl font-manrope font-extrabold text-white tracking-tight">
                  {t("careers.culture.h")}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed font-inter">
                  {t("careers.culture.desc")}
                </p>
                <div className="space-y-4 pt-2 font-inter">
                  <div className="flex items-start gap-3">
                    <Users2 className="w-5 h-5 text-orange-accent mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-400"><strong className="text-slate-200">{t("careers.culture.point1.title")}</strong> {t("careers.culture.point1.desc")}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-orange-accent mt-0.5 shrink-0" />
                    <p className="text-xs text-slate-400"><strong className="text-slate-200">{t("careers.culture.point2.title")}</strong> {t("careers.culture.point2.desc")}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7">
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((b, idx) => (
                  <ScrollReveal key={idx}>
                    <div className="p-6 rounded-lg border border-white/10 space-y-2 hover:border-orange-accent/30 transition-all duration-300 h-full" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
                      <h3 className="text-base font-bold text-white flex items-center gap-2 font-manrope">
                        <CheckCircle className="w-4.5 h-4.5 text-orange-accent shrink-0" />
                        {b.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-inter">
                        {b.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS PORTFOLIO */}
      <section className="py-24 bg-navy-dark border-t border-b border-white/5" id="positions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("careers.positions.badge")}</span>
                <h2 className="text-3xl font-manrope font-extrabold text-white tracking-tight">
                  {t("careers.positions.h")}
                </h2>
                <p className="text-sm text-slate-400 font-inter">
                  {t("careers.positions.desc")}
                </p>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="space-y-8 max-w-5xl mx-auto">
              {openPositions.map((pos) => (
                <ScrollReveal key={pos.id}>
                  <ScaleHover>
                    <div 
                      className="p-8 rounded-lg border border-white/10 space-y-6 hover:border-orange-accent/30 transition-all duration-300 shadow-xl"
                      style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-white/5">
                        <div className="space-y-1.5">
                          <h3 className="text-xl font-bold text-white font-manrope">{pos.title}</h3>
                          <div className="flex flex-wrap gap-3 text-xs text-slate-400 font-inter">
                            <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-orange-accent" /> {pos.department}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-orange-accent" /> {pos.location}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-orange-accent" /> {pos.type}</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleApply(pos.title)}
                          className="px-6 py-2.5 bg-orange-accent hover:bg-orange-hover text-white text-xs font-bold tracking-wider uppercase rounded shadow transition-all duration-200 cursor-pointer"
                        >
                          {t("careers.positions.applyBtn")}
                        </button>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed font-inter">{pos.desc}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-400 pt-2 font-inter">
                          <div className="space-y-2">
                            <h4 className="font-bold text-white uppercase tracking-wider font-manrope">{t("careers.positions.responsibilities")}</h4>
                            <ul className="list-disc list-inside space-y-1.5 pl-1 leading-relaxed">
                              {pos.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-bold text-white uppercase tracking-wider font-manrope">{t("careers.positions.requirements")}</h4>
                            <ul className="list-disc list-inside space-y-1.5 pl-1 leading-relaxed">
                              {pos.requirements.map((req, i) => <li key={i}>{req}</li>)}
                            </ul>
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

      {/* 4. RECRUITMENT PIPELINE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("careers.recruitment.badge")}</span>
                <h2 className="text-3xl font-manrope font-extrabold text-white tracking-tight">
                  {t("careers.recruitment.h")}
                </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruitmentSteps.map((step, idx) => (
              <ScrollReveal key={idx}>
                <div className="p-6 rounded-lg border border-white/10 space-y-3.5 relative h-full hover:border-orange-accent/30 transition-colors duration-300" style={{ background: "linear-gradient(135deg, #0D1424 0%, #080E1E 100%)" }}>
                  <span className="absolute top-4 right-4 text-xs font-extrabold text-orange-accent bg-orange-accent/10 px-2 py-0.5 rounded font-manrope">
                    PHASE 0{step.step}
                  </span>
                  <h3 className="text-base font-bold text-white pt-2 font-manrope">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-inter">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* 5. APPLY MODAL DIALOG OVERLAY */}
      <AnimatePresence>
        {selectedPosition && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPosition(null)}
              className="absolute inset-0 bg-black backdrop-blur-sm"
            />

            {/* Form Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg rounded-xl border border-white/10 p-6 sm:p-8 relative z-10 overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              style={{ background: "#0D1424" }}
            >
              <div className="flex justify-between items-center pb-4 border-b border-white/5 mb-6">
                <div>
                  <span className="text-[10px] text-orange-accent font-bold uppercase tracking-widest block font-manrope">{t("careers.form.badge")}</span>
                <h3 className="text-lg font-bold text-white font-manrope">{selectedPosition}</h3>
                </div>
                <button 
                  onClick={() => setSelectedPosition(null)}
                  className="p-1.5 hover:bg-white/5 rounded text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {isApplied ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-12 h-12 bg-orange-accent/15 border border-orange-accent/25 rounded-full flex items-center justify-center text-orange-accent mx-auto">
                    <Send className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-manrope">Application Sent Successfully!</h4>
                  <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto font-inter">
                    Thank you for applying. Our talent coordinator will review your profile and contact you within 3 business days.
                  </p>
                </div>
              ) : (
                <form className="space-y-4 text-xs font-inter" onSubmit={handleFormSubmit}>
                  <div className="space-y-1">
                    <label htmlFor="app-name" className="block text-slate-400 uppercase tracking-wider font-semibold">{t("careers.form.name")}</label>
                    <input 
                      type="text" 
                      id="app-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="E.g. Pekka Virtanen" 
                      className="w-full bg-navy-light/50 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-accent/50"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="app-email" className="block text-slate-400 uppercase tracking-wider font-semibold">{t("careers.form.email")}</label>
                      <input 
                        type="email" 
                        id="app-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="pekka.virtanen@gmail.com" 
                        className="w-full bg-navy-light/50 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-accent/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="app-phone" className="block text-slate-400 uppercase tracking-wider font-semibold">{t("careers.form.phone")}</label>
                      <input 
                        type="tel" 
                        id="app-phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+358 40 123 4567" 
                        className="w-full bg-navy-light/50 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-accent/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="app-linkedin" className="block text-slate-400 uppercase tracking-wider font-semibold">{t("careers.form.linkedin")}</label>
                    <input 
                      type="url" 
                      id="app-linkedin"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                      placeholder="https://linkedin.com/in/username" 
                      className="w-full bg-navy-light/50 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-accent/50"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="app-letter" className="block text-slate-400 uppercase tracking-wider font-semibold">{t("careers.form.message")}</label>
                    <textarea 
                      id="app-letter"
                      rows={4}
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                      placeholder="Summarize your engineering background or on-site experience..." 
                      className="w-full bg-navy-light/50 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-accent/50 resize-none"
                    />
                  </div>
                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-orange-accent hover:bg-orange-hover text-white text-xs font-bold tracking-wider uppercase rounded shadow-lg transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      {t("careers.form.submit")}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
