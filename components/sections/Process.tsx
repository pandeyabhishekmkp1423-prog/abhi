"use client";

import React from "react";
import { Container } from "../layout/Container";
import { processSteps } from "@/data/process";
import { Compass, CheckCircle2, ArrowRight } from "lucide-react";

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-[#07090E] border-t border-slate-200/80 dark:border-white/10 relative overflow-hidden transition-colors">
      {/* Background ambient light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-indigo-500/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>EXECUTION METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Predictable 7-step delivery pipeline
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            A systematic engineering methodology designed to mitigate architectural risk, ensure requirements alignment, and deploy production-ready systems without drift.
          </p>
        </div>

        {/* 7-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className={`p-6 rounded-2xl bg-white dark:bg-[#0E121B] border border-slate-200/80 dark:border-white/10 shadow-sm hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all flex flex-col justify-between ${
                idx === processSteps.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/70 dark:border-indigo-500/30">
                    Phase {idx + 1}
                  </span>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    Step {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5 mt-auto">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                  Deliverable Artifact
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
