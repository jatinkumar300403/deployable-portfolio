import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const School = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Senior Secondary Student
        <span className="text-textGreen tracking-wide">@Global Indian International School, Noida</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2020 - April 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Completed my senior secondary education at GIIS, Noida in the field of Science with an overall aggregate of 92.4% in CBSE.
        </li>
      </ul>
    </motion.div>
  );
};

export default School;