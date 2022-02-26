import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons/faSnapchat";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "./link";

type SocialProps = {
  href: string;
  name: string;
  icon: IconDefinition;
};

const Social: React.FC<SocialProps> = function ({ href, icon, name }) {
  return (
    <Link external className="transition-transform duration-500 hover:scale-125" href={href}>
      <FontAwesomeIcon icon={icon} />
      <span className="sr-only">{name}</span>
    </Link>
  );
};

const socials = [
  { href: "https://open.spotify.com/user/sidfrostbear", icon: faSpotify, name: "Spotify" },
  { href: "https://facebook.com/sid.adusumelli", icon: faFacebook, name: "Facebook" },
  { href: "https://github.com/shift4id", icon: faGithub, name: "Github" },
  { href: "https://instagram.com/shift4id", icon: faInstagram, name: "Instagram" },
  { href: "https://linkedin.com/in/sid-a", icon: faLinkedin, name: "LinkedIn" },
  { href: "https://snapchat.com/add/shift4id", icon: faSnapchat, name: "Snapchat" },
  { href: "https://twitter.com/shift4id", icon: faTwitter, name: "Twitter" },
];

const Footer: React.FC = function () {
  return (
    <footer className="flex flex-col items-start justify-between space-y-4 py-6 md:flex-row md:items-center md:space-y-0">
      <p className="text-sm">&copy; {new Date().getFullYear()} Siddharth Adusumelli. All rights reserved.</p>
      <div className="flex space-x-4">
        {socials.map((social) => (
          <Social key={social.name} {...social} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
