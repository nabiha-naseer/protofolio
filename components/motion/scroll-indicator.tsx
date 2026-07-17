"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

type ScrollIndicatorProps = {
  href?: string;
};

export function ScrollIndicator({ href = "#about" }: ScrollIndicatorProps) {
  return (
    <motion.a
      href={href}
      aria-label="Scroll to content"
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <span className="text-xs font-medium tracking-widest uppercase">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="size-5" aria-hidden="true" />
      </motion.div>
    </motion.a>
  );
}
