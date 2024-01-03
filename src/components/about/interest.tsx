type Interest = { title: string; description: string };

const Interest: React.FC<Interest> = ({ title, description }) => (
  <div className="py-1">
    {title} &mdash; <span className="text-gray">{description}</span>
  </div>
);

export type { Interest };
export default Interest;
