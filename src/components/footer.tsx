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

const Footer: React.FC = function () {
  return (
    <footer className="space-y-4 py-6 text-sm">
      <div className="flex flex-wrap items-center justify-center">
        {socials.map((item) => (
          <PrettyLink key={item.name} external className="mx-1 p-1" href={item.href}>
            {item.name.toLowerCase()}
          </PrettyLink>
        ))}
      </div>
      <p className="text-center">&copy; {new Date().getFullYear()} Siddharth Adusumelli. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
