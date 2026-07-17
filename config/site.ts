export const siteConfig = {
  name: "Nabiha Naseer",
  title: "Nabiha Naseer — Software Engineer",
  description:
    "BS Software Engineering student and MERN Stack developer building modern, responsive web applications.",
  url: "https://portfolio.example.com",
  author: {
    name: "Nabiha Naseer",
    email: "nabiha.naseer@example.com",
  },
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks = {
  navigation: navItems,
  social: [
    { label: "GitHub", href: siteConfig.links.github },
    { label: "LinkedIn", href: siteConfig.links.linkedin },
    { label: "Twitter", href: siteConfig.links.twitter },
  ],
} as const;
