"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, ShieldCheck, Activity } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  return (
    <div className="group relative flex flex-col justify-between bg-white dark:bg-[#0E121B] rounded-2xl border border-slate-200/80 dark:border-white/10 overflow-hidden hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1">
      {/* Top subtle radiant gradient bar on hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

      {/* Visual Window Mockup Container */}
      <div className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200/70 dark:border-white/10">
        {/* Browser Chrome Header */}
        <div className="flex items-center justify-between px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border-b border-slate-200/80 dark:border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-rose-400 transition-colors" />
            <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-amber-400 transition-colors" />
            <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-emerald-400 transition-colors" />
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400 px-2.5 py-0.5 rounded-full bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 max-w-[190px] truncate shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{project.slug}.production/app</span>
          </div>

          {project.year ? (
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-semibold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5">
              {project.year}
            </span>
          ) : (
            <div className="w-6" />
          )}
        </div>

        {/* Screenshot Image with Smooth Hover Zoom */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/5 dark:bg-slate-950">
          <Image
            src={project.image}
            alt={`Production interface preview of ${project.title} - ${project.category}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            priority={featured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Badge & Live Tag */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-md border border-indigo-200/80 dark:border-indigo-500/30">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <Activity className="w-3 h-3 animate-pulse" />
              Verified
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            <Link
              href={`/work/${project.slug}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Key Feature Highlight */}
          {project.features && project.features.length > 0 && (
            <div className="mt-3.5 pt-3 border-t border-slate-100 dark:border-white/5">
              <span className="text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
                KEY CAPABILITY
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 flex-shrink-0" />
                <span className="truncate">{project.features[0]}</span>
              </p>
            </div>
          )}
        </div>

        {/* Tech Badges & Action Links */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-white/5">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono text-slate-400 self-center">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-1">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                Private Portal
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
