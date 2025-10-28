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
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none whitespace-pre-wrap text-white/85 blur-sm"
      >
        {text}
      </span>
      <motion.span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-full blur-3xl"
        style={{
          background:
            "conic-gradient(from 120deg at 50% 50%, rgba(56,189,248,0.55), rgba(192,132,252,0.45), rgba(236,72,153,0.5), rgba(249,115,22,0.5), rgba(16,185,129,0.55), rgba(56,189,248,0.55))"
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      />
      <motion.span
        className="relative inline-flex bg-[linear-gradient(105deg,#38bdf8_0%,#818cf8_20%,#ec4899_45%,#f97316_70%,#22d3ee_85%,#38bdf8_100%)] bg-clip-text text-transparent"
        style={{ backgroundSize: "200% 200%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        <span className="relative">
          <motion.span
            aria-hidden
            className="absolute inset-x-0 -top-3 block h-1/2 bg-gradient-to-b from-white/75 via-transparent to-transparent opacity-80 mix-blend-screen"
            animate={{ opacity: [0.45, 0.85, 0.45] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          />
          <span className="relative">{text}</span>
        </span>
      </motion.span>
    </span>
  );
}
