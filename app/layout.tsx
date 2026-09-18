import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CommandPalette } from "@/components/ui/CommandPalette";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://abhishekpandey.dev"),
  title: {
    default: "Abhishek Pandey — Full-Stack Architect & Digital Product Builder",
    template: "%s | Abhishek Pandey"
  },
  description: "Engineering real digital products, enterprise management systems (ERP/CRM/LMS), e-commerce platforms, and robust API/database architectures from requirement to deployment.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Systems Architect",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "PostgreSQL",
    "Laravel Developer",
    "ERP Development",
    "Abhishek Pandey"
  ],
  authors: [{ name: "Abhishek Pandey" }],
  creator: "Abhishek Pandey",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekpandey.dev",
    siteName: "Abhishek Pandey — Portfolio",
    title: "Abhishek Pandey — Full-Stack Architect & Digital Product Builder",
    description: "Building production-grade web systems, business platforms, and e-commerce applications from requirement to production deployment."
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Pandey — Full-Stack Architect & Digital Product Builder",
    description: "Building production-grade web systems, business platforms, and e-commerce applications from requirement to production deployment."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhishek Pandey",
    jobTitle: "Full-Stack Architect & Digital Product Builder",
    url: "https://abhishekpandey.dev",
    sameAs: [
      "https://github.com",
      "https://linkedin.com"
    ],
    knowsAbout: [
      "Full-Stack Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Laravel",
      "Distributed Systems",
      "ACID Architecture"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abhishek Pandey Portfolio",
    url: "https://abhishekpandey.dev"
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script to prevent FOUC for dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark) || !saved) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch(e) {}
              })();
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-[#07090E] text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <CommandPalette />
          <Navbar />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
