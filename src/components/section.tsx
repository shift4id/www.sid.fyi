type SectionProps = React.PropsWithChildren<{ title: string }>;

function Section({ title, children }: SectionProps): React.ReactNode {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-muted text-xs uppercase">{title}</h3>
      {children}
    </section>
  );
}

export { Section };
