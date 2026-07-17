import { spacing } from "@/config/design-system";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "article";
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        spacing.container.maxWidth,
        spacing.container.padding,
        className
      )}
    >
      {children}
    </Component>
  );
}
