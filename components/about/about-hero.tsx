"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center">
      {/* Animated Background Gradients */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/15 rounded-full blur-[100px] -z-10 pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-md mb-6"
      >
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">Get to know the developer</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
      >
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Me</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
      >
        I&apos;m an aspiring software engineer passionate about modern web technologies. I believe in writing clean code, building intuitive user experiences, and continuously learning through hands-on development.
      </motion.p>
    </section>
  );
}