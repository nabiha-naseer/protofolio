export const heroContent = {
  greeting: "Hello, I'm",
  name: "Nabiha Naseer",
  subtitle: "BS Software Engineering Student | MERN Stack Developer",
  description:
    "I build modern, responsive web applications with the MERN stack. Passionate about crafting clean user experiences and writing scalable, maintainable code.",
  ctas: {
    projects: { label: "View Projects", href: "#projects" },
    contact: { label: "Contact Me", href: "#contact" },
  },
} as const;

export const aboutPreview = {
  title: "About Me",
  description:
    "I'm a Software Engineering student with a strong foundation in full-stack web development. I enjoy turning complex problems into elegant, user-friendly solutions — from intuitive interfaces to robust backend systems.",
  readMore: { label: "Read More", href: "#about" },
} as const;

export const skillsPreview = {
  title: "Skills & Technologies",
  description:
    "A curated set of tools and technologies I use to bring ideas to life.",
  categories: [
    {
      title: "Frontend",
      icon: "layout",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML & CSS"],
    },
    {
      title: "Backend",
      icon: "server",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MVC Architecture"],
    },
    {
      title: "Database",
      icon: "database",
      skills: ["MongoDB", "Mongoose", "Schema Design", "Aggregation", "Indexing"],
    },
    {
      title: "Tools",
      icon: "wrench",
      skills: ["Git & GitHub", "VS Code", "Postman", "Figma", "npm"],
    },
  ],
} as const;

export const experiencePreview = {
  title: "Experience",
  description: "My professional journey in software development.",
  items: [
    {
      role: "MERN Stack Intern",
      company: "Dafi Labs",
      status: "Current Internship",
      period: "2025 — Present",
      description:
        "Building full-stack web applications using MongoDB, Express, React, and Node.js. Collaborating on real-world projects and sharpening production-ready development skills.",
    },
  ],
} as const;

export const projectsPreview = {
  title: "Featured Projects",
  description:
    "A selection of projects that showcase my skills in full-stack development.",
  viewAll: { label: "View All Projects", href: "#projects" },
  items: [
    {
      title: "TaskFlow",
      description:
        "A collaborative task management app with real-time updates, drag-and-drop boards, and team workspaces built for productivity.",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "#",
      liveDemo: "#",
      gradient: "from-violet-500/20 to-purple-600/20",
    },
    {
      title: "ShopVerse",
      description:
        "A modern e-commerce platform featuring product catalogs, cart management, secure checkout, and an admin dashboard.",
      techStack: ["Next.js", "Express", "MongoDB", "Stripe"],
      github: "#",
      liveDemo: "#",
      gradient: "from-blue-500/20 to-cyan-600/20",
    },
    {
      title: "DevBlog",
      description:
        "A developer blogging platform with markdown support, syntax highlighting, user authentication, and a clean reading experience.",
      techStack: ["React", "Express", "MongoDB", "JWT"],
      github: "#",
      liveDemo: "#",
      gradient: "from-emerald-500/20 to-teal-600/20",
    },
  ],
} as const;

export const ctaContent = {
  title: "Let's Build Something Together",
  description:
    "I'm always open to discussing new projects, internship opportunities, or collaborations. Feel free to reach out — I'd love to hear from you.",
  button: { label: "Get In Touch", href: "#contact" },
} as const;
