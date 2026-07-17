"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, Server, Database, CodeXml, Wrench } from "lucide-react";

const skillGroups = [
  { title: "Frontend", icon: <LayoutTemplate className="w-5 h-5" />, items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { title: "Backend", icon: <Server className="w-5 h-5" />, items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Database", icon: <Database className="w-5 h-5" />, items: ["MongoDB", "Mongoose"] },
  { title: "Languages", icon: <CodeXml className="w-5 h-5" />, items: ["JavaScript", "TypeScript", "C++"] },
  { title: "Tools", icon: <Wrench className="w-5 h-5" />, items: ["Git", "Postman", "VS Code"] }
];

export function SkillsOverview() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Skills</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-3xl bg-secondary/20 border border-border backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="text-primary">{group.icon}</div>
              <h3 className="font-semibold text-lg">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map(item => (
                <span key={item} className="px-3 py-1 text-sm font-medium rounded-full bg-background border border-border text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}