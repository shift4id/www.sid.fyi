interface Interest {
  title: string;
  description: string;
}

const Interest: React.FC<Interest> = ({ title, description }) => (
  <div className="py-1">
    <span className="text-gray">{description}</span> &mdash; {title}
  </div>
);

export default Interest;
