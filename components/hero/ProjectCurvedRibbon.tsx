"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

export const ProjectCurvedRibbon: React.FC = () => {
  // Take 6 flagship projects to showcase across the ribbon
  const showcaseProjects = projects.slice(0, 6);

  return (
    <div className="w-full py-8 md:py-14 overflow-hidden relative" aria-label="Selected Production Projects Ribbon">
      {/* Subtle ambient light behind ribbon */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-indigo-500/10 dark:bg-indigo-500/15 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Verified Production Deployments
            </span>
          </div>
          <Link
            href="/work"
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
          >
            <span>View all 8 case studies</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Perspective Gallery Container with no scrollbar */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar perspective-ribbon">
          {showcaseProjects.map((project, index) => {
            const tiltClasses = [
              "rotate-[-2.5deg] hover:rotate-0 translate-y-1 sm:translate-y-2",
              "rotate-[-1deg] hover:rotate-0 -translate-y-0.5",
              "rotate-0 scale-105 shadow-xl -translate-y-2 z-10",
              "rotate-[1deg] hover:rotate-0 -translate-y-0.5",
              "rotate-[2.5deg] hover:rotate-0 translate-y-1 sm:translate-y-2",
              "rotate-[1deg] hover:rotate-0"
            ];

            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group relative flex-shrink-0 w-52 sm:w-64 md:w-72 aspect-[16/11] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 dark:border-white/10 shadow-lg shadow-indigo-900/5 dark:shadow-black/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:z-20 ${
                  tiltClasses[index] || ""
                }`}
              >
                {/* Browser Chrome Mini Header */}
                <div className="absolute top-0 inset-x-0 h-6 bg-slate-900/90 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-2.5 z-20">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-400 truncate max-w-[120px]">
                    {project.slug}.app
                  </span>
                  <span className="text-[8px] font-mono text-emerald-400 font-semibold px-1 py-0.2 rounded bg-emerald-500/10">
                    LIVE
                  </span>
                </div>

                {/* Project Image Preview */}
                <div className="relative w-full h-full pt-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 210px, 290px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                </div>

                {/* Bottom Content with High-Contrast Typography */}
                <div className="absolute bottom-2.5 left-3 right-3 z-20 text-white">
                  <span className="text-[9px] uppercase font-mono tracking-wider font-semibold text-cyan-300 block mb-0.5 truncate">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-heading font-bold truncate">
                      {project.title}
                    </h4>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
