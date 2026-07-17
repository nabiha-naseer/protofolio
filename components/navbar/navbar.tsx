"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

import { useAuth } from "@/components/auth/use-auth";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
      <Logo />

        <DesktopNav />

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Desktop Authentication */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-background/50 px-6 text-sm font-semibold transition-all hover:bg-accent hover:text-accent-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Dashboard
                </Link>

                <button
                  onClick={logout}
                  className="inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold text-muted-foreground transition-colors hover:text-destructive outline-none focus-visible:ring-2 focus-visible:ring-destructive focus-visible:ring-offset-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Login
              </Link>
            )}
          </div>

          <MobileNav
            isAuthenticated={isAuthenticated}
            onLogout={logout}
          />
        </div>
      </div>
    </header>
  );
}