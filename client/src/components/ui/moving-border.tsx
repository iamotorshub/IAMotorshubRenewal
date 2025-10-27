"use client";

import React from "react";
import { motion } from "framer-motion";

type MotionButtonProps = React.ComponentProps<typeof motion.button>;

interface ButtonProps extends Omit<MotionButtonProps, "style"> {
  borderRadius?: string;
  className?: string;
  innerBackground?: string;
  borderColors?: [string, string?, string?];
  style?: MotionButtonProps["style"];
}

export const Button = ({
  borderRadius = "1.75rem",
  className,
  children,
  innerBackground = "rgba(6, 14, 30, 0.65)",
  borderColors = ["#38bdf8", "#2563eb", "#38bdf8"],
  type = "button",
  style,
  ...props
}: ButtonProps) => {
  const [start, middle = start, end = start] = borderColors;
  return (
    <motion.button
      {...props}
      type={type}
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
          `linear-gradient(${innerBackground}, ${innerBackground}) padding-box, conic-gradient(from var(--border-angle), ${start}, ${middle}, ${end}) border-box`,
        boxShadow: "0 18px 45px rgba(15, 76, 129, 0.35)",
        ...style,
      }}
      className={`relative z-10 inline-flex items-center justify-center px-6 py-2 font-semibold transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};
