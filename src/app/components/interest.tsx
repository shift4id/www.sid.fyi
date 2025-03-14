interface InterestProps {
  title: string;
  description: string;
}

function Interest({ title, description }: InterestProps): React.ReactNode {
  return (
    <div className="py-1">
      {title} &mdash;
      <span className="text-muted">{description}</span>
    </div>
  );
}

export { Interest };
