"use client";

import React, { useState } from "react";

interface BorderBeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  beamColor?: string;
  borderWidth?: number;
}

export const BorderBeamCard: React.FC<BorderBeamCardProps> = ({
  children,
  className = "",
  beamColor = "#2563EB",
  borderWidth = 1.5,
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${className}`}
      style={style}
      {...props}
    >
      {/* Rotating Electric Border Beam */}
      <div
        className="pointer-events-none absolute -inset-[100%] transition-opacity duration-500 z-0"
        style={{
          opacity: isHovered ? 1 : 0.35,
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${beamColor} 60deg, #06B6D4 120deg, transparent 180deg)`
        }}
        aria-hidden="true"
      >
        <div className="w-full h-full animate-border-spin" />
      </div>

      {/* Inner Mask Surface (leaves border for the beam) */}
      <div
        className="absolute rounded-[calc(1rem-1.5px)] bg-white/95 backdrop-blur-xl z-1 transition-colors group-hover:bg-white/98"
        style={{ inset: `${borderWidth}px` }}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
