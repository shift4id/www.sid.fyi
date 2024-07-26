type SectionProps = React.PropsWithChildren<{ title: string }>;

function Section({ title, children }: SectionProps): React.ReactNode {
  return (
    <section className="space-y-4">
      <h3>
        <span className="bg-accent/20 dark:bg-accent/15">{title}</span>
      </h3>
      {children}
    </section>
  );
}

export { Section };
