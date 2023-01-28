type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = function ({ title, children }) {
  return (
    <section className="space-y-4">
      <h3 className="text-sm">{title}</h3>
      {children}
    </section>
  );
};

export default Section;
