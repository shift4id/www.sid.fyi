import Head from "next/head";
import { Facebook, GitHub, Instagram, Linkedin, Mail, Twitter } from "react-feather";

import CurrentlyPlaying from "@/components/home/currently-playing";
import Link from "@/components/link";
import Time from "@/components/time";
import { getGradient } from "@/lib/gradients";

const socials = [
  {
    Icon: Mail,
    link: "mailto:hi@sid.fyi",
    color: "text-red-500",
    site: "Email",
  },
  {
    Icon: Facebook,
    link: "https://facebook.com/sid.adusumelli",
    color: "text-orange-500",
    site: "Facebook",
  },
  {
    Icon: GitHub,
    link: "https://github.com/shift4id",
    color: "text-yellow-500",
    site: "Github",
  },
  {
    Icon: Instagram,
    link: "https://instagram.com/shift4id",
    color: "text-green-500",
    site: "Instagram",
  },
  {
    Icon: Linkedin,
    link: "https://linkedin.com/in/sid-a",
    color: "text-blue-500",
    site: "LinkedIn",
  },
  {
    Icon: Twitter,
    link: "https://twitter.com/shift4id",
    color: "text-purple-500",
    site: "Twitter",
  },
];

const Index = () => {
  const gradient = getGradient();

  return (
    <>
      <Head>
        <title>Home - Sid Adusumelli</title>
        <meta name="description" content="A bit about me." />
        <meta property="og:title" content="Home - Sid Adusumelli" />
        <meta property="og:description" content="A bit about me." />
      </Head>
      <div className="flex flex-col flex-grow justify-center items-center mb-10 w-full text-center">
        <h1 className="text-6xl font-bold">$id</h1>
        <h2
          className={`text-4xl font-semibold leading-normal text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}
        >
          Full Stack Engineer
        </h2>
        <Time />
        <div className="flex my-4 -mx-2 text-black dark:text-white">
          {socials.map(({ Icon, link, color, site }) => (
            <Link key={link} href={link} className={`mx-2 ${color}`}>
              <Icon />
              <span className="sr-only">{site}</span>
            </Link>
          ))}
        </div>
        <CurrentlyPlaying />
      </div>
    </>
  );
};

export default Index;
