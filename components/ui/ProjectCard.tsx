import { Project } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { GitHubIcon, ArrowUpRightIcon } from "@/components/icons/SocialIcons";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const statusLabel =
    project.status === "live"
      ? "Live"
      : project.status === "in-progress"
      ? "In Progress"
      : "Coming Soon";

  return (
    <div className="group relative rounded-2xl border border-white/5 bg-[#1a1a1d] p-5 md:p-8 transition-all hover:border-orange-500/20 overflow-hidden">
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Index number - hidden on small screens to avoid overlap */}
      <div className="absolute top-6 right-6 md:top-8 md:right-8 text-5xl font-bold text-white/[0.03] select-none pointer-events-none hidden md:block">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative">
        <div className="flex items-center gap-2 flex-wrap mb-5">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          {project.status === "live" ? (
            <Badge variant="status">{statusLabel}</Badge>
          ) : (
            <Badge>{statusLabel}</Badge>
          )}
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {project.metrics && (
          <p className="text-orange-400 text-sm font-mono mb-5">
            {project.metrics}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-neutral-500 hover:text-white transition-colors"
              aria-label="GitHub repository"
            >
              <GitHubIcon className="w-4 h-4" />
              Source
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-neutral-500 hover:text-white transition-colors"
              aria-label="Live demo"
            >
              <ArrowUpRightIcon className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
