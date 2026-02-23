import { SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import {
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
  EmailIcon,
} from "@/components/icons/SocialIcons";
import { FadeIn } from "@/components/ui/FadeIn";

const socialLinks = [
  {
    name: "LinkedIn",
    href: SOCIAL_LINKS.linkedin,
    icon: LinkedInIcon,
    description: "Let's connect",
  },
  {
    name: "GitHub",
    href: SOCIAL_LINKS.github,
    icon: GitHubIcon,
    description: "See my code",
  },
  {
    name: "Medium",
    href: SOCIAL_LINKS.medium,
    icon: MediumIcon,
    description: "Read my writing",
  },
  {
    name: "Email",
    href: SOCIAL_LINKS.email,
    icon: EmailIcon,
    description: "Say hello directly",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#151517]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="relative rounded-2xl border border-white/5 overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-[#1a1a1d] to-[#1a1a1d]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />

            <div className="relative p-6 md:p-16">
              {/* Top section */}
              <div className="text-center mb-14">
                <p className="text-orange-500 text-sm font-mono mb-3">
                  {"// contact"}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                  Let&apos;s Build Something
                  <br />
                  <span className="text-orange-400">Together</span>
                </h2>
                <p className="text-neutral-400 max-w-md mx-auto mb-8">
                  Building something interesting? Want to talk product, AI, or
                  engineering? I&apos;m always up for a good conversation.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button href={SOCIAL_LINKS.email} variant="primary">
                    Say Hello
                  </Button>
                  <Button href={SOCIAL_LINKS.linkedin} variant="secondary">
                    View LinkedIn
                  </Button>
                </div>
              </div>

              {/* Social cards grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.name === "Email" ? undefined : "_blank"}
                    rel={
                      link.name === "Email"
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/20 transition-all text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                      <link.icon className="w-4 h-4 text-neutral-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {link.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {link.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
