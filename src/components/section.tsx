type SectionProps = React.PropsWithChildren<{ title: string }>;

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className="space-y-8">
    <h3>
      <em className="bg-accent/20 dark:bg-accent/15">{title}</em>
    </h3>
    {children}
  </section>
);

export default Section;
