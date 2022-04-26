import { m as motion } from "framer-motion";
import Container from "@/components/container";
import { getGradient } from "@/lib/gradients";

const transition = {
  type: "tween",
  duration: 1,
};

const sectionVariants = {
  hidden: {},
  enter: {
    transition: {
      staggerChildren: 0.25,
    },
  },
  exit: {},
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export default function Home() {
  const age = new Date(new Date() - new Date("October 6, 2003")).getFullYear() - 1970;

  return (
    <Container description="Developer + Designer" title="Home">
      <motion.section
        key="home"
        animate="enter"
        className="flex grow flex-col space-y-10 py-10 md:flex-row md:space-y-0"
        exit="exit"
        initial="hidden"
        variants={sectionVariants}
      >
        <div className="my-auto md:my-0">
          <div className="flex flex-col justify-center space-y-4 md:h-full">
            <div className="space-y-2 font-serif text-4xl md:text-6xl">
              <motion.p transition={transition} variants={childVariants}>
                Hello I&apos;m
              </motion.p>
              <motion.p
                className={`bg-gradient-to-r bg-clip-text text-transparent ${getGradient()}`}
                transition={transition}
                variants={childVariants}
              >
                <em>Siddharth Adusumelli</em>
              </motion.p>
              <motion.p transition={transition} variants={childVariants}>
                Software Engineer
              </motion.p>
            </div>
            <motion.p className="text-lg md:text-2xl" transition={transition} variants={childVariants}>
              I&apos;m, an {age} year old from <em>Silicon Valley, California</em>. I spend my time creating{" "}
              <em>unique</em> and <em>elegant</em> unique user experiences. Passionate about <em>music</em>,{" "}
              <em>reading</em>, and <em>travel</em>.
            </motion.p>
          </div>
        </div>
      </motion.section>
    </Container>
  );
}
