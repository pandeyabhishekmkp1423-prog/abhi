"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, ShieldCheck, Sparkles, Zap, CheckCircle2, Terminal } from "lucide-react";
import { Container } from "../layout/Container";

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Architecture & Schema Modeling",
      description: "Analyze business workflows, construct strict foreign key relationships, normalize SQL tables, and audit for zero financial or state discrepancies.",
      tag: "Relational Modeling"
    },
    {
      num: "02",
      title: "High-Throughput Full-Stack Core",
      description: "Develop server components, authenticated REST endpoints, role-based access gates (RBAC), and streaming SSR for sub-second page rendering.",
      tag: "Streaming SSR"
    },
    {
      num: "03",
      title: "Deterministic Validation & QA",
      description: "Rigorous end-to-end testing, responsive cross-device validation, WCAG 2.1 accessibility auditing, and Core Web Vitals profiling.",
      tag: "100% Type Safety"
    },
    {
      num: "04",
      title: "Zero-Downtime Cloud Deployment",
      description: "Automated Git CI/CD pipelines, SSL/TLS certificates, CDN edge configuration, and continuous uptime monitoring.",
      tag: "Production Delivery"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 dark:bg-[#07090E] relative overflow-hidden transition-colors border-t border-slate-200/80 dark:border-white/10">
      {/* Soft background ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Visual Mockup Cards */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[520px] h-[440px] sm:h-[480px]">
              {/* Radial pulse behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-violet-500/15 to-cyan-500/10 rounded-3xl blur-2xl -z-10 transform scale-95" />

              {/* Main Card: Scentrun Fragrances */}
              <div className="absolute top-0 right-0 w-[80%] sm:w-[76%] h-[320px] sm:h-[350px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-2xl bg-white dark:bg-slate-900 z-10 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/projects/scentrun.jpg"
                  alt="ScentRun E-Commerce Architecture"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/80 backdrop-blur-md text-[10px] font-mono font-semibold tracking-wider uppercase mb-1">
                    <Sparkles className="w-3 h-3 text-cyan-300" />
                    Interactive Commerce
                  </div>
                  <h4 className="font-heading font-bold text-sm sm:text-base">Scentrun Fragrances</h4>
                  <p className="text-xs text-slate-300 line-clamp-1">Faceted note taxonomy &amp; sub-100ms URL search engine</p>
                </div>
              </div>

              {/* Secondary Overlapping Card: MetaWaves LMS */}
              <div className="absolute bottom-0 left-0 w-[70%] sm:w-[66%] h-[240px] sm:h-[270px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-2xl bg-slate-900 z-20 transition-transform duration-500 hover:scale-[1.03]">
                <Image
                  src="/images/projects/metawaves.jpg"
                  alt="MetaWaves LMS Platform"
                  fill
                  className="object-cover object-left-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-violet-500/80 backdrop-blur-md text-[9px] font-mono font-semibold tracking-wider uppercase mb-1">
                    <Zap className="w-2.5 h-2.5 text-amber-300" />
                    Multi-Tenant EdTech
                  </div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm">MetaWaves LMS</h4>
                  <p className="text-[11px] text-slate-300 line-clamp-1">PostgreSQL normalized course progress tracker</p>
                </div>
              </div>

              {/* Floating Performance Badge 1 */}
              <div className="absolute top-6 left-0 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl px-3.5 py-2 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xl flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 dark:text-white leading-none">100% Type-Safe</div>
                  <div className="text-[9px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">TypeScript Strict</div>
                </div>
              </div>

              {/* Floating Performance Badge 2 */}
              <div className="absolute -bottom-2 right-4 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl px-3.5 py-2 rounded-2xl border border-slate-200/80 dark:border-white/10 shadow-xl flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 dark:text-white leading-none">99.98% Uptime</div>
                  <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">ACID Compliance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Execution Guide */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                SYSTEMS BLUEPRINT
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                How we build <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-violet-300 dark:to-cyan-400 bg-clip-text text-transparent">
                  production software.
                </span>
              </h2>

              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                A predictable engineering lifecycle designed to eliminate architectural drift, guarantee data integrity, and launch scalable systems without surprises.
              </p>
            </div>

            {/* Interactive Step Items */}
            <div className="space-y-3 pt-2">
              {steps.map((step, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white dark:bg-[#0E121B] border-indigo-500/50 shadow-lg shadow-indigo-500/5"
                        : "bg-white/40 dark:bg-white/5 border-slate-200/70 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-lg ${
                          isSelected
                            ? "bg-indigo-600 text-white"
                            : "bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400"
                        }`}>
                          {step.num}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {step.title}
                        </h4>
                      </div>

                      <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-semibold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 shrink-0">
                        {step.tag}
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-9">
                      {step.description}
                    </p>
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
