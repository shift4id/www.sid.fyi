type ContainerProps = React.PropsWithChildren<{
  title: string;
  description: string;
}>;

function Container({ title, description, children }: ContainerProps): React.ReactNode {
  return (
    <main className="flex w-full grow flex-col gap-16 py-20">
      <div className="flex flex-col gap-2 leading-normal">
        <h1 className="text-3xl sm:text-4xl">{title}</h1>
        <h2 className="text-muted text-2xl sm:text-3xl">{description}</h2>
      </div>
      {children}
    </main>
  );
}

export { Container };
