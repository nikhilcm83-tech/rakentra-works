"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, HardHat, ShieldAlert, CheckCircle } from "lucide-react";
import { Project } from "@/data/mockData";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const { t, lang } = useLanguage();

  const localizedProject = {
    ...project,
    category: lang === "fi"
      ? project.category === "Commercial"
        ? t("projects.category.commercial")
        : project.category === "Residential"
          ? t("projects.category.residential")
          : project.category === "Industrial"
            ? t("projects.category.industrial")
            : project.category === "Infrastructure"
              ? t("projects.category.infrastructure")
              : project.category === "Renovation"
                ? t("projects.category.renovation")
                : project.category
      : project.category,
    title: lang === "fi"
      ? project.id === "tampere-battery-factory"
        ? "Tampereen vihreä akkuplantti"
        : project.title
      : project.title,
    location: lang === "fi"
      ? project.id === "tampere-battery-factory"
        ? "Hervanta, Tampere"
        : project.location
      : project.location,
    overview: lang === "fi"
      ? project.id === "helsinki-innovation-hub"
        ? "Lippulaivakaupallinen toimistokeskus, joka on suunniteltu suomalaisille startup-yrityksille ja kansainvälisille tutkimusryhmille."
        : project.id === "tampere-battery-factory"
          ? "Monimutkainen teollisuuslaitos, joka on tarkoitettu litiumioniakkujen valmistukseen sähköalustoille."
          : project.id === "espoo-marina-residences"
            ? "Premium-vesirantainen asuntokehitys, jossa on 48 luksusasuntoa ja integroituja saunoja."
            : project.id === "oulu-light-rail"
              ? "Kriittinen infrastruktuurihanke, joka yhdistää esijännitetyn betonisillan ja uuden raitiotieyhteyden."
              : project.id === "turku-heritage-hotel"
                ? "Huolellinen historiallinen restaurointi, joka yhdistää nykyaikaisen teknologian suojeltuun julkisivuun."
                : project.overview
      : project.overview,
    outcome: lang === "fi"
      ? project.id === "helsinki-innovation-hub"
        ? "Toimitettiin kaksi viikkoa etuajassa. Rakennus saavutti ennätyksellisen matalan lämpöhäviöindeksin ja on sertifioitu LEED Platinum -tasoiseksi."
        : project.id === "tampere-battery-factory"
          ? "Työmaa on viimeisessä käyttöönottofaasissa. Kompleksi yhdistää huipputeknologiset prosessinkäsittelyjärjestelmät." 
          : project.id === "espoo-marina-residences"
            ? "Valmistui budjetin puitteissa. Rakennus saavutti erinomaisen ilmatiiviyden ja yksityiset venepaikat." 
            : project.id === "oulu-light-rail"
              ? "Jatkuu. Siltaosat on onnistuneesti kiinnitetty ja käytämme erikoisluonteista suolasuojattua betonia."
              : project.id === "turku-heritage-hotel"
                ? "Valmistui aikataulussa. Rakennus omaa luokan A paloturvallisuuden ja modernin ilmastoinnin." 
                : project.outcome
      : project.outcome,
    benefits: lang === "fi"
      ? project.id === "helsinki-innovation-hub"
        ? ["40 % alhaisemmat lämmityskustannukset", "BREEAM Outstanding ja LEED Platinum -sertifikaatti", "Modulaariset väliseinät mahdollistaen uudelleensuunnittelun 48 tunnissa", "Geotermiset poraukset kattavat 80 % kesäajan jäähdytyksestä"]
        : project.id === "tampere-battery-factory"
          ? ["Vibration-isolated foundations safeguarding nanoscale calibration equipment", "2.4MW rooftop solar installation reducing power grid reliance", "Explosion-resistant reinforced concrete separation walls", "Smart moisture control systems keeping dryrooms below 1% relative humidity"]
          : project.id === "espoo-marina-residences"
            ? ["Vesivara- lämpöpumppu", "Äänieristys vähentää melua 58 dB", "Integroitu älytalousjärjestelmä", "Premium paikallinen kuusiulkoasu"]
            : project.id === "oulu-light-rail"
              ? ["Vähentää kuljetusaikaa 15 minuuttia", "Valvontaa antavat kuituoptiset anturit", "Matala melutaso", "Soveltuu pyöräily- ja kävelyväylille"]
              : project.id === "turku-heritage-hotel"
                ? ["Suojaamaton historiallinen julkisivu säilytetty", "Geoterminen lämmitys kattaa 90 % lämmitystarpeesta", "Automaattinen palosuojajärjestelmä", "Parannettu lämmöneristys"]
                : project.benefits
      : project.benefits
  };

  return (
    <div className="bg-navy-deep min-h-screen text-slate-200">
      <section className="relative h-[50vh] sm:h-[60vh] flex items-end overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-102 filter brightness-[0.3]"
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12 space-y-4">
          <Link
            href="/projects"
            className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-orange-accent hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> {t("project.back")}
          </Link>
          <div className="space-y-2">
            <span className="px-2.5 py-1 bg-orange-accent text-white text-[10px] font-bold uppercase tracking-wider rounded">
              {localizedProject.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-manrope font-extrabold text-white tracking-tight leading-tight">
              {localizedProject.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-manrope font-extrabold text-white border-l-3 border-orange-accent pl-3.5">
                {t("project.overview")}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {localizedProject.overview}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                {t("project.gallery")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.images.map((img, idx) => (
                  <div key={idx} className="h-48 overflow-hidden rounded border border-white/5 relative group">
                    <img
                      src={img}
                      alt={`${project.title} detailed snapshot ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 filter brightness-90 group-hover:brightness-100 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-manrope font-extrabold text-white border-l-3 border-orange-accent pl-3.5">
                {t("project.timeline")}
              </h2>
              <div className="relative border-l border-white/10 pl-6 space-y-8 ml-3">
                {project.timeline.map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute left-[-31px] top-1.5 w-4 h-4 bg-orange-accent rounded-full border-4 border-navy-deep" />
                    <div className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <h4 className="text-base font-bold text-white">{step.phase}</h4>
                        <span className="text-xs font-semibold text-orange-accent tracking-wider font-manrope">
                          ({step.date})
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-manrope font-extrabold text-white border-l-3 border-orange-accent pl-3.5">
                {t("project.outcomes")}
              </h2>
              <div className="p-6 sm:p-8 rounded-lg border border-white/10 space-y-6" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {localizedProject.outcome}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6 text-xs text-slate-400">
                  {localizedProject.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4.5 h-4.5 text-orange-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-slate-300">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 rounded-lg border border-white/10 space-y-6 sticky top-24" style={{ background: "linear-gradient(160deg, #111827 0%, #0D1424 100%)" }}>
              <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-white/10 pb-3 flex items-center gap-2">
                <HardHat className="w-5 h-5 text-orange-accent" />
                {t("project.specs")}
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">{t("project.client")}</span>
                  <span className="text-sm font-bold text-white">{project.client}</span>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">{t("project.location")}</span>
                  <span className="text-sm font-bold text-slate-200 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-4.5 h-4.5 text-orange-accent" />
                    {localizedProject.location}
                  </span>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">{t("project.budget")}</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                    <span className="text-orange-accent font-semibold">€</span>
                    {project.budget.replace("€", "")}
                  </span>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">{t("project.area")}</span>
                  <span className="text-sm font-bold text-white">{project.area}</span>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">{t("project.completion")}</span>
                  <span className="text-sm font-bold text-slate-200 flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-4.5 h-4.5 text-orange-accent" />
                    {project.completion}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <a
                  href="/contact"
                  className="w-full flex items-center justify-center py-3 bg-orange-accent hover:bg-orange-hover text-white text-xs font-bold tracking-wider uppercase rounded shadow-lg transition-colors"
                >
                  {t("project.cta")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
