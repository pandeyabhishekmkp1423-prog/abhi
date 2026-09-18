"use client";

import React, { useState } from "react";
import {
  Layers,
  Shield,
  Server,
  Database,
  ArrowRight,
  Code2,
  CheckCircle2
} from "lucide-react";

interface Layer {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
  technologies: string[];
  description: string;
  highlights: string[];
}

export const HeroArchitectureVisualizer: React.FC = () => {
  const [activeLayerId, setActiveLayerId] = useState<string>("db");

  const layers: Layer[] = [
    {
      id: "client",
      name: "Interface & Client",
      subtitle: "Presentation & Edge Delivery",
      badge: "Next.js 16 • React 19",
      icon: <Layers className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />,
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
      description:
        "Component-driven frontend engineered with responsive layouts, accessible semantic HTML, and fluid micro-interactions.",
      highlights: [
        "Streaming Server Components",
        "Responsive, mobile-first design",
        "Accessible WCAG standards"
      ]
    },
    {
      id: "auth",
      name: "Middleware & Auth",
      subtitle: "Security & Request Gating",
      badge: "JWT • Next.js Middleware",
      icon: <Shield className="w-4 h-4 text-violet-500 dark:text-violet-400" />,
      technologies: ["JWT / Sessions", "Route Handlers", "CORS & Rate Limiting"],
      description:
        "Edge middleware validating sessions, enforcing multi-tenant role-based access control (RBAC), and sanitizing inputs.",
      highlights: [
        "Multi-role access (Admin/Staff/User)",
        "Secure HTTP-only cookies",
        "Zero-trust route verification"
      ]
    },
    {
      id: "engine",
      name: "Application Core",
      subtitle: "Business Logic & APIs",
      badge: "Node.js • Server Actions",
      icon: <Server className="w-4 h-4 text-blue-500 dark:text-blue-400" />,
      technologies: ["Server Actions", "REST APIs", "Prisma Client", "Validation"],
      description:
        "Type-safe application layer coordinating business workflows, data mutations, and transactional integrity.",
      highlights: [
        "End-to-end TypeScript types",
        "Zod runtime validation",
        "Atomic transaction management"
      ]
    },
    {
      id: "db",
      name: "Data & Persistence",
      subtitle: "Relational Ledger Store",
      badge: "PostgreSQL • MySQL",
      icon: <Database className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />,
      technologies: ["PostgreSQL", "MySQL", "Prisma ORM", "ACID Compliance"],
      description:
        "Strict relational database schemas designed with foreign keys, indexes, and audited ledgers for financial consistency.",
      highlights: [
        "Normalized 3NF relational models",
        "Audit logs for critical state changes",
        "Optimized query indexes"
      ]
    }
  ];

  const activeLayer = layers.find((l) => l.id === activeLayerId) || layers[3];

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl bg-white dark:bg-[#0C1017] border border-neutral-200 dark:border-neutral-800 shadow-xl overflow-hidden transition-colors">
      {/* Top Header */}
      <div className="px-5 py-3.5 border-b border-neutral-200/80 dark:border-neutral-800 flex items-center justify-between bg-neutral-50/50 dark:bg-[#0E131C]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span className="text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300">
            System Architecture Stack
          </span>
        </div>
        <span className="text-[11px] font-mono text-neutral-600 dark:text-neutral-300 bg-neutral-200/60 dark:bg-neutral-800 px-2 py-0.5 rounded">
          Interactive Explorer
        </span>
      </div>

      <div className="p-5">
        {/* Layer Selector Stack */}
        <div className="space-y-2 mb-4">
          {layers.map((layer) => {
            const isSelected = layer.id === activeLayerId;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveLayerId(layer.id)}
                className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                  isSelected
                    ? "bg-indigo-50/70 dark:bg-indigo-950/30 border-indigo-300 dark:border-indigo-500/40 shadow-xs"
                    : "bg-neutral-50/50 dark:bg-neutral-900/40 border-neutral-200/70 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/60"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400"
                        : "bg-neutral-200/60 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    {layer.icon}
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-bold text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                      <span>{layer.name}</span>
                      {isSelected && (
                        <span className="text-[10px] font-mono font-normal px-1.5 py-0.2 rounded bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                          Active
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">
                      {layer.subtitle}
                    </div>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-neutral-600 dark:text-neutral-300 bg-neutral-200/50 dark:bg-neutral-800/80 px-2 py-0.5 rounded shrink-0 hidden sm:inline-block">
                  {layer.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Details Card */}
        <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-0.5">
                Layer Architecture
              </span>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {activeLayer.name}
              </h4>
            </div>
            <span className="text-[11px] font-mono text-neutral-600 dark:text-neutral-300 bg-white dark:bg-neutral-800 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700 shrink-0">
              {activeLayer.badge}
            </span>
          </div>

          <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
            {activeLayer.description}
          </p>

          <div className="space-y-1.5 pt-2 border-t border-neutral-200/70 dark:border-neutral-800">
            {activeLayer.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

