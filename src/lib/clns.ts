const clns = (...args: (string | boolean | undefined | null)[]): string => args.filter(Boolean).join(" ");

export default clns;
