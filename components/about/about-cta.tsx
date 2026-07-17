"use client";

import { motion } from "framer-motion";
import { FileDown, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export function AboutCta() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-b from-card to-secondary/20 border border-border overflow-hidden shadow-2xl text-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:-translate-y-1 shadow-lg shadow-primary/20"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Download Resume
            </Link>
            
            <Link 
              href="/projects" 
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-border bg-background px-8 text-sm font-semibold transition-all hover:bg-accent hover:-translate-y-1"
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link 
              href="/contact" 
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-border bg-background px-8 text-sm font-semibold transition-all hover:bg-accent hover:-translate-y-1"
            >
              Contact Me
              <Mail className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}