import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import {
  GitHubIcon,
  TwitterIcon,
} from "@/components/ui/social-icons";
import { footerLinks, siteConfig } from "@/config/site";

const socialIcons = {
  GitHub: GitHubIcon,
  Twitter: TwitterIcon,
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-2">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3">
              {footerLinks.social
                .filter((link) => link.label !== "LinkedIn") // Removed LinkedIn
                .map((link) => {
                const Icon =
                  socialIcons[link.label as keyof typeof socialIcons];

                // Ensure GitHub link points to the correct URL
                const href = link.label === "GitHub" 
                  ? "https://github.com/nabiha-naseer" 
                  : link.href;

                return (
                  <Link
                    key={link.label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                    aria-label={link.label}
                  >
                    {Icon && <Icon />}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-tight">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((item) => {
                // Ensure anchor links navigate to proper pages instead of scrolling
                const href = item.href === "#projects" 
                  ? "/projects" 
                  : item.href === "#contact" 
                    ? "/contact" 
                    : item.href;

                return (
                  <li key={item.label}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-tight">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:nabihafatima6667@gmail.com"
                  className="transition-colors hover:text-foreground"
                >
                  nabihafatima6667@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {currentYear} Nabiha Fatima. All rights reserved.
          </p>
          <p className="text-xs">
            Built with Next.js, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </Container>
    </footer>
  );
}