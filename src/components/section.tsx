type SectionProps = React.PropsWithChildren<{
  title: string;
  aside?: React.ReactNode;
  /** Anchor id, e.g. for redirects that land on this section. */
  id?: string;
}>;

export function Section({ title, aside, id, children }: SectionProps): React.ReactNode {
  return (
    <section className="flex scroll-mt-8 flex-col gap-6" id={id}>
      <div className="border-rule flex items-baseline justify-between border-b pb-2">
        <h2 className="text-muted font-mono text-xs tracking-widest uppercase">{title}</h2>
        {aside ? <span className="text-muted font-mono text-xs">{aside}</span> : null}
      </div>
      {children}
    </section>
  );
}
