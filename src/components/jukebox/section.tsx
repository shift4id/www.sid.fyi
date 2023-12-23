type SectionProps = React.PropsWithChildren<{ title: string }>;

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="space-y-4">
    <h3 className="text-sm">{title}</h3>
    {children}
  </section>
);

export default Section;
