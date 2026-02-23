import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeading
            label="projects"
            title="Projects"
            subtitle="Things I've built and shipped to real users."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
