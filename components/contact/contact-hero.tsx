"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative w-full max-w-3xl mx-auto px-6 pt-32 pb-12 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-md mb-6"
      >
        <Send className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">Let&apos;s Connect</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
      >
        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Me</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
      >
        Have a project, internship opportunity, or just want to say hello? I&apos;d love to hear from you.
      </motion.p>
    </section>
  );
}