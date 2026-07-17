"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { AnimatedBackground } from "@/components/motion/animated-background";
import { ScrollIndicator } from "@/components/motion/scroll-indicator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroContent } from "@/config/home";
import { animation, typography } from "@/config/design-system";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden">
      <AnimatedBackground />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: animation.duration.slow, ease: animation.ease }}
            >
              <Badge variant="secondary" className="mb-6">
                {heroContent.greeting}
              </Badge>
            </motion.div>

            <motion.h1
              className={cn(typography.display, "mb-4")}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: animation.duration.slow,
                delay: 0.1,
                ease: animation.ease,
              }}
            >
              <span className="text-gradient">{heroContent.name}</span>
            </motion.h1>

            <motion.p
              className={cn(typography.h4, "mb-6 text-muted-foreground")}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: animation.duration.slow,
                delay: 0.2,
                ease: animation.ease,
              }}
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.p
              className={cn(
                typography.bodyLarge,
                "mx-auto mb-8 max-w-lg text-muted-foreground lg:mx-0"
              )}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: animation.duration.slow,
                delay: 0.3,
                ease: animation.ease,
              }}
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: animation.duration.slow,
                delay: 0.4,
                ease: animation.ease,
              }}
            >
              <Button
                size="lg"
                className="h-11 px-6"
                nativeButton={false}
                render={<Link href="/projects" />}
              >
                View Projects
                <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-11 px-6"
                nativeButton={false}
                render={<Link href="/contact" />}
              >
                Contact Me
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="order-1 flex justify-center lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: animation.ease,
            }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-2xl transition-colors duration-500 group-hover:bg-primary/30" />
              
              <div className="relative flex size-56 items-center justify-center overflow-hidden rounded-full border-4 border-card bg-muted/50 shadow-xl transition-transform duration-500 group-hover:scale-105 sm:size-64 md:size-72">
                <Image
                  src="/profile.jpg"
                  alt="Nabiha Fatima"
                  fill
                  className="object-cover"
                />
              </div>

              <motion.div
                className="absolute -bottom-3 -right-3 rounded-xl border border-border bg-card px-4 py-2.5 shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-xs text-muted-foreground">Status</p>
                <p className="text-sm font-semibold text-primary">
                  Open to Opportunities
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator href="#about" />
    </section>
  );
}