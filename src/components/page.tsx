/** The main content area shared by every route. */
export function Page({ children }: React.PropsWithChildren): React.ReactNode {
  return <main className="flex w-full grow flex-col gap-16 pt-12 pb-16">{children}</main>;
}
