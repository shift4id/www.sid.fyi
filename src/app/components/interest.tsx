interface InterestProps {
  title: string;
  description: string;
}

export function Interest({ title, description }: InterestProps): React.ReactNode {
  return (
    <div className="py-1">
      {title}
      <span className="text-muted"> &mdash; </span>
      {description}
    </div>
  );
}
