type SectionProps = React.PropsWithChildren<{ title: string }>;

export function Section({ title, children }: SectionProps): React.ReactNode {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-muted text-xs">{title}</h3>
      {children}
    </section>
  );
}
