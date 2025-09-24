import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Mtech = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        M.Tech
        <span className="text-textGreen tracking-wide">Computer Science and Engineering</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        August 2025 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          From Lakshmi Narain College of Technology Excellence, Bhopal
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Currently pursuing M.Tech.
        </li>
      </ul>
    </motion.div>
  );
};

export default Mtech;
