"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SOCIAL_LINKS } from "@/lib/constants";
import {
  GitHubIcon,
  LinkedInIcon,
  MediumIcon,
} from "@/components/icons/SocialIcons";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Products Shipped" },
  { value: "2", label: "IEEE Papers" },
  { value: "10+", label: "Enterprise Clients" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 md:pt-16 md:pb-0">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-500/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-500/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-neutral-400 mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            AI Engineer &middot; Product Builder
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-7xl font-light tracking-tight mt-4 md:mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Taha Siddiqui
        </motion.h1>

        <motion.p
          className="text-sm md:text-lg text-neutral-500 font-light mt-5 md:mt-6 max-w-2xl mx-auto leading-[1.8]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build AI products end-to-end.
          <br />
          From system architecture to customer delivery.
          <br />
          Pain points, tradeoffs, and priorities.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-8 md:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button href="#projects" variant="primary">
            View My Work
          </Button>
          <Button href="#contact" variant="secondary">
            Get in Touch
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10 md:mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 md:px-5 md:py-4"
            >
              <p className="text-xl md:text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs text-neutral-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center justify-center gap-2 md:gap-3 mt-6 md:mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-neutral-400 hover:text-white hover:border-white/15 transition-all text-xs"
          >
            <LinkedInIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
            LinkedIn
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-neutral-400 hover:text-white hover:border-white/15 transition-all text-xs"
          >
            <GitHubIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
            GitHub
          </a>
          <a
            href={SOCIAL_LINKS.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-neutral-400 hover:text-white hover:border-white/15 transition-all text-xs"
          >
            <MediumIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Medium
          </a>
        </motion.div>
      </div>
    </section>
  );
}
