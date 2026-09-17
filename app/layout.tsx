import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
    default: "Abhishek Pandey — Full-Stack Developer & Digital Product Builder",
    template: "%s | Abhishek Pandey"
  },
  description: "Engineering real digital products, enterprise management systems (ERP/CRM/LMS), e-commerce platforms, and robust API/database architectures from requirement to deployment.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Digital Product Builder",
    "Next.js Developer",
    "React Developer",
    "Laravel Developer",
    "Node.js Developer",
    "Custom Web Applications",
    "ERP Development",
    "CRM Development",
    "LMS Development",
    "E-Commerce Development",
    "API Integration",
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
    title: "Abhishek Pandey — Full-Stack Developer & Digital Product Builder",
    description: "Building production-grade web systems, business platforms, and e-commerce applications from requirement to production deployment."
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Pandey — Full-Stack Developer & Digital Product Builder",
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
  // JSON-LD Structured Data for Person and WebSite
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhishek Pandey",
    jobTitle: "Full-Stack Developer & Digital Product Builder",
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
      "Laravel",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "ERP Systems",
      "E-Commerce"
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
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#111827] selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
