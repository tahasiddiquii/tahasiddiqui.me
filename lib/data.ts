export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  status: "live" | "in-progress" | "coming-soon";
  demoUrl?: string;
  githubUrl?: string;
  metrics?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  description: string;
  summary: string[];
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  url: string;
  platform: "medium" | "substack";
}

export const projects: Project[] = [
  {
    slug: "spill-mate",
    title: "Spillmate",
    description:
      "Founded an AI mental health platform - ran user research, scoped the MVP, secured grant funding, built the system, and shipped to 100+ users. Published at IEEE (IIT Delhi).",
    longDescription:
      "Identified an underserved problem through direct user research (70% of surveyed college students couldn't afford therapy), defined the product vision, assembled a team, secured grant funding (NewGen IEDC, Rs. 2.5 lakh), and shipped an MVP in 8 weeks. Made critical product decisions: prioritized conversational tone over clinical accuracy, cut scope aggressively to ship fast, and learned that privacy - not features - was the #1 adoption barrier. Published peer-reviewed research at IEEE ICCCNT 2023 at IIT Delhi.",
    techStack: ["Python", "LLMs", "NLP", "React", "API Development"],
    status: "live",
    metrics: "100+ users · IEEE published · Grant funded",
    demoUrl: "https://spillmate.ai",
  },
  {
    slug: "project-a",
    title: "LLM Observability Toolkit",
    description:
      "Open-source tool for monitoring LLM applications in production - born from real pain points observed across enterprise AI deployments.",
    longDescription:
      "Translating patterns from enterprise AI observability work into a lightweight open-source toolkit. Designed from first-hand experience watching Fortune 50 teams struggle with prompt drift, response quality degradation, and blind spots in agentic workflows.",
    techStack: ["Python", "LangChain", "Streamlit", "Vector Databases"],
    status: "coming-soon",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "slack-ai-assistant",
    title: "Product Request Intelligence System",
    category: "Product Requirements Document",
    description:
      "Identified a PM productivity bottleneck, ran user research, and designed a Slack AI assistant that reduced duplicate request search time by 50%.",
    summary: [
      "Discovered through interviews that PMs spent ~2 hours/week manually searching for duplicate product requests across Confluence, spreadsheets, and Slack",
      "Analyzed 200+ product requests and found 30% were duplicates - quantified the cost of the gap before designing the solution",
      "Designed solution architecture: Slack AI assistant using embeddings-based semantic search with real-time monitoring",
      "Defined success metrics upfront: 50% reduction in search time, 90% accuracy, 80% adoption in 3 months",
      "Documented tradeoff decisions: build vs. buy (rejected ProductBoard AI for custom workflow needs), real-time vs. batch (chose real-time for UX despite higher compute cost)",
    ],
  },
  {
    slug: "spill-mate-story",
    title: "Spillmate: 0 to 100 Users",
    category: "Product Story",
    description:
      "Full lifecycle of building an AI mental health product - from user research and problem validation to grant funding, IEEE publication, and real user feedback.",
    summary: [
      "Validated the problem: surveyed 50 college students, 70% needed support but couldn't afford $100-200/session therapy",
      "Scoped aggressively: cut features to ship MVP in 8 weeks, prioritized conversational tone over clinical accuracy based on early user signals",
      "Secured Rs. 2.5 lakh NewGen IEDC grant - pitched the user problem and product vision, not just the tech",
      "Discovered key insight from user feedback: privacy concerns, not feature gaps, were the #1 barrier - would redesign onboarding around trust if starting over",
      "Users wanted judgment-free conversation, not mood tracking - the ask wasn't the need",
    ],
  },
  {
    slug: "product-teardown",
    title: "Product Teardown: Feature Gap Analysis",
    category: "Product Teardown",
    description:
      "Deep-dive analysis of a tool I use daily - identified a real pain point, documented workarounds, and proposed a solution with user flow, metrics, and tradeoff analysis.",
    summary: [
      "Identified a recurring workflow bottleneck through daily usage and conversations with colleagues",
      "Documented current user workarounds and quantified the cost of the gap",
      "Proposed a targeted solution with clear user flow, connecting it back to the core pain point",
      "Defined success metrics before solution details - adoption, time saved, and satisfaction",
      "Analyzed implementation tradeoffs: effort vs. impact, build vs. configure, and risks",
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "What ML Observability Taught Me About Product Thinking",
    date: "Coming Soon",
    excerpt:
      "Four lessons from debugging AI in production for Fortune 50 clients: why customer pain isn't customer request, and why the best solution is often not more code.",
    url: "#",
    platform: "medium",
  },
  {
    title: "What I Learned Shipping an AI Product to 100 Users",
    date: "Coming Soon",
    excerpt:
      "We built an AI therapy chatbot in 8 weeks, got 100 users, published at IEEE, and learned why metrics alone don't tell the full story.",
    url: "#",
    platform: "substack",
  },
  {
    title: "A PRD I Wish Someone Had Written",
    date: "Coming Soon",
    excerpt:
      "How I think through product problems - starting with user research, defining metrics before features, and documenting tradeoffs that show judgment.",
    url: "#",
    platform: "medium",
  },
];

export interface Experience {
  role: string;
  company: string;
  duration: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: "Field AI Engineer",
    company: "Fiddler AI",
    duration: "Aug 2024 - Present",
    highlights: [
      "Partner with Fortune 50 enterprises across FinTech, AdTech, and Healthcare - split between building technical solutions and customer-facing strategy",
      "Write PRDs for internal tooling, prototype solutions in hackathons, and advise engineering teams on AI production readiness",
      "Identified observability gaps through customer conversations that reduced incident triage time by 45%",
      "Built internal agentic workflow platform after spotting a cross-team pain point - adopted by 4 teams, 50% efficiency gain",
    ],
  },
  {
    role: "Founder & Product Owner",
    company: "Spillmate",
    duration: "Mar 2022 - Present",
    highlights: [
      "Ran user research, defined product vision, assembled team, and shipped MVP in 8 weeks",
      "Secured grant funding and incubated at university entrepreneurship cell",
      "Shipped to 100+ users - discovered key insight: trust > features for adoption",
      "Published IEEE research paper at IIT Delhi (ICCCNT 2023)",
    ],
  },
  {
    role: "Software Engineer",
    company: "QSS Technosoft",
    duration: "Aug 2023 - Aug 2024",
    highlights: [
      "Scoped and shipped MVP AI products for US-based startups - conversational AI serving 10,000+ daily users",
      "Delivered ML models powering analytics for 5,000+ employees - learned build-vs-buy and scope tradeoffs",
    ],
  },
];

export const publications = [
  {
    title: "Adaptive Mental Health and Mood Uplifting Chatbot",
    venue: "IEEE ICCCNT 2023 - IIT Delhi",
    url: "https://ieeexplore.ieee.org/document/10308236",
  },
  {
    title: "Fruit Leaf Classification Using Transfer Learning Technique",
    venue: "ICRAAI 2022 - Poornima University",
    url: "https://www.researchgate.net/publication/381626404",
  },
];
