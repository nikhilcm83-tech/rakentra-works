"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, DollarSign, Calendar, Clock, ArrowRight, Grid3X3, Filter } from "lucide-react";
import { projects } from "@/data/mockData";
import { useLanguage } from "@/context/LanguageContext";

function PortfolioGrid() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  const { t } = useLanguage();

  const [activeFilter, setActiveFilter] = useState<string>("All");

  useEffect(() => {
    if (filterParam) {
      setActiveFilter(filterParam);
    } else {
      setActiveFilter("All");
    }
  }, [filterParam]);

  const categories = ["All", "Commercial", "Residential", "Industrial", "Infrastructure"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="space-y-12">
      
      {/* 2. PORTFOLIO FILTERS BAR */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-navy-light/30 border border-white/5 p-4 rounded-lg backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <Filter className="w-4 h-4 text-orange-accent" />
          <span>{t("projects.filter.all").replace("Kaikki ", "Filter by ").replace("All Projects", "Filter By Category")}</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {[
            { key: "All", label: t("projects.filter.all") },
            { key: "Commercial", label: t("projects.filter.commercial") },
            { key: "Residential", label: t("projects.filter.residential") },
            { key: "Industrial", label: t("projects.filter.industrial") },
            { key: "Infrastructure", label: t("projects.filter.infrastructure") },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 ${
                activeFilter === key
                  ? "bg-orange-accent text-white shadow-lg shadow-orange-accent/15"
                  : "bg-navy-light/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. PORTFOLIO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="rounded-lg border border-white/10 overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl card-hover"
              style={{ background: "linear-gradient(155deg, #111827 0%, #0D1424 100%)" }}
            >
              <div>
                {/* Image */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-2.5 py-1 bg-navy-dark/95 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-orange-accent border border-white/10 rounded">
                    {project.category}
                  </span>
                </div>

                {/* Info and stats */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-orange-accent shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-accent transition-colors duration-250 font-manrope">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.overview.substring(0, 120)}...
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/5 text-xs">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-slate-500">{t("projects.budget")}</span>
                      <span className="font-bold text-white">{project.budget}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-slate-500">{t("projects.completion")}</span>
                      <span className="font-bold text-white flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-accent" />
                        {project.completion.split(' ')[0]} {project.completion.split(' ').slice(-1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex justify-between items-center bg-navy-light/10">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Client: {project.client.split(' ')[0]}</span>
                <Link 
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-orange-accent hover:text-white transition-colors group/item"
                >
                  {t("projects.viewCase")} <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/item:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-lg">
          <Grid3X3 className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white">{t("projects.empty")}</h3>
        </div>
      )}

    </div>
  );
}

export default function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <div className="bg-navy-deep min-h-screen text-slate-200">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-20 bg-navy-dark border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-accent/5 skew-x-12 origin-top border-l border-white/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block">{t("projects.hero.badge")}</span>
            <h1 className="text-4xl sm:text-5xl font-manrope font-extrabold text-white tracking-tight">
              {t("projects.hero.h1")} <span className="text-gradient-orange">{t("projects.hero.h2")}</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
              {t("projects.hero.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID WRAPPER WITH SUSPENSE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="text-center py-20">
            <div className="w-8 h-8 border-4 border-orange-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <span className="text-xs text-slate-400">Loading cases...</span>
          </div>
        }>
          <PortfolioGrid />
        </Suspense>
      </section>

    </div>
  );
}
