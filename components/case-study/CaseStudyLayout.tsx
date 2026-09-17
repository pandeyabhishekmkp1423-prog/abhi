import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Layers, CheckCircle2, Shield, Wrench } from "lucide-react";
import { Project } from "@/types/project";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

interface CaseStudyLayoutProps {
  project: Project;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ project }) => {
  return (
    <article className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white min-h-screen">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[#64748B]">
          <Link href="/" className="hover:text-[#2563EB] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/work" className="hover:text-[#2563EB] transition-colors">
            Work
          </Link>
          <span>/</span>
          <span className="text-[#071327] font-medium truncate">{project.title}</span>
        </nav>

        {/* Header Header & Title */}
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="blue" className="text-xs font-semibold uppercase tracking-wider">
              {project.category}
            </Badge>
            {project.year && (
              <span className="text-xs font-mono text-[#64748B] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{project.year}</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#071327] font-heading leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#475569] leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Primary Metadata Strip */}
        <div className="mt-8 pt-6 pb-6 border-y border-[#E2E8F0] grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Role &amp; Focus
            </span>
            <span className="text-sm font-medium text-[#071327]">Full-Stack Architecture</span>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Deliverable
            </span>
            <span className="text-sm font-medium text-[#071327]">{project.category}</span>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Primary Stack
            </span>
            <span className="text-sm font-medium text-[#071327] truncate block">
              {project.technologies.slice(0, 3).join(", ")}
            </span>
          </div>

          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Deployment Status
            </span>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:underline"
              >
                <span>Live URL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-sm font-medium text-slate-600">
                Enterprise / Intranet
              </span>
            )}
          </div>
        </div>

        {/* Hero Visual Banner */}
        <div className="mt-10 rounded-2xl border border-[#E2E8F0] overflow-hidden bg-slate-50 relative aspect-[16/9] w-full max-h-[520px]">
          <Image
            src={project.image}
            alt={`Interface showcase of ${project.title}`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-top"
          />
        </div>

        {/* Deep Dive Content Structure */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Case Study Body */}
          <div className="lg:col-span-8 space-y-12">
            {/* 1. Challenge / Requirement */}
            {project.caseStudy && (
              <section aria-labelledby="challenge-heading">
                <h2
                  id="challenge-heading"
                  className="text-xl sm:text-2xl font-heading font-bold text-[#071327] mb-4 flex items-center gap-2"
                >
                  <Shield className="w-5 h-5 text-[#2563EB]" />
                  <span>The Challenge &amp; Requirements</span>
                </h2>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  {project.caseStudy.challenge}
                </p>
              </section>
            )}

            {/* 2. Engineering Approach */}
            {project.caseStudy && (
              <section aria-labelledby="approach-heading">
                <h2
                  id="approach-heading"
                  className="text-xl sm:text-2xl font-heading font-bold text-[#071327] mb-4 flex items-center gap-2"
                >
                  <Layers className="w-5 h-5 text-[#2563EB]" />
                  <span>Engineering Approach &amp; Architecture</span>
                </h2>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  {project.caseStudy.approach}
                </p>
              </section>
            )}

            {/* 3. Key Functional Features */}
            <section aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="text-xl sm:text-2xl font-heading font-bold text-[#071327] mb-5 flex items-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                <span>Key Features &amp; System Capabilities</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="p-4 rounded-xl border border-[#E2E8F0] bg-slate-50/50 flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#2563EB] mt-2 flex-shrink-0" />
                    <span className="text-sm text-[#334155] leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Development Process */}
            {project.caseStudy?.process && (
              <section aria-labelledby="process-heading">
                <h2
                  id="process-heading"
                  className="text-xl sm:text-2xl font-heading font-bold text-[#071327] mb-4 flex items-center gap-2"
                >
                  <Wrench className="w-5 h-5 text-[#2563EB]" />
                  <span>Development &amp; Delivery Flow</span>
                </h2>
                <div className="p-5 rounded-xl border border-blue-100 bg-[#EFF6FF]/40 text-sm text-[#1E3A8A] leading-relaxed font-mono">
                  {project.caseStudy.process}
                </div>
              </section>
            )}

            {/* 5. Verified Outcome (Only if real) */}
            {project.caseStudy?.outcome && (
              <section aria-labelledby="outcome-heading" className="p-6 rounded-xl border border-emerald-200 bg-emerald-50/40">
                <h2
                  id="outcome-heading"
                  className="text-lg font-heading font-bold text-[#065F46] mb-2"
                >
                  Verified Production Outcome
                </h2>
                <p className="text-sm text-[#064E3B] leading-relaxed">
                  {project.caseStudy.outcome}
                </p>
              </section>
            )}
          </div>

          {/* Sidebar Column: Tech Spec & Quick Links */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <h3 className="font-heading font-bold text-base text-[#071327] mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs bg-white">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4 ml-1.5" />
                  </Button>
                )}

                <Button
                  href="/#contact"
                  variant={project.liveUrl ? "outline" : "primary"}
                  size="md"
                  className="w-full justify-center"
                >
                  <span>Discuss Similar Project</span>
                </Button>
              </div>
            </div>

            {/* Back to Work Link */}
            <div className="pt-2">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#64748B] hover:text-[#2563EB] transition-colors"
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
