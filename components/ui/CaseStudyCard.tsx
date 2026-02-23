import { CaseStudy } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group relative block rounded-2xl border border-white/5 bg-[#1a1a1d] p-6 transition-all hover:border-orange-500/20 overflow-hidden"
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative">
        {/* Top row: index + arrow */}
        <div className="flex items-start justify-between mb-5">
          <span className="text-xs font-mono text-neutral-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all">
            <svg
              className="w-3.5 h-3.5 text-neutral-600 group-hover:text-orange-400 transition-colors -rotate-45 group-hover:rotate-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>

        <Badge>{caseStudy.category}</Badge>

        <h3 className="text-lg font-semibold mt-4 mb-3 group-hover:text-orange-400 transition-colors">
          {caseStudy.title}
        </h3>

        <p className="text-neutral-500 text-sm leading-relaxed">
          {caseStudy.description}
        </p>
      </div>
    </Link>
  );
}
