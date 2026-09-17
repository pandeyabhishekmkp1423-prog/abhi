"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Database,
  Sparkles,
  Activity,
  ArrowRight
} from "lucide-react";
import { Container } from "../layout/Container";

export const Hero: React.FC = () => {
  const [selectedStack, setSelectedStack] = useState("All Stacks");
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const stackOptions = ["All Stacks", "Next.js & React", "PostgreSQL & SQL", "Enterprise ERP", "E-Commerce"];

  return (
    <section id="hero" className="relative pt-10 sm:pt-14 md:pt-16 pb-16 md:pb-24 lg:pt-20 lg:pb-28 overflow-hidden bg-[#FAF8FF]">
      {/* Radiant Glowing Ambient Violet & Cyan Mesh */}
      <div
        className="absolute top-0 right-1/4 w-[750px] h-[650px] rounded-full bg-gradient-to-tr from-purple-400/15 via-indigo-400/10 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400/12 via-cyan-300/10 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description & Interactive Command Bar */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Top Label */}
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#7C3AED] bg-purple-100/70 border border-purple-200/80 px-3.5 py-1.5 rounded-full mb-6 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#7C3AED]" />
              NEXT-GENERATION OF PRODUCT ENGINEERING
            </span>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-[#0F172A] font-heading leading-[1.1]">
              Architecting systems <br />
              <span className="bg-gradient-to-r from-[#0F172A] via-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                where code meets scale.
              </span>
            </h1>

            {/* Narrative copy */}
            <p className="mt-5 text-base sm:text-lg text-[#64748B] max-w-2xl leading-relaxed">
              Full-stack software architect &amp; product builder. Partnering with companies and institutions to build high-performance web applications, relational databases, and enterprise platforms.
            </p>

            {/* Interactive Search & Command Bar (Matching the Reference UI) */}
            <div className="mt-8 sm:mt-10 w-full max-w-xl">
              <div className="flex flex-col sm:flex-row items-center p-2 rounded-2xl sm:rounded-full bg-white border border-purple-100 shadow-[0_12px_35px_-8px_rgba(99,102,241,0.15)] gap-2">
                {/* Search Input */}
                <div className="flex items-center gap-2.5 px-3 py-2 flex-1 w-full">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search architecture, ERP, or case studies..."
                    className="w-full text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
                  />
                </div>

                {/* Dropdown Selector */}
                <div className="relative w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-slate-200 px-3 py-1">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center justify-between sm:justify-start gap-2 text-xs font-semibold text-slate-700 hover:text-purple-600 transition-colors w-full py-1"
                  >
                    <span>{selectedStack}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  {/* Dropdown Options Menu */}
                  {dropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-30 animate-in fade-in">
                      {stackOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setSelectedStack(opt);
                            setDropdownOpen(false);
                          }}
                          className="w-full text-left px-3.5 py-1.5 text-xs text-slate-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <Link
                  href="#work"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl sm:rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white text-xs sm:text-sm font-bold shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_25px_rgba(99,102,241,0.6)] hover:scale-[1.02] transition-all text-center flex items-center justify-center gap-1"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Popular Tags Row (Matching Reference) */}
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 text-[11px] font-semibold">Popular Stacks:</span>
                {["Next.js", "PostgreSQL", "Enterprise ERP", "Laravel", "React 19"].map((tag) => (
                  <Link
                    key={tag}
                    href="#work"
                    className="px-2.5 py-1 rounded-md bg-white border border-purple-100 text-slate-600 hover:text-purple-600 hover:border-purple-300 transition-colors shadow-2xs font-medium text-[11px]"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Mascot Character with Orbiting Floating Project Cards */}
          <div className="lg:col-span-5 flex justify-center items-center relative w-full">
            {/* Ambient Halo behind mascot */}
            <div
              className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-purple-400/25 via-indigo-400/20 to-cyan-300/15 blur-3xl pointer-events-none -z-10 animate-pulse-glow"
              aria-hidden="true"
            />

            {/* Mascot Container */}
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* 3D Friendly Robot Mascot Render */}
              <div className="relative w-72 sm:w-84 aspect-square animate-float-slow">
                <Image
                  src="/images/hero-mascot.jpg"
                  alt="3D Engineering Mascot Robot"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_25px_35px_rgba(99,102,241,0.2)]"
                />
              </div>

              {/* Orbiting Floating Card 1: Top Left */}
              <div className="absolute top-2 -left-4 sm:-left-8 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-xl shadow-purple-900/10 flex items-center gap-2.5 animate-float-reverse z-20">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7C3AED] flex items-center justify-center shadow-xs">
                  <Database className="w-4 h-4" />
                </div>
                <div className="text-left pr-2">
                  <span className="text-[11px] font-bold text-slate-800 block leading-tight">PostgreSQL</span>
                  <span className="text-[9px] text-emerald-600 font-semibold font-mono">● ACID Normalized</span>
                </div>
              </div>

              {/* Orbiting Floating Card 2: Top Right */}
              <div className="absolute top-8 -right-4 sm:-right-8 p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-xl shadow-purple-900/10 flex items-center gap-2.5 animate-float-slow z-20">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-[#6366F1] flex items-center justify-center shadow-xs">
                  <Activity className="w-4 h-4 animate-pulse" />
                </div>
                <div className="text-left pr-2">
                  <span className="text-[11px] font-bold text-slate-800 block leading-tight">8 Platforms Live</span>
                  <span className="text-[9px] text-slate-500 font-mono">99.9% Uptime SLA</span>
                </div>
              </div>

              {/* Orbiting Floating Card 3: Bottom Left */}
              <div className="absolute bottom-4 -left-2 sm:-left-6 p-2 rounded-xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-xl shadow-purple-900/10 flex items-center gap-2 animate-float-slow z-20">
                <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0">
                  <Image src="/images/projects/metawaves.jpg" alt="MetaWaves UI" fill className="object-cover" />
                </div>
                <div className="text-left pr-1.5">
                  <span className="text-[10px] font-bold text-slate-800 block leading-tight">MetaWaves LMS</span>
                  <span className="text-[9px] text-[#7C3AED] font-semibold">Flagship System</span>
                </div>
              </div>

              {/* Orbiting Floating Card 4: Bottom Right */}
              <div className="absolute bottom-2 -right-2 sm:-right-6 p-2 rounded-xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-xl shadow-purple-900/10 flex items-center gap-2 animate-float-reverse z-20">
                <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0">
                  <Image src="/images/projects/scentrun.jpg" alt="Scentrun UI" fill className="object-cover" />
                </div>
                <div className="text-left pr-1.5">
                  <span className="text-[10px] font-bold text-slate-800 block leading-tight">Scentrun</span>
                  <span className="text-[9px] text-emerald-600 font-semibold font-mono">&lt; 1.0s LCP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
