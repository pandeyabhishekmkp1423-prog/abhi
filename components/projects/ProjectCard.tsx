"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, ShieldCheck, Activity } from "lucide-react";
import { Project } from "@/types/project";
import { SpotlightCard } from "../ui/SpotlightCard";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const getCategoryTheme = (cat: string) => {
    if (cat.includes("E-Commerce")) {
      return {
        curtain: "linear-gradient(135deg, rgba(236, 72, 153, 0.22), rgba(139, 92, 246, 0.25), rgba(99, 102, 241, 0.2))",
        border: "linear-gradient(135deg, #EC4899, #8B5CF6, #6366F1)"
      };
    }
    if (cat.includes("ERP") || cat.includes("LMS") || cat.includes("Institutional")) {
      return {
        curtain: "linear-gradient(135deg, rgba(37, 99, 235, 0.22), rgba(16, 185, 129, 0.22), rgba(6, 182, 212, 0.2))",
        border: "linear-gradient(135deg, #2563EB, #10B981, #06B6D4)"
      };
    }
    if (cat.includes("Civic") || cat.includes("Rural")) {
      return {
        curtain: "linear-gradient(135deg, rgba(16, 185, 129, 0.22), rgba(245, 158, 11, 0.22), rgba(37, 99, 235, 0.18))",
        border: "linear-gradient(135deg, #10B981, #F59E0B, #2563EB)"
      };
    }
    return {
      curtain: "linear-gradient(135deg, rgba(6, 182, 212, 0.22), rgba(99, 102, 241, 0.25), rgba(37, 99, 235, 0.2))",
      border: "linear-gradient(135deg, #06B6D4, #6366F1, #2563EB)"
    };
  };

  const theme = getCategoryTheme(project.category);

  return (
    <SpotlightCard
      curtainGradient={theme.curtain}
      borderGradient={theme.border}
      radiusPercent={80}
      className="group relative flex flex-col justify-between bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 overflow-hidden hover:border-blue-400 hover:shadow-[0_22px_50px_-10px_rgba(37,99,235,0.24)] transition-all duration-300 transform hover:-translate-y-1.5"
    >
      {/* Top subtle radiant gradient bar on hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity z-20" />

      {/* Visual Window Mockup Container */}
      <div className="relative w-full overflow-hidden bg-slate-100/90 border-b border-slate-200/70">
        {/* Realistic Browser Chrome Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-50/95 border-b border-slate-200/80">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-red-400 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-emerald-400 transition-colors" />
          </div>

          <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 px-2.5 py-0.5 rounded-full bg-white border border-slate-200/80 max-w-[190px] truncate shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{project.slug}.production/app</span>
          </div>

          {project.year ? (
            <span className="text-[10px] font-mono text-slate-500 font-semibold px-1.5 py-0.5 rounded bg-slate-100">
              {project.year}
            </span>
          ) : (
            <div className="w-6" />
          )}
        </div>

        {/* Screenshot Image with Smooth Hover Zoom */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/5">
          <Image
            src={project.image}
            alt={`Production interface preview of ${project.title} - ${project.category}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
            priority={featured}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Badge with Subtle Glow */}
          <div className="flex items-center justify-between mb-3.5">
            <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded-md border border-blue-200/80 shadow-2xs group-hover:border-blue-300 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.2)] transition-all">
              {project.category}
            </span>
            <span className="text-[10px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
              <Activity className="w-3 h-3 animate-pulse" />
              Verified
            </span>
          </div>

          <h3 className="text-xl font-heading font-bold text-[#071327] group-hover:text-[#2563EB] transition-colors">
            <Link
              href={`/work/${project.slug}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-[#64748B] leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Key Feature Highlight */}
          {project.features && project.features.length > 0 && (
            <div className="mt-4 pt-3.5 border-t border-slate-100">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Core Capability
              </span>
              <p className="text-xs text-[#334155] flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB] flex-shrink-0" />
                <span className="truncate">{project.features[0]}</span>
              </p>
            </div>
          )}
        </div>

        {/* Tech Badges & Action Links */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100/90 text-slate-700 border border-slate-200/80 group-hover:border-blue-200 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] text-slate-400 self-center">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-1">
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] group-hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded transition-colors"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#64748B] hover:text-[#071327] transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-[11px] text-slate-400 font-mono">
                Private Portal
              </span>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
