"use client";

import { motion, Variants } from "framer-motion";
import { LayoutTemplate, MessageSquare, Palette } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
}

const projectsData: Project[] = [
  {
    title: "Personal Portfolio Website",
    category: "Full Stack Web Application",
    description: "A modern portfolio built using Next.js, TypeScript, Tailwind CSS, Framer Motion, and responsive UI principles. This project showcases my skills, projects, and professional journey while following modern web development practices.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: <LayoutTemplate className="w-6 h-6" />
  },
  {
    title: "University FAQ System",
    category: "Java Desktop Application",
    description: "A university FAQ system developed to answer frequently asked student questions efficiently. The project focused on Java programming, logical problem solving, and structured application development.",
    tags: ["Java", "OOP", "File Handling"],
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: "Online Art Gallery System",
    category: "Software Engineering Project",
    description: "A software engineering project designed to manage artists, artworks, exhibitions, and gallery records while applying object-oriented programming concepts, validation, and system design principles.",
    tags: ["Java", "OOP", "Software Engineering"],
    icon: <Palette className="w-6 h-6" />
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  }
};
export function ProjectsGrid() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className={`flex flex-col p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group ${
              index === 2 ? "md:col-span-2 md:w-2/3 md:mx-auto" : ""
            }`}
          >
            {/* Subtle hover gradient bloom */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors pointer-events-none" />

            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              <div>
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wide rounded-full bg-secondary text-secondary-foreground">
                  {project.category}
                </span>
                <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed flex-grow mb-8 relative z-10">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-background border border-border text-muted-foreground shadow-sm group-hover:border-primary/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}