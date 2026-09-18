"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUp, Activity, Terminal } from "lucide-react";
import { Container } from "./Container";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-[#07090E] border-t border-slate-200/80 dark:border-white/10 py-12 lg:py-16 text-slate-500 dark:text-slate-400 transition-colors">
      <Container>
        {/* Status and Information Strip */}
        <div className="mb-10 p-4 rounded-xl bg-neutral-50 dark:bg-[#0C1017] border border-neutral-200/80 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for select projects</span>
            </span>
            <span className="text-neutral-300 dark:text-neutral-700">|</span>
            <span className="text-neutral-600 dark:text-neutral-400">
              Lucknow, India (UTC+5:30)
            </span>
          </div>

          <div className="flex items-center gap-3 text-neutral-500 dark:text-neutral-400">
            <span>Local Time: {time || "00:00:00"}</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b border-slate-200/80 dark:border-white/10">
          {/* Identity & Signature */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-block group transition-transform hover:scale-105"
            >
              <div className="relative w-48 sm:w-56 h-12 sm:h-14">
                <Image
                  src="/images/signature-transparent.png"
                  alt="Abhishek Pandey"
                  fill
                  className="object-contain object-left dark:invert dark:brightness-200 transition-all"
                />
              </div>
            </Link>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Full-Stack Architect &amp; Digital Product Builder. Designing and engineering production-grade web systems, business platforms, and relational architectures.
            </p>
          </div>

          {/* Social Links & Direct Mail */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <a
              href="mailto:contact@abhishekpandey.dev"
              className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-1.5 px-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-400 transition-all"
              aria-label="Send email"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-500" />
              <span>contact@abhishekpandey.dev</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-400 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-400 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-500 dark:text-slate-500">
            &copy; {currentYear} Abhishek Pandey. All rights reserved. Crafted with surgical precision.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-500 hover:text-indigo-600 dark:hover:text-white transition-colors"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
