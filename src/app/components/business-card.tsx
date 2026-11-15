import { Link } from "@/components/link";
import socials from "@/constants/socials.json";
import { fullName } from "@/utils/metadata";

/** Card stock: a faint linen weave over the surface color. */
const stock =
  "bg-surface bg-[repeating-linear-gradient(0deg,color-mix(in_srgb,var(--fg)_3%,transparent)_0_1px,transparent_1px_3px),repeating-linear-gradient(90deg,color-mix(in_srgb,var(--fg)_2.5%,transparent)_0_1px,transparent_1px_3px)]";

/** The contact links, printed on a business card that lifts slightly on hover. */
export function BusinessCard(): React.ReactNode {
  return (
    <div className="flex justify-center pt-2 pb-6">
      <article
        className={`${stock} border-rule flex w-full max-w-xl flex-col gap-8 border p-7 shadow-[0_1px_0_var(--rule),0_16px_40px_-24px_rgb(0_0_0/0.45)] transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(.3,.1,.2,1)] hover:-translate-y-1 hover:shadow-[0_1px_0_var(--rule),0_28px_48px_-24px_rgb(0_0_0/0.5)] sm:aspect-[7/4] sm:p-9`}
      >
        <header className="flex items-start justify-between gap-6">
          <h2 className="font-display text-3xl leading-none sm:text-4xl">{fullName}</h2>
          <span aria-hidden className="font-display text-accent text-2xl leading-none italic">
            S.A.
          </span>
        </header>

        <ul className="border-rule mt-auto grid gap-x-8 gap-y-1.5 border-t pt-5 sm:grid-cols-2">
          {socials.map(({ id, name, label, link }) => (
            <li key={id}>
              <Link
                className="group flex items-baseline justify-between gap-3"
                href={link}
                target="_blank"
              >
                <span className="text-muted shrink-0 text-base lowercase italic">{name}</span>
                <span className="group-hover:text-accent group-focus-visible:text-accent truncate transition">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
