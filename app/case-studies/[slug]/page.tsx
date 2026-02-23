import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const cs = caseStudies.find((c) => c.slug === slug);
    if (!cs) return { title: "Not Found" };
    return {
      title: `${cs.title} - Taha Siddiqui`,
      description: cs.description,
    };
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors mb-8"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Back to all case studies
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <Badge>{caseStudy.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6">
            {caseStudy.title}
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed mb-12">
            {caseStudy.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border-t border-white/5 pt-10">
            <h2 className="text-sm font-mono text-orange-500 uppercase tracking-wider mb-6">
              Key Points
            </h2>
            <ul className="space-y-4">
              {caseStudy.summary.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-neutral-300 leading-relaxed"
                >
                  <span className="text-orange-500 font-mono text-sm mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 p-6 rounded-xl border border-white/5 bg-[#1a1a1d]">
            <p className="text-neutral-500 text-sm text-center">
              Full case study coming soon. Check back for the detailed
              write-up with problem analysis, solution design, and lessons
              learned.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
