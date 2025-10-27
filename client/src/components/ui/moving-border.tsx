"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: string;
  className?: string;
}

export const Button = ({
  borderRadius = "1.75rem",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      {...props}
      initial={{ "--border-angle": "0deg" } as any}
      animate={{ "--border-angle": "360deg" } as any}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 6,
      }}
      style={{
        borderRadius,
        border: "2px solid transparent",
        background:
          "linear-gradient(white, white) padding-box, conic-gradient(from var(--border-angle), #00b3ff, #005eff, #00b3ff) border-box",
      }}
      className={`relative z-10 inline-flex items-center justify-center px-6 py-2 font-semibold shadow-sm transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};
