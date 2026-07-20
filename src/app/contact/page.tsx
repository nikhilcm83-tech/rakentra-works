"use client";

import { useState, useEffect } from "react";
import { 
  MapPin, Phone, Mail, Clock, Send, 
  ShieldAlert, Landmark, CheckCircle, ChevronRight, Calculator, Landmark as BuildingIcon, Cpu, Hammer, Ruler
} from "lucide-react";
import { FadeIn, ScrollReveal } from "@/components/Animate";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [activeOffice, setActiveOffice] = useState<"helsinki" | "tampere">("helsinki");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Quote Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "Commercial",
    budget: "€1M - €5M",
    message: "",
  });

  // Estimator State
  const [estCategory, setEstCategory] = useState<"Commercial" | "Residential" | "Industrial" | "Infrastructure" | "Renovation">("Commercial");
  const [estArea, setEstArea] = useState(1500); // default 1500 m2
  const [estQuality, setEstQuality] = useState<"Standard" | "Premium" | "Ultra">("Premium");
  const [optBim, setOptBim] = useState(true);
  const [optSensors, setOptSensors] = useState(false);

  // Estimator Calculations
  const categoryRates = {
    Commercial: 1850,
    Residential: 2150,
    Industrial: 1350,
    Infrastructure: 2550,
    Renovation: 1950
  };

  const calculateBudgetRange = (value: number) => {
    if (value < 1000000) return "Under €1M";
    if (value >= 1000000 && value <= 5000000) return "€1M - €5M";
    if (value > 5000000 && value <= 20000000) return "€5M - €20M";
    return "Over €20M";
  };

  const runCalculation = () => {
    const baseRate = categoryRates[estCategory] || 1850;
    let multiplier = 1.0;
    if (estQuality === "Premium") multiplier = 1.2;
    if (estQuality === "Ultra") multiplier = 1.45;

    let total = baseRate * estArea * multiplier;
    if (optBim) total += 35000;
    if (optSensors) total += 15000;

    // Timeline calculation
    let months = Math.ceil(estArea / 800) + 5;
    if (estCategory === "Renovation") months += 3;
    if (estCategory === "Infrastructure") months += 6;
    if (months > 42) months = 42;

    return {
      total: Math.round(total),
      duration: months
    };
  };

  const currentEst = runCalculation();

  // Pre-fill form from estimator values
  const applyEstimatesToForm = () => {
    const formattedBudget = currentEst.total.toLocaleString("fi-FI", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
    const generatedMessage = `Automatic Estimator Setup:\n- Category: ${estCategory}\n- Estimated Area: ${estArea} m²\n- Specification: ${estQuality} Grade\n- Extras: ${optBim ? "BIM Level 3 included" : "No BIM extras"}, ${optSensors ? "IoT telemetry included" : "No telemetry extras"}\n- Projected Budget: ${formattedBudget}\n- Estimated Duration: ${currentEst.duration} Months\n\n[Please provide a detailed technical quote matching these parameters]`;

    setFormData({
      ...formData,
      category: estCategory,
      budget: calculateBudgetRange(currentEst.total),
      message: generatedMessage
    });

    // Smooth scroll down to form
    const formSection = document.getElementById("quote-form-anchor");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const offices = {
    helsinki: {
      name: "Helsinki Headquarters",
      address: "Mannerheimintie 12A, 00100 Helsinki, Finland",
      phone: "+358 10 234 5678",
      email: "helsinki@rakentra.fi",
      hours: "Mon - Fri: 08:00 - 16:30 (EET)",
      lat: "60.1699",
      lon: "24.9384",
    },
    tampere: {
      name: "Tampere Regional Office",
      address: "Hervannan Valtaväylä 22, 33720 Tampere, Finland",
      phone: "+358 10 234 5699",
      email: "tampere@rakentra.fi",
      hours: "Mon - Fri: 08:00 - 16:00 (EET)",
      lat: "61.4503",
      lon: "23.8486",
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        category: "Commercial",
        budget: "€1M - €5M",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="bg-navy-deep min-h-screen text-slate-200">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-20 bg-navy-dark border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-accent/5 skew-x-12 origin-top border-l border-white/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          <div className="max-w-3xl space-y-4">
            <FadeIn delay={0.1}>
              <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("contact.hero.badge")}</span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl font-manrope font-extrabold text-white tracking-tight">
                {t("contact.hero.h")}
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-inter">
                {t("contact.hero.desc")}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC MOCK ESTIMATOR TOOL SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 mb-16">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-accent/15 border border-orange-accent/25 text-orange-accent rounded-lg">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("contact.estimator.badge")}</span>
                <h2 className="text-2xl sm:text-3xl font-manrope font-extrabold text-white">{t("contact.estimator.h")}</h2>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Calculator Inputs Card */}
              <div className="lg:col-span-7 p-6 sm:p-8 rounded-lg border border-white/10 space-y-6" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
                <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-white/10 pb-3 font-manrope">
                  {t("contact.estimator.specs")}
                </h3>

                {/* Category select buttons */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider font-manrope">{t("contact.estimator.division")}</label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {Object.keys(categoryRates).map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setEstCategory(cat as any)}
                        className={`py-2 px-1 text-[10px] font-bold uppercase tracking-wider rounded border text-center transition-all cursor-pointer ${
                          estCategory === cat
                            ? "bg-orange-accent/15 text-orange-accent border-orange-accent/50 glow-orange"
                            : "bg-navy-light/40 text-slate-400 border-white/5 hover:text-white"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Area range slider */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider font-manrope">
                    <span>{t("contact.estimator.range")}</span>
                    <span className="text-white text-sm font-manrope bg-navy-light/80 border border-white/5 px-2 py-0.5 rounded">
                      {estArea.toLocaleString("fi-FI")} m²
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="20000"
                    step="100"
                    value={estArea}
                    onChange={(e) => setEstArea(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-navy-light rounded-lg appearance-none cursor-pointer accent-orange-accent"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-semibold uppercase tracking-widest font-manrope">
                    <span>100 m²</span>
                    <span>10,000 m²</span>
                    <span>20,000 m²</span>
                  </div>
                </div>

                {/* Quality Grade Buttons */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider font-manrope">{t("contact.estimator.qualityLabel")}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { grade: "Standard", desc: "Basic Eurocode & Finnish standards." },
                      { grade: "Premium", desc: "RALA Certified, Level 3 BIM optimization." },
                      { grade: "Ultra", desc: "Arctic Insulation, maximum heat recovery." }
                    ].map((item) => (
                      <button
                        key={item.grade}
                        type="button"
                        onClick={() => setEstQuality(item.grade as any)}
                        className={`p-3 text-left rounded border transition-all cursor-pointer ${
                          estQuality === item.grade
                            ? "bg-orange-accent/10 border-orange-accent/40 text-white"
                            : "bg-navy-light/30 border-white/5 text-slate-400 hover:text-white"
                        }`}
                      >
                        <span className="block text-xs font-bold uppercase tracking-wider font-manrope">{item.grade}</span>
                        <span className="block text-[10px] text-slate-500 mt-1 font-inter leading-relaxed">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Extras Checklist */}
                <div className="space-y-3 pt-2 font-inter text-xs">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider font-manrope">{t("contact.estimator.extras")}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex items-center gap-3 p-3 bg-navy-light/30 border border-white/5 rounded cursor-pointer hover:border-white/10 select-none">
                      <input
                        type="checkbox"
                        checked={optBim}
                        onChange={(e) => setOptBim(e.target.checked)}
                        className="w-4 h-4 rounded border-white/10 accent-orange-accent"
                      />
                      <div>
                        <span className="font-bold text-slate-200 block">Autodesk Solibri BIM Audit</span>
                        <span className="text-[10px] text-slate-500 block mt-0.5">Clash-free spatial layout control.</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 bg-navy-light/30 border border-white/5 rounded cursor-pointer hover:border-white/10 select-none">
                      <input
                        type="checkbox"
                        checked={optSensors}
                        onChange={(e) => setOptSensors(e.target.checked)}
                        className="w-4 h-4 rounded border-white/10 accent-orange-accent"
                      />
                      <div>
                        <span className="font-bold text-slate-200 block">IoT Concrete Maturity Sensors</span>
                        <span className="text-[10px] text-slate-500 block mt-0.5">Embedded telemetry tracking load logs.</span>
                      </div>
                    </label>
                  </div>
                </div>

              </div>

              {/* Calculator Output Panel Card */}
              <div className="lg:col-span-5 bg-navy-light/50 border border-orange-accent/20 rounded-lg p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-accent/5 rounded-full blur-2xl pointer-events-none" />
                
                <div className="space-y-6">
                  <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-white/10 pb-3 font-manrope">
                    {t("contact.estimator.output")}
                  </h3>

                  {/* Calculations */}
                  <div className="space-y-4">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold font-manrope">Estimated Budget Projection</span>
                      <div className="text-3xl sm:text-4xl font-extrabold text-orange-accent tracking-tight font-manrope mt-1">
                        {currentEst.total.toLocaleString("fi-FI", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })}
                      </div>
                      <span className="text-[9px] text-slate-500 block mt-0.5 uppercase tracking-wider">Estimated rate: ~{Math.round(currentEst.total / estArea)} €/m²</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 text-xs font-manrope">
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-slate-500">Duration Range</span>
                        <span className="text-sm font-bold text-white block mt-1">{currentEst.duration} Months</span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-wider text-slate-500">Eurocode compliance</span>
                        <span className="text-sm font-bold text-white block mt-1">Grade-A Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Cost breakdown charts */}
                  <div className="space-y-3 pt-2 font-manrope">
                    <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Budget Allocation Breakdown</span>
                    <div className="space-y-2 text-[10px]">
                      <div>
                        <div className="flex justify-between text-slate-400 mb-1">
                          <span>Foundation & excavation (30%)</span>
                          <span className="text-white">{(currentEst.total * 0.3).toLocaleString("fi-FI", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="w-full bg-navy-dark h-1 rounded overflow-hidden">
                          <div className="bg-orange-accent h-full transition-all duration-500" style={{ width: "30%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-400 mb-1">
                          <span>Concrete Core & Steel Framing (40%)</span>
                          <span className="text-white">{(currentEst.total * 0.4).toLocaleString("fi-FI", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="w-full bg-navy-dark h-1 rounded overflow-hidden">
                          <div className="bg-orange-accent h-full transition-all duration-500" style={{ width: "40%" }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-slate-400 mb-1">
                          <span>Insulated Facade & Glazing (20%)</span>
                          <span className="text-white">{(currentEst.total * 0.2).toLocaleString("fi-FI", { style: "currency", currency: "EUR", maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="w-full bg-navy-dark h-1 rounded overflow-hidden">
                          <div className="bg-orange-accent h-full transition-all duration-500" style={{ width: "20%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <button
                    type="button"
                    onClick={applyEstimatesToForm}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-orange-accent hover:bg-orange-hover text-white text-xs font-bold tracking-wider uppercase rounded shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    {t("contact.estimator.applyBtn")}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </ScrollReveal>
        </div>

        {/* 3. CONTACT INFO & FORM DUAL COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8" id="quote-form-anchor">
          
          {/* Left Column: Office Selectors & Contacts */}
          <div className="lg:col-span-4 space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("contact.offices.badge")}</span>
                <h2 className="text-2xl font-manrope font-bold text-white">{t("contact.offices.h")}</h2>
              </div>
            </ScrollReveal>

            {/* Selector Buttons */}
            <ScrollReveal>
              <div className="flex gap-2 bg-navy-light/40 border border-white/5 p-1 rounded-md">
                <button
                  onClick={() => setActiveOffice("helsinki")}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer ${
                    activeOffice === "helsinki" ? "bg-orange-accent text-white shadow" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Helsinki
                </button>
                <button
                  onClick={() => setActiveOffice("tampere")}
                  className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer ${
                    activeOffice === "tampere" ? "bg-orange-accent text-white shadow" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Tampere
                </button>
              </div>
            </ScrollReveal>

            {/* Office Details Info Card */}
            <ScrollReveal>
              <div className="p-6 rounded-lg border border-white/10 space-y-5 hover:border-orange-accent/30 transition-colors duration-300" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
                <h3 className="text-base font-bold text-white font-manrope">
                  {offices[activeOffice].name}
                </h3>
                
                <div className="space-y-4 text-xs font-inter">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-accent shrink-0 mt-0.5" />
                    <span className="text-slate-300 leading-relaxed">{offices[activeOffice].address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4.5 h-4.5 text-orange-accent shrink-0" />
                    <span className="text-slate-300">{offices[activeOffice].phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4.5 h-4.5 text-orange-accent shrink-0" />
                    <span className="text-slate-300">{offices[activeOffice].email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4.5 h-4.5 text-orange-accent shrink-0" />
                    <span className="text-slate-300">{offices[activeOffice].hours}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Safety/Emergency Site Hotline */}
            <ScrollReveal>
              <div className="p-6 bg-red-950/20 border border-red-500/20 rounded-lg space-y-3.5 hover:border-red-500/40 transition-colors duration-300">
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider font-manrope">
                  <ShieldAlert className="w-5 h-5" />
                  <span>{t("contact.emergency.label")}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-inter">
                  {t("contact.emergency.desc")}
                </p>
                <div className="text-sm font-extrabold text-white flex items-center gap-1.5 pt-1 font-manrope">
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>+358 10 234 9111</span>
                </div>
                <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-semibold font-manrope">Available 24/7/365</span>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-8 space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope font-medium">{t("contact.form.badge")}</span>
                <h2 className="text-2xl font-manrope font-bold text-white">{t("contact.form.h")}</h2>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="p-6 sm:p-8 rounded-lg border border-white/10 relative" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
                {isSubmitted ? (
                  <div className="text-center py-20 space-y-4">
                    <div className="w-12 h-12 bg-orange-accent/15 border border-orange-accent/25 rounded-full flex items-center justify-center text-orange-accent mx-auto animate-bounce">
                      <CheckCircle className="w-6 h-6 animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-manrope font-semibold">{t("contact.form.successTitle")}</h3>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed font-inter">
                      {t("contact.form.successDesc")}
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6 text-xs font-inter" onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label htmlFor="name" className="block text-slate-400 uppercase tracking-wider font-semibold">{t("contact.form.name")}</label>
                        <input 
                          type="text" 
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="E.g. Antti Koskinen" 
                          className="w-full bg-navy-light/50 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-accent/50"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="company" className="block text-slate-400 uppercase tracking-wider font-semibold">{t("contact.form.company")}</label>
                        <input 
                          type="text" 
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="E.g. Koskinen Developments Oy" 
                          className="w-full bg-navy-light/50 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-accent/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label htmlFor="email" className="block text-slate-400 uppercase tracking-wider font-semibold">{t("contact.form.email")}</label>
                        <input 
                          type="email" 
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="antti.koskinen@developments.fi" 
                          className="w-full bg-navy-light/50 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-accent/50"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="phone" className="block text-slate-400 uppercase tracking-wider font-semibold">{t("contact.form.phone")}</label>
                        <input 
                          type="tel" 
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+358 40 987 6543" 
                          className="w-full bg-navy-light/50 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-accent/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label htmlFor="category" className="block text-slate-400 uppercase tracking-wider font-semibold">{t("contact.form.category")}</label>
                        <select 
                          id="category"
                          value={formData.category}
                          onChange={(e) => setFormData({...formData, category: e.target.value})}
                          className="w-full bg-navy-light/80 border border-white/10 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-accent/50"
                        >
                          <option value="Commercial">Commercial Construction</option>
                          <option value="Residential">Residential Building</option>
                          <option value="Industrial">Industrial & Logistics</option>
                          <option value="Infrastructure">Civil Infrastructure</option>
                          <option value="Renovation">Heritage Renovation</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="budget" className="block text-slate-400 uppercase tracking-wider font-semibold">{t("contact.form.budget")}</label>
                        <select 
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          className="w-full bg-navy-light/80 border border-white/10 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-orange-accent/50"
                        >
                          <option value="Under €1M">Under €1,000,000</option>
                          <option value="€1M - €5M">€1,000,000 - €5,000,000</option>
                          <option value="€5M - €20M">€5,000,000 - €20,000,000</option>
                          <option value="Over €20M">Over €20,000,000</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="message" className="block text-slate-400 uppercase tracking-wider font-semibold">{t("contact.form.scope")}</label>
                      <textarea 
                        id="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Outline site coordinates, building area, special steel/concrete load metrics, or architectural deadlines..." 
                        className="w-full bg-navy-light/50 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-accent/50 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-accent hover:bg-orange-hover text-white text-xs font-bold tracking-wider uppercase rounded shadow-lg shadow-orange-accent/15 transition-all duration-200 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        {t("contact.form.submit")}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. DYNAMIC MOCK GOOGLE MAP COMPONENT */}
      <section className="py-16 bg-navy-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <ScrollReveal>
            <div className="flex justify-between items-end border-b border-white/5 pb-4">
              <div>
                <span className="text-[10px] text-orange-accent font-bold uppercase tracking-widest block font-manrope">{t("contact.map.badge")}</span>
                <h3 className="text-lg font-bold text-white font-manrope font-semibold">{t("contact.map.h")}</h3>
              </div>
              <div className="text-[10px] text-slate-400 font-semibold uppercase flex items-center gap-2 font-manrope">
                <span className="w-2.5 h-2.5 bg-orange-accent rounded-full animate-ping shrink-0" />
                <span>Office coordinates: {offices[activeOffice].lat}°N, {offices[activeOffice].lon}°E</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Premium CSS Mock Map */}
          <ScrollReveal>
            <div className="h-96 rounded-lg overflow-hidden border border-white/10 relative bg-slate-950 flex items-center justify-center shadow-xl">
              {/* Grid background effect representing map coordinate lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
              
              {/* Radial glow around pins */}
              <div className="absolute w-[300px] h-[300px] bg-orange-accent/5 rounded-full blur-[100px] pointer-events-none" />

              {/* Mock Landmass outlines for Finland */}
              <div className="absolute text-slate-900/30 text-7xl font-extrabold uppercase font-manrope rotate-[-12deg] tracking-widest select-none pointer-events-none">
                SUOMI / FINLAND
              </div>

              {/* Helsinki Pin */}
              <div 
                className={`absolute transition-all duration-500 flex flex-col items-center ${
                  activeOffice === "helsinki" ? "scale-110 opacity-100" : "scale-90 opacity-40"
                }`}
                style={{ bottom: "25%", left: "48%" }}
              >
                <div className="bg-navy-dark border border-orange-accent/50 text-[10px] font-bold text-white py-1 px-2 rounded-md shadow-2xl flex items-center gap-1.5 whitespace-nowrap font-manrope">
                  <BuildingIcon className="w-3.5 h-3.5 text-orange-accent" />
                  Helsinki HQ
                </div>
                <div className="w-2 h-2 bg-orange-accent rounded-full mt-1.5 glow-orange animate-pulse" />
                <div className="w-4 h-4 rounded-full border border-orange-accent animate-ping absolute bottom-[-4px]" />
              </div>

              {/* Tampere Pin */}
              <div 
                className={`absolute transition-all duration-500 flex flex-col items-center ${
                  activeOffice === "tampere" ? "scale-110 opacity-100" : "scale-90 opacity-40"
                }`}
                style={{ bottom: "52%", left: "42%" }}
              >
                <div className="bg-navy-dark border border-orange-accent/50 text-[10px] font-bold text-white py-1 px-2 rounded-md shadow-2xl flex items-center gap-1.5 whitespace-nowrap font-manrope">
                  <BuildingIcon className="w-3.5 h-3.5 text-orange-accent" />
                  Tampere Office
                </div>
                <div className="w-2 h-2 bg-orange-accent rounded-full mt-1.5 glow-orange animate-pulse" />
                <div className="w-4 h-4 rounded-full border border-orange-accent animate-ping absolute bottom-[-4px]" />
              </div>

              {/* Zoom / Info Panel Overlay */}
              <div className="absolute bottom-4 left-4 p-4 border border-white/10 rounded-lg space-y-1.5 max-w-xs text-xs" style={{ background: "#0D1424" }}>
                <h4 className="font-bold text-white font-manrope">{offices[activeOffice].name}</h4>
                <p className="text-[10px] text-slate-400 leading-relaxed font-inter">{offices[activeOffice].address}</p>
                <div className="pt-2 border-t border-white/5 flex gap-2">
                  <button 
                    onClick={() => alert("Simulated zoom-in at: " + offices[activeOffice].lat)}
                    className="bg-navy-light border border-white/5 hover:border-orange-accent/50 rounded py-1 px-2 text-[10px] font-bold text-slate-300 cursor-pointer font-manrope"
                  >
                    Zoom In
                  </button>
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(offices[activeOffice].address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-orange-accent rounded py-1 px-2 text-[10px] font-bold text-white hover:bg-orange-hover flex items-center gap-0.5 font-manrope cursor-pointer"
                  >
                    Directions <ChevronRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
