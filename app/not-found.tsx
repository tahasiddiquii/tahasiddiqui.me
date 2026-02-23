import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-orange-500 text-sm font-mono mb-4">{"// 404"}</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
