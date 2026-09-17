"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Search,
  LayoutGrid,
  Code2
} from "lucide-react";

interface NavItem {
  label: string;
  id: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", id: "hero", href: "/#hero" },
  { label: "Capabilities", id: "services", href: "/#services" },
  { label: "Portfolio", id: "work", href: "/#work" },
  { label: "Tech Stack", id: "stack", href: "/#stack" },
  { label: "Process", id: "process", href: "/#process" },
  { label: "Contact", id: "contact", href: "/#contact" }
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate overall page scroll progress from 0% to 100%
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(Math.max(window.scrollY / docHeight, 0), 1);
        setScrollProgress(progress);
      }

      // 2. Track currently visible section for navigation highlighting
      const sectionIds = ["hero", "services", "work", "stack", "process", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          if (scrollPos >= el.offsetTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const getHref = (href: string) => {
    if (pathname === "/") {
      return href.replace("/", "");
    }
    return href;
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between">
        
        {/* Brand Logo: Clean signature with proportional navbar scale */}
        <Link
          href="/"
          className="group flex items-center transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-lg py-1 px-1 shrink-0"
          aria-label="Abhishek Pandey Portfolio Home"
        >
          <div className="relative h-10 sm:h-11 w-44 sm:w-52 flex items-center">
            <Image
              src="/images/signature-transparent.png"
              alt="Abhishek Pandey Signature"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Center Navigation: Open horizontal layout, no grey bubble, no text wrapping */}
        <nav
          className="hidden lg:flex items-center gap-7 xl:gap-8"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.label}
                href={getHref(item.href)}
                className={`whitespace-nowrap text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? "text-violet-600 font-semibold"
                    : "text-slate-600 hover:text-violet-600"
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Search, Stack status, Inquiries, Clean Violet CTA button, App switcher */}
        <div className="hidden md:flex items-center gap-3 sm:gap-4">
          {/* Quick Search trigger */}
          <button
            type="button"
            onClick={() => {
              const input = document.querySelector('input[type="text"]') as HTMLInputElement;
              input?.focus();
            }}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-violet-600 hover:bg-violet-50 transition-colors"
            aria-label="Search site"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Quick Stack / Terminal trigger */}
          <Link
            href={getHref("/#stack")}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-violet-600 hover:bg-violet-50 transition-colors relative"
            aria-label="Active tech stack"
          >
            <Code2 className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
          </Link>

          {/* Inquiries text link */}
          <Link
            href={getHref("/#contact")}
            className="text-xs sm:text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors px-1"
          >
            Inquiries
          </Link>

          {/* Clean, Sharp Violet CTA Button matching reference 'Join AI' */}
          <Link
            href={getHref("/#contact")}
            className="btn-glow px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow-md hover:shadow-violet-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Start a Project
          </Link>

          {/* 4-dot Grid App Icon */}
          <Link
            href={getHref("/#work")}
            className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:text-violet-600 hover:border-violet-300 hover:bg-violet-50/50 transition-all"
            aria-label="View all apps"
          >
            <LayoutGrid className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href={getHref("/#contact")}
            className="px-3.5 py-1.5 rounded-full bg-violet-600 text-white text-xs font-bold shadow-sm"
          >
            Contact
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-[#0B0F19] hover:text-violet-600 rounded-lg hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Reading Progress Bar running ONLY along the bottom edge of the sticky header */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-100 overflow-hidden" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          ref={drawerRef}
          className="bg-white/98 backdrop-blur-2xl px-6 py-6 border-b border-slate-200/90 shadow-2xl z-40 lg:hidden flex flex-col gap-4 animate-in fade-in duration-200"
        >
          <nav className="flex flex-col gap-2 font-medium" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.label}
                  href={getHref(item.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between text-sm ${
                    isActive
                      ? "bg-violet-50 text-violet-700 font-bold"
                      : "text-[#0B0F19] hover:bg-violet-50 hover:text-violet-600"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href={getHref("/#contact")}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-violet-500/30"
            >
              Start a Project
            </Link>
            <div className="text-center text-[11px] text-[#64748B]">
              Available for full-stack engineering &amp; digital systems.
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
