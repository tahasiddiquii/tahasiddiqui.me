import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { WritingSection } from "@/components/sections/WritingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <WritingSection />
      <ContactSection />
    </>
  );
}
