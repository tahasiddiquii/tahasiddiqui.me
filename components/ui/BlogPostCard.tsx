import { BlogPost } from "@/lib/data";

interface BlogPostCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogPostCard({ post, index = 0 }: BlogPostCardProps) {
  const isPlaceholder = post.url === "#";

  const content = (
    <>
      {/* Hover gradient */}
      {!isPlaceholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      )}

      <div className="relative">
        {/* Top row: index + platform */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-mono text-neutral-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-xs font-mono text-neutral-600 uppercase">
            {post.platform}
          </span>
        </div>

        <p className="text-xs font-mono text-neutral-600 mb-3">{post.date}</p>

        <h3
          className={`text-lg font-semibold mb-3 transition-colors ${
            isPlaceholder ? "" : "group-hover:text-orange-400"
          }`}
        >
          {post.title}
        </h3>

        <p className="text-neutral-500 text-sm leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </>
  );

  if (isPlaceholder) {
    return (
      <div className="group relative block rounded-2xl border border-white/5 bg-[#1a1a1d] p-6 transition-all overflow-hidden cursor-default">
        {content}
      </div>
    );
  }

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl border border-white/5 bg-[#1a1a1d] p-6 transition-all overflow-hidden hover:border-orange-500/20"
    >
      {content}
    </a>
  );
}
