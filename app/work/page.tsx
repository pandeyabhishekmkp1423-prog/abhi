import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCatalog } from "@/components/projects/WorkCatalog";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Selected Work & Systems Directory | Abhishek Pandey",
  description: "Browse verified digital products, institutional web platforms, educational ERPs, and e-commerce applications built by full-stack developer Abhishek Pandey.",
  alternates: {
    canonical: "/work"
  },
  openGraph: {
    title: "Selected Work & Systems Directory | Abhishek Pandey",
    description: "Browse verified digital products, institutional web platforms, educational ERPs, and e-commerce applications built by full-stack developer Abhishek Pandey.",
    url: "/work"
  }
};

export default function WorkPage() {
  return (
    <main className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white min-h-screen">
      <Container>
        <SectionHeading
          label="Project Archive"
          title="Engineered systems & digital products"
          description="A comprehensive index of 8 real-world software platforms, web applications, and management systems built across diverse industry requirements."
          as="h1"
        />

        <WorkCatalog initialProjects={projects} />
      </Container>
    </main>
  );
}
