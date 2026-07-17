import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2 font-semibold tracking-tight transition-opacity hover:opacity-80",
        className
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
        {siteConfig.name.charAt(0)}
      </span>
      <span className="text-base">{siteConfig.name}</span>
    </Link>
  );
}
