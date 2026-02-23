import { SOCIAL_LINKS } from "@/lib/constants";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Taha Siddiqui
        </p>
        <div className="flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a
            href={SOCIAL_LINKS.email}
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <EmailIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
