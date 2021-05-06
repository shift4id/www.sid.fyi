import { ExternalLink, GitHub, Twitter } from "react-feather";

const projects = [
  {
    title: "Portfolio",
    position: "Design • Full Stack Development",
    description:
      "My portfolio site. Uses Next.js, Next.js API Routes, TailwindCSS, Redis, MDX, ESLint, Prettier, and Feather Icons",
    icons: [
      { Icon: GitHub, url: "https://github.com/shift4id/www.sid.fyi" },
      { Icon: ExternalLink, url: "https://www.sid.fyi" },
    ],
  },
  {
    title: "Project Destroyer",
    position: "UX Design • Full Stack Development",
    description:
      "The Project Destroyer 4.0 desktop application. Made with Webpack, React, Redux, Electron, and Node.js.",
    icons: [
      { Icon: Twitter, url: "https://twitter.com/destroyerbots" },
      { Icon: ExternalLink, url: "https://projectdestroyer.com" },
    ],
  },
];

export default projects;
