"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { CircuitCard } from "../ui/CircuitCard";
import {
  Database,
  ShieldCheck,
  Zap,
  ArrowRight,
  GitBranch,
  Terminal,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export const About: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const lifecycleStages = [
    {
      phase: "01",
      title: "Discovery & Operational Modeling",
      tag: "Specification",
      summary: "Translating ambiguous client requirements into clear entity-relationship diagrams and technical constraints.",
      deliverable: "Entity-Relationship Diagrams (ERD) & API Contract Blueprint"
    },
    {
      phase: "02",
      title: "Relational Schema Architecture",
      tag: "Data Integrity",
      summary: "Designing normalized PostgreSQL/MySQL schemas with strict foreign keys, indexing, and migration rollbacks.",
      deliverable: "ACID-compliant DDL scripts, index strategies, and seed factories"
    },
    {
      phase: "03",
      title: "Backend & Business Logic",
      tag: "Security",
      summary: "Developing authenticated endpoints with Node.js, Express, PHP, and Laravel with strict rate-limiting and validation.",
      deliverable: "Documented REST APIs with JWT auth, input sanitization, and transaction locks"
    },
    {
      phase: "04",
      title: "Frontend Engineering",
      tag: "User Experience",
      summary: "Crafting accessible, keyboard-navigable interfaces using Next.js App Router, React 19, and Tailwind CSS.",
      deliverable: "Turbopack-optimized UI components with sub-second LCP and zero layout shift"
    },
    {
      phase: "05",
      title: "API & Third-Party Integration",
      tag: "Connectivity",
      summary: "Connecting mission-critical services: Razorpay/Stripe webhooks, Twilio/Fast2SMS alerts, and email notifications.",
      deliverable: "Idempotent webhook handlers, automated retry queues, and audit logging"
    },
    {
      phase: "06",
      title: "Cloud Deployment & Hardening",
      tag: "Production",
      summary: "Shipping to hardened VPS/Vercel environments with SSL/TLS termination, automated backups, and uptime telemetry.",
      deliverable: "Production cloud runtime with CI/CD deployment pipelines and monitoring"
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-slate-50/70 border-t border-[#E2E8F0] relative overflow-hidden bg-tech-dots">
      {/* Radiant Ambient Glow Orbs */}
      <div
        className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <SectionHeading
          label="Professional Overview"
          title="Full-lifecycle engineering for mission-critical systems"
          description="Rather than functioning solely as an interface designer or backend programmer, I approach software engineering as an end-to-end discipline from initial database schema modeling to production deployment."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Architectural Pillars & Engineering Principles */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-[#071327] mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center text-sm shadow-[0_0_12px_rgba(37,99,235,0.25)]">
                  <Terminal className="w-4 h-4" />
                </span>
                The Engineering Philosophy
              </h3>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                My work spans enterprise educational management platforms (ERP/LMS), specialized commerce catalogs, and institutional portals. Every layer is built with deliberate technical discipline—prioritizing relational data integrity, clean API contracts, and sub-second client performance over ephemeral trends.
              </p>
            </div>

            {/* 4 Interactive Feature Pillars with Circuit Radar Scan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <CircuitCard className="p-5 rounded-xl shadow-2xs hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm text-[#071327]">Normalized Schemas</h4>
                <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                  PostgreSQL &amp; MySQL architectures with strict indexing, foreign keys, and zero data anomalies.
                </p>
              </CircuitCard>

              <CircuitCard className="p-5 rounded-xl shadow-2xs hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm text-[#071327]">Sub-Second Speed</h4>
                <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                  Next.js App Router with Turbopack, static site generation, and optimized Core Web Vitals.
                </p>
              </CircuitCard>

              <CircuitCard className="p-5 rounded-xl shadow-2xs hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm text-[#071327]">Production Hardening</h4>
                <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                  Honeypot form defense, CORS isolation, rate limiting, and parameterized query security.
                </p>
              </CircuitCard>

              <CircuitCard className="p-5 rounded-xl shadow-2xs hover:shadow-md">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-sm text-[#071327]">Maintainable Code</h4>
                <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                  Strict TypeScript interfaces, ESLint rules, structured commits, and modular components.
                </p>
              </CircuitCard>
            </div>

            <div className="pt-2">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8] group transition-colors"
              >
                <span>Review verified live systems &amp; architectures</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Lifecycle Progression */}
          <div className="lg:col-span-6 bg-white/95 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-blue-200/70 shadow-[0_15px_40px_-15px_rgba(37,99,235,0.15)] relative">
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB] block">
                  Delivery Framework
                </span>
                <h3 className="font-heading font-bold text-lg text-[#071327] mt-0.5">
                  6-Stage Production Pipeline
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-[#2563EB] border border-blue-200/80 shadow-2xs">
                Interactive Spec
              </span>
            </div>

            {/* Lifecycle Stages List */}
            <div className="space-y-3">
              {lifecycleStages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <div
                    key={stage.phase}
                    onClick={() => setActiveStage(idx)}
                    className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                      isActive
                        ? "bg-blue-50/70 border-blue-300 shadow-[0_0_20px_rgba(37,99,235,0.12)]"
                        : "bg-slate-50/50 border-slate-200/60 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all ${
                            isActive
                              ? "bg-[#2563EB] text-white shadow-[0_0_12px_rgba(37,99,235,0.5)]"
                              : "bg-white text-slate-600 border border-slate-200"
                          }`}
                        >
                          {stage.phase}
                        </span>
                        <div>
                          <h4 className="font-heading font-bold text-sm text-[#071327]">
                            {stage.title}
                          </h4>
                          <p className="text-xs text-[#64748B] mt-0.5">
                            {stage.summary}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 shrink-0 ml-2">
                        {stage.tag}
                      </span>
                    </div>

                    {/* Expandable Deliverable Box for Active Stage */}
                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-blue-200/60 flex items-start gap-2 text-xs text-[#071327] bg-white/80 p-2.5 rounded-lg font-mono">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-[#2563EB] block text-[11px] uppercase tracking-wider mb-0.5">
                            Standard Deliverable:
                          </span>
                          <span>{stage.deliverable}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
