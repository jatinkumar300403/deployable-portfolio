import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Research Intern
        <span className="text-textGreen tracking-wide">@IIT-BHU(Varanasi)</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sep 2024 - Apr 2025
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Conducted advanced research in Continual Learning and Class Incremental Learning (CIL), focusing on molecular property prediction using transformer-based MoLFormer models.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented and evaluated Adversarial Drift Compensation (ADC), Learning without Forgetting (LwF), and FETRIL techniques for improved performance on molecular datasets like BBBP, using EWC and other regularizers.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Published a research paper at ICCS'25, NTU Singapore based on this work in an international journal, highlighting contributions in class-incremental molecular learning and continual adaptation using MoLFormer embeddings.{" "}
          <a
            href="https://link.springer.com/chapter/10.1007/978-3-031-97554-7_23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textGreen underline ml-1"
          >
            Read Paper
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
