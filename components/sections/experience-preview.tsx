import { Section } from "@/components/layout/section";
import { ExperienceCard } from "@/components/cards/experience-card";
import { SectionHeader } from "@/components/ui/section-header";
import { experiencePreview } from "@/config/home";

export function ExperiencePreview() {
  return (
    <Section id="experience" size="md">
      <SectionHeader
        overline="Career"
        title={experiencePreview.title}
        description={experiencePreview.description}
      />

      <div className="mx-auto max-w-3xl space-y-6">
        {experiencePreview.items.map((item, index) => (
          <ExperienceCard
            key={item.role}
            role={item.role}
            company={item.company}
            status={item.status}
            period={item.period}
            description={item.description}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
