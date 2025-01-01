interface HeadingProps {
  title: string;
  subtitle?: string;
}

export function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className="space-y-2 text-center">
      {subtitle && <p className="text-sm">{subtitle}</p>}
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
    </div>
  );
}
