"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Building2, Home, Factory,
  Construction, Drill, ShieldAlert, Award, Compass, Users2,
  HardHat, Laptop, ArrowUpRight, HelpCircle, Briefcase, FileText, Phone, Globe
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    {
      name: t("nav.about"),
      href: "/about",
      dropdown: [
        { name: t("nav.companyHistory"), href: "/about#history", icon: Compass, desc: t("nav.companyHistory.desc") },
        { name: t("nav.leadership"), href: "/about#leadership", icon: Users2, desc: t("nav.leadership.desc") },
        { name: t("nav.safety"), href: "/about#safety", icon: HardHat, desc: t("nav.safety.desc") },
        { name: t("nav.certifications"), href: "/about#certifications", icon: Award, desc: t("nav.certifications.desc") },
      ]
    },
    {
      name: t("nav.services"),
      href: "/services",
      mega: true,
      dropdown: [
        { name: t("nav.commercial"), href: "/services#commercial", icon: Building2, desc: t("nav.commercial.desc") },
        { name: t("nav.residential"), href: "/services#residential", icon: Home, desc: t("nav.residential.desc") },
        { name: t("nav.industrial"), href: "/services#industrial", icon: Factory, desc: t("nav.industrial.desc") },
        { name: t("nav.infrastructure"), href: "/services#infrastructure", icon: Construction, desc: t("nav.infrastructure.desc") },
        { name: t("nav.renovation"), href: "/services#renovation", icon: Drill, desc: t("nav.renovation.desc") },
        { name: t("nav.projectManagement"), href: "/services#pm", icon: Briefcase, desc: t("nav.projectManagement.desc") },
      ]
    },
    {
      name: t("nav.projects"),
      href: "/projects",
      dropdown: [
        { name: t("nav.allPortfolio"), href: "/projects", icon: FileText, desc: t("nav.allPortfolio.desc") },
        { name: t("nav.commercialCases"), href: "/projects?filter=Commercial", icon: Building2, desc: t("nav.commercialCases.desc") },
        { name: t("nav.industrialInstallations"), href: "/projects?filter=Industrial", icon: Factory, desc: t("nav.industrialInstallations.desc") },
        { name: t("nav.residentialSpaces"), href: "/projects?filter=Residential", icon: Home, desc: t("nav.residentialSpaces.desc") },
      ]
    },
    { name: t("nav.equipment"), href: "/equipment" },
    { name: t("nav.careers"), href: "/careers" },
    { name: t("nav.blog"), href: "/blog" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      scrolled
        ? "bg-navy-deep/90 backdrop-blur-xl border-b border-white/6 shadow-2xl shadow-black/40"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-20 sm:h-24">

          {/* ── LEFT: Logo ── */}
          <Logo variant="horizontal" height={80} showTagline={false} />

          {/* ── CENTRE: Desktop Nav (absolutely centred in the bar) ── */}
          <nav className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const hasDropdown = !!link.dropdown;
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1 rounded-md whitespace-nowrap ${
                      isActive ? "text-orange-accent" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {hasDropdown && (
                      <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-orange-accent to-orange-glow" />
                    )}
                  </Link>

                  <AnimatePresence>
                    {hasDropdown && activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute left-1/2 -translate-x-1/2 mt-2 w-max max-w-screen-md rounded-xl shadow-2xl p-6 overflow-hidden border border-white/10 ${
                          link.mega ? "min-w-[640px]" : "min-w-[280px]"
                        }`}
                        style={{ background: "#0D1424" }}
                      >
                        <div className={`grid gap-4 ${link.mega ? "grid-cols-2" : "grid-cols-1"}`}>
                          {link.dropdown?.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group/item"
                            >
                              <div className="p-2 bg-navy-light/80 border border-white/5 rounded-lg text-slate-300 group-hover/item:text-orange-accent group-hover/item:border-orange-accent/30 transition-all duration-200">
                                <item.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold text-white group-hover/item:text-orange-accent transition-colors duration-200 flex items-center gap-1">
                                  {item.name}
                                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-all duration-200" />
                                </h4>
                                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {link.mega && (
                          <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center bg-navy-light/20 -mx-6 -mb-6 px-6 py-4">
                            <span className="text-xs text-slate-400">{t("nav.megaFooterText")}</span>
                            <Link href="/contact" className="text-xs font-bold text-orange-accent flex items-center gap-1 hover:underline">
                              {t("nav.megaFooterCta")} <ArrowUpRight className="w-3 h-3" />
                            </Link>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* ── RIGHT: Lang Toggle + CTA + Mobile Hamburger ── */}
          <div className="ml-auto flex items-center gap-2">

            {/* EN / FI Language Toggle */}
            <div className="hidden sm:flex items-center gap-0.5 bg-navy-light/60 border border-white/10 rounded-lg p-0.5">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                  lang === "en"
                    ? "bg-orange-accent text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang("fi")}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                  lang === "fi"
                    ? "bg-orange-accent text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
                aria-label="Vaihda suomeksi"
              >
                FI
              </button>
            </div>

            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 bg-orange-accent hover:bg-orange-hover text-white text-xs font-bold tracking-wider uppercase rounded-md shadow-lg shadow-orange-accent/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-orange-accent/30 active:translate-y-0 whitespace-nowrap"
            >
              {t("nav.requestQuote")}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>


      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed inset-0 w-screen h-screen bg-navy-deep/98 backdrop-blur-2xl z-50 flex flex-col lg:hidden overflow-hidden"
          >
            {/* Header bar inside fullscreen drawer */}
            <div className="px-4 sm:px-6 py-4 flex justify-between items-center border-b border-white/10 shrink-0">
              <Logo variant="horizontal" height={60} showTagline={false} />
              <div className="flex items-center gap-3">
                {/* Mobile lang toggle */}
                <div className="flex items-center gap-1 bg-navy-light/80 border border-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setLang("en")}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                      lang === "en" ? "bg-orange-accent text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >EN</button>
                  <button
                    onClick={() => setLang("fi")}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-all duration-200 cursor-pointer ${
                      lang === "fi" ? "bg-orange-accent text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >FI</button>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-300 hover:text-white bg-white/5 rounded-lg border border-white/10"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7 text-white" />
                </button>
              </div>
            </div>

            {/* Navigation links area */}
            <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
              <div className="space-y-4">
                {navLinks.map((link) => {
                  const hasDropdown = !!link.dropdown;
                  const isActive = pathname === link.href;

                  return (
                    <div key={link.href} className="border-b border-white/5 pb-4">
                      {hasDropdown ? (
                        <>
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === link.href ? null : link.href)}
                            className="w-full flex items-center justify-between py-2 text-xl font-bold tracking-wide text-slate-100 hover:text-orange-accent transition-colors"
                          >
                            <span>{link.name}</span>
                            <ChevronDown className={`w-5 h-5 text-orange-accent transition-transform duration-200 ${
                              activeDropdown === link.href ? "rotate-180" : ""
                            }`} />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.href && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-4 pt-2 space-y-3 overflow-hidden border-l-2 border-orange-accent/40 my-2"
                              >
                                {link.dropdown?.map((item) => (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block py-2 text-base font-medium text-slate-300 hover:text-white transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className={`block py-2 text-xl font-bold tracking-wide transition-colors ${
                            isActive ? "text-orange-accent" : "text-slate-100 hover:text-white"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Footer Actions */}
            <div className="border-t border-white/10 px-6 py-6 space-y-4 bg-navy-deep/95 shrink-0">
              <div className="flex items-center gap-3 text-slate-300 justify-center">
                <Phone className="w-5 h-5 text-orange-accent" />
                <span className="text-base font-semibold">+358 10 234 5678</span>
              </div>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center py-4 bg-orange-accent hover:bg-orange-hover text-white text-base font-extrabold tracking-wider uppercase rounded-xl shadow-xl shadow-orange-accent/20 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.requestQuote")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
