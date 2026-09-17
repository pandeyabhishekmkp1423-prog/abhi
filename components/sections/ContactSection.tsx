import React from "react";
import { Container } from "../layout/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ContactForm } from "../contact/ContactForm";
import { SpotlightCard } from "../ui/SpotlightCard";
import { Mail, Shield, Clock, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50/70 bg-tech-dots border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Radiant Glowing Ambient Light */}
      <div
        className="absolute top-1/3 right-10 w-[600px] h-[600px] rounded-full bg-blue-500/12 blur-3xl pointer-events-none -z-10 animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-cyan-400/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Conversion Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#2563EB] text-xs font-semibold uppercase tracking-wider mb-5 border border-blue-200/80 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Engineering Channel</span>
            </div>

            <SectionHeading
              label="Direct Communication"
              title="Have a technical system or digital product to build?"
              description="Whether you need a custom web application, an enterprise management platform (ERP/CRM/LMS), or a specialized e-commerce storefront, let's discuss technical feasibility, timelines, and execution."
              className="mb-8"
            />

            <div className="space-y-4 pt-2">
              <SpotlightCard className="p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 flex items-start gap-3.5 shadow-2xs hover:border-blue-300">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.2)]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-sm text-[#071327] block">Prompt Technical Evaluation</span>
                  <span className="text-xs text-[#64748B] leading-relaxed">Direct scoping feedback, architectural suggestions, and timeline breakdown within 24-48 business hours.</span>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 flex items-start gap-3.5 shadow-2xs hover:border-blue-300">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(99,102,241,0.2)]">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-sm text-[#071327] block">Full Intellectual Property Ownership</span>
                  <span className="text-xs text-[#64748B] leading-relaxed">Clean Git repositories, typed codebases, documented database schemas, and complete asset handoff.</span>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 flex items-start gap-3.5 shadow-2xs hover:border-blue-300">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-sm text-[#071327] block">End-to-End Delivery</span>
                  <span className="text-xs text-[#64748B] leading-relaxed">From schema design in PostgreSQL/MySQL to production cloud deployment and DNS configuration.</span>
                </div>
              </SpotlightCard>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-white border border-blue-200/80 shadow-[0_0_25px_rgba(37,99,235,0.12)] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB] block mb-1">
                  Direct Inquiries
                </span>
                <a
                  href="mailto:contact@abhishekpandey.dev"
                  className="text-sm font-bold text-[#071327] hover:text-[#2563EB] transition-colors"
                >
                  contact@abhishekpandey.dev
                </a>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 text-[#2563EB] flex items-center justify-center shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Radiant Glow Outline behind form */}
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-400/15 to-indigo-500/20 blur-xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative rounded-2xl bg-white/95 backdrop-blur-xl border border-blue-200/90 shadow-xl shadow-blue-900/5 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                  <MessageSquare className="w-5 h-5 text-[#2563EB]" />
                  <h3 className="font-heading font-bold text-lg text-[#071327]">
                    Send Project Specifications
                  </h3>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
