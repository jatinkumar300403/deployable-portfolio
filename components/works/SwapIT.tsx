import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ReactBD = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Developer
        <span className="text-textGreen tracking-wide">@VinnovateIT</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2023 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write modern, performant, maintainable code in the development of a website called 'SwapIT'.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          SwapIT is an 'Add and Drop Portal' for the students of VIT,Vellore in order to swap their faculty/professors with ease.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms and frameworks, such as JavaScript, TypeScript, Next.js, Node.js, React.js.
        </li>
      </ul>
    </motion.div>
  );
};

export default ReactBD;