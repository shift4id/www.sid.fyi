import socials from "@/constants/socials";
import Link from "./link";

const Footer: React.FC = () => (
  <footer className="flex flex-col gap-4 pt-10 text-center">
    <div className="-my-1.5 flex flex-wrap justify-center text-xs">
      {socials.map(({ name }) => (
        <span key={name} className="my-0.5 mr-4 py-1">
          <Link external className="text-gray transition hover:text-pink" href={`/socials/${name}`}>
            {name}
          </Link>
        </span>
      ))}
    </div>
    <p className="text-sm">&copy; {new Date().getFullYear()} Siddharth Adusumelli. All rights reserved.</p>
  </footer>
);

export default Footer;
