type ContainerProps = React.PropsWithChildren<{
  title: string;
  description: string;
}>;

function Container({ title, description, children }: ContainerProps): React.ReactNode {
  return (
    <main className="flex w-full grow flex-col gap-8 py-20">
      <div className="space-y-2">
        <h1 className="text-3xl !leading-normal sm:text-4xl">{title}</h1>
        <h2 className="text-2xl !leading-normal text-muted sm:text-3xl">{description}</h2>
      </div>
      <hr className="border-subtle" />
      {children}
    </main>
  );
}

export { Container };
