"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { techStackData } from "@/data/techStack";
import {
  Check,
  ShieldCheck,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Sparkles,
  FileCode,
  Copy
} from "lucide-react";

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ts" | "sql" | "audit">("ts");
  const [copied, setCopied] = useState(false);

  const categoryIcons: Record<string, React.ReactNode> = {
    Frontend: <Terminal className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />,
    Backend: <Cpu className="w-4 h-4 text-violet-500 dark:text-violet-400" />,
    Databases: <Database className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />,
    "Platforms & Cloud": <Cloud className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />,
    "Tools & Workflow": <ShieldCheck className="w-4 h-4 text-amber-500 dark:text-amber-400" />
  };

  const codeSnippets = {
    ts: `// architecture.config.ts — Next.js 16 Production Topology
export const systemTopology = {
  runtime: "edge" as const,
  framework: "Next.js 16 (React 19 Concurrent)",
  optimization: {
    partialPrerendering: true,
    streamingSSR: true,
    bundleSplitting: "granular"
  },
  database: {
    engine: "PostgreSQL 16",
    pooling: { min: 4, max: 20, idleTimeoutMillis: 30000 },
    transactionIsolation: "SERIALIZABLE" // ACID Guaranteed
  },
  security: {
    csrfProtection: true,
    rateLimiter: { windowMs: 60000, maxRequests: 120 }
  }
};`,
    sql: `-- schema.sql — ACID Ledger Transaction Reconciliation
BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;

UPDATE student_fee_ledger
SET 
  reconciled_amount = reconciled_amount + $1,
  balance_due = total_assigned - (reconciled_amount + $1),
  last_payment_timestamp = NOW()
WHERE student_id = $2 AND academic_year = '2024-2025'
RETURNING receipt_id, balance_due;

INSERT INTO audit_payment_logs (receipt_id, operator_id, amount, status)
VALUES ($3, $4, $1, 'VERIFIED');

COMMIT;`,
    audit: `{
  "systemAudit": {
    "target": "MetaWaves LMS & Scentrun",
    "timestamp": "2026-09-18T12:00:00Z",
    "coreWebVitals": {
      "lcp": "0.78s (Good)",
      "fid": "12ms (Good)",
      "cls": 0.002
    },
    "typeSafety": "100% strict TypeScript (no any)",
    "securityHeaders": {
      "contentSecurityPolicy": "Enforced",
      "strictTransportSecurity": "max-age=63072000; includeSubDomains"
    },
    "overallHealth": "OPERATIONAL_A_PLUS"
  }
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="stack" className="py-20 lg:py-28 bg-white dark:bg-[#07090E] border-t border-slate-200/80 dark:border-white/10 relative overflow-hidden transition-colors">
      {/* Background radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(99,102,241,0.12),transparent_75%)] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>PRODUCTION TOOLCHAINS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curated ecosystems for resilient systems
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Modern full-stack frameworks, relational databases, and cloud infrastructure chosen for type safety, zero architectural bloat, and predictable operational uptime.
          </p>
        </div>

        {/* 5-Column Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-14">
          {techStackData.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-[#0E121B] shadow-sm hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3.5 pb-3 border-b border-slate-200/60 dark:border-white/10">
                  <div className="w-7 h-7 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-2xs">
                    {categoryIcons[category.title] || <Check className="w-3.5 h-3.5 text-indigo-500" />}
                  </div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-1.5 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Standards & Delivery Core */}
        <div className="rounded-2xl bg-neutral-50/60 dark:bg-[#0C1017] border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">
              Engineering Standards &amp; Practices
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-neutral-950 dark:text-white tracking-tight mb-3">
              How these technologies come together in production
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
              I avoid bloat and prioritize maintainable, deterministic engineering. Every stack selection is guided by practical requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-neutral-100">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span>Strict End-to-End Type Safety</span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Shared TypeScript interfaces between client components, route handlers, and database models prevent runtime surprises.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-neutral-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Relational Schema Normalization</span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                PostgreSQL and MySQL tables modeled with foreign keys, composite indexes, and ACID-isolated transactions for consistent business states.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-neutral-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Performance &amp; Minimal Bundles</span>
              </div>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Leveraging Next.js Server Components, streaming SSR, and asset optimization to deliver fast initial loads and fluid navigation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

