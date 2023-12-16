import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Undergrad = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        B.Tech Student
        <span className="text-textGreen tracking-wide">@Vellore Institute of Technology, Vellore</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        September 2022 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Currently pursuing Bachelor of Technology in Computer Science and Engineering. My overall current CGPA is 8.9.
        </li>
      </ul>
    </motion.div>
  );
};

export default Undergrad;