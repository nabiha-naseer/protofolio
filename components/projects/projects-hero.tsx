"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

export function ProjectsHero() {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-6 pt-32 pb-16 flex flex-col items-center text-center">
      {/* Animated Background Gradients to match About page */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/15 rounded-full blur-[100px] -z-10 pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 backdrop-blur-md mb-6"
      >
        <FolderGit2 className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">Portfolio Showcase</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Projects</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
      >
        Here are some of the projects I&apos;ve built throughout my learning journey. Each project helped me strengthen my programming, problem-solving, and software development skills.
      </motion.p>
    </section>
  );
}