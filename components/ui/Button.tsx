import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  className?: string;
}

const variants = {
  primary:
    "bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/20 hover:shadow-orange-500/30",
  secondary:
    "border border-white/10 hover:border-white/25 text-white hover:bg-white/5",
  ghost:
    "text-neutral-400 hover:text-white",
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && !href.startsWith("mailto:")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
