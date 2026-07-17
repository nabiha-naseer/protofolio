import { Briefcase } from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { typography } from "@/config/design-system";

type ExperienceCardProps = {
  role: string;
  company: string;
  status: string;
  period: string;
  description: string;
  index?: number;
};

export function ExperienceCard({
  role,
  company,
  status,
  period,
  description,
  index = 0,
}: ExperienceCardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <Card className="group transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
        <CardHeader className="flex flex-row items-start gap-4 space-y-0">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            <Briefcase className="size-5" aria-hidden="true" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className={typography.h4}>{role}</h3>
              <Badge variant="default" className="text-xs">
                {status}
              </Badge>
            </div>
            <p className="text-sm font-medium text-primary">{company}</p>
            <p className={typography.caption}>{period}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className={typography.body}>{description}</p>
        </CardContent>
      </Card>
    </FadeIn>
  );
}
