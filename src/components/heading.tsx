type HeadingProps = {
  title: string;
  description: string;
};

const Heading: React.FC<HeadingProps> = function ({ title, description }) {
  return (
    <div className="space-y-2">
      <h1 className="text-xl">
        <em>{title}</em>
      </h1>
      <h2 className="text-gray-400">{description}</h2>
    </div>
  );
};

export default Heading;
