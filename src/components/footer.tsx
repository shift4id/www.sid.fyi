import { motion } from "framer-motion";
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
    <Link
      external
      className="mr-2 mt-2 rounded bg-white/5 px-2 py-1 text-sm text-gray-300 transition duration-300 hover:text-pink-200"
      href={item.href}
    >
      {item.name.toLowerCase()}
    </Link>
  );
};

const Footer: React.FC = function () {
  return (
    <motion.footer
      animate={{ y: 0, opacity: 1 }}
      className="sticky bottom-0 flex flex-col items-center justify-between space-y-4 bg-gray-900 py-6 text-sm"
      initial={{ y: "1rem", opacity: 0 }}
      transition={{ type: "tween", duration: 0.75, ease: "easeInOut" }}
    >
      <div className="flex flex-wrap items-center justify-center">
        {socials.map((item) => (
          <Social key={item.name} item={item} />
        ))}
      </div>
      <p className="text-center">&copy; {new Date().getFullYear()} Siddharth Adusumelli. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
