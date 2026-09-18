"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, Activity, Database, Server, Zap } from "lucide-react";
import { Container } from "../layout/Container";
import { ProjectCard } from "../projects/ProjectCard";
import { projects } from "@/data/projects";

export const SelectedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [flagshipTab, setFlagshipTab] = useState<"overview" | "schema" | "impact">("overview");

  const flagshipProject = projects[0]; // MetaWaves LMS
  const otherProjects = projects.slice(1);

  const filterTabs = [
    { label: "All Systems", key: "All" },
    { label: "ERP & LMS Platforms", key: "ERP" },
    { label: "E-Commerce", key: "Commerce" },
    { label: "Digital Services & Civic", key: "Digital" }
  ];

  const filteredProjects = otherProjects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "ERP") {
      return p.category.includes("ERP") || p.category.includes("LMS") || p.category.includes("Institutional");
    }
    if (activeFilter === "Commerce") {
      return p.category.includes("E-Commerce");
    }
    if (activeFilter === "Digital") {
      return (
        p.category.includes("IT Solutions") ||
        p.category.includes("Civic Tech") ||
        p.category.includes("Rural") ||
        p.category.includes("Portfolio")
      );
    }
    return true;
  });

  return (
    <section id="work" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-[#07090E] border-t border-slate-200/80 dark:border-white/10 relative overflow-hidden transition-colors">
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 -left-40 w-[650px] h-[650px] rounded-full bg-indigo-500/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-40 w-[650px] h-[650px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED PRODUCTION SOFTWARE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
              Verified systems &amp; real digital products
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Software platforms, enterprise management portals, and retail storefronts engineered from schema normalization through to production cloud deployment.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex-shrink-0">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-white transition-all shadow-2xs"
            >
              <span>View All 8 Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 1. Flagship Spotlight Bento Card */}
        <div className="relative mb-14 group">
          <div
            className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-cyan-500/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative rounded-3xl border border-slate-200/90 dark:border-white/15 bg-white dark:bg-[#0E121B] shadow-2xl overflow-hidden transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
              
              {/* Left Info Column */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider border border-indigo-200/80 dark:border-indigo-500/30">
                      <Sparkles className="w-3 h-3" />
                      FLAGSHIP SPOTLIGHT
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <Activity className="w-3 h-3 animate-pulse" />
                      Live in Production
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
                    {flagshipProject.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {flagshipProject.description}
                  </p>

                  {/* Interactive Flagship Tabs */}
                  <div className="mt-5 flex items-center gap-2 border-b border-neutral-200/80 dark:border-neutral-800 pb-2">
                    {[
                      { key: "overview", label: "Core Features" },
                      { key: "schema", label: "Relational Schema" },
                      { key: "impact", label: "System Highlights" }
                    ].map((tab) => (
                      <button
                        key={tab.key}
                        type="button"
                        onClick={() => setFlagshipTab(tab.key as any)}
                        className={`text-xs font-mono px-2.5 py-1 rounded-lg transition-colors ${
                          flagshipTab === tab.key
                            ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold"
                            : "text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Tab Content */}
                  <div className="mt-4 min-h-[90px]">
                    {flagshipTab === "overview" && (
                      <div className="space-y-2">
                        {flagshipProject.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                            <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {flagshipTab === "schema" && (
                      <div className="p-3 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-[11px] leading-relaxed border border-neutral-800">
                        <span className="text-indigo-400 font-bold">Relational Schema Architecture:</span>
                        <div className="text-neutral-400 mt-1">
                          • <span className="text-neutral-300">courses</span> (id, title, slug, module_order, published)<br />
                          • <span className="text-neutral-300">lessons</span> (id, course_id, duration_sec, content_url)<br />
                          • <span className="text-neutral-300">progress_ledger</span> (user_id, lesson_id, completion_pct)
                        </div>
                      </div>
                    )}

                    {flagshipTab === "impact" && (
                      <div className="space-y-2">
                        <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Multi-role access hierarchy distinguishing students, instructors, and platform administrators.</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>Optimized relational queries ensuring immediate module navigation and progress sync.</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {flagshipProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="mt-8 pt-5 border-t border-neutral-200/80 dark:border-neutral-800 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/work/${flagshipProject.slug}`}
                    className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 text-xs sm:text-sm font-semibold shadow-sm flex items-center gap-2 transition-colors"
                  >
                    <span>Read Architecture Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                    Full-Stack Case Study
                  </span>
                </div>
              </div>

              {/* Right Mockup Preview Column */}
              <div className="lg:col-span-6 relative">
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden bg-neutral-950 transition-all">
                  {/* Browser Chrome Bar */}
                  <div className="px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 px-3 py-0.5 rounded-full bg-neutral-800/80 border border-neutral-700/60 shadow-2xs">
                      <span>metawaves.com</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-medium">
                      Production
                    </span>
                  </div>

                  {/* Screenshot */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={flagshipProject.image}
                      alt="MetaWaves LMS Platform UI"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`text-xs px-4 py-2 rounded-full font-semibold font-mono transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-105"
                    : "bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white border border-slate-200/80 dark:border-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Bento Grid of Verified Systems */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={index < 2}
            />
          ))}
        </div>

        {/* Enterprise Architecture Deployment Note */}
        <div className="mt-12 p-5 rounded-2xl bg-white dark:bg-[#0E121B] border border-slate-200/80 dark:border-white/10 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <p className="max-w-3xl leading-relaxed">
            <strong className="text-slate-900 dark:text-white font-semibold">Production Architecture Note:</strong> Private institutional platforms (e.g. School ERP ledger reconciliation and CampusHub internal circulars) are deployed in restricted organizational intranet environments. Complete relational models and system specifications are documented in each case study.
          </p>
          <Link
            href="/work"
            className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex-shrink-0 flex items-center gap-1"
          >
            <span>Explore all 8 case studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
