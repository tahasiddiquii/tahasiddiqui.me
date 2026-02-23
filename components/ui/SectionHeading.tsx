interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="text-orange-500 text-sm font-mono mb-2">{"// "}{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-400 mt-3 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
