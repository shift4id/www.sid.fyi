interface InterestProps {
  title: string;
  description: string;
}

function Interest({ title, description }: InterestProps): React.ReactNode {
  return (
    <div className="py-1">
      {title}
      <span className="text-muted"> &mdash; </span>
      {description}
    </div>
  );
}

export { Interest };
