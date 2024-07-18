interface Interest {
  title: string;
  description: string;
}

const Interest: React.FC<Interest> = ({ title, description }) => (
  <div className="py-1">
    <span className="text-muted">{description}</span> &mdash; {title}
  </div>
);

export default Interest;
