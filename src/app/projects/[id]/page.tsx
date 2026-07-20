import { ShieldAlert } from "lucide-react";
import { projects } from "@/data/mockData";
import ProjectDetailClient from "./ProjectDetailClient";

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
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} />;
}
