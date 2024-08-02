type SectionProps = React.PropsWithChildren<{ title: string }>;

function Section({ title, children }: SectionProps): React.ReactNode {
  return (
    <section className="space-y-4">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export { Section };
