"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-orange-500 text-sm font-mono mb-4">{"// error"}</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Something went wrong
        </h1>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30 transition-all"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
