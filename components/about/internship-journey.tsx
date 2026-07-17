"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

const journeySteps = [
  { title: "Started MERN Internship", desc: "Joined Dafi Labs to gain practical industry exposure." },
  { title: "Learning React", desc: "Building interactive, component-driven user interfaces." },
  { title: "Learning Next.js", desc: "Exploring the App Router, SSR, and modern frontend architecture." },
  { title: "Learning Express", desc: "Structuring secure and efficient backend REST APIs." },
  { title: "Learning MongoDB", desc: "Understanding document databases and Mongoose schemas." },
  { title: "Building Real-World Projects", desc: "Applying these technologies to create functional, deployed applications." }
];

export function InternshipJourney() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-4">Internship Journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">My active learning path as a MERN Stack Intern at Dafi Labs.</p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8">
          {journeySteps.map((step, idx) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex items-center gap-6 md:justify-between ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(var(--primary),0.2)] z-10">
                {idx === 0 ? <Briefcase className="w-3 h-3 text-primary" /> : <CheckCircle2 className="w-3 h-3 text-primary" />}
              </div>

              {/* Empty space for alternating layout on desktop */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-[45%] p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-colors">
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}