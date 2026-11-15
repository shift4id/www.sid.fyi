type SectionProps = React.PropsWithChildren<{
  title: string;
  /** Anchor id, e.g. for redirects that land on this section. */
  id?: string;
}>;

export function Section({ title, id, children }: SectionProps): React.ReactNode {
  return (
    <section className="flex scroll-mt-8 flex-col gap-6" id={id}>
      <h2 className="text-muted border-rule border-b pb-2 font-mono text-xs tracking-widest uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}
