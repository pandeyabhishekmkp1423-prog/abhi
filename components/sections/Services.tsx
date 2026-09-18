import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../layout/Container";
import { ArrowDownRight, Layers, Database, ShoppingBag, Cloud, ShieldCheck, Zap } from "lucide-react";

export const Services: React.FC = () => {
  const capabilities = [
    {
      id: "web-apps",
      icon: <Layers className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
      title: "Enterprise Web Apps",
      badge: "Sub-100ms Latency",
      description: "High-performance React 19 & Next.js applications engineered with streaming SSR, reactive state management, and microsecond responsiveness.",
      features: ["Next.js App Router", "Server Actions & Streaming", "WCAG 2.1 AAA Accessibility"],
      href: "/#work"
    },
    {
      id: "business-systems",
      icon: <Database className="w-6 h-6 text-violet-500 dark:text-violet-400" />,
      title: "ERP & LMS Portals",
      badge: "Multi-Role RBAC",
      description: "Full-scale institutional suites managing multi-tier fee reconciliation, attendance logging, dynamic circulars, and comprehensive dashboards.",
      features: ["Granular Permission Systems", "ACID Financial Ledgers", "Automated Student Workflows"],
      href: "/#work"
    },
    {
      id: "ecommerce",
      icon: <ShoppingBag className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />,
      title: "Custom E-Commerce",
      badge: "Instant Filtering",
      description: "Tailored multi-currency retail storefronts with olfactory note taxonomy filters, client-server cart hydration, and seamless payment gateways.",
      features: ["Faceted URL Search Engine", "Razorpay / Stripe Gateways", "Cart State Synchronization"],
      href: "/#work"
    },
    {
      id: "cloud-apis",
      icon: <Cloud className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
      title: "Cloud & API Architecture",
      badge: "Zero-Downtime CD",
      description: "Resilient distributed backend systems, normalized PostgreSQL/MySQL schemas, secure REST endpoints, and automated deployment pipelines.",
      features: ["Strict Relational Normalization", "Docker & Edge Deployment", "Rate-Limiting & Security"],
      href: "/#work"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white dark:bg-[#07090E] relative overflow-hidden transition-colors border-t border-slate-200/80 dark:border-white/10">
      {/* Decorative ambient radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        {/* Centered Heading Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>CORE CAPABILITIES &amp; SYSTEMS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Engineered systems with <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-violet-300 dark:to-cyan-400 bg-clip-text text-transparent">
              dependable architecture.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Translating complex enterprise requirements into high-velocity digital experiences with rigorous type safety, relational normalization, and sub-second execution.
          </p>

          {/* Developer Bio Seal & Signature */}
          <div className="pt-2 flex flex-col items-center justify-center">
            <div className="relative w-56 sm:w-64 h-16 sm:h-20 hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/signature-transparent.png"
                alt="Signature of Abhishek Pandey"
                fill
                className="object-contain dark:invert dark:brightness-200 transition-all"
                priority
              />
            </div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500">
              Full-Stack Architect &amp; Engineering Lead
            </span>
          </div>
        </div>

        {/* 4 Feature Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative bg-slate-50/70 dark:bg-[#0E121B] rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Micro Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/20 group-hover:border-indigo-300 transition-all duration-300 shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/70 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Feature checklist */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-white/5">
                  {item.features.map((feat) => (
                    <li key={feat} className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-indigo-500" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Arrow Indicator */}
              <div className="mt-6 pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Explore stack
                </span>
                <div className="w-8 h-8 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white transition-all duration-300 group-hover:rotate-45 shadow-2xs">
                  <ArrowDownRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
