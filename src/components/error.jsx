import { m as motion } from "framer-motion";
import PropTypes from "prop-types";
import { getGradient } from "@/lib/gradients";
import Container from "./container";
import Link from "./link";

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

export default function Error({ statusCode }) {
  const gradient = getGradient();
  return (
    <Container description="You seem lost." title="404">
      <motion.section
        key="error"
        animate="enter"
        className="flex grow flex-col items-start justify-center space-y-8"
        exit="exit"
        initial="hidden"
        variants={sectionVariants}
      >
        <motion.p className="font-serif text-6xl md:text-9xl" transition={transition} variants={childVariants}>
          {statusCode ? (
            <>
              Error: <em className={`bg-gradient-to-r bg-clip-text text-transparent ${gradient}`}>{statusCode}</em>
            </>
          ) : (
            "Client Error"
          )}
        </motion.p>
        <motion.p className="md:text-xl" transition={transition} variants={childVariants}>
          Not sure how you managed to get lost, but here&apos;s a link to take you home.
        </motion.p>
        <motion.div transition={transition} variants={childVariants}>
          <Link className={`bg-gradient-to-r bg-clip-text font-serif text-4xl text-transparent ${gradient}`} href="/">
            Return Home
          </Link>
        </motion.div>
      </motion.section>
    </Container>
  );
}

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
};
