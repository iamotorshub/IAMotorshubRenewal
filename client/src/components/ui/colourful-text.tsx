"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ColourfulTextProps {
  text: string;
  className?: string;
}

export default function ColourfulText({ text, className }: ColourfulTextProps) {
  return (
    <span className="relative inline-flex">
      <motion.span
        aria-hidden
        className="absolute inset-x-0 top-1/2 -z-10 h-16 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.45),rgba(56,189,248,0))] blur-2xl"
        animate={{ scale: [0.9, 1.1, 0.95], opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.span
        className={cn(
          "relative inline-flex bg-gradient-to-r from-[hsl(210,100%,85%)] via-[hsl(200,100%,75%)] to-[hsl(185,95%,78%)] bg-clip-text text-transparent",
          className
        )}
        style={{ backgroundSize: "200% 200%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      >
        {text}
      </motion.span>
    </span>
  );
}
