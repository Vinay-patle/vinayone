import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Btech from "./education/Btech";
import Mtech from "./education/Mtech";
import Ten from "./education/Ten";
import Twelve from "./education/Twelve";

const Education = () => {
  const [educationTen, seteducationTen] = useState(true);
  const [educationTwelve, seteducationTwelve] = useState(false);
  const [educationBtech, seteducationBtech] = useState(false);
  const [educationMtech, seteducationMtech] = useState(false);

  const handleTen = () => {
    seteducationTen(true);
    seteducationTwelve(false);
    seteducationBtech(false);
    seteducationMtech(false);
  };

  const handleTwelve = () => {
    seteducationTen(false);
    seteducationTwelve(true);
    seteducationBtech(false);
    seteducationMtech(false);
  };

  const handleBtech = () => {
    seteducationTen(false);
    seteducationTwelve(false);
    seteducationBtech(true);
    seteducationMtech(false);
  };
  const handleMtech = () => {
    seteducationTen(false);
    seteducationTwelve(false);
    seteducationBtech(false);
    seteducationMtech(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Education" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleTen}
            className={`${
              educationTen
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            10th
          </li>
          <li
            onClick={handleTwelve}
            className={`${
              educationTwelve
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            12th
          </li>
          <li
            onClick={handleBtech}
            className={`${
              educationBtech
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            B.Tech
          </li>
          <li
            onClick={handleMtech}
            className={`${
              educationMtech
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            M.Tech
          </li>
        </ul>
        {educationTen && <Ten />}
        {educationTwelve && <Twelve />}
        {educationBtech && <Btech />}
        {educationMtech && <Mtech />}
      </div>
    </section>
  );
};

export default Education;
