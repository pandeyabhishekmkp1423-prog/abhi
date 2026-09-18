"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  FolderGit2,
  Compass,
  Zap,
  Mail,
  Moon,
  Sun,
  ExternalLink,
  Check,
  ArrowRight,
  Code2,
  Layers,
  Sparkles
} from "lucide-react";
import { projects } from "@/data/projects";
import { useTheme } from "../providers/ThemeProvider";

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Projects" | "Navigation" | "Actions";
  icon: React.ReactNode;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { resolvedTheme, toggleTheme } = useTheme();

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalOpen;

  const handleClose = useCallback(() => {
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalOpen(false);
    }
    setQuery("");
    setSelectedIndex(0);
  }, [isControlled, controlledOnClose]);

  const handleOpen = useCallback(() => {
    if (!isControlled) {
      setInternalOpen(true);
    }
  }, [isControlled]);

  // Global Keyboard listener for Cmd+K, Ctrl+K, and /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          handleClose();
        } else {
          handleOpen();
        }
      } else if (e.key === "/" && !isInput && !isOpen) {
        e.preventDefault();
        handleOpen();
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleOpen, handleClose]);

  // Autofocus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@abhishekpandey.dev");
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      handleClose();
    }, 1200);
  };

  // Build command items
  const items: CommandItem[] = [
    // 1. Project Case Studies
    ...projects.map((p) => ({
      id: `project-${p.slug}`,
      title: p.title,
      subtitle: `${p.category} • ${p.technologies.slice(0, 3).join(", ")}`,
      category: "Projects" as const,
      icon: <FolderGit2 className="w-4 h-4 text-indigo-400 shrink-0" />,
      action: () => {
        handleClose();
        router.push(`/work/${p.slug}`);
      }
    })),

    // 2. Sections Navigation
    {
      id: "nav-hero",
      title: "Home / Overview",
      subtitle: "Introduction & System Architecture Stack",
      category: "Navigation" as const,
      icon: <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />,
      action: () => {
        handleClose();
        router.push("/#hero");
      }
    },
    {
      id: "nav-work",
      title: "Selected Production Work",
      subtitle: "8 verified full-stack applications & case studies",
      category: "Navigation" as const,
      icon: <FolderGit2 className="w-4 h-4 text-blue-400 shrink-0" />,
      action: () => {
        handleClose();
        router.push("/#work");
      }
    },
    {
      id: "nav-stack",
      title: "Technical Foundation & Toolchains",
      subtitle: "Next.js 16, PostgreSQL, TypeScript, React 19",
      category: "Navigation" as const,
      icon: <Code2 className="w-4 h-4 text-emerald-400 shrink-0" />,
      action: () => {
        handleClose();
        router.push("/#stack");
      }
    },
    {
      id: "nav-principles",
      title: "Engineering Philosophy & Delivery",
      subtitle: "Architecture principles, type safety, 4-phase methodology",
      category: "Navigation" as const,
      icon: <Compass className="w-4 h-4 text-amber-400 shrink-0" />,
      action: () => {
        handleClose();
        router.push("/#principles");
      }
    },
    {
      id: "nav-contact",
      title: "Contact & Inquiries",
      subtitle: "Discuss technical feasibility, scope & contracts",
      category: "Navigation" as const,
      icon: <Mail className="w-4 h-4 text-rose-400 shrink-0" />,
      action: () => {
        handleClose();
        router.push("/#contact");
      }
    },

    // 3. Quick Actions
    {
      id: "action-copy-email",
      title: copiedEmail ? "Copied to Clipboard!" : "Copy Direct Email Address",
      subtitle: "contact@abhishekpandey.dev",
      category: "Actions" as const,
      icon: copiedEmail ? (
        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
      ) : (
        <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
      ),
      action: handleCopyEmail
    },
    {
      id: "action-toggle-theme",
      title: resolvedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      subtitle: `Current active theme: ${resolvedTheme.toUpperCase()}`,
      category: "Actions" as const,
      icon:
        resolvedTheme === "dark" ? (
          <Sun className="w-4 h-4 text-amber-400 shrink-0" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-400 shrink-0" />
        ),
      action: () => {
        toggleTheme();
        handleClose();
      }
    },
    {
      id: "action-github",
      title: "Open GitHub Profile",
      subtitle: "Explore repositories and open-source contributions",
      category: "Actions" as const,
      icon: <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />,
      action: () => {
        window.open("https://github.com", "_blank");
        handleClose();
      }
    }
  ];

  // Filter items based on query
  const filteredItems = items.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase().trim();
    return (
      item.title.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // Handle arrow key navigation
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-150"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-100 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200/80 dark:border-white/10 gap-3">
          <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Type a command, project name, or search architecture..."
            className="w-full bg-transparent text-sm sm:text-base font-medium placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none text-slate-900 dark:text-white"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[11px] font-mono font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-400 dark:text-slate-500 text-sm">
              No matching commands or case studies found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 ${
                    isSelected
                      ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-950 dark:text-indigo-100 border border-indigo-200/80 dark:border-indigo-500/30"
                      : "hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-semibold truncate text-slate-900 dark:text-white">
                        {item.title}
                      </div>
                      {item.subtitle && (
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] uppercase font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-400">
                      {item.category}
                    </span>
                    {isSelected && (
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 animate-pulse" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Command Palette Footer Tips */}
        <div className="px-4 py-2.5 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-slate-950/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">
                ↑
              </kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">
                ↓
              </kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-[10px]">
                ↵
              </kbd>
              <span>to select</span>
            </span>
          </div>
          <span className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">
            ⌘K / Ctrl+K
          </span>
        </div>
      </div>
    </div>
  );
};
