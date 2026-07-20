import Link from "next/link";
import { ArrowLeft, MapPin, DollarSign, Calendar, HardHat, Award, ShieldAlert, Clock, CheckCircle } from "lucide-react";
import { projects } from "@/data/mockData";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="bg-navy-deep min-h-screen flex items-center justify-center text-center p-6">
        <div className="p-12 rounded-lg border border-white/10 max-w-md space-y-6" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
          <ShieldAlert className="w-16 h-16 text-orange-accent mx-auto" />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white font-manrope">Project Not Found</h1>
            <p className="text-sm text-slate-400">
              The project study you are searching for does not exist or has been archived.
            </p>
          </div>
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center px-6 py-3 bg-orange-accent hover:bg-orange-hover text-white text-xs font-bold uppercase tracking-wider rounded"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-navy-deep min-h-screen text-slate-200">
      
      {/* 1. HERO SPECS BANNER */}
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
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Portfolio
          </Link>
          <div className="space-y-2">
            <span className="px-2.5 py-1 bg-orange-accent text-white text-[10px] font-bold uppercase tracking-wider rounded">
              {project.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-manrope font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. MAIN SPECIFICATIONS & DATA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Detailed Info Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-manrope font-extrabold text-white border-l-3 border-orange-accent pl-3.5">
                Project Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Gallery */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Project Media Gallery
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

            {/* Timeline */}
            <div className="space-y-6">
              <h2 className="text-2xl font-manrope font-extrabold text-white border-l-3 border-orange-accent pl-3.5">
                Construction Timeline
              </h2>
              <div className="relative border-l border-white/10 pl-6 space-y-8 ml-3">
                {project.timeline.map((step, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle marker */}
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

            {/* Outcome & Benefits */}
            <div className="space-y-6">
              <h2 className="text-2xl font-manrope font-extrabold text-white border-l-3 border-orange-accent pl-3.5">
                Key Project Outcomes
              </h2>
              <div className="p-6 sm:p-8 rounded-lg border border-white/10 space-y-6" style={{ background: "linear-gradient(135deg, #111827 0%, #0D1424 100%)" }}>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.outcome}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6 text-xs text-slate-400">
                  {project.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4.5 h-4.5 text-orange-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-slate-300">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Specifications Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 rounded-lg border border-white/10 space-y-6 sticky top-24" style={{ background: "linear-gradient(160deg, #111827 0%, #0D1424 100%)" }}>
              <h3 className="text-base font-bold text-white uppercase tracking-wider border-b border-white/10 pb-3 flex items-center gap-2">
                <HardHat className="w-5 h-5 text-orange-accent" />
                Technical Specifications
              </h3>
              
              <div className="space-y-4 text-xs">
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">Client</span>
                  <span className="text-sm font-bold text-white">{project.client}</span>
                </div>
                
                <div className="border-t border-white/5 pt-4">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">Location</span>
                  <span className="text-sm font-bold text-slate-200 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-4.5 h-4.5 text-orange-accent" />
                    {project.location}
                  </span>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">Project Value / Budget</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                    <span className="text-orange-accent font-semibold">€</span>
                    {project.budget.replace('€', '')}
                  </span>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">Total Structural Area</span>
                  <span className="text-sm font-bold text-white">{project.area}</span>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500">Handover Date</span>
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
                  Consult on Similar Build
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
