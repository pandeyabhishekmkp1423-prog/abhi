import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Container } from "../layout/Container";

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#FAF8FF] relative overflow-hidden">
      {/* Soft background ambient glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-violet-400/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-indigo-400/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Visual Mockup Cards (matching reference image) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[520px] h-[480px] sm:h-[540px]">
              {/* Decorative radial pulse behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-purple-400/15 to-indigo-500/10 rounded-3xl blur-2xl -z-10 transform scale-95" />

              {/* Main Prominent Card: ScentRun / AI Storefront */}
              <div className="absolute top-0 right-0 w-[78%] sm:w-[74%] h-[360px] sm:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/80 shadow-[0_20px_50px_rgba(139,92,246,0.18)] bg-white z-10 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/images/projects/scentrun.jpg"
                  alt="ScentRun E-Commerce Architecture"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/80 backdrop-blur-md text-[10px] font-semibold tracking-wider uppercase mb-1">
                    <Sparkles className="w-3 h-3 text-violet-200" />
                    Interactive Commerce
                  </div>
                  <h4 className="font-heading font-bold text-base sm:text-lg">ScentRun Fragrances</h4>
                  <p className="text-xs text-slate-200 line-clamp-1">Tailwind 4, Razorpay Gateway & sub-100ms filter engine</p>
                </div>
              </div>

              {/* Secondary Overlapping Card: MetaWaves Studio */}
              <div className="absolute bottom-0 left-0 w-[68%] sm:w-[65%] h-[260px] sm:h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/80 shadow-[0_25px_60px_rgba(79,70,229,0.22)] bg-slate-900 z-20 transition-transform duration-500 hover:scale-[1.03]">
                <Image
                  src="/images/projects/metawaves.jpg"
                  alt="MetaWaves Studio Platform"
                  fill
                  className="object-cover object-left-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/80 backdrop-blur-md text-[10px] font-semibold tracking-wider uppercase mb-1">
                    <Zap className="w-3 h-3 text-amber-300" />
                    Web3 & Media
                  </div>
                  <h4 className="font-heading font-bold text-sm sm:text-base">MetaWaves Studio</h4>
                  <p className="text-xs text-slate-300 line-clamp-1">Full-stack React & Next.js portal</p>
                </div>
              </div>

              {/* Floating Performance Pill 1 */}
              <div className="absolute top-8 left-2 sm:-left-4 z-30 bg-white/90 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-violet-100 shadow-[0_10px_25px_rgba(139,92,246,0.15)] flex items-center gap-2.5 animate-bounce-subtle">
                <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 leading-none">100% Type-Safe</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">TypeScript & Next.js</div>
                </div>
              </div>

              {/* Floating Performance Pill 2 */}
              <div className="absolute -bottom-3 right-4 sm:right-8 z-30 bg-white/90 backdrop-blur-xl px-4 py-2.5 rounded-2xl border border-indigo-100 shadow-[0_10px_25px_rgba(99,102,241,0.18)] flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-900 leading-none">99.98% Reliability</div>
                  <div className="text-[10px] text-emerald-600 font-medium mt-0.5">Zero Downtime CD</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Execution Guide (matching "How to generate AI images") */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 border border-violet-200/80 text-violet-700 text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
              Engineering Execution Process
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B0F19] tracking-tight leading-[1.15]">
              How we build <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                production systems
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl">
              From architectural blueprint to deployed microservices, our methodology eliminates guesswork and ensures enterprise-grade reliability at every phase of delivery.
            </p>

            {/* 3 Step List matching reference */}
            <div className="space-y-6 pt-2">
              {/* Step 1 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:border-violet-300 hover:shadow-md transition-all group">
                <div className="w-11 h-11 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 font-heading font-bold text-base shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  01
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0B0F19] group-hover:text-violet-600 transition-colors">
                    Architectural Blueprint &amp; Data Contracts
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Map schemas, authorization rules, and system dependencies before writing code. We define precise OpenAPI contracts and database models.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all group">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-heading font-bold text-base shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  02
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0B0F19] group-hover:text-indigo-600 transition-colors">
                    Iterative Full-Stack Construction
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Rapid modular implementation with Next.js App Router, Tailwind, Node.js microservices, and reactive caching with instant feedback loops.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:border-purple-300 hover:shadow-md transition-all group">
                <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-heading font-bold text-base shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  03
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#0B0F19] group-hover:text-purple-600 transition-colors">
                    Automated Verification &amp; Production Launch
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    End-to-end integration tests, load profiling, zero-downtime CI/CD deployment, and 24/7 observability with real-time error tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium text-sm shadow-[0_10px_25px_rgba(139,92,246,0.35)] hover:shadow-[0_12px_30px_rgba(139,92,246,0.45)] hover:scale-105 active:scale-95 transition-all"
              >
                <span>Initiate Your Build</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#work"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-violet-600 transition-colors py-2 px-3"
              >
                View Live Case Studies &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
