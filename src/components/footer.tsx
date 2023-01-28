import PrettyLink from "@/components/pretty-link";

type Social = {
  name: string;
  href: string;
};

const socials: Social[] = [
  { href: "https://facebook.com/sid.adusumelli", name: "Facebook" },
  { href: "https://github.com/shift4id", name: "Github" },
  { href: "https://instagram.com/shift4id", name: "Instagram" },
  { href: "https://linkedin.com/in/sid-a", name: "LinkedIn" },
  { href: "https://open.spotify.com/user/sidfrostbear", name: "Spotify" },
  { href: "https://snapchat.com/add/shift4id", name: "Snapchat" },
  { href: "https://twitter.com/shift4id", name: "Twitter" },
];

const Footer: React.FC = () => (
  <footer className="space-y-4 py-6">
    <div className="-my-1.5 flex flex-wrap text-xs">
      {socials.map(({ name, href }) => (
        <span key={name} className="my-0.5 mr-4 py-1">
          <PrettyLink external href={href}>
            {name.toLowerCase()}
          </PrettyLink>
        </span>
      ))}
    </div>
    <p className="text-sm">&copy; {new Date().getFullYear()} Siddharth Adusumelli. All rights reserved.</p>
  </footer>
);

export default Footer;
