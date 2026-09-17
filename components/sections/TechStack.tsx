"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { TiltCard } from "../ui/TiltCard";
import { techStackData } from "@/data/techStack";
import {
  Check,
  ShieldCheck,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Sparkles,
  FileCode
} from "lucide-react";

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ts" | "sql" | "audit">("ts");

  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Terminal className="w-4 h-4 text-[#2563EB]" />,
    Backend: <Cpu className="w-4 h-4 text-[#2563EB]" />,
    Databases: <Database className="w-4 h-4 text-[#2563EB]" />,
    "Platforms & Cloud": <Cloud className="w-4 h-4 text-[#2563EB]" />,
    "Tools & Workflow": <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
  };

  return (
    <section id="stack" className="py-24 lg:py-32 bg-white bg-tech-grid border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Glowing Ambient Mesh */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(37,99,235,0.18),transparent_75%)] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <SectionHeading
          label="Technology Ecosystem"
          title="Tested toolchains for resilient production systems"
          description="A curated selection of modern frameworks, relational databases, and cloud platforms chosen for high developer velocity, type safety, and operational reliability."
        />

        {/* 5-Column Category Cards with Spotlight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {techStackData.map((category) => (
            <TiltCard
              key={category.title}
              maxTilt={9}
              className="p-5 rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-md shadow-2xs hover:border-blue-400 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.22)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.2)]">
                    {categoryIcons[category.title] || <Check className="w-4 h-4 text-[#2563EB]" />}
                  </div>
                  <h3 className="font-heading font-bold text-sm text-[#071327]">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="text-xs text-slate-700 flex items-center gap-1.5 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Interactive Production Architecture Terminal with Cyber Glass & Glowing Outline */}
        <div className="mt-14 rounded-2xl overflow-hidden bg-slate-950 border border-blue-500/40 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.35)] relative">
          {/* Terminal Titlebar with Interactive Tabs */}
          <div className="px-4 py-3 bg-slate-900/95 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/90" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
              </div>
              <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                production-architecture-console
              </span>
            </div>

            {/* Interactive File Tabs */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("ts")}
                className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded transition-all ${
                  activeTab === "ts"
                    ? "bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                <FileCode className="w-3 h-3" />
                <span>architecture.spec.ts</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("sql")}
                className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded transition-all ${
                  activeTab === "sql"
                    ? "bg-blue-600/30 text-blue-300 border border-blue-500/50 shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                <Database className="w-3 h-3" />
                <span>relational-schema.sql</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("audit")}
                className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded transition-all ${
                  activeTab === "audit"
                    ? "bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>lighthouse-audit.json</span>
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-7 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300 min-h-[190px]">
            {activeTab === "ts" && (
              <div>
                <p className="text-slate-500">&#47;&#47; End-to-end execution standards codified into every application</p>
                <p className="mt-2">
                  <span className="text-purple-400">export const</span> <span className="text-blue-300">systemArchitecture</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">frontend:</span> <span className="text-emerald-300">&quot;Next.js App Router (Turbopack) + TypeScript + Tailwind CSS&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">backendLogic:</span> <span className="text-emerald-300">&quot;Node.js REST API &amp; Laravel Transactional Controllers&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">database:</span> <span className="text-emerald-300">&quot;PostgreSQL / MySQL with Strict Foreign Keys &amp; Indexing&quot;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">performance:</span> &#123; <span className="text-amber-300">lcp:</span> <span className="text-blue-300">&quot;&lt; 1.0s&quot;</span>, <span className="text-amber-300">cls:</span> <span className="text-blue-300">0.0</span>, <span className="text-amber-300">seoAudit:</span> <span className="text-emerald-400">100</span> &#125;,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">security:</span> <span className="text-emerald-300">&quot;Sanitized inputs, honeypot defenses, parameterized queries&quot;</span>
                </p>
                <p>&#125;;</p>
              </div>
            )}

            {activeTab === "sql" && (
              <div>
                <p className="text-slate-500">&#47;&#47; ACID Relational Schema Design with strict constraints</p>
                <p className="mt-2">
                  <span className="text-blue-400">CREATE TABLE</span> <span className="text-amber-300">institutions</span> (
                </p>
                <p className="pl-4">
                  <span className="text-slate-300">id</span> <span className="text-purple-400">UUID PRIMARY KEY DEFAULT</span> gen_random_uuid(),
                </p>
                <p className="pl-4">
                  <span className="text-slate-300">code</span> <span className="text-purple-400">VARCHAR(64) UNIQUE NOT NULL</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-300">created_at</span> <span className="text-purple-400">TIMESTAMPTZ DEFAULT NOW()</span>
                </p>
                <p>);</p>
                <p className="mt-2">
                  <span className="text-blue-400">CREATE INDEX</span> <span className="text-slate-300">idx_inst_code</span> <span className="text-blue-400">ON</span> <span className="text-amber-300">institutions</span>(code);
                </p>
              </div>
            )}

            {activeTab === "audit" && (
              <div>
                <p className="text-slate-500">&#47;&#47; Verified Production Lighthouse &amp; CWV Benchmarks</p>
                <p className="mt-2 text-slate-300">&#123;</p>
                <p className="pl-4">
                  <span className="text-purple-400">&quot;performance&quot;</span>: <span className="text-emerald-400 font-bold">100</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">&quot;accessibility&quot;</span>: <span className="text-emerald-400 font-bold">100</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">&quot;bestPractices&quot;</span>: <span className="text-emerald-400 font-bold">100</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">&quot;seo&quot;</span>: <span className="text-emerald-400 font-bold">100</span>,
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">&quot;metrics&quot;</span>: &#123; <span className="text-amber-300">&quot;lcp&quot;</span>: <span className="text-emerald-300">&quot;0.8s&quot;</span>, <span className="text-amber-300">&quot;cls&quot;</span>: <span className="text-emerald-300">&quot;0.0&quot;</span>, <span className="text-amber-300">&quot;inp&quot;</span>: <span className="text-emerald-300">&quot;18ms&quot;</span> &#125;
                </p>
                <p className="text-slate-300">&#125;</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
