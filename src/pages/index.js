import { Facebook, GitHub, Instagram, Linkedin, Mail, Twitter } from "react-feather";

import Container from "@/components/container";
import CurrentlyPlaying from "@/components/home/currently-playing";
import Link from "@/components/link";
import { getGradient } from "@/lib/gradients";

const socials = [
  { Icon: Mail, link: "mailto:hi@sid.fyi", color: "text-red-500", site: "Email" },
  { Icon: Facebook, link: "https://facebook.com/sid.adusumelli", color: "text-orange-500", site: "Facebook" },
  { Icon: GitHub, link: "https://github.com/shift4id", color: "text-yellow-500", site: "Github" },
  { Icon: Instagram, link: "https://instagram.com/shift4id", color: "text-green-500", site: "Instagram" },
  { Icon: Linkedin, link: "https://linkedin.com/in/sid-a", color: "text-blue-500", site: "LinkedIn" },
  { Icon: Twitter, link: "https://twitter.com/shift4id", color: "text-purple-500", site: "Twitter" },
];

export default function Index() {
  const gradient = getGradient();

  return (
    <Container title="Home" description="A bit about me.">
      <div className="flex flex-col flex-grow justify-center items-center mb-10 w-full text-center">
        <h1 className={`text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>sid</h1>
        <h2 className="text-4xl font-medium leading-normal">code + design</h2>
        <div className="flex my-4 space-x-4 text-black dark:text-white">
          {socials.map(({ Icon, link, color, site }) => (
            <Link key={link} href={link} className={color}>
              <Icon />
              <span className="sr-only">{site}</span>
            </Link>
          ))}
        </div>
        <CurrentlyPlaying />
      </div>
    </Container>
  );
}
