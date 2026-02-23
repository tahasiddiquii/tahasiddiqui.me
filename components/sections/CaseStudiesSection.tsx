import { caseStudies } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-[#151517]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeading
            label="case-studies"
            title="Case Studies"
            subtitle="How I think through product problems - from identifying pain points to defining solutions and measuring impact."
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <FadeIn key={cs.slug} delay={i * 0.1}>
              <CaseStudyCard caseStudy={cs} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
