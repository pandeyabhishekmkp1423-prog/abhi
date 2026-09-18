import React from "react";
import { Container } from "../layout/Container";
import { ContactForm } from "../contact/ContactForm";
import { Mail, Shield, Clock, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/50 dark:bg-[#07090E] border-t border-slate-200/80 dark:border-white/10 relative overflow-hidden transition-colors">
      {/* Background ambient light */}
      <div
        className="absolute top-1/3 right-10 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channel Context */}
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-500/30 px-3 py-1 rounded-full mb-4 inline-block">
              Get in Touch
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-neutral-950 dark:text-white tracking-tight leading-tight">
              Let&apos;s build something exceptional together
            </h2>

            <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
              Whether you need a full-stack web application, an enterprise portal, or an architectural consultation, I am open to discussing technical scope, timelines, and contract engagements.
            </p>

            <div className="space-y-3.5">
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0E121B] border border-slate-200/80 dark:border-white/10 flex items-start gap-3.5 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white block font-mono">
                    Prompt Technical Evaluation
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Direct scoping feedback, database suggestions, and milestone breakdowns within 24-48 business hours.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#0E121B] border border-slate-200/80 dark:border-white/10 flex items-start gap-3.5 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white block font-mono">
                    Full Intellectual Property &amp; Git Access
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Clean Git repositories, 100% typed TypeScript codebases, documented database schemas, and complete handoff.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-[#0E121B] border border-slate-200/80 dark:border-white/10 flex items-start gap-3.5 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white block font-mono">
                    End-to-End Production Delivery
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    From schema design in PostgreSQL/MySQL to production cloud deployment, SSL, and DNS configuration.
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="mt-8 p-4 rounded-2xl bg-white dark:bg-[#0E121B] border border-slate-200/80 dark:border-white/10 shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-0.5">
                  Direct Channel
                </span>
                <a
                  href="mailto:contact@abhishekpandey.dev"
                  className="text-xs sm:text-sm font-mono font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  contact@abhishekpandey.dev
                </a>
              </div>
              <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
