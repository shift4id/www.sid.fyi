import { chapters } from "@/constants/chapters";
import { NavLink } from "./nav-link";

export function NavBar(): React.ReactNode {
  return (
    <header className="py-5 text-base">
      <nav>
        <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-2 sm:gap-x-6">
          {chapters.map(({ href, title, numeral }) => (
            <NavLink key={href} href={href} name={title} numeral={numeral} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
