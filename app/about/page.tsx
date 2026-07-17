import { AboutHero } from "@/components/about/about-hero";
import { MyStory } from "@/components/about/my-story";
import { EducationSection } from "@/components/about/education-section";
import { InternshipJourney } from "@/components/about/internship-journey";
import { SkillsOverview } from "@/components/about/skills-overview";
import { GoalsAndFacts } from "@/components/about/goals-and-facts";
import { AboutCta } from "@/components/about/about-cta";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden bg-background selection:bg-primary/30 selection:text-primary pb-24">
      <AboutHero />
      <MyStory />
      <EducationSection />
      <InternshipJourney />
      <SkillsOverview />
      <GoalsAndFacts />
      <AboutCta />
    </main>
  );
}