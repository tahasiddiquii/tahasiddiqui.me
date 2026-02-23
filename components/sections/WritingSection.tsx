import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogPostCard } from "@/components/ui/BlogPostCard";
import { FadeIn } from "@/components/ui/FadeIn";

export function WritingSection() {
  return (
    <section id="writing" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionHeading
            label="writing"
            title="Writing"
            subtitle="Thinking out loud about AI, product, and building things."
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.title} delay={i * 0.1}>
              <BlogPostCard post={post} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
