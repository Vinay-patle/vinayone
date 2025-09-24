import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Twelve = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        12th
        <span className="text-textGreen tracking-wide">Mathematics</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        April 2019 - March 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Govt. H. S. School Suktara, Dist. Seoni
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Achieved an overall percentage of 56.4% in the final examinations
        </li>
      </ul>
    </motion.div>
  );
};

export default Twelve;
