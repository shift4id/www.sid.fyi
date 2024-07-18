type ContainerProps = React.PropsWithChildren<{
  title: string;
  description: string;
}>;

function Container({ title, description, children }: ContainerProps): React.ReactNode {
  return (
    <main className="w-full max-w-3xl grow py-20">
      <div className="w-full space-y-8">
        <h1 className="text-3xl !leading-normal md:text-4xl">
          <em className="bg-accent/20 dark:bg-accent/15">{title}</em>
        </h1>
        <h2 className="ml-auto max-w-lg text-right text-2xl !leading-normal text-muted md:text-3xl">
          {description}
        </h2>
        <hr className="border-subtle" />
        {children}
      </div>
    </main>
  );
}

export { Container };
