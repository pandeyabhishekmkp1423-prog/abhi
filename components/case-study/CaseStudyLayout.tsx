import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Layers, CheckCircle2, Shield, Wrench, Sparkles, Activity } from "lucide-react";
import { Project } from "@/types/project";
import { Container } from "../layout/Container";

interface CaseStudyLayoutProps {
  project: Project;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ project }) => {
  return (
    <article className="pt-24 pb-20 md:pt-32 md:pb-28 bg-white dark:bg-[#07090E] min-h-screen transition-colors">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/work" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Work
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-medium truncate">{project.title}</span>
        </nav>

        {/* Header Title & Tag */}
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3 h-3" />
              <span>{project.category}</span>
            </span>

            {project.year && (
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{project.year}</span>
              </span>
            )}

            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Verified Deployment</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Primary Metadata Strip */}
        <div className="mt-8 pt-6 pb-6 border-y border-slate-200/80 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono">
          <div>
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
              Role &amp; Focus
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
              Full-Stack Architecture
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
              Deliverable Category
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate block">
              {project.category}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
              Primary Stack
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate block">
              {project.technologies.slice(0, 3).join(", ")}
            </span>
          </div>

          <div>
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
              Deployment Environment
            </span>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <span>Live URL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                Enterprise Intranet
              </span>
            )}
          </div>
        </div>

        {/* Hero Visual Mockup Banner with Browser Frame */}
        <div className="mt-10 rounded-2xl border border-slate-200/80 dark:border-white/15 overflow-hidden bg-slate-950 shadow-2xl relative">
          <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 px-3 py-0.5 rounded-full bg-slate-800 border border-slate-700 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{project.slug}.production/preview</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
              System UI
            </span>
          </div>

          <div className="relative aspect-[16/9] w-full max-h-[540px]">
            <Image
              src={project.image}
              alt={`Interface showcase of ${project.title}`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Deep Dive Content Structure */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Case Study Body */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Challenge */}
            {project.caseStudy && (
              <section aria-labelledby="challenge-heading">
                <h2
                  id="challenge-heading"
                  className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white mb-3.5 flex items-center gap-2"
                >
                  <Shield className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                  <span>The Challenge &amp; Architectural Constraints</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.caseStudy.challenge}
                </p>
              </section>
            )}

            {/* 2. Engineering Approach */}
            {project.caseStudy && (
              <section aria-labelledby="approach-heading">
                <h2
                  id="approach-heading"
                  className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white mb-3.5 flex items-center gap-2"
                >
                  <Layers className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                  <span>Engineering Approach &amp; Architecture</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.caseStudy.approach}
                </p>
              </section>
            )}

            {/* 3. Key Functional Features */}
            <section aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white mb-5 flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                <span>Key Features &amp; System Capabilities</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-[#0E121B] flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Development Flow */}
            {project.caseStudy?.process && (
              <section aria-labelledby="process-heading">
                <h2
                  id="process-heading"
                  className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white mb-3.5 flex items-center gap-2"
                >
                  <Wrench className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                  <span>Development &amp; Delivery Flow</span>
                </h2>
                <div className="p-5 rounded-2xl border border-indigo-200/60 dark:border-indigo-500/30 bg-indigo-50/40 dark:bg-indigo-950/20 text-xs sm:text-sm text-indigo-900 dark:text-indigo-300 leading-relaxed font-mono">
                  {project.caseStudy.process}
                </div>
              </section>
            )}

            {/* 5. Verified Outcome */}
            {project.caseStudy?.outcome && (
              <section aria-labelledby="outcome-heading" className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-50/40 dark:bg-emerald-950/20">
                <h2
                  id="outcome-heading"
                  className="text-base sm:text-lg font-heading font-bold text-emerald-700 dark:text-emerald-400 mb-2 flex items-center gap-2"
                >
                  <Activity className="w-4 h-4" />
                  <span>Verified Production Outcome</span>
                </h2>
                <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed font-mono">
                  {project.caseStudy.outcome}
                </p>
              </section>
            )}
          </div>

          {/* Sidebar Column: Tech Stack & Actions */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-[#0E121B]">
              <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200/80 dark:border-white/10 space-y-2.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-indigo-500/25 transition-all"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <Link
                  href="/#contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10 transition-all"
                >
                  <span>Discuss Similar System</span>
                </Link>
              </div>
            </div>

            {/* Back to Work Link */}
            <div className="pt-2">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to project directory</span>
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
};
