"use client";

import React from "react";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ConduitCard } from "../ui/ConduitCard";
import { processSteps } from "@/data/process";

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 lg:py-32 bg-slate-50/70 bg-tech-dots border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Background ambient light */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-blue-500/12 blur-3xl pointer-events-none -z-10 animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <SectionHeading
          label="Structured Execution"
          title="Predictable 7-step delivery pipeline"
          description="A systematic methodology designed to mitigate architectural risk, ensure full requirements alignment, and deploy production-ready systems without surprises."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <ConduitCard
              key={step.number}
              stepNumber={step.number}
              phaseLabel={`Phase ${idx + 1}`}
              className={idx === processSteps.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <h3 className="text-xl font-heading font-bold text-[#071327] mb-2.5">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm font-medium text-[#1E293B] mb-4 leading-relaxed">
                {step.description}
              </p>

              <div className="pt-4 border-t border-slate-100 mt-auto">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Execution Detail
                </span>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {step.details}
                </p>
              </div>
            </ConduitCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
