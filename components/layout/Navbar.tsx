"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Moon,
  Sun
} from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";

interface NavItem {
  label: string;
  id: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", id: "hero", href: "/#hero" },
  { label: "Portfolio", id: "work", href: "/#work" },
  { label: "Toolchains", id: "stack", href: "/#stack" },
  { label: "Principles", id: "principles", href: "/#principles" },
  { label: "Contact", id: "contact", href: "/#contact" }
];

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

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { resolvedTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(Math.max(scrollY / docHeight, 0), 1);
        setScrollProgress(progress);
      }

      const sectionIds = ["hero", "work", "stack", "principles", "contact"];
      const scrollPos = scrollY + 220;

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
    <>
      {/* Global Top Hairline Scroll Progress Gradient Tracker */}
      <div className="fixed top-0 inset-x-0 h-[2px] z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-400 shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Header Container: Full transparent edge-to-edge at top, compact floating island dock when scrolled */}
      <header
        className={`fixed inset-x-0 z-50 pointer-events-none transition-all duration-300 ${
          isScrolled
            ? "top-3.5 sm:top-5 flex justify-center px-3 sm:px-6"
            : "top-0 w-full px-6 sm:px-12 lg:px-16 pt-5 sm:pt-6 pb-4 bg-gradient-to-b from-neutral-950/60 via-neutral-950/20 to-transparent"
        }`}
      >
        <div
          className={`pointer-events-auto relative flex items-center justify-between w-full transition-all duration-300 text-white select-none ${
            isScrolled
              ? "max-w-4xl px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-neutral-950/85 backdrop-blur-2xl border border-white/15 shadow-[0_16px_48px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.15)]"
              : "w-full bg-transparent border-transparent shadow-none"
          }`}
        >
          {/* Left: Brand Signature Logo */}
          <div className="flex items-center shrink-0">
            <Link
              href="/"
              className="group flex items-center transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-full py-0.5"
              aria-label="Abhishek Pandey Portfolio Home"
            >
              <div
                className={`relative transition-all duration-300 flex items-center ${
                  isScrolled
                    ? "h-7 sm:h-7.5 w-26 sm:w-30"
                    : "h-10 sm:h-12 w-36 sm:w-44"
                }`}
              >
                <Image
                  src="/images/signature-white.png"
                  alt="Abhishek Pandey"
                  fill
                  className="object-contain object-left drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_2px_16px_rgba(255,255,255,0.6)] transition-all duration-200"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Segmented Navigation Bar with Fluid Sliding Pill */}
          <nav
            className={`hidden lg:flex items-center gap-0.5 p-1 rounded-full backdrop-blur-md transition-all duration-300 ${
              isScrolled
                ? "bg-white/[0.06] border border-white/[0.08]"
                : "bg-white/[0.08] border border-white/15 shadow-sm"
            }`}
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.label}
                  href={getHref(item.href)}
                  onMouseEnter={() => setHoveredTab(item.id)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors select-none ${
                    isActive ? "text-neutral-950 font-semibold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {/* Sliding Active Pill */}
                  {isActive && (
                    <motion.span
                      layoutId="navbarActiveIndicator"
                      className="absolute inset-0 rounded-full bg-white shadow-md"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  {/* Hover Pill for inactive tabs */}
                  {!isActive && hoveredTab === item.id && (
                    <motion.span
                      layoutId="navbarHoverIndicator"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: GitHub Profile, Theme Toggle, and White "Let's Talk" CTA */}
          <div className="hidden sm:flex items-center gap-2">
            {/* GitHub Profile Icon Link */}
            <a
              href="https://github.com/pandeyabhishekmkp1423-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full flex items-center justify-center text-white/80 hover:text-white bg-white/[0.08] hover:bg-white/20 border border-white/12 hover:border-white/25 transition-all active:scale-95 shadow-sm"
              aria-label="GitHub Profile"
              title="Abhishek Pandey on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full flex items-center justify-center text-white/80 hover:text-white bg-white/[0.08] hover:bg-white/20 border border-white/12 hover:border-white/25 transition-all active:scale-95 shadow-sm"
              aria-label="Toggle Dark/Light Mode"
              title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-3.5 h-3.5 text-amber-300 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-indigo-300 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Solid White CTA Button */}
            <Link
              href={getHref("/#contact")}
              className="relative group overflow-hidden px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 text-xs sm:text-sm font-semibold shadow-[0_2px_14px_rgba(255,255,255,0.25)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-700 group-hover:text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Right Controls: GitHub, Theme Toggle, and Menu Toggle */}
          <div className="flex lg:hidden items-center gap-1.5">
            <a
              href="https://github.com/pandeyabhishekmkp1423-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/80 hover:text-white rounded-full bg-white/[0.08] hover:bg-white/20 border border-white/12 active:scale-95 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 text-white/80 hover:text-white rounded-full bg-white/[0.08] hover:bg-white/20 border border-white/12 active:scale-95 transition-all"
              aria-label="Toggle Theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-300" />
              )}
            </button>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-white/80 rounded-full bg-white/[0.08] hover:bg-white/20 border border-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-95 transition-all"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Mobile Navigation Drawer & Frosted Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-start pt-20 px-4 pointer-events-auto">
            {/* Backdrop Click to Dismiss */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md -z-10"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-nav-menu"
              ref={drawerRef}
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-sm mx-auto rounded-3xl bg-neutral-950/95 backdrop-blur-2xl p-5 border border-white/15 shadow-2xl flex flex-col gap-4 text-white"
            >
              <nav className="flex flex-col gap-1 font-medium" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <Link
                      key={item.label}
                      href={getHref(item.href)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-2.5 px-3.5 rounded-xl transition-colors flex items-center justify-between text-sm ${
                        isActive
                          ? "bg-white text-neutral-950 font-bold"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <Link
                  href={getHref("/#contact")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 text-center rounded-full bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-700" />
                </Link>

                <a
                  href="https://github.com/pandeyabhishekmkp1423-prog"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2 text-center rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

