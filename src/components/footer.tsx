import Link from "./link";

type Social = { name: string; href: string };

const socials: Social[] = [
  { href: "https://github.com/shift4id", name: "Github" },
  { href: "https://instagram.com/shift4id", name: "Instagram" },
  { href: "https://linkedin.com/in/sid-a", name: "LinkedIn" },
  { href: "https://open.spotify.com/user/sidfrostbear", name: "Spotify" },
  { href: "https://twitter.com/shift4id", name: "Twitter" },
];

const Footer: React.FC = () => (
  <footer className="flex flex-col items-center space-y-4 pt-10 text-center">
    <div className="-my-1.5 flex flex-wrap justify-center text-xs">
      {socials.map(({ name, href }) => (
        <span key={name} className="my-0.5 mr-4 py-1">
          <Link external className="text-gray transition hover:text-pink" href={href}>
            {name.toLowerCase()}
          </Link>
        </span>
      ))}
    </div>
    <p className="text-sm">&copy; {new Date().getFullYear()} Siddharth Adusumelli. All rights reserved.</p>
  </footer>
);

export default Footer;
