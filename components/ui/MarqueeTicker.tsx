"use client";

import React from "react";
import { Sparkles, Terminal, Activity } from "lucide-react";

export const MarqueeTicker: React.FC = () => {
  const tickerItems = [
    "DISTRIBUTED ARCHITECTURES",
    "ACID NORMALIZATION",
    "NEXT.JS 16 APP ROUTER",
    "SUB-100MS LATENCY",
    "STREAMING SSR & REACT 19",
    "MULTI-TENANT RBAC",
    "POSTGRESQL & MYSQL",
    "ZERO-DOWNTIME CI/CD",
    "TYPESCRIPT RIGOR"
  ];

  return (
    <div
      className="w-full py-5 bg-slate-900 dark:bg-[#0A0D14] border-y border-slate-800 dark:border-white/10 overflow-hidden relative select-none"
      aria-label="Engineering Capabilities Ticker"
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Double array for seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center mx-4 sm:mx-6 group cursor-default">
            <span className="text-xl sm:text-2xl md:text-3xl font-heading font-black tracking-tight text-outline-brand group-hover:text-indigo-400/20 transition-all duration-300">
              {item}
            </span>
            <span className="ml-4 sm:ml-6 w-2 h-2 rounded-full bg-indigo-500/60 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
          </div>
        ))}
      </div>
    </div>
  );
};
