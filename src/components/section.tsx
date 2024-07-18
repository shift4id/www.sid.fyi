type SectionProps = React.PropsWithChildren<{ title: string }>;

function Section({ title, children }: SectionProps): React.ReactNode {
  return (
    <section className="space-y-8">
      <h3>
        <em className="bg-accent/20 dark:bg-accent/15">{title}</em>
      </h3>
      {children}
    </section>
  );
}

export { Section };
