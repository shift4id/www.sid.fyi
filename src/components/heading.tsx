import { Metadata } from "./container";

const Heading: React.FC<Metadata> = function ({ title, description }) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl">
        <em>{title}</em>
      </h1>
      <h2 className="text-gray-400">{description}</h2>
    </div>
  );
};

export default Heading;
