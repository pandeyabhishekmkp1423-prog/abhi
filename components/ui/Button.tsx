import React from "react";
import Link from "next/link";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
    target?: string;
    rel?: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-4.5 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5"
  };

  const variantStyles = {
    primary:
      "bg-[#2563EB] text-white hover:bg-[#1D4ED8] active:bg-[#1E40AF] focus-visible:ring-[#2563EB] shadow-sm",
    secondary:
      "bg-[#071327] text-white hover:bg-[#0f244a] active:bg-[#050d1a] focus-visible:ring-[#071327] shadow-sm",
    outline:
      "border border-[#E2E8F0] bg-white text-[#111827] hover:bg-slate-50 hover:border-slate-300 focus-visible:ring-[#2563EB]",
    ghost:
      "text-[#111827] hover:bg-slate-100 active:bg-slate-200 focus-visible:ring-[#2563EB]"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={anchorProps.target || (href.startsWith("http") ? "_blank" : undefined)}
          rel={anchorProps.rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)}
          {...anchorProps}
        >
          {children}
        </a>
      );
    }
    const restAnchorProps = { ...anchorProps };
    delete restAnchorProps.target;
    delete restAnchorProps.rel;
    return (
      <Link href={href} className={combinedClasses} {...restAnchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
