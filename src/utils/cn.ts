export const cn = (...args: (string | boolean | undefined | null)[]): string =>
  args.filter(Boolean).join(" ");
