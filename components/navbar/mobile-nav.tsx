"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ROUTES } from "./routes";

interface MobileNavProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export function MobileNav({
  isAuthenticated = false,
  onLogout,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open, guarantee restore on unmount
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-accent text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[72px] bg-background/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-[72px] left-4 right-4 z-50 p-6 rounded-3xl bg-card border border-border shadow-2xl flex flex-col gap-4"
            >
              <nav className="flex flex-col gap-2">
                {NAV_ROUTES.map((route) => {
                  const isActive = pathname === route.path;
                  return (
                    <Link
                      key={route.name}
                      href={route.path}
                      onClick={() => setIsOpen(false)} // Closing menu on link click
                      aria-current={isActive ? "page" : undefined}
                      className={`px-4 py-3 text-lg rounded-xl transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                        isActive
                          ? "bg-primary/10 text-primary font-semibold drop-shadow-[0_0_8px_rgba(var(--primary),0.3)]"
                          : "text-muted-foreground font-medium hover:bg-secondary/50 hover:text-foreground"
                      }`}
                    >
                      {route.name}
                    </Link>
                  );
                })}
                
                <div className="h-px bg-border my-2" aria-hidden="true" />
                
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-3 text-lg font-semibold text-center rounded-xl bg-secondary text-secondary-foreground transition-transform active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onLogout?.();
                      }}
                      className="px-4 py-3 text-lg font-semibold text-center rounded-xl text-destructive hover:bg-destructive/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-destructive"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-lg font-semibold text-center rounded-xl bg-primary text-primary-foreground transition-transform active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    Login
                  </Link>
                )}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}