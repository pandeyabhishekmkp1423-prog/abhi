"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, Activity } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../projects/ProjectCard";
import { Button } from "../ui/Button";
import { SpotlightCard } from "../ui/SpotlightCard";
import { projects } from "@/data/projects";

export const SelectedProjects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

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
    <section id="work" className="py-24 lg:py-32 bg-slate-50/70 border-t border-[#E2E8F0] relative overflow-hidden bg-tech-dots">
      {/* Ambient Glowing Orbs behind Projects */}
      <div
        className="absolute top-1/4 -left-40 w-[650px] h-[650px] rounded-full bg-blue-500/18 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-40 w-[650px] h-[650px] rounded-full bg-cyan-400/15 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-blue-400/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            label="Featured Engineering"
            title="Production systems &amp; real digital products"
            description="Verified software platforms, enterprise management systems, and specialized storefronts engineered from requirement analysis through to production deployment."
            className="mb-0 sm:mb-0"
          />

          <div className="mt-6 md:mt-0 flex-shrink-0">
            <Button
              href="/work"
              variant="outline"
              size="md"
              className="bg-white/95 backdrop-blur-md border-slate-300 shadow-2xs hover:border-blue-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-all"
            >
              <span>View All 8 Case Studies</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* 1. Flagship Spotlight Bento Card with Glowing Gradient Aura */}
        <div className="relative mb-14 group">
          {/* Radiant Ambient Glow behind flagship card */}
          <div
            className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-blue-600/25 via-cyan-500/20 to-indigo-600/25 blur-xl opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none"
            aria-hidden="true"
          />

          <SpotlightCard
            curtainGradient="linear-gradient(135deg, rgba(37, 99, 235, 0.22), rgba(6, 182, 212, 0.25), rgba(124, 58, 237, 0.22))"
            borderGradient="linear-gradient(135deg, #2563EB, #06B6D4, #7C3AED)"
            radiusPercent={85}
            className="relative rounded-3xl border border-blue-200/90 bg-white/95 backdrop-blur-xl shadow-xl shadow-blue-900/10 overflow-hidden transition-all duration-300 group-hover:border-blue-400"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
              {/* Left Info Column */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-xs font-semibold uppercase tracking-wider border border-blue-200/80 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                      <Sparkles className="w-3.5 h-3.5" />
                      Flagship Spotlight
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 font-semibold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70">
                      <Activity className="w-3 h-3 animate-pulse" />
                      Live in Production
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#071327] tracking-tight">
                    {flagshipProject.title}
                  </h3>

                  <p className="mt-3 text-base text-[#475569] leading-relaxed">
                    {flagshipProject.description}
                  </p>

                  {/* Key Architecture Bullets */}
                  <div className="mt-6 space-y-2.5">
                    {flagshipProject.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {flagshipProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 shadow-2xs hover:border-blue-300 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-4">
                  <Button
                    href={`/work/${flagshipProject.slug}`}
                    variant="primary"
                    size="md"
                    className="shadow-[0_8px_25px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_12px_30px_-5px_rgba(37,99,235,0.65)] transition-all"
                  >
                    <span>Explore Case Study &amp; Architecture</span>
                    <ArrowUpRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <span className="text-xs text-[#64748B] font-mono">
                    Role: Full-Stack Architecture
                  </span>
                </div>
              </div>

              {/* Right Mockup Preview Column with Laser Scanline on Hover */}
              <div className="lg:col-span-6 relative">
                <div className="rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden bg-white group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all">
                  {/* Browser bar */}
                  <div className="px-4 py-2.5 bg-slate-50/95 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 px-3 py-0.5 rounded-full bg-white border border-slate-200/80 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>metawaves.com/dashboard</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                      Live UI
                    </span>
                  </div>
                  {/* High-res Image with Laser Scanline */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={flagshipProject.image}
                      alt="MetaWaves LMS Platform UI"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* Laser Scanline Beam on Hover */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-scanline" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`text-xs px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-[#071327] text-white shadow-[0_0_20px_rgba(7,19,39,0.35)] scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:border-blue-300 hover:text-[#2563EB] border border-slate-200/90 shadow-2xs"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 2. Bento Grid of Complementary Systems */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={index < 2}
            />
          ))}
        </div>

        {/* Note on Enterprise Deployments */}
        <div className="mt-14 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#64748B]">
          <p className="max-w-3xl leading-relaxed">
            <strong className="text-[#071327] font-semibold">Production Architecture Note:</strong> Internal enterprise systems (e.g. School ERP ledger reconciliation and CampusHub internal circulars) are deployed in private organizational environments. Complete relational models and system specifications are documented in each case study.
          </p>
          <Link
            href="/work"
            className="text-[#2563EB] font-bold hover:underline flex-shrink-0 flex items-center gap-1"
          >
            <span>Explore all 8 case studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
