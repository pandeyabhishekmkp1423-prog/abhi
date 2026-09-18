import React from "react";

interface GlowingDividerProps {
  className?: string;
}

export const GlowingDivider: React.FC<GlowingDividerProps> = ({ className = "" }) => {
  return (
    <div className={`relative w-full flex items-center justify-center pointer-events-none ${className}`} aria-hidden="true">
      {/* Subtle line fading outward */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 dark:via-indigo-500/40 to-transparent" />
      {/* Central Radiant Glow Flare */}
      <div className="absolute w-40 sm:w-64 h-8 bg-indigo-500/15 dark:bg-indigo-500/20 blur-xl rounded-full" />
      <div className="absolute w-12 sm:w-20 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-500 rounded-full blur-[1px] opacity-75" />
    </div>
  );
};
