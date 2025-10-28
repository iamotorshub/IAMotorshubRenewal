"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ColourfulTextProps {
  text: string;
  className?: string;
}

export default function ColourfulText({ text, className }: ColourfulTextProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <motion.span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full blur-3xl"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, rgba(56,189,248,0.65), rgba(129,140,248,0.5), rgba(16,185,129,0.55), rgba(56,189,248,0.65))"
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      />
      <motion.span
        className="relative inline-flex bg-[linear-gradient(90deg,#60a5fa,#c084fc,#34d399,#60a5fa)] bg-clip-text text-transparent"
        style={{ backgroundSize: "200% 200%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        <span className="relative">
          <motion.span
            aria-hidden
            className="absolute inset-x-0 -top-3 block h-1/2 bg-gradient-to-b from-white/70 via-transparent to-transparent opacity-75 mix-blend-screen"
            animate={{ opacity: [0.45, 0.85, 0.45] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          />
          <span className="relative">{text}</span>
        </span>
      </motion.span>
    </span>
  );
}
