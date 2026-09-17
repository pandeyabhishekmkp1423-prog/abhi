"use client";

import React from "react";

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    "Magical Systems",
    "Product Engineering",
    "Next-Gen Platforms",
    "Production Architecture",
    "Enterprise Portals",
    "Full-Stack Scale",
    "Zero-Downtime APIs",
    "Reactive Interfaces"
  ];

  return (
    <div className="w-full py-8 md:py-12 overflow-hidden bg-transparent border-y border-violet-100/70 relative select-none" aria-hidden="true">
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {/* Double array for seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-3xl sm:text-5xl md:text-6xl font-heading font-extrabold uppercase tracking-tight text-outline-violet hover:text-violet-600 transition-colors cursor-default">
              {item}
            </span>
            {/* 4-point star SVG matching reference image ✦ */}
            <svg
              className="w-7 h-7 sm:w-9 sm:h-9 text-violet-300/80 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
