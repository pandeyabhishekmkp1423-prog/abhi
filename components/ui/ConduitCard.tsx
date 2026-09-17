"use client";

import React, { useState } from "react";

interface ConduitCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  stepNumber: string;
  phaseLabel: string;
}

export const ConduitCard: React.FC<ConduitCardProps> = ({
  children,
  className = "",
  stepNumber,
  phaseLabel,
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md transition-all duration-300 hover:border-blue-400 hover:shadow-[0_22px_45px_-10px_rgba(37,99,235,0.22)] hover:-translate-y-1 p-7 flex flex-col justify-between ${className}`}
      style={style}
      {...props}
    >
      {/* Dynamic Animated Conduit Energy Line on Hover */}
      <div
        className={`pointer-events-none absolute bottom-0 inset-x-0 h-1 transition-opacity duration-300 z-10 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <div className="w-full h-full animate-conduit" />
      </div>

      {/* Top Header with Step Badge & Ripple */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="relative">
            {/* Concentric Ripple Ring on Hover */}
            {isHovered && (
              <span
                className="pointer-events-none absolute inset-0 rounded-xl bg-blue-400/30 animate-ripple -z-1"
                aria-hidden="true"
              />
            )}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 via-indigo-50 to-white border border-blue-200/90 shadow-[0_0_15px_rgba(37,99,235,0.2)] flex items-center justify-center font-mono text-xl font-bold text-[#2563EB] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(37,99,235,0.35)] transition-all">
              {stepNumber}
            </div>
          </div>

          <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-blue-50/80 text-[#2563EB] border border-blue-200/60 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
            {phaseLabel}
          </span>
        </div>

        {children}
      </div>
    </div>
  );
};
