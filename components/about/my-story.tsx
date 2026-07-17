"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function MyStory() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-2/5 flex justify-center order-1 md:order-none"
        >
          <div className="relative group w-64 h-64 md:w-80 md:h-80">
            {/* Subtle Glow Behind Image */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-500" />
            
            <Image
  src="/profile.jpg"
  alt="Nabiha Fatima"
  fill
  sizes="(max-width: 768px) 100vw, 320px"
  className="object-cover rounded-full shadow-2xl border-4 border-card group-hover:scale-105 transition-transform duration-500"
/>
          </div>
        </motion.div>

        {/* Story Text */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-3/5 order-2 md:order-none"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-6">My Story</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground font-semibold">I am Nabiha Fatima</strong>, a Software Engineering student passionate about full-stack development, modern web technologies, and creating clean, responsive applications.
            </p>
            <p>
              My journey into software engineering started with a simple curiosity about how the applications I used every day were built. That curiosity quickly evolved into a dedicated pursuit of knowledge.
            </p>
            <p>
              Currently, I am navigating my 4th semester at the University of Central Punjab. Academic learning gave me the foundational logic, but I wanted to see how code runs in the real world. 
            </p>
            <p>
              That drive led me to my current role as a MERN Stack Intern at Dafi Labs. I am actively bridging the gap between classroom theory and industry practice, learning how to structure React applications, connect databases securely, and build APIs that scale. I don&apos;t know everything yet, but I am committed to learning something new every single day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}