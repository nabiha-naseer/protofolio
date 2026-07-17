"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NAV_ROUTES } from "./routes";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
      {NAV_ROUTES.map((route) => {
        const isActive = pathname === route.path;

        return (
          <Link
            key={route.name}
            href={route.path}
            aria-current={isActive ? "page" : undefined}
            className={`relative px-4 py-2 text-sm transition-colors rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:text-primary ${
              isActive 
                ? "text-primary font-semibold drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]" 
                : "text-muted-foreground font-medium"
            }`}
          >
            {route.name}
            {isActive && (
              <>
                <motion.div
                  layoutId="navbar-active-bg"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
                <motion.div
                  layoutId="navbar-active-underline"
                  className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary),0.8)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              </>
            )}
          </Link>
        );
      })}
    </nav>
  );
}