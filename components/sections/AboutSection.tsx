import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/ui/FadeIn";

const buildSkills = [
  "Python",
  "LLMs & Agentic AI",
  "RAG Pipelines",
  "LangChain",
  "LangGraph",
  "FastAPI",
  "System Design",
  "ML Observability",
  "Docker",
  "Azure / AWS",
];

const productSkills = [
  "PRD Writing",
  "User Research",
  "Customer Discovery",
  "Prioritization",
  "Roadmap Influence",
  "Stakeholder Mgmt",
  "Go-to-Market",
  "Enterprise Sales Engineering",
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#151517]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeading
            label="about"
            title="About"
          />
        </FadeIn>

        {/* Narrative + Skills - balanced 2-col */}
        <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-start">
          <FadeIn className="md:col-span-3">
            <div className="text-neutral-400 space-y-4 text-[15px] leading-[1.8]">
              <p>
                Most engineers write code.
                <br />
                Most PMs write docs.
                <br />
                I do both - and I talk to the customer.
              </p>
              <p>
                At{" "}
                Fiddler AI,
                {" "}I&apos;m on roadmap calls with Fortune 50 clients
                <br />
                - then I go build what we discussed.
                <br />
                PRDs, prototypes, production pipelines.{" "}
                Same person.
              </p>
              <p>
                Before that, I shipped AI products at a startup.
                <br />
                10K+ daily users. Tight deadlines. Real constraints.
              </p>
              <p>
                In college, I founded{" "}
                Spillmate.
                <br />
                User research → Grant funding → IEEE paper → 100+ users.
                <br />
                <span className="text-neutral-500">
                  Biggest lesson: trust {">"} features.
                </span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3">
                  I Build With
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {buildSkills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-3">
                  I Think In
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {productSkills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Experience + Publications - horizontal row below */}
        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-3 gap-10 mt-16 pt-10 border-t border-white/5">
            <div>
              <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-wider mb-5">
                Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-neutral-200 font-normal">
                    Field AI Engineer
                  </p>
                  <p className="text-neutral-500 text-sm">
                    <a href="https://www.fiddler.ai" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Fiddler AI ↗</a> &middot; Aug 2024 - Present
                  </p>
                </div>
                <div>
                  <p className="text-neutral-200 font-normal">
                    Founder &amp; Product Owner
                  </p>
                  <p className="text-neutral-500 text-sm">
                    <a href="https://spillmate.ai" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">Spillmate ↗</a> &middot; Mar 2022 - Present
                  </p>
                </div>
                <div>
                  <p className="text-neutral-200 font-normal">
                    Software Engineer
                  </p>
                  <p className="text-neutral-500 text-sm">
                    <a href="https://www.qsstechnosoft.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">QSS Technosoft ↗</a> &middot; Aug 2023 - Aug 2024
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-wider mb-5">
                Published Research
              </h3>
              <div className="space-y-4">
                <a
                  href="https://ieeexplore.ieee.org/document/10308236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <p className="text-neutral-200 font-normal group-hover:text-orange-400 transition-colors">
                    Adaptive Mental Health Chatbot
                  </p>
                  <p className="text-neutral-500 text-sm">
                    IEEE ICCCNT 2023 &middot; IIT Delhi
                  </p>
                </a>
                <a
                  href="https://www.researchgate.net/publication/381626404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <p className="text-neutral-200 font-normal group-hover:text-orange-400 transition-colors">
                    Fruit Leaf Classification via Transfer Learning
                  </p>
                  <p className="text-neutral-500 text-sm">
                    ICRAAI 2022 &middot; Poornima University
                  </p>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-wider mb-5">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-neutral-200 font-normal">
                    B.Tech, Computer Science (AI &amp; ML)
                  </p>
                  <p className="text-neutral-500 text-sm">
                    Manav Rachna University &middot; 2021 - 2024
                  </p>
                </div>
                <div className="text-neutral-500 text-sm space-y-1">
                  <p>President, DSAC Club</p>
                  <p>2 published research papers</p>
                  <p>Grant winner, university incubator</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
