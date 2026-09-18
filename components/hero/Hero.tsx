"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  Sparkles,
  ArrowRight,
  Activity,
  Terminal,
  ShieldCheck,
  Zap
} from "lucide-react";
import { Container } from "../layout/Container";
import { HeroArchitectureVisualizer } from "./HeroArchitectureVisualizer";

export const Hero: React.FC = () => {
  const triggerCommandPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "k",
        metaKey: true,
        bubbles: true
      })
    );
  };

  return (
    <section id="hero" className="relative pt-8 sm:pt-12 md:pt-16 pb-16 md:pb-24 lg:pt-20 lg:pb-28 overflow-hidden bg-slate-50/50 dark:bg-[#07090E] transition-colors">
      {/* Radiant Glowing Ambient Mesh */}
      <div
        className="absolute top-0 right-1/4 w-[750px] h-[650px] rounded-full bg-gradient-to-tr from-indigo-500/10 dark:from-indigo-600/15 via-violet-500/10 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/10 dark:from-cyan-600/15 via-blue-500/10 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container className="relative">
        {/* Top Real-time Personal Status Strip */}
        <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8 text-xs font-mono">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for select engineering roles &amp; contracts</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
            <span>Based in India • Working Worldwide</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Narrative & Interactive Command Bar */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Top Badge */}
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-500/30 px-3 py-1 rounded-full mb-5 inline-flex items-center gap-1.5">
              <span>Full-Stack Engineer &amp; Product Designer</span>
            </span>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-extrabold tracking-tight text-neutral-950 dark:text-white font-heading leading-[1.1]">
              Crafting web platforms <br />
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 dark:from-indigo-400 dark:via-violet-300 dark:to-cyan-400 bg-clip-text text-transparent">
                with engineering rigor.
              </span>
            </h1>

            {/* Narrative Copy */}
            <p className="mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
              I design and build production web applications, relational data architectures, and polished digital experiences. Specializing in TypeScript, Next.js, and PostgreSQL with a focus on maintainability, performance, and user craft.
            </p>

            {/* Functional Command Palette Search Bar */}
            <div className="mt-8 sm:mt-10 w-full max-w-xl">
              <div
                onClick={triggerCommandPalette}
                className="flex items-center p-2 rounded-2xl sm:rounded-full bg-white dark:bg-[#0C1017] border border-neutral-200 dark:border-neutral-800 shadow-lg shadow-neutral-950/5 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2.5 px-3 py-1.5 flex-1 min-w-0">
                  <Search className="w-4 h-4 text-neutral-400 dark:text-neutral-500 shrink-0 group-hover:text-indigo-500 transition-colors" />
                  <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 truncate">
                    Search projects, architecture, or press ⌘K...
                  </span>
                </div>

                <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-[11px] font-mono font-semibold rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700 mr-2">
                  ⌘K
                </kbd>

                <Link
                  href="#work"
                  className="px-5 py-2.5 rounded-xl sm:rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 text-xs sm:text-sm font-semibold shadow-sm shrink-0 flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Popular Stacks Quick Links */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-neutral-400 dark:text-neutral-500 text-[11px] font-semibold">
                  Core Toolchains:
                </span>
                {["Next.js 16", "PostgreSQL", "TypeScript", "React 19", "Tailwind CSS", "Prisma"].map((tag) => (
                  <Link
                    key={tag}
                    href="#work"
                    className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors font-medium text-[11px]"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Topology & Telemetry */}
          <div className="lg:col-span-5 flex justify-center items-center relative w-full">
            <HeroArchitectureVisualizer />
          </div>
        </div>
      </Container>
    </section>
  );
};
