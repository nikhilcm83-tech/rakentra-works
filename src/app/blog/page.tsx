"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, User, ArrowRight, X, Bookmark, Share2 } from "lucide-react";
import { blogArticles } from "@/data/mockData";
import { FadeIn, ScrollReveal, StaggerContainer, ScaleHover } from "@/components/Animate";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const categories = ["All", "Trends", "Case Study", "News", "Insights"];

  const filteredArticles = activeFilter === "All"
    ? blogArticles
    : blogArticles.filter(art => art.category === activeFilter);

  const activeArticle = blogArticles.find(art => art.id === selectedArticleId);

  const getTagColor = (cat: string) => {
    switch (cat) {
      case "Trends": return "text-blue-400 bg-blue-500/10 border-blue-500/20";
      case "Case Study": return "text-green-400 bg-green-500/10 border-green-500/20";
      case "News": return "text-purple-400 bg-purple-500/10 border-purple-500/20";
      case "Insights": return "text-orange-400 bg-orange-500/10 border-orange-500/20";
      default: return "text-slate-400 bg-slate-500/10 border-slate-500/20";
    }
  };

  return (
    <div className="bg-navy-deep min-h-screen text-slate-200 relative">
      
      {/* 1. HERO HEADER */}
      <section className="relative py-20 bg-navy-dark border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-accent/5 skew-x-12 origin-top border-l border-white/5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
          <div className="max-w-3xl space-y-4">
            <FadeIn delay={0.1}>
              <span className="text-xs font-bold text-orange-accent uppercase tracking-widest block font-manrope">{t("blog.hero.badge")}</span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl font-manrope font-extrabold text-white tracking-tight">
                {t("blog.hero.h")}
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-inter">
                {t("blog.hero.desc")}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. FILTER MENU */}
      <section className="py-8 bg-navy-deep/80 backdrop-blur-md sticky top-[72px] z-30 border-b border-white/5 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto flex justify-between items-center gap-6">
          <div className="flex gap-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4.5 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? "bg-orange-accent text-white shadow-lg"
                    : "bg-navy-light/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BLOG POSTS FEED GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ScrollReveal key={article.id}>
                <ScaleHover>
                  <article
                    className="rounded-lg border border-white/10 overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-lg h-full card-hover"
                    style={{ background: "linear-gradient(155deg, #111827 0%, #0D1424 100%)" }}
                  >
                    <div>
                      {/* Cover Image */}
                      <div className="h-48 overflow-hidden relative">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 filter brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
                        <span className={`absolute top-4 left-4 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border font-manrope ${getTagColor(article.category)}`}>
                          {article.category}
                        </span>
                      </div>

                      {/* Body Content */}
                      <div className="p-6 space-y-3.5">
                        <div className="flex items-center gap-3 text-[10px] text-slate-500 font-semibold uppercase tracking-wider font-manrope">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-orange-accent" /> {article.date}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-orange-accent" /> {article.readTime}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white group-hover:text-orange-accent transition-colors duration-250 font-manrope line-clamp-2">
                          {article.title}
                        </h3>
                        
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 font-inter">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Author & Read More Bar */}
                    <div className="px-6 pb-6 pt-3 border-t border-white/5 flex justify-between items-center text-xs font-inter">
                      <span className="text-slate-500 font-medium">By: {article.author.split(' ')[0]}</span>
                      <button
                        onClick={() => setSelectedArticleId(article.id)}
                        className="inline-flex items-center font-bold uppercase tracking-wider text-orange-accent hover:text-white transition-colors group/btn cursor-pointer"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-0.5" />
                      </button>
                    </div>
                  </article>
                </ScaleHover>
              </ScrollReveal>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* 4. IMMERSIVE ARTICLE OVERLAY DRAWER */}
      <AnimatePresence>
        {selectedArticleId && activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            
            {/* Backdrop blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticleId(null)}
              className="absolute inset-0 bg-black backdrop-blur-sm"
            />

            {/* Sliding Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="w-full max-w-2xl bg-navy-deep border-l border-white/10 h-full relative z-10 overflow-y-auto flex flex-col justify-between"
            >
              
              {/* Header */}
              <div className="sticky top-0 bg-navy-deep/90 backdrop-blur border-b border-white/5 py-4 px-6 sm:px-8 flex justify-between items-center z-20">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border font-manrope ${getTagColor(activeArticle.category)}`}>
                    {activeArticle.category}
                  </span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1 font-manrope">
                    <Clock className="w-3 h-3" /> {activeArticle.readTime}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-1.5 hover:bg-white/5 rounded text-slate-400 hover:text-white cursor-pointer" title="Bookmark article">
                    <Bookmark className="w-4.5 h-4.5" />
                  </button>
                  <button className="p-1.5 hover:bg-white/5 rounded text-slate-400 hover:text-white cursor-pointer" title="Share article">
                    <Share2 className="w-4.5 h-4.5" />
                  </button>
                  <button 
                    onClick={() => setSelectedArticleId(null)}
                    className="p-1.5 hover:bg-white/5 rounded text-slate-400 hover:text-white cursor-pointer"
                    title="Close drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Content Body */}
              <div className="flex-grow">
                {/* Article Cover Image */}
                <div className="h-64 sm:h-80 overflow-hidden relative">
                  <img 
                    src={activeArticle.image} 
                    alt={activeArticle.title} 
                    className="w-full h-full object-cover filter brightness-[0.6]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent" />
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Title and metadata */}
                  <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-manrope font-extrabold text-white leading-tight">
                      {activeArticle.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1.5 border-b border-white/5 pb-4 font-inter">
                      <span className="flex items-center gap-1.5 font-medium">
                        <User className="w-4 h-4 text-orange-accent" />
                        {activeArticle.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-orange-accent" />
                        {activeArticle.date}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-sm text-slate-300 leading-relaxed space-y-4 font-inter">
                    <p className="font-semibold text-slate-200 text-base border-l-2 border-orange-accent pl-3">
                      {activeArticle.excerpt}
                    </p>
                    <p>
                      {activeArticle.content}
                    </p>
                    <p>
                      In addition to structural benchmarks, Rakentra Works remains committed to tracking thermal envelope efficiency indexes. The transition to low-carbon concrete composites represents our dedication to complying with municipal climate neutrality aims in Helsinki, Espoo, and Tampere.
                    </p>
                    <p>
                      Subsequent phases of this technical design standard will encompass thermal telemetry and drone-mapped thermal inspections to check for heat leakages, establishing Rakentra as Finland's leading digitized engineering partner.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer back button */}
              <div className="bg-navy-dark border-t border-white/5 py-4 px-6 sm:px-8 flex justify-end">
                <button
                  onClick={() => setSelectedArticleId(null)}
                  className="px-6 py-2.5 bg-navy-light hover:bg-navy-light/80 text-white text-xs font-bold uppercase tracking-wider rounded border border-white/5 hover:border-white/10 cursor-pointer font-manrope"
                >
                  Close Article
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
