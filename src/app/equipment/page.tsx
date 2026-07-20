"use client";

import { Laptop, ShieldCheck, Cpu, HardHat, Anchor, Truck, Drill, Compass } from "lucide-react";
import { machineryFleet, highTechSystems } from "@/data/mockData";
import { FadeIn, ScrollReveal, StaggerContainer } from "@/components/Animate";
import { useLanguage } from "@/context/LanguageContext";

export default function EquipmentPage() {
  const { t } = useLanguage();

  const getTechIcon = (idx: number) => {
    switch (idx) {
      case 0: return Laptop;
      case 1: return Cpu;
      case 2: return Compass;
      case 3: return ShieldCheck;
      default: return Laptop;
    }
  };

  const getFleetIcon = (category: string) => {
    switch (category) {
      case "Heavy Lifting": return Anchor;
      case "Earthmoving": return Drill;
      case "Logistics": return Truck;
      case "Concrete Placing": return ShieldCheck;
      default: return Truck;
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
              <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("equipment.hero.badge")}</span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl font-manrope font-extrabold text-white tracking-tight">
                {t("equipment.hero.h")}
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-inter">
                {t("equipment.hero.desc")}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. HEAVY MACHINERY FLEET */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <ScrollReveal>
            <div className="space-y-4">
              <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("equipment.fleet.badge")}</span>
              <h2 className="text-2xl sm:text-3xl font-manrope font-extrabold text-white tracking-tight">
                {t("equipment.fleet.h")}
              </h2>
              <p className="text-sm text-slate-400 max-w-2xl leading-relaxed font-inter">
                {t("equipment.fleet.desc")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-lg border border-white/10 overflow-hidden shadow-2xl" style={{ background: "#111827" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse font-inter">
                  <thead>
                    <tr className="bg-navy-dark border-b border-white/10 text-slate-400 font-bold uppercase tracking-wider">
                      <th className="py-4 px-6 font-manrope">Machinery Name</th>
                      <th className="py-4 px-6 font-manrope">Category</th>
                      <th className="py-4 px-6 font-manrope">Technical Specifications</th>
                      <th className="py-4 px-6 text-center font-manrope">In Service</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {machineryFleet.map((item, idx) => {
                      const FleetIcon = getFleetIcon(item.category);
                      return (
                        <tr key={idx} className="hover:bg-white/2 transition-colors">
                          <td className="py-4.5 px-6 font-semibold text-white flex items-center gap-3">
                            <div className="p-1.5 bg-navy-light rounded text-orange-accent shrink-0">
                              <FleetIcon className="w-4 h-4" />
                            </div>
                            {item.name}
                          </td>
                          <td className="py-4.5 px-6">
                            <span className="px-2 py-0.5 bg-navy-light text-slate-300 font-medium rounded border border-white/5">
                              {item.category}
                            </span>
                          </td>
                          <td className="py-4.5 px-6 text-slate-400">
                            {item.spec}
                          </td>
                          <td className="py-4.5 px-6 text-center font-bold text-white">
                            {item.count} units
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. TECHNOLOGY & DATA SYSTEMS */}
      <section className="py-24 bg-navy-dark border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">INNOVATION</span>
              <h2 className="text-3xl font-manrope font-extrabold text-white tracking-tight">
                BIM & Smart Site Technology
              </h2>
              <p className="text-sm text-slate-400 font-inter">
                We leverage cloud collaboration and IoT telemetry to reduce design conflicts, monitor materials in real time, and guarantee energy metrics.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highTechSystems.map((item, idx) => {
                const TechIcon = getTechIcon(idx);
                return (
                  <ScrollReveal key={idx}>
                    <div className="p-8 rounded-lg border border-white/10 flex gap-6 hover:border-orange-accent/30 transition-colors duration-300" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
                      <div className="p-3.5 bg-navy-light border border-white/5 rounded-lg text-orange-accent shrink-0 h-max">
                        <TechIcon className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white font-manrope">{item.name}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed font-inter">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. SAFETY STANDARDS EQUIPMENT */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">HSE COMPLIANCE</span>
              <h2 className="text-3xl font-manrope font-extrabold text-white tracking-tight">
                Safety Equipment Standard
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed font-inter">
                Every worker, subcontractor, and guest stepping onto a Rakentra Works construction site is equipped with high-performance, weather-resilient safety apparel.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Active Bluetooth Hardhats", desc: "Equipped with sensors checking impact and live location alerts." },
                  { title: "Winter Safety Footwear", desc: "Thermal lining and custom metal studs to prevent slip injury." },
                  { title: "Premium Fall Protection", desc: "Full-body harnesses certified under European EN 361 criteria." },
                  { title: "High-Visibility LED Vests", desc: "Active fiber-optic glowing panels to maintain site visibility." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-navy-light/40 border border-white/5 rounded-lg space-y-1 hover:border-orange-accent/20 transition-colors duration-300">
                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5 font-manrope">
                      <HardHat className="w-4 h-4 text-orange-accent" />
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-inter">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="h-80 sm:h-96 rounded-lg overflow-hidden border border-white/10 relative shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" 
                alt="HSE Safety coordinator auditing machinery" 
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-navy-dark/90 border border-white/5 rounded-lg flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-orange-accent shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest block font-bold font-manrope">SAFETY RECORD</span>
                  <span className="text-xs font-bold text-white font-manrope">100% compliant safety equipment checkpoints.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
