interface InterestProps {
  title: string;
  description: string;
}

function Interest({ title, description }: InterestProps): React.ReactNode {
  return (
    <div className="py-1">
      <span className="text-muted">{description}</span> &mdash; {title}
    </div>
  );
}

export { Interest };
