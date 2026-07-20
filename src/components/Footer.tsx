"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: t("footer.company.about"), href: "/about" },
    { name: t("footer.company.leadership"), href: "/about#leadership" },
    { name: t("footer.company.safety"), href: "/about#safety" },
    { name: t("footer.company.certs"), href: "/about#certifications" },
    { name: t("footer.company.careers"), href: "/careers" },
  ];

  const serviceLinks = [
    { name: t("footer.services.commercial"), href: "/services#commercial" },
    { name: t("footer.services.residential"), href: "/services#residential" },
    { name: t("footer.services.industrial"), href: "/services#industrial" },
    { name: t("footer.services.infrastructure"), href: "/services#infrastructure" },
    { name: t("footer.services.renovation"), href: "/services#renovation" },
    { name: t("footer.services.pm"), href: "/services#pm" },
  ];

  return (
    <footer className="bg-navy-deep border-t border-white/5 relative overflow-hidden">
      {/* Structural Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-accent/50 via-transparent to-navy-light" />
      <div className="absolute top-10 right-[-10%] w-[400px] h-[400px] bg-orange-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="space-y-6">
            <span className="font-manrope font-extrabold text-2xl tracking-wider text-white">
              RAKENTRA<span className="text-orange-accent">//</span>
            </span>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t("footer.aboutText")}
            </p>
            {/* Certifications highlights */}
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-orange-accent" />
                <span>{t("footer.cert1")}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-orange-accent" />
                <span>{t("footer.cert2")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-6 border-l-2 border-orange-accent pl-3">
              {t("footer.companyTitle")}
            </h3>
            <ul className="space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-400 hover:text-orange-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-6 border-l-2 border-orange-accent pl-3">
              {t("footer.servicesTitle")}
            </h3>
            <ul className="space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-400 hover:text-orange-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-6 border-l-2 border-orange-accent pl-3">
              {t("footer.contactTitle")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-accent shrink-0 mt-0.5" />
                <div className="text-sm text-slate-400 leading-relaxed">
                  <strong className="text-slate-200 block text-xs">{t("footer.officeLabel")}</strong>
                  {t("footer.officeAddress")}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-accent shrink-0" />
                <span className="text-sm text-slate-400 hover:text-white transition-colors">+358 10 234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-accent shrink-0" />
                <span className="text-sm text-slate-400 hover:text-white transition-colors">contact@rakentra.fi</span>
              </div>
            </div>

            {/* Aesthetic News Signup */}
            <div className="pt-2">
              <label htmlFor="footer-email" className="block text-xs font-semibold text-slate-300 uppercase mb-2">
                {t("footer.newsletterLabel")}
              </label>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  id="footer-email"
                  placeholder={t("footer.newsletterPlaceholder")} 
                  className="bg-navy-light/50 border border-white/10 rounded px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-accent/50 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-navy-light border border-white/10 hover:border-orange-accent/50 p-2.5 rounded text-orange-accent hover:bg-orange-accent hover:text-white transition-all duration-200"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 text-center md:text-left">
            &copy; {currentYear} {t("footer.copyright")}
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">{t("footer.privacy")}</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">{t("footer.terms")}</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">{t("footer.locations")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
