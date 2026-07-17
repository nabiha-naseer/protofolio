"use client";

import { motion } from "framer-motion";
import { Target, Rocket, Lightbulb, Coffee, Terminal, Globe } from "lucide-react";

export function GoalsAndFacts() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Goals Section */}
      <div>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-6"
        >
          My Goals
        </motion.h2>
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-card border border-border shadow-sm flex gap-4 items-start"
          >
            <Target className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Short-Term</h3>
              <p className="text-sm text-muted-foreground">Master the MERN stack fundamentals, build production-ready applications, and contribute significantly to my internship projects at Dafi Labs.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border shadow-sm flex gap-4 items-start"
          >
            <Rocket className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Long-Term</h3>
              <p className="text-sm text-muted-foreground">Evolve into a Senior Full Stack Software Engineer capable of designing scalable system architectures and leading technical teams.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div>
        <motion.h2 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-6"
        >
          Quick Facts
        </motion.h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <Terminal className="w-5 h-5" />, text: "Loves solving programming problems" },
            { icon: <Lightbulb className="w-5 h-5" />, text: "Enjoys learning new technologies" },
            { icon: <Globe className="w-5 h-5" />, text: "Interested in Full Stack Development" },
            { icon: <Coffee className="w-5 h-5" />, text: "Always improving coding skills" }
          ].map((fact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-secondary/30 border border-border text-center flex flex-col items-center justify-center gap-3 hover:bg-secondary/50 transition-colors"
            >
              <div className="text-primary">{fact.icon}</div>
              <p className="text-xs font-medium text-muted-foreground">{fact.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}