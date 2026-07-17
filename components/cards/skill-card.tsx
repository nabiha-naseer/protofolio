import {
  Database,
  Layout,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  server: Server,
  database: Database,
  wrench: Wrench,
};

type SkillCardProps = {
  title: string;
  icon: string;
  skills: readonly string[];
  index?: number;
};

export function SkillCard({ title, icon, skills, index = 0 }: SkillCardProps) {
  const Icon = iconMap[icon] ?? Layout;

  return (
    <FadeIn delay={index * 0.1}>
      <Card className="group h-full transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
        <CardHeader className="pb-3">
          <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            <Icon className="size-5" aria-hidden="true" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </FadeIn>
  );
}