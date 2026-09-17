"use client";

import React, { useState } from "react";

interface SheenCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  sheenColor?: string;
}

export const SheenCard: React.FC<SheenCardProps> = ({
  children,
  className = "",
  sheenColor = "rgba(37, 99, 235, 0.25)",
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md transition-all duration-300 hover:border-blue-400 hover:shadow-[0_22px_45px_-10px_rgba(37,99,235,0.2)] hover:-translate-y-1.5 ${className}`}
      style={style}
      {...props}
    >
      {/* Diagonal Metallic Sheen Shutter on Hover */}
      <div
        className={`pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <div
          className="w-[200%] h-full animate-sheen"
          style={{
            background: `linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.7) 45%, ${sheenColor} 50%, rgba(255, 255, 255, 0.7) 55%, transparent 65%)`
          }}
        />
      </div>

      {/* Subtle glowing ambient hover backdrop */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: "radial-gradient(ellipse at top, rgba(37, 99, 235, 0.1), transparent 70%)"
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
