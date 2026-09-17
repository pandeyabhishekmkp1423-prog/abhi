"use client";

import React, { useState } from "react";

interface CircuitCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const CircuitCard: React.FC<CircuitCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(37, 99, 235, 0.2)",
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md transition-all duration-300 hover:border-blue-400 hover:shadow-[0_18px_40px_-10px_rgba(37,99,235,0.22)] hover:-translate-y-1 ${className}`}
      style={style}
      {...props}
    >
      {/* Circuit Corner Glow Nodes */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-24 h-24 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0.2,
          background: `radial-gradient(circle at top right, ${glowColor}, transparent 70%)`
        }}
        aria-hidden="true"
      />

      {/* Cybernetic Horizontal Scanline */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-scanline" />
      </div>

      {/* Subtle border highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          boxShadow: "inset 0 0 0 1px rgba(96, 165, 250, 0.4), 0 0 20px -3px rgba(37, 99, 235, 0.2)"
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
