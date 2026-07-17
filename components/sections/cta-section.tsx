"use client";

import { motion } from "framer-motion";
import { Sparkles, Mail } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-24 mb-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative p-12 md:p-20 rounded-[2.5rem] bg-card border border-border overflow-hidden shadow-2xl shadow-black/5"
      >
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20"
          >
            <Sparkles className="w-7 h-7 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Ready to collaborate?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Whether you have an internship opportunity, a project idea, or just want to connect regarding software engineering, my inbox is open.
          </p>
          
          <Link 
            href="/contact" 
            className="group inline-flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-xl shadow-primary/25"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Get In Touch
          </Link>
        </div>
      </motion.div>
    </section>
  );
}