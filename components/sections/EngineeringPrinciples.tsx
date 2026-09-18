"use client";

import React from "react";
import { Container } from "../layout/Container";
import {
  Code2,
  Database,
  ShieldCheck,
  Zap,
  ArrowRight,
  Compass,
  CheckCircle2
} from "lucide-react";

export const EngineeringPrinciples: React.FC = () => {
  const principles = [
    {
      title: "Type Safety & Predictability",
      description:
        "End-to-end TypeScript interfaces across client forms, route handlers, and database queries. Catch errors at compile-time rather than in production.",
      icon: <Code2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
    },
    {
      title: "Relational Data Integrity",
      description:
        "Thoughtfully normalized schemas in PostgreSQL and MySQL. Strict foreign key constraints and transactional integrity prevent state desync.",
      icon: <Database className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
    },
    {
      title: "Performance by Default",
      description:
        "Utilizing Next.js 16 Server Components, streaming SSR, and edge caching to keep client JavaScript minimal and time-to-first-byte fast.",
      icon: <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" />
    },
    {
      title: "Interface Polish & Accessibility",
      description:
        "Semantic HTML5, WCAG 2.1 compliance, keyboard navigation, and subtle, tactile micro-interactions that make applications intuitive to use.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-500 dark:text-blue-400" />
    }
  ];

  const deliveryPhases = [
    {
      step: "01",
      name: "Discovery & Scope",
      summary: "Clarify user workflows, document edge cases, and define functional requirements."
    },
    {
      step: "02",
      name: "Architecture & Schema",
      summary: "Model normalized database tables, design API endpoints, and establish UI component hierarchy."
    },
    {
      step: "03",
      name: "Implementation & QA",
      summary: "Build full-stack features with strict types, responsive layouts, and cross-device testing."
    },
    {
      step: "04",
      name: "Production Launch",
      summary: "Deploy to cloud infrastructure (Vercel/Docker), verify SSL/DNS, and establish monitoring."
    }
  ];

  return (
    <section id="principles" className="py-20 lg:py-28 bg-neutral-50/50 dark:bg-[#07090E] border-t border-neutral-200/80 dark:border-neutral-800 transition-colors">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-500/30 px-3 py-1 rounded-full mb-3 inline-block">
            Engineering Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-neutral-950 dark:text-white tracking-tight">
            How I architect &amp; deliver software
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Software should be resilient, fast, and easy to maintain. These four engineering principles guide every line of code and architectural decision I make.
          </p>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-2xl bg-white dark:bg-[#0C1017] border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-neutral-950 dark:text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Pipeline Timeline */}
        <div className="rounded-2xl bg-white dark:bg-[#0C1017] border border-neutral-200/80 dark:border-neutral-800 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-200/80 dark:border-neutral-800">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                Execution Blueprint
              </span>
              <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                Four-phase delivery methodology
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
              Deterministic • Collaborative • Zero Surprises
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryPhases.map((phase) => (
              <div key={phase.step} className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                    Phase {phase.step}
                  </span>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {phase.name}
                  </h4>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {phase.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
