import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import { CaseStudyLayout } from "@/components/case-study/CaseStudyLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Abhishek Pandey"
    };
  }

  const title = `${project.title} — Case Study | Abhishek Pandey`;
  const description = `${project.title}: ${project.description}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/work/${project.slug}`
    },
    openGraph: {
      title,
      description,
      url: `/work/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.image,
          width: 800,
          height: 500,
          alt: project.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image]
    }
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Structured Data (JSON-LD) for Project/Software Case Study
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: project.category,
    author: {
      "@type": "Person",
      name: "Abhishek Pandey",
      url: "https://abhishekpandey.dev"
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyLayout project={project} />
    </>
  );
}
