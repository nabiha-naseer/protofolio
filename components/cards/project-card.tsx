import { ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: readonly string[];
  github: string;
  liveDemo: string;
  gradient: string;
  index?: number;
};

export function ProjectCard({
  title,
  description,
  techStack,
  github,
  liveDemo,
  gradient,
  index = 0,
}: ProjectCardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div
          className={cn(
            "relative flex h-48 items-center justify-center bg-gradient-to-br",
            gradient
          )}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.5_0.02_264/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.5_0.02_264/0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
          <div className="relative flex size-16 items-center justify-center rounded-2xl border border-border/50 bg-background/80 text-2xl font-bold text-primary backdrop-blur-sm">
            {title.charAt(0)}
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="line-clamp-2 text-sm leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="gap-2">
          <Button variant="outline" size="sm" className="flex-1" render={<Link href={github} target="_blank" rel="noopener noreferrer" />}>
            <GitBranch className="size-3.5" aria-hidden="true" />
            GitHub
          </Button>
          <Button size="sm" className="flex-1" render={<Link href={liveDemo} target="_blank" rel="noopener noreferrer" />}>
            <ExternalLink className="size-3.5" aria-hidden="true" />
            Live Demo
          </Button>
        </CardFooter>
      </Card>
    </FadeIn>
  );
}
