import { Section } from "@/components/layout/section";
import { SkillCard } from "@/components/cards/skill-card";
import { SectionHeader } from "@/components/ui/section-header";
import { skillsPreview } from "@/config/home";

export function SkillsPreview() {
  return (
    <Section id="skills" size="md" className="bg-muted/30">
      <SectionHeader
        overline="Expertise"
        title={skillsPreview.title}
        description={skillsPreview.description}
        align="center"
        className="mx-auto"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillsPreview.categories.map((category, index) => (
          <SkillCard
            key={category.title}
            title={category.title}
            icon={category.icon}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
