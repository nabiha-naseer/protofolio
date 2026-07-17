import { ProjectsHero } from "@/components/projects/projects-hero";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden bg-background selection:bg-primary/30 selection:text-primary pb-24">
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  );
}