"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Globe } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Architecture",
    description: "A full-stack MERN application featuring user authentication, state management, and a dynamic product catalog.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    githubUrl: "https://github.com/nabiha-naseer",
    liveUrl: "#"
  },
  {
    title: "University Task Manager",
    description: "A collaborative productivity tool built for students to track assignments, deadlines, and group project milestones.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/nabiha-naseer",
    liveUrl: "#"
  }
];

export function ProjectsPreview() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl">A selection of my recent technical endeavors, showcasing problem-solving and modern development practices.</p>
        </div>
        <Link 
          href="/projects" 
          className="text-sm font-medium text-primary hover:underline underline-offset-4 flex items-center gap-1"
        >
          View All Projects <ExternalLink className="w-4 h-4" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group flex flex-col rounded-3xl bg-card border border-border shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground/50 font-medium tracking-widest text-sm uppercase">
                Project Preview
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <div className="flex gap-2">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/50 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                    <GitBranch className="w-4 h-4" />
                  </Link>
                  <Link href={project.liveUrl} className="p-2 bg-secondary/50 rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                    <Globe className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}