import { typography } from "@/config/design-system";
import { cn } from "@/lib/utils";

import { FadeIn } from "@/components/motion/fade-in";

type SectionHeaderProps = {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  overline,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <FadeIn className={cn("mb-10 md:mb-14", className)}>
      <div
        className={cn(
          "max-w-2xl",
          align === "center" && "mx-auto text-center"
        )}
      >
        {overline && (
          <p className={cn(typography.overline, "mb-3")}>{overline}</p>
        )}
        <h2 className={typography.h2}>{title}</h2>
        {description && (
          <p
            className={cn(
              typography.bodyLarge,
              "mt-4 text-muted-foreground"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
