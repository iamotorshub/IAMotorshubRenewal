"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface GlareCardProps {
  children: React.ReactNode;
  className?: string;
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const GlareCard: React.FC<GlareCardProps> = ({ children, className }) => {
  const refElement = useRef<HTMLDivElement>(null);
  const frame = useRef<number>();

  useEffect(() => {
    return () => {
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  const animate = (xPercent: number, yPercent: number) => {
    const element = refElement.current;
    if (!element) return;

    const rotateMax = 10;
    const rotateX = ((yPercent - 50) / 50) * -rotateMax;
    const rotateY = ((xPercent - 50) / 50) * rotateMax;

    element.style.setProperty("--glare-x", `${xPercent}%`);
    element.style.setProperty("--glare-y", `${yPercent}%`);
    element.style.setProperty("--card-rotate-x", `${rotateX.toFixed(2)}deg`);
    element.style.setProperty("--card-rotate-y", `${rotateY.toFixed(2)}deg`);
  };

  const scheduleAnimation = (xPercent: number, yPercent: number) => {
    if (frame.current) {
      cancelAnimationFrame(frame.current);
    }

    frame.current = requestAnimationFrame(() => animate(xPercent, yPercent));
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = refElement.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const xPercent = clamp((x / rect.width) * 100, 0, 100);
    const yPercent = clamp((y / rect.height) * 100, 0, 100);

    scheduleAnimation(xPercent, yPercent);
  };

  const handlePointerLeave = () => {
    scheduleAnimation(50, 50);
  };

  const baseStyle = {
    "--glare-x": "50%",
    "--glare-y": "50%",
    "--card-rotate-x": "0deg",
    "--card-rotate-y": "0deg",
    transform:
      "perspective(1200px) rotateX(var(--card-rotate-x)) rotateY(var(--card-rotate-y))",
  } as React.CSSProperties & Record<string, string>;

  return (
    <div
      ref={refElement}
      style={baseStyle}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "group relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px] transition-transform duration-500 ease-out will-change-transform",
        "hover:scale-[1.015]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.4),rgba(99,102,241,0.35),rgba(56,189,248,0.4))] opacity-60 blur-xl transition-opacity duration-700 group-hover:opacity-90" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--glare-x) var(--glare-y), rgba(148, 197, 255, 0.28), rgba(12, 32, 64, 0.1) 55%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[linear-gradient(135deg,rgba(9,18,36,0.95),rgba(8,16,32,0.75))]" />
      <div className="relative z-10 h-full w-full rounded-[calc(1.5rem-4px)] bg-[rgba(8,16,35,0.78)]/90 p-6 sm:p-8 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
};
