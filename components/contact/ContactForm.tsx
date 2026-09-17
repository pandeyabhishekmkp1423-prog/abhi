"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "../ui/Button";

interface FormData {
  name: string;
  email: string;
  organization: string;
  projectType: string;
  message: string;
  honeypot: string; // Anti-spam honeypot
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
    "ERP / CRM / LMS System",
    "E-Commerce Storefront",
    "API & Database Integration",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on edit
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot bot protection
    if (formData.honeypot) {
      // Silently pretend success to fool bots
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
          result.message || "Thank you. Your inquiry has been received. I will review your requirements and respond shortly."
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
        setServerMessage(result.error || "An error occurred while submitting your message. Please try again or email directly.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again or send an email directly to contact@abhishekpandey.dev.");
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 lg:p-10 shadow-xs">
      {status === "success" ? (
        <div className="py-12 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-heading font-bold text-[#071327]">
            Inquiry Received
          </h3>
          <p className="mt-2 text-sm text-[#64748B] max-w-md leading-relaxed">
            {serverMessage}
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-6"
            onClick={() => setStatus("idle")}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Hidden honeypot anti-spam trap */}
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
              className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2"
              role="alert"
            >
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{serverMessage}</span>
            </div>
          )}

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-[#071327] uppercase tracking-wider mb-1.5"
              >
                Your Name <span className="text-[#2563EB]">*</span>
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
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#071327] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] ${
                  errors.name ? "border-red-400 bg-red-50/20" : "border-[#E2E8F0]"
                }`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-[#071327] uppercase tracking-wider mb-1.5"
              >
                Email Address <span className="text-[#2563EB]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#071327] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] ${
                  errors.email ? "border-red-400 bg-red-50/20" : "border-[#E2E8F0]"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-600">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Organization & Project Type Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="organization"
                className="block text-xs font-semibold text-[#071327] uppercase tracking-wider mb-1.5"
              >
                Company / Organization <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Company or institution name"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#071327] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB]"
              />
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="block text-xs font-semibold text-[#071327] uppercase tracking-wider mb-1.5"
              >
                Project Type <span className="text-[#2563EB]">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm text-[#071327] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB]"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold text-[#071327] uppercase tracking-wider mb-1.5"
            >
              Project Overview <span className="text-[#2563EB]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline your operational requirements, target timeline, or existing technical setup..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#071327] bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-[#2563EB] resize-y ${
                errors.message ? "border-red-400 bg-red-50/20" : "border-[#E2E8F0]"
              }`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#64748B]">
              Direct responses typically within 24-48 business hours.
            </span>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={status === "loading"}
              className="w-full sm:w-auto"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <span>Send Project Inquiry</span>
                  <Send className="w-4 h-4 ml-1.5" />
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};
