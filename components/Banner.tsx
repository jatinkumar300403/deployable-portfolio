import { motion } from "framer-motion";
import Link from "next/link";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl: text-6xl font-titleFont font-semibold flex flex-col"
      >
        Jatin Kumar.
        <span className="text-textDark mt-2 lgl:mt-4">I build websites.</span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        Devoted and a highly motivated student, currently in 3rd year of B.Tech.
        CS Engineering seeking to kickstart a successful career in Web
        Development. Possessing a solid academic foundation. I am eager to contribute my skills, and learn as much
        as possible and gain experience in the particular field and determined
        to contribute and add value to the organization.
      </motion.p>
      <Link href={"https://github.com/jatinkumar300403?tab=repositories"} target="_blank">
      <motion.button
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
      >
        check out my projects!
      </motion.button>
      </Link>
    </section>
  );
};
export default Banner;
