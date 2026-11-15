/** The main content area shared by every route. */
export function Page({ children }: React.PropsWithChildren): React.ReactNode {
  return <main className="flex w-full grow flex-col gap-20 pt-16 pb-24">{children}</main>;
}
