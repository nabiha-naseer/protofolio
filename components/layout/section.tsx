import { spacing } from "@/config/design-system";
import { cn } from "@/lib/utils";

import { Container } from "./container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  size?: keyof typeof spacing.section;
  id?: string;
};

export function Section({
  children,
  className,
  containerClassName,
  size = "md",
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn(spacing.section[size], className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
