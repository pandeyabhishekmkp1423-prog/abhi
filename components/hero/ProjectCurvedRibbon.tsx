"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const ProjectCurvedRibbon: React.FC = () => {
  // Take first 5 flagship projects to match the reference banner exactly
  const showcaseProjects = projects.slice(0, 5);

  return (
    <div className="w-full py-6 md:py-10 overflow-hidden relative" aria-label="Selected Production Projects Ribbon">
      {/* Subtle curved perspective container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-4 sm:gap-6 overflow-x-auto pb-4 no-scrollbar perspective-ribbon">
          {showcaseProjects.map((project, index) => {
            // Give subtle progressive tilt to mimic the reference image arc
            const tiltClasses = [
              "rotate-[-3deg] hover:rotate-0 translate-y-1 sm:translate-y-2",
              "rotate-[-1.5deg] hover:rotate-0 -translate-y-1",
              "rotate-0 scale-105 shadow-xl -translate-y-3 z-10",
              "rotate-[1.5deg] hover:rotate-0 -translate-y-1",
              "rotate-[3deg] hover:rotate-0 translate-y-1 sm:translate-y-2"
            ];

            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group relative flex-shrink-0 w-44 sm:w-56 md:w-64 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-lg shadow-purple-900/5 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-600/25 hover:z-20 ${
                  tiltClasses[index] || ""
                }`}
              >
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 180px, 260px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Ambient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Bottom title & category label */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-cyan-300 block mb-0.5">
                    {project.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-heading font-bold truncate">
                    {project.title}
                  </h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
