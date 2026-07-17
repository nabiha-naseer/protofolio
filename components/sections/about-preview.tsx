"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Engineering the Future, <br/>One Concept at a Time.</h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            I am a passionate software engineering student specializing in modern web technologies. I blend academic rigor with practical industry experience to build applications that are as robust under the hood as they are intuitive on the screen.
          </p>
          
          {/* FIXED: href updated from "#contact" to "/about" */}
          <Link href="/about" className="group inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
            Read Full Story 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 gap-4"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-start gap-5 p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-sm backdrop-blur-sm transition-all hover:shadow-primary/5 hover:border-primary/20">
            <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-1">University of Central Punjab</h3>
              <p className="text-muted-foreground">BS Software Engineering</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col gap-3 p-6 rounded-2xl bg-card border border-border/50 shadow-sm transition-all hover:border-primary/20">
              <div className="p-2.5 w-fit rounded-lg bg-primary/10 text-primary">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Current Phase</h3>
                <p className="text-2xl font-bold text-foreground mt-1">4th Semester</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="flex flex-col gap-3 p-6 rounded-2xl bg-card border border-border/50 shadow-sm transition-all hover:border-primary/20">
              <div className="p-2.5 w-fit rounded-lg bg-primary/10 text-primary">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Academic Score</h3>
                <p className="text-2xl font-bold text-foreground mt-1">3.7 CGPA</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}