import { AboutPreview } from "@/components/sections/about-preview";
import { CtaSection } from "@/components/sections/cta-section";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { SkillsPreview } from "@/components/sections/skills-preview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <SkillsPreview />
      <ExperiencePreview />
      <ProjectsPreview />
      <CtaSection />
    </>
  );
}
