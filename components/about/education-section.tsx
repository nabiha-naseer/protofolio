"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export function EducationSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-sm backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-xl bg-primary/10 text-primary">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">Academic Foundation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-foreground">University of Central Punjab</h3>
            <p className="text-primary font-medium mt-1">BS Software Engineering</p>
            <p className="text-muted-foreground text-sm mt-2">Lahore, Pakistan</p>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <BookOpen className="w-5 h-5 text-muted-foreground mb-3" />
              <p className="text-sm text-muted-foreground font-medium mb-1">Current Phase</p>
              <p className="text-2xl font-bold text-foreground">4th Semester</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/30 border border-border/50">
              <Award className="w-5 h-5 text-muted-foreground mb-3" />
              <p className="text-sm text-muted-foreground font-medium mb-1">Academic Score</p>
              <p className="text-2xl font-bold text-foreground">3.7 CGPA</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}