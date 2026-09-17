export interface CaseStudy {
  challenge: string;
  approach: string;
  process?: string;
  outcome?: string; // Only verified data or omitted
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;         // Short, card-level summary
  longDescription: string;     // In-depth case study overview
  technologies: string[];
  features: string[];
  image: string;               // Card / preview image path
  gallery?: string[];          // Case study screenshot paths
  liveUrl?: string | null;     // null if internal / private
  githubUrl?: string | null;   // null if private enterprise repository
  year?: string;
  caseStudy?: CaseStudy;
}
