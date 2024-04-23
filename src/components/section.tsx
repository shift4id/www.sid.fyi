type SectionProps = React.PropsWithChildren<{ title: string }>;

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="space-y-8">
    <h3>
      <em className="bg-pink/20">{title}</em>
    </h3>
    {children}
  </section>
);

export default Section;
