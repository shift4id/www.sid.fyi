import Link from "./link";

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

type SocialProps = {
  item: Social;
};

const Social: React.FC<SocialProps> = function ({ item }) {
  return (
    <Link external className="mr-4 text-gray-400 transition duration-300 hover:text-pink-200" href={item.href}>
      {item.name.toLowerCase()}
    </Link>
  );
};

const Footer: React.FC = function () {
  return (
    <footer className="-mx-6 flex flex-col items-start justify-between space-y-4 p-6 text-sm">
      <div className="flex flex-wrap">
        {socials.map((item) => (
          <Social key={item.name} item={item} />
        ))}
      </div>
      <p>&copy; {new Date().getFullYear()} Siddharth Adusumelli. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
