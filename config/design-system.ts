export const spacing = {
  section: {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-32",
  },
  container: {
    padding: "px-4 sm:px-6 lg:px-8",
    maxWidth: "max-w-7xl",
  },
  gap: {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  },
} as const;

export const typography = {
  display: "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight",
  h1: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight",
  h2: "text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight",
  h3: "text-xl sm:text-2xl font-semibold tracking-tight",
  h4: "text-lg sm:text-xl font-semibold",
  body: "text-base leading-relaxed",
  bodyLarge: "text-lg leading-relaxed",
  small: "text-sm leading-normal",
  caption: "text-xs leading-normal text-muted-foreground",
  overline:
    "text-xs font-medium uppercase tracking-widest text-muted-foreground",
} as const;

export const animation = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
  },
  ease: [0.21, 0.47, 0.32, 0.98] as const,
} as const;
