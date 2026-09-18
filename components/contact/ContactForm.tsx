"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  organization: string;
  projectType: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    projectType: "Web Application",
    message: "",
    honeypot: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const projectTypes = [
    "Web Application",
    "ERP / CRM / LMS",
    "E-Commerce Storefront",
    "API & Cloud Architecture",
    "Technical Consultation"
  ];

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.projectType) {
      errs.projectType = "Please select a project type";
    }

    if (!formData.message.trim()) {
      errs.message = "Project overview message is required";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Please provide at least 15 characters describing your requirements";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      setStatus("success");
      setServerMessage("Your inquiry has been submitted.");
      return;
    }

    if (!validate()) return;

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setServerMessage(
          result.message || "Thank you. Your project specifications have been received. I will review and reply within 24-48 business hours."
        );
        setFormData({
          name: "",
          email: "",
          organization: "",
          projectType: "Web Application",
          message: "",
          honeypot: ""
        });
      } else {
        setStatus("error");
        setServerMessage(result.error || "An error occurred while submitting your message. Please email directly to contact@abhishekpandey.dev.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please email directly to contact@abhishekpandey.dev.");
    }
  };

  return (
    <div className="bg-white dark:bg-[#0E121B] rounded-2xl border border-slate-200/80 dark:border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl">
      {status === "success" ? (
        <div className="py-12 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
            Project Specifications Received
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
            {serverMessage}
          </p>
          <button
            type="button"
            className="mt-6 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
            onClick={() => setStatus("idle")}
          >
            Submit Another Specification
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Anti-spam honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="honeypot">Leave this blank</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          {status === "error" && (
            <div
              className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30 text-xs text-rose-700 dark:text-rose-400 flex items-start gap-2"
              role="alert"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{serverMessage}</span>
            </div>
          )}

          {/* Project Type Selector Pills */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Select Architecture Requirement
            </label>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => {
                const isSelected = formData.projectType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, projectType: type }))}
                    className={`text-xs px-3 py-1.5 rounded-xl font-medium font-mono transition-all ${
                      isSelected
                        ? "bg-indigo-600 text-white shadow-sm shadow-indigo-500/30 font-bold"
                        : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/80 dark:border-white/5"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
              >
                Your Name <span className="text-indigo-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                aria-invalid={!!errors.name}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-900/60 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.name ? "border-rose-400 bg-rose-50/20" : "border-slate-200 dark:border-white/10"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-rose-500 font-mono">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
              >
                Work Email <span className="text-indigo-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rahul@company.com"
                aria-invalid={!!errors.email}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-900/60 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.email ? "border-rose-400 bg-rose-50/20" : "border-slate-200 dark:border-white/10"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-500 font-mono">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Organization */}
          <div>
            <label
              htmlFor="organization"
              className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
            >
              Organization / Company (Optional)
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="e.g. Acme Health / Stealth Startup"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
            >
              Technical Requirements &amp; Scope <span className="text-indigo-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline your application scope, expected user volume, desired timeline, or architectural bottlenecks..."
              aria-invalid={!!errors.message}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-900/60 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                errors.message ? "border-rose-400 bg-rose-50/20" : "border-slate-200 dark:border-white/10"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-500 font-mono">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-sm font-bold shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Specifications...</span>
              </>
            ) : (
              <>
                <span>Submit Technical Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
