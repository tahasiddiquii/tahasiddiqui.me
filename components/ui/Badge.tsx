import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "status";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "status"
      ? "bg-green-500/10 border-green-500/20 text-green-400"
      : "bg-white/5 border-white/10 text-neutral-300";

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-mono rounded-full border ${styles}`}
    >
      {children}
    </span>
  );
}
